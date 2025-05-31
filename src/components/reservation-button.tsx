import Script from "next/script";

import { zenchefRestaurantId } from "@/lib/env";

export const ReservationButton = () => {
  return (
    <div
      className="zc-widget-config"
      data-restaurant={zenchefRestaurantId}
      data-open="2000"
    >
      <Script
        async
        id="zenchef-sdk"
        src="https://sdk.zenchef.com/v1/sdk.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
};
