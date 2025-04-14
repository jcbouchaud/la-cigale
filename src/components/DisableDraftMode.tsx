"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  console.log("environment", environment);

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <form action="/api/draft-mode/disable">
      <button
        type="submit"
        className="bg-gray-50 px-4 py-2 text-black hover:cursor-pointer"
      >
        Disable Draft Mode
      </button>
    </form>
  );
}
