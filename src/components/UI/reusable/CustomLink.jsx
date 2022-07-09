import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const styling = (type) => {
  switch (type) {
    case "primary":
      return "underline underline-offset-4";
    case "kbd":
      return "inline-block analog-shadow-right px-0.5 rounded-md bg-white text-sutilBlack transition-[box-shadow_transform] active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner active:shadow-gray-500";
    default:
      return "btn-inOut after:bg-white";
  }
};

export default function CustomLink({ children, linkProps, ...props }) {
  const { pathname } = useRouter();
  const customCSS =
    props.className ||
    styling(pathname === linkProps.href ? "primary" : "default");

  const spreadLinkProps = Object.entries(linkProps).map(([key, value]) => {
    return Object.assign({}, { [key]: value });
  });
  // console.log(spreadLinkProps)
  return (
    <Link href={linkProps.href} {...spreadLinkProps}>
      <a className={customCSS} {...props}>
        {children}
      </a>
    </Link>
  );
}
