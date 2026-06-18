import Link from "next/link";

import { ActionLinks } from "@/components/action-links";
import { getHeaderActions, navigationItems, portfolio } from "@/data/portfolio";

export function SiteHeader() {
  const links = getHeaderActions();

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link className="brand" href="/">
          {portfolio.profile.name}
        </Link>
        <nav className="topbar__nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        {links.length > 0 ? (
          <div className="topbar__actions">
            <ActionLinks links={links} size="small" />
          </div>
        ) : null}
      </div>
    </header>
  );
}
