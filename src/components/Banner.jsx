import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="absolute top-0 left-0 z-50 flex w-full items-center justify-center gap-x-6 bg-blue-600 py-2.5 px-6 sm:px-3.5">
      <p className="text-sm leading-6 text-white">
        <a href={process.env.NEXT_PUBLIC_APP_URL}>
          <strong className="font-semibold">BETA Programme</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Help us improve our product&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
}
