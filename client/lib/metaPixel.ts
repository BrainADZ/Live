export const META_PIXEL_ID = "1114302264165671";
export const META_PIXEL_SCRIPT_ID = "brainadz-erp-meta-pixel";

// The same guarded base code supports both initial HTML and client navigation.
export const META_PIXEL_BASE_CODE = `
  (function () {
    if (window.__brainadzMetaPixelId === '${META_PIXEL_ID}') return;
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;
      n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', '${META_PIXEL_ID}');
    window.__brainadzMetaPixelId = '${META_PIXEL_ID}';
  })();
`;

type MetaPixelFunction = (
  command: "track",
  event: "PageView" | "Lead",
  parameters?: Record<string, string>,
  options?: { eventID: string },
) => void;

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    __brainadzMetaPixelId?: string;
  }
}

const PENDING_LEAD_KEY = "brainadz:erp-demo-lead";
const PENDING_LEAD_TTL = 30 * 60 * 1000;
const validRequestId = (value: unknown): value is string =>
  typeof value === "string" &&
  /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
    value,
  );

export const trackErpPageView = () => {
  try {
    if (typeof window === "undefined" || !window.fbq) return false;
    window.fbq("track", "PageView");
    return true;
  } catch {
    return false;
  }
};

const trackErpDemoLead = (requestId: string) => {
  try {
    if (
      typeof window === "undefined" ||
      !window.fbq ||
      !validRequestId(requestId)
    )
      return false;
    window.fbq(
      "track",
      "Lead",
      { content_name: "BrainADZ ERP Demo", content_category: "ERP" },
      { eventID: requestId },
    );
    return true;
  } catch {
    return false;
  }
};

// Called only after the demo API confirms success. No form fields are stored.
export const prepareErpDemoLead = (requestId: unknown) => {
  if (typeof window === "undefined" || !validRequestId(requestId)) return;
  try {
    window.sessionStorage.setItem(
      PENDING_LEAD_KEY,
      JSON.stringify({ requestId, createdAt: Date.now() }),
    );
  } catch {
    // A blocked storage API must never prevent the thank-you redirect.
    trackErpDemoLead(requestId);
  }
};

export const consumeErpDemoLead = () => {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.sessionStorage.getItem(PENDING_LEAD_KEY);
    if (!raw) return false;
    const pending = JSON.parse(raw);
    const age = Date.now() - pending.createdAt;
    if (
      !validRequestId(pending.requestId) ||
      !Number.isFinite(age) ||
      age < 0 ||
      age > PENDING_LEAD_TTL
    ) {
      window.sessionStorage.removeItem(PENDING_LEAD_KEY);
      return false;
    }
    if (!trackErpDemoLead(pending.requestId)) return false;
    window.sessionStorage.removeItem(PENDING_LEAD_KEY);
    return true;
  } catch {
    return false;
  }
};
