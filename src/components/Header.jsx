import { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import Banner from "./Banner";
import classNames from "../utils/classNames";
import { useRouter } from "next/router";

function MobileNavLink({ href, children }) {
  const router = useRouter();
  const pathname = href.split("#")[0];
  const shouldSmoothScroll = router.pathname === pathname;

  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full p-2"
      scroll={!shouldSmoothScroll}
    >
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#benefits">Benefits</MobileNavLink>
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
            <Button
              className="mt-4"
              href={process.env.NEXT_PUBLIC_APP_URL}
              color="blue"
            >
              <span>Get started for free!</span>
            </Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new window.IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    observer.observe(cachedRef);

    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <>
      <Banner />
      <header
        className={classNames(
          isSticky ? "bg-white shadow-md" : "",
          "sticky top-0 z-50 mt-11 py-6"
        )}
        ref={ref}
      >
        <Container>
          <nav className="relative z-50 flex items-center justify-between">
            <div className="flex min-w-[260px] items-center md:gap-x-12">
              <Link href="/" aria-label="Home" className="flex items-center">
                <h1 className="text-3xl font-bold">
                  angle<span className="text-blue-600">z</span>.io
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/#benefits">Benefits</NavLink>
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
              <NavLink href="/#faqs">FAQs</NavLink>
            </div>
            <div className="">
              <div className="hidden items-center gap-x-4 md:flex">
                <NavLink href={process.env.NEXT_PUBLIC_APP_URL}>Login</NavLink>
                <Button href={process.env.NEXT_PUBLIC_APP_URL} color="blue">
                  <span>
                    Get started{" "}
                    <span className="hidden lg:inline">for free!</span>
                  </span>
                </Button>
              </div>
              <div className="-mr-1 md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
