"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { Button } from "./ui/button";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <form action="/api/draft-mode/disable" id="disable-draft-mode-form">
        <Button type="submit">Disable Draft Mode</Button>
      </form>
    </div>
  );
}
