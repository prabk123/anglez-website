import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <Container className="relative isolate bg-white pt-10 pb-20 text-center">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-35rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        10x your winning{" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">creatives</span>
        </span>{" "}
        in half the time.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        The right creative can make millions. Using a combination of expert
        marketers and AI, we have created the ultimate ad scripting assistant.
      </p>
      <div className="mt-10 justify-center gap-x-2 sm:flex">
        <div className="relative mb-4 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 sm:mb-0 sm:w-[300px]">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="jane.doe@gmail.com"
          />
        </div>
        <Button color="blue" href="/register" className="w-full sm:w-auto">
          Get started for free!
        </Button>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-16 md:grid-cols-4">
        <div className="relative">
          <img
            className="absolute -bottom-20 -left-20 w-full"
            src="/blob.svg"
            style={{ zIndex: -1 }}
            alt="Blob"
          />
          <img alt="Coffee" className="w-full shadow-2xl" src="/coffee.png" />
        </div>
        <div className="relative">
          <img
            className="absolute -top-20 -left-20 w-full"
            src="/blob-1.svg"
            style={{ zIndex: -1 }}
            alt="Blob"
          />
          <img alt="Oodie" className="w-full shadow-2xl" src="/oodie.png" />
        </div>
        <div className="relative">
          <img
            className="absolute -bottom-20 -left-20 w-full"
            src="/blob-2.svg"
            style={{ zIndex: -1 }}
            alt="Blob"
          />
          <img
            alt="Snow teeth whitening"
            className="w-full shadow-2xl"
            src="/snow.png"
          />
        </div>
        <div className="relative">
          <img
            className="absolute -top-20 -right-20 w-full"
            src="/blob-3.svg"
            style={{ zIndex: -1 }}
            alt="Blob"
          />
          <img
            alt="Dr. Squatch"
            className="w-full shadow-2xl"
            src="/squatch.png"
          />
        </div>
      </div>
    </Container>
  );
}
