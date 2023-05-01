import Analytics from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import facebookPixelPlugin from "./fbPixel";

const analytics = Analytics({
  app: process.env.NEXT_PUBLIC_ANALYTICS_APP_NAME,
  plugins:
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true"
      ? [
          googleAnalyticsPlugin({
            measurementIds: [
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID,
            ],
          }),
          facebookPixelPlugin({ pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID }),
        ]
      : [],
});

export default analytics;
