import { ButtonLink } from "@/components/button-link";
import type { LinkItem } from "@/data/portfolio";

type ActionLinksProps = {
  links: LinkItem[];
  size?: "default" | "small";
};

export function ActionLinks({ links, size = "default" }: ActionLinksProps) {
  return (
    <div className="action-links">
      {links.map((link) => (
        <div className="action-links__item" key={`${link.label}-${link.href ?? link.note ?? "placeholder"}`}>
          <ButtonLink
            download={link.download}
            href={link.href}
            size={size}
            variant={link.variant ?? "secondary"}
          >
            {link.label}
          </ButtonLink>
          {!link.href && link.note ? <p className="placeholder-note">{link.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
