"use client";

import { useEffect } from "react";

const eyeIcon = (hidden: boolean) =>
  hidden
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.75"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 6.15A9.8 9.8 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-2.25 2.9M6.15 6.15C3.8 7.75 2.5 12 2.5 12s3.5 6 9.5 6a9.7 9.7 0 0 0 3.1-.5M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';

export function AdminEnhancements() {
  useEffect(() => {
    const enhancePasswordInputs = () => {
      document.querySelectorAll<HTMLInputElement>('input[type="password"]').forEach((input) => {
        if (input.dataset.visibilityReady === "true") return;
        input.dataset.visibilityReady = "true";
        const parent = input.parentElement;
        if (!parent) return;

        parent.classList.add("brainadz-password-wrap");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "brainadz-password-toggle";
        button.setAttribute("aria-label", "Show password");
        button.setAttribute("aria-pressed", "false");
        button.innerHTML = eyeIcon(true);
        button.addEventListener("click", () => {
          const isHidden = input.type === "password";
          input.type = isHidden ? "text" : "password";
          button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
          button.setAttribute("aria-pressed", String(isHidden));
          button.innerHTML = eyeIcon(!isHidden);
          input.focus({ preventScroll: true });
        });
        parent.appendChild(button);
      });
    };

    enhancePasswordInputs();
    const observer = new MutationObserver(enhancePasswordInputs);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
