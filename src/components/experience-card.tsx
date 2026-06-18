import { ButtonLink } from "@/components/button-link";
import { CopyFieldText, ListFieldDisplay } from "@/components/content-fields";
import { MediaFrame } from "@/components/media-frame";
import type { ExperienceEntry } from "@/data/portfolio";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

type BrandMarkProps = {
  label: string;
  name: string;
  url?: string;
  logo: ExperienceEntry["employer"]["logo"];
};

function BrandMark({ label, name, url, logo }: BrandMarkProps) {
  const content = (
    <>
      <MediaFrame asset={logo} className="experience-card__logo-frame" />
      <span className="experience-card__brand-name">{name}</span>
      <span className="experience-card__brand-label">{label}</span>
    </>
  );

  if (url) {
    return (
      <a className="experience-card__brand-mark experience-card__brand-mark--interactive" href={url} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return <div className="experience-card__brand-mark">{content}</div>;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  const impactItems = entry.measurableContributions.items;
  const internshipDate = entry.dates.value ?? entry.dates.placeholder;
  const clientUrl = entry.client.url;

  return (
    <article className="panel experience-card">
      <div className="experience-card__header">
        <div className="experience-card__brand-group" aria-label={`${entry.employer.name} client work for ${entry.client.name}`}>
          <BrandMark
            label="Employer"
            logo={entry.employer.logo}
            name={entry.employer.name}
            url={entry.employer.url}
          />
          <div className="experience-card__brand-arrow" aria-hidden="true">
            →
          </div>
          <BrandMark
            label="Client"
            logo={entry.client.logo}
            name={entry.client.name}
            url={entry.client.url}
          />
        </div>

        <div className="experience-card__intro">
          <p className="eyebrow">Internship experience</p>
          <h3>{entry.role}</h3>
          <div className="experience-card__intro-meta">
            <article className="experience-snapshot experience-snapshot--sky">
              <strong>{internshipDate}</strong>
            </article>
          </div>
        </div>
      </div>

      <div className="experience-card__body">
        <div className="experience-card__main-column">
          <div className="experience-card__story-panel">
            <p className="experience-card__story-label">What this work was about</p>
            <CopyFieldText className="experience-card__summary" field={entry.description} />

            <div className="experience-card__stack">
              <p className="experience-card__stack-label">Technologies</p>
              <ListFieldDisplay ariaLabel={`${entry.client.name} technologies`} field={entry.technologies} />
            </div>
          </div>
        </div>

        <div className="experience-card__side-column">
          <aside className="experience-card__cta-card">
            <p className="experience-card__story-label">See the live client site</p>
            <div className="experience-card__cta-actions">
              {clientUrl ? (
                <ButtonLink href={clientUrl} variant="primary">
                  Visit {entry.client.name}
                </ButtonLink>
              ) : null}
            </div>
          </aside>

          <aside className="experience-card__favorite-card">
            <p className="experience-card__story-label">My favorite part</p>
            <CopyFieldText className="experience-card__favorite-copy" field={entry.favoritePart} />
          </aside>
        </div>
      </div>

      <div className="experience-card__impact-section">
        <p className="experience-card__story-label">What I could point to</p>
        {impactItems?.length ? (
          <div className="experience-card__impact-grid">
            {impactItems.map((item, index) => (
              <article className="experience-impact-card" key={item}>
                <span className="experience-impact-card__index">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        ) : (
          <ListFieldDisplay
            ariaLabel={`${entry.client.name} measurable contributions`}
            field={entry.measurableContributions}
            variant="list"
          />
        )}
      </div>
    </article>
  );
}
