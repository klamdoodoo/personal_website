import { portfolio } from "@/data/portfolio";

const contactItems = [
  {
    label: "GitHub",
    value: "@klamdoodoo",
    href: portfolio.profile.github,
  },
  {
    label: "LinkedIn",
    value: "lamdo209",
    href: portfolio.profile.linkedin,
  },
  {
    label: "Email",
    value: portfolio.profile.email,
    href: `mailto:${portfolio.profile.email}`,
  },
];

function getLinkProps(href: string) {
  if (href.startsWith("mailto:")) {
    return {};
  }

  return {
    rel: "noreferrer",
    target: "_blank" as const,
  };
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__inner">
        <div className="site-footer__copy">
          <h2>Contact</h2>
        </div>
        <div className="site-footer__list">
          {contactItems.map((item) => (
            <a className="site-footer__item" href={item.href} key={item.label} {...getLinkProps(item.href)}>
              <span className="site-footer__label">{item.label}</span>
              <span className="site-footer__value">{item.value}</span>
            </a>
          ))}
        </div>
        <p className="site-footer__meta">
          {portfolio.profile.name} · {portfolio.profile.role}
        </p>
      </div>
    </footer>
  );
}
