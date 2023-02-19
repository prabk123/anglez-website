import {
  DevicePhoneMobileIcon,
  FilmIcon,
  MegaphoneIcon,
  PresentationChartLineIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Target Markets",
    description: "Potential customers you'd never thought of before.",
    icon: UsersIcon,
  },
  {
    name: "Video Shots",
    description:
      "Detailed directions to help creators make the perfect content.",
    icon: VideoCameraIcon,
  },
  {
    name: "Scroll Stoppers",
    description: "Thumb stopping hooks that capture your audiences attention.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Ad Scripts",
    description: "Instant script generation with the assistance of our AI.",
    icon: FilmIcon,
  },
  {
    name: "Headlines",
    description: "Impactful headlines that get people to take action.",
    icon: MegaphoneIcon,
  },
  {
    name: "Copy",
    description: "Compelling copy that compliments your creatives.",
    icon: PresentationChartLineIcon,
  },
];

export default function Features() {
  return (
    <section id="features" aria-label="Features for anglez">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build the perfect creative over and over again.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold text-black">
                angle
                <span className="text-blue-600">z</span>.io
              </span>{" "}
              works with you to generate ideas and bring them to life in a
              fraction of the time.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-12">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
