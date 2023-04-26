export function initializeTapfiliate() {
  if (
    process.env.NEXT_PUBLIC_ENABLE_TAPFILIATE === "true" &&
    typeof window !== "undefined"
  ) {
    const Tap = require("@tapfiliate/tapfiliate-js").default;
    Tap.init(process.env.NEXT_PUBLIC_TAPFILIATE_ACCOUNT_ID, {
      integration: "stripe",
    });
  }
}
