import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import shots from "@/images/screenshots/shots.png";
import audience from "@/images/screenshots/audience.png";
import screenshotPayroll from "@/images/screenshots/payroll.png";
import screenshotReporting from "@/images/screenshots/reporting.png";
import screenshotVatReturns from "@/images/screenshots/vat-returns.png";

const features = [
  {
    title: "Target Markets",
    description: "Potential customers you'd never thought of before.",
    image: audience,
  },
  {
    title: "Video Shots",
    description:
      "Detailed directions to help creators make the perfect content.",
    image: shots,
  },
  {
    title: "Scroll Stoppers",
    description: "Thumb stopping hooks that capture your audiences attention.",
    image: screenshotVatReturns,
  },
  {
    title: "Ad Scripts",
    description: "Instant script generation with the assistance of our AI.",
    image: screenshotReporting,
  },
  {
    title: "Headlines & Copy",
    description: "Compelling copy that compliments your creatives.",
    image: screenshotReporting,
  },
];

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for anglez"
      className="relative overflow-hidden pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            Features
          </h2>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Build the perfect creative over and over again.
          </h2>
          <p className="mt-4 text-xl tracking-tight">
            <span className="font-bold text-black">
              angle
              <span className="text-blue-600">z</span>.io
            </span>{" "}
            works with you to generate ideas and bring them to life in a
            fraction of the time.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-blue-400 lg:bg-blue-400/10 lg:ring-1 lg:ring-inset lg:ring-gray-400/10"
                          : "hover:bg-blue-400/10 lg:hover:bg-blue-400/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-gray-900 lg:text-black"
                              : "text-gray-600 hover:text-black lg:text-black"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-black"
                            : "text-gray-600 group-hover:text-black"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="h-full lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel
                    key={feature.title}
                    unmount={false}
                    className="h-full"
                  >
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    {/* <div className="mt-10 h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-gray-900/20 sm:w-auto lg:mt-0">
                      <div className="relative isolate h-full overflow-hidden bg-blue-500 px-6 py-8 sm:mx-auto sm:max-w-2xl sm:rounded-xl lg:mx-0 lg:max-w-none">
                        <div
                          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                          aria-hidden="true"
                        /> */}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                      />
                    </div>
                    {/* <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-xl"
                      aria-hidden="true"
                    /> */}
                    {/* </div>
                    </div> */}
                    {/* <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-gray-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
