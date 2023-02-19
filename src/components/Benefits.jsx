import {
  BoltIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Tap into creativity you never knew was possible.",
    description:
      "The anglez.io AI consistently thinks outside the box to generate unique and captivating ideas.",
    icon: LightBulbIcon,
  },
  {
    name: "Produce more by doing less.",
    description:
      "The hard work is done, just tweak the hooks, scripts and shots in a way that works best for you.",
    icon: BoltIcon,
  },
  {
    name: "Scale your testing.",
    description:
      "With unlimited ideas and ads to test, creative production will never be a bottleneck again.",
    icon: RocketLaunchIcon,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" aria-label="Benefits for anglez">
      <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
                  Benefits
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A<span className="text-blue-600">I</span> creative team at
                  your fingertips
                </p>
                <p className="mt-4 text-xl leading-8 text-gray-600">
                  Three reasons why everyone is choosing{" "}
                  <span className="font-bold text-black">
                    angle
                    <span className="text-blue-600">z</span>.io
                  </span>
                  :
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-blue-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              {/* <img
              src="/content.png"
              alt="Product screenshot"
              className="w-[46rem] max-w-none"
              // width={2432}
              // height={1442}
            /> */}
              <img
                src="/screenshot.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
