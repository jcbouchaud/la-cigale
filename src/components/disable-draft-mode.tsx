"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <form action="/api/draft-mode/disable" id="disable-draft-mode-form">
        <div>Test</div>
      </form>
      <button form="disable-draft-mode-form" className="bg-gray-50 px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200 rounded-md shadow-sm">
        Disable Draft Mode
      </button>
    </div>
  );
}
