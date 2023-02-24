import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  BoltIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Starter",
    id: "starter",
    href: `${process.env.NEXT_PUBLIC_APP_URL}/auth?plan=starter`,
    price: {
      monthly: { display: "$69", actual: "$69" },
      annually: { display: "$51", actual: "$612" },
    },
    description: "",
    features: [
      "Unlimited projects",
      "50,000 credits a month",
      "Script generator",
      "Hooks generator",
      "Shots generator",
      "Headlines & Copy generator",
      "Audiences generator",
      "Voice over generator",
    ],
    mostPopular: false,
    icon: RocketLaunchIcon,
  },
  {
    name: "Professional",
    id: "professional",
    href: `${process.env.NEXT_PUBLIC_APP_URL}/auth?plan=professional`,
    price: {
      monthly: { display: "$299", actual: "$299" },
      annually: { display: "$224", actual: "$2688" },
    },
    description: "",
    features: [
      "Unlimited projects",
      "250,000 credits a month",
      "Script generator",
      "Hooks generator",
      "Shots generator",
      "Headlines & Copy generator",
      "Audiences generator",
      "Voice over generator",
      "Priority support",
    ],
    mostPopular: true,
    icon: BoltIcon,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    href: "#",
    price: {
      monthly: { display: "Custom", actual: "Custom" },
      annually: { display: "Custom", actual: "Custom" },
    },
    description: "",
    features: [
      "Unlimited projects",
      "A credit limit that suits you",
      "Script generator",
      "Hooks generator",
      "Shots generator",
      "Headlines & Copy generator",
      "Audiences generator",
      "Voice over generator",
      "Priority support",
      "Dedicated customer success manager",
    ],
    mostPopular: false,
    icon: BuildingOffice2Icon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  const [frequency, setFrequency] = useState(frequencies[1]);

  return (
    <div>
      <div className="mt-16 flex justify-center">
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
        >
          <RadioGroup.Label className="sr-only">
            Payment frequency
          </RadioGroup.Label>
          {frequencies.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ checked }) =>
                classNames(
                  checked ? "bg-blue-600 text-white" : "text-gray-500",
                  "cursor-pointer rounded-full py-1 px-2.5"
                )
              }
            >
              <span>{option.label}</span>
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      <div className="mt-6">
        <p className="text-center font-bold">
          Save <span className="text-blue-600">25%</span> with annual billing.
        </p>
      </div>
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular
                ? "ring-2 ring-blue-600"
                : "ring-1 ring-gray-200",
              "rounded-3xl p-8 xl:p-10"
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? "text-blue-600" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                <tier.icon
                  className={classNames(
                    tier.mostPopular ? "text-blue-600" : "text-gray-900",
                    "mb-2 h-8 w-8"
                  )}
                />
                {tier.name}
              </h3>
              {tier.mostPopular ? (
                <p className="rounded-full bg-blue-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-blue-600">
                  Most popular
                </p>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {tier.description}
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                {tier.price[frequency.value].display}
              </span>
              {tier.id !== "enterprise" && (
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              )}
            </p>
            <p className="h-6">
              {frequency.value === "annually" && tier.id !== "enterprise" && (
                <span className="text-sm leading-6 text-gray-600">
                  Billed at {tier.price[frequency.value].actual}/year
                </span>
              )}
            </p>
            {tier.id !== "enterprise" ? (
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                    : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                )}
              >
                GET STARTED
              </a>
            ) : (
              <p className="text-sm">
                If you're interested in learning more about our enterprise
                offerings, please contact our sales team via email at{" "}
                <a
                  href="mailto:support@anglez.io"
                  className="font-bold text-blue-600"
                >
                  support@anglez.io
                </a>
                .
              </p>
            )}
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
