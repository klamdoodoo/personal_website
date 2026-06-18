import Link from "next/link";

import { ActionLinks } from "@/components/action-links";
import { CopyFieldText, ListFieldDisplay } from "@/components/content-fields";
import { MediaFrame } from "@/components/media-frame";
import type { LinkItem, ProjectEntry } from "@/data/portfolio";

type ProjectCardProps = {
  project: ProjectEntry;
  emphasized?: boolean;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

type ProjectMediaProps = {
  action?: LinkItem;
  asset: ProjectEntry["media"][number];
};

function ProjectMedia({ action, asset }: ProjectMediaProps) {
  if (!action?.href) {
    return <MediaFrame asset={asset} />;
  }

  const overlay = (
    <>
      <MediaFrame asset={asset} />
      <span className="project-card__media-overlay" aria-hidden="true">
        <span className="project-card__media-cta">
          {action.label}
          <span className="project-card__media-cta-icon">↗</span>
        </span>
      </span>
    </>
  );

  if (isExternalHref(action.href)) {
    return (
      <a
        aria-label={`${action.label} for ${asset.alt}`}
        className="project-card__media-link"
        href={action.href}
        rel="noreferrer"
        target="_blank"
      >
        {overlay}
      </a>
    );
  }

  return (
    <Link
      aria-label={`${action.label} for ${asset.alt}`}
      className="project-card__media-link"
      href={action.href}
    >
      {overlay}
    </Link>
  );
}

function ProjectRecognitionLink({ link }: { link: LinkItem }) {
  if (!link.href) {
    return <span className="project-card__recognition-link">{link.label}</span>;
  }

  if (isExternalHref(link.href)) {
    return (
      <a
        className="project-card__recognition-link"
        href={link.href}
        rel="noreferrer"
        target="_blank"
      >
        {link.label}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className="project-card__recognition-link" href={link.href}>
      {link.label}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function ProjectCard({ project, emphasized = false }: ProjectCardProps) {
  const media = project.media[0];
  const eyebrow =
    project.category === "product"
      ? "Featured project"
      : project.category === "research"
        ? "Research project"
        : "Game project";

  return (
    <article
      id={`project-${project.slug}`}
      className={`panel project-card project-card--${project.category} ${
        emphasized ? "project-card--emphasized" : ""
      }`}
    >
      <div className="project-card__layout">
        <div className="project-card__media">
          <ProjectMedia action={project.mediaAction} asset={media} />
          {media.caption ? <p className="media-caption">{media.caption}</p> : null}
        </div>
        <div className="project-card__content">
          <div className="project-card__header">
            <p className="eyebrow">{eyebrow}</p>
            <h3>{project.title}</h3>
            {project.badges?.length || project.recognitionLinks?.length ? (
              <div className="badge-row">
                {project.badges?.map((badge) => (
                  <span className="badge-pill" key={badge}>
                    {badge}
                  </span>
                ))}
                {project.recognitionLinks?.map((link) => (
                  <ProjectRecognitionLink
                    key={`${link.label}-${link.href ?? "recognition"}`}
                    link={link}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="project-card__story">
            <CopyFieldText className="project-card__summary" field={project.summary} />

            <div className="project-callout">
              <p className="project-callout__label">What I worked on</p>
              <CopyFieldText field={project.contribution} />
            </div>

            <ListFieldDisplay
              ariaLabel={`${project.title} technologies`}
              field={project.technologies}
            />

            {project.results ? (
              <div className="project-callout">
                <p className="project-callout__label">What came out of it</p>
                <CopyFieldText field={project.results} />
              </div>
            ) : null}
          </div>

          {project.notices?.length ? (
            <div className="notice-stack">
              {project.notices.map((notice) => (
                <CopyFieldText className="notice-card" field={notice} key={notice.value ?? notice.placeholder} />
              ))}
            </div>
          ) : null}

          {project.expandableContent ? (
            <details className="project-card__details">
              <summary>{project.expandableContent.label}</summary>
              <div className="project-card__details-body">
                {project.expandableContent.sections.map((section) => (
                  <section className="project-card__detail-section" key={section.title}>
                    <h4>{section.title}</h4>
                    <div className="project-card__detail-copy">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </details>
          ) : null}

          <ActionLinks links={project.homepageLinks} size="small" />
        </div>
      </div>
    </article>
  );
}
