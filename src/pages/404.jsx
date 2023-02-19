import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const links = [
  {
    title: "Get started",
    description: "Start using anglez to build stunning ad scripts",
    icon: RocketLaunchIcon,
    href: process.env.NEXT_PUBLIC_APP_URL,
  },
  {
    title: "Benefits",
    description: "A creative team at your fingertips",
    icon: BookmarkSquareIcon,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#benefits`,
  },
  {
    title: "Features",
    description: "Build the perfect creative over and over again.",
    icon: BookOpenIcon,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#features`,
  },
  {
    title: "Pricing",
    description: "Get started now with our 7 day free trial.",
    icon: CurrencyDollarIcon,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
  },
  {
    title: "FAQs",
    description: "You have questions? We've got answers.",
    icon: QuestionMarkCircleIcon,
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#faqs`,
  },
];

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="my-20 flex h-screen flex-col justify-center bg-white">
        <main className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-xl pt-8 pb-20">
            <div className="text-center">
              <p className="text-3xl font-semibold text-blue-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Not found.
              </h1>
              <p className="mt-2 text-lg text-gray-500">
                The page you are looking for does not exist.
              </p>
            </div>
            <div className="mt-12">
              <ul
                role="list"
                className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {links.map((link) => {
                  return (
                    <li
                      key={link.href}
                      className="relative flex items-start space-x-4 py-6"
                      onClick={() => {
                        window.location.href = link.href;
                      }}
                    >
                      <div className="flex-shrink-0">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                          <link.icon
                            className="h-6 w-6 text-blue-700"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-medium text-gray-900">
                          <span className="rounded-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                            <a href="#" className="focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              {link.title}
                            </a>
                          </span>
                        </h3>
                        <p className="text-base text-gray-500">
                          {link.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-base font-medium text-blue-600 hover:text-blue-500"
                  scroll={true}
                >
                  Or go back home
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
