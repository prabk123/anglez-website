import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="absolute top-0 left-0 z-50 flex w-full items-center justify-center gap-x-6 bg-blue-600 py-2.5 px-6 sm:px-3.5">
      <p className="text-sm leading-6 text-white">
        <a href={process.env.NEXT_PUBLIC_APP_URL}>
          <strong className="font-semibold">
            Start your 7 day free trial today &nbsp;
          </strong>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
}
