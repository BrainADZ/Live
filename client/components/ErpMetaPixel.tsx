"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";
import {
  consumeErpDemoLead,
  META_PIXEL_BASE_CODE,
  META_PIXEL_ID,
  META_PIXEL_SCRIPT_ID,
  trackErpPageView,
} from "@/lib/metaPixel";

export default function ErpMetaPixel({
  thankYou = false,
}: {
  thankYou?: boolean;
}) {
  const tracked = useRef(false);

  const trackVisit = useCallback(() => {
    if (tracked.current || !trackErpPageView()) return;
    tracked.current = true;
    if (thankYou) consumeErpDemoLead();
  }, [thankYou]);

  useEffect(() => {
    if (window.__brainadzMetaPixelId === META_PIXEL_ID) trackVisit();
  }, [trackVisit]);

  return (
    <Script
      id={META_PIXEL_SCRIPT_ID}
      strategy="afterInteractive"
      onReady={trackVisit}
    >
      {META_PIXEL_BASE_CODE}
    </Script>
  );
}
