import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "small";
  download?: boolean;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  download = false
}: ButtonLinkProps) {
  const className = `button-link button-link--${variant} button-link--${size}`;

  if (!href) {
    return (
      <span aria-disabled="true" className={`${className} button-link--disabled`}>
        {children}
      </span>
    );
  }

  if (download) {
    return (
      <a className={className} download href={href}>
        {children}
      </a>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
