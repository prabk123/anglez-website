import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "../utils/classNames";

export function NavLink({ href, children, className }) {
  const router = useRouter();
  const pathname = href.split("#")[0];
  const shouldSmoothScroll = router.pathname === pathname;

  return (
    <Link
      href={href}
      className={classNames(
        "inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        className
      )}
      scroll={!shouldSmoothScroll}
    >
      {children}
    </Link>
  );
}
