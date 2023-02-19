import Link from "next/link";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <Container>
        <div className="pt-16 pb-6">
          <h1 className="text-center text-3xl font-bold">
            angle<span className="text-blue-600">z</span>.io
          </h1>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-col items-center justify-center gap-x-6 sm:flex-row">
              <NavLink href="/#benefits">Benefits</NavLink>
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
              <NavLink href="/#faqs">FAQs</NavLink>
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
              <NavLink href="/cookie-policy">Cookie Policy</NavLink>
              <NavLink href="/terms">Terms</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-gray-200 py-10">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Anglez Ltd. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
