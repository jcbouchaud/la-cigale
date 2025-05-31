"use client";

import { zenchefRestaurantId } from "@/lib/env";
import { useEffect } from "react";

const useZenchefScript = () => {
  useEffect(() => {
    const scriptId = "zenchef-sdk";

    if (document.getElementById(scriptId)) return;

    const el = document.getElementsByTagName("script")[0];
    if (!el || !el.parentNode) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://sdk.zenchef.com/v1/sdk.min.js";

    el.parentNode.insertBefore(script, el);
  }, []);
};

export const ReservationButton = () => {
  useZenchefScript();

  return (
    <div
      className="zc-widget-config"
      data-restaurant={zenchefRestaurantId}
      data-open="2000"
    />
  );
};
