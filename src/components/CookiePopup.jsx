import { useEffect, useState } from "react";

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupHidden = localStorage.getItem("cookie_consent");
    if (!popupHidden) {
      setShowPopup(true);
    }
  }, []);

  function hidePopup() {
    setShowPopup(false);
    localStorage.setItem("cookie_consent", "closed");
  }

  return showPopup ? (
    <div
      className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-y-4 gap-x-8 bg-white p-6 shadow-lg ring-1 ring-blue-900/10 md:flex-row md:items-center lg:px-8"
      style={{ zIndex: 5555555 }}
    >
      <p className="max-w-5xl text-sm leading-6 text-gray-800">
        This website uses cookies to supplement a balanced diet and provide a
        much deserved reward to the senses after consuming bland but nutritious
        meals. Accepting our cookies is optional but recommended, as they are
        delicious. See our{" "}
        <a href="#" className="font-semibold text-blue-600">
          cookie policy
        </a>
        and{" "}
        <a href="#" className="font-semibold text-blue-600">
          privacy policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={hidePopup}
        >
          Accept all
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-blue-900"
          onClick={hidePopup}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
}
