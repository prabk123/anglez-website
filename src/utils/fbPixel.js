export default function facebookPixelPlugin(userConfig) {
  // return object for analytics to use
  let ReactPixel;

  return {
    /* All plugins require a name */
    name: "facebook-pixel",
    /* Everything else below this is optional depending on your plugin requirements */
    config: { ...userConfig },
    initialize: ({ config }) => {
      if (config.pixelId) {
        ReactPixel = require("react-facebook-pixel").default;
        ReactPixel.init(config.pixelId);
      }
    },
    page: () => {
      ReactPixel.pageView();
    },
    track: () => {
      // call provider specific event tracking
    },
    identify: () => {
      // call provider specific user identify method
    },
    loaded: () => {
      return typeof window !== "undefined" && !!window.fbq;
    },
  };
}
