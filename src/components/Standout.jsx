import {
  BoltIcon,
  SparklesIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import Result from "./Result";

const features = [
  {
    name: "A variety of voices.",
    description:
      "We have multiple voices to choose from and are constantly adding to the list.",
    icon: SquaresPlusIcon,
  },
  {
    name: "Instant generation.",
    description:
      "Your ad scripts can be transformed into voice overs in a matter of seconds.",
    icon: BoltIcon,
  },
  {
    name: "Expressive.",
    description:
      "Our text to speech AI is incredibly expressive and human like.",
    icon: SparklesIcon,
  },
];

export default function Standout() {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Standout
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hight quality voice overs in seconds.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The average 2 minute voice over costs $325. With our text to
                speech AI you can generate high quality voice overs in seconds,
                and for a fraction of the price.
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
          <div>
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
}
