import {
  ClipboardDocumentIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Result() {
  const [copied, setCopied] = useState(false);
  const textElement = useRef(null);

  function copyToClipboard() {
    const innerText = textElement.current?.innerText;
    if (typeof window !== "undefined" && innerText) {
      window.navigator.clipboard.writeText(innerText);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }

  return (
    <div
      className={`col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg`}
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1">
          <div className="mb-3 flex justify-start">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
              VOICEOVER - JOSH
            </span>
          </div>
          <AudioPlayer className="mb-6 mt-4" contentId="" />
          <p class="mt-1 w-full whitespace-pre-wrap">{`Skip the plastic and save the ocean! You can simplify your laundry routine and protect the ocean with our eco-friendly Laundry Detergent Sheets. 

Those pesky single-use detergent bottles are so wasteful and fill up landfills at an alarming rate. 

Our Laundry Detergent Sheets are here to help — ultra concentrated, plastic free, plant based, and certified biodegradable. Plus, they're easy to use, powerful, and can tackle the toughest stains and odors with ease. 

Check out these glowing reviews: "These laundry sheets make my life so much easier!", "I love that they're plastic free and biodegradable!", and "No more dealing with bulky detergent bottles — these sheets are amazing!" 

Choose eco-friendly, protect the oceans, and make your laundry routine simple with our Laundry Detergent Sheets!`}</p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <button
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 transition hover:text-gray-500"
              onClick={copyToClipboard}
            >
              <ClipboardDocumentIcon
                className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                  copied && "-translate-y-1.5 opacity-0"
                }`}
                aria-hidden="true"
              />
              <span
                className={`ml-2 transition-all duration-300 ${
                  copied && "-translate-y-1.5 opacity-0"
                }`}
              >
                Copy
              </span>
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 flex items-center justify-center text-blue-600 transition duration-300 ${
                  !copied && "translate-y-1.5 opacity-0"
                }`}
              >
                Copied!
              </span>
            </button>
          </div>
          <div className="hidden w-0 flex-1 md:flex">
            <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <>
                <HeartIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">Save</span>
              </>
            </button>
          </div>

          <div className="-ml-px flex w-0 flex-1">
            <button className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <>
                <HandThumbUpIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">Like</span>
              </>
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <>
                <HandThumbDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">Dislike</span>
              </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
