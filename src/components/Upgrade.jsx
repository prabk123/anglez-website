import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Select from "../components/Select";
import classNames from "../utils/classNames";

const proPlan = {
  id: "professional",
  name: "Professional Plan",
  features: [
    "Unlimited projects",
    "50000 word credits a month",
    "Access to all tools",
    "Priority support",
  ],
  credits: 50000,
  price: {
    Monthly: {
      USD: "$69",
      GBP: "£49",
      EUR: "€59",
    },
    Yearly: {
      USD: "$51",
      GBP: "£36",
      EUR: "€44",
    },
    billed: {
      USD: "$612",
      GBP: "£432",
      EUR: "€528",
    },
    save: "25%",
  },
};

export default function Upgrade({ hideBenefits, className }) {
  const [currency, setCurrency] = useState({
    id: "USD",
    name: "USD",
  });
  const [frequency, setFrequency] = useState("Yearly");

  return (
    <div
      className={`mx-auto max-w-lg overflow-hidden rounded-lg border-2 border-blue-500 shadow-2xl lg:flex lg:max-w-none ${className}`}
    >
      <div className="my-auto flex-1 bg-white px-6 py-8 lg:p-12">
        <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">
          {proPlan.name}
        </h3>
        <p className="mt-2 text-base text-gray-500">
          Get more words per month by upgrading today!
        </p>
        {!hideBenefits && (
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-blue-600">
                What's included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200" />
            </div>
            <ul
              role="list"
              className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
            >
              {proPlan.features.map((feature) => (
                <li key={feature} className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
        <span className="font-bold text-blue-600">Save 25% with yearly!</span>
        <div className="relative mt-4 flex self-center rounded-lg bg-gray-100 p-0.5">
          <button
            onClick={() => setFrequency("Monthly")}
            type="button"
            className={classNames(
              frequency === "Monthly"
                ? "border-gray-200 bg-white text-gray-900 shadow-sm"
                : "border border-transparent text-gray-700",
              "relative w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto sm:px-8"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setFrequency("Yearly")}
            type="button"
            className={classNames(
              frequency === "Yearly"
                ? "border-gray-200 bg-white text-gray-900 shadow-sm"
                : "border border-transparent text-gray-700",
              "relative ml-0.5 w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto sm:px-8"
            )}
          >
            Yearly
          </button>
        </div>

        <div className="mt-4 flex items-end justify-between text-5xl font-bold tracking-tight text-blue-600">
          <div>
            <span>{proPlan.price[frequency][currency.id]}</span>
            <span className="text-xl font-medium">/mo</span>
          </div>
          <Select
            className="ml-4 mb-0 text-base"
            value={currency}
            options={[
              { id: "USD", name: "USD" },
              { id: "GBP", name: "GBP" },
              { id: "EUR", name: "EUR" },
            ]}
            onSelect={(o) => setCurrency(o)}
          />
        </div>
        <div className="mt-2 flex justify-start">
          <span className="text-left font-normal tracking-normal text-gray-400">
            Billed{" "}
            {frequency === "Yearly"
              ? `${proPlan.price.billed[currency.id]}/year`
              : "monthly"}
          </span>
        </div>
        <div className="mt-6">
          <div className="rounded-md shadow">
            <a
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-900"
              href={process.env.NEXT_PUBLIC_APP_URL}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
