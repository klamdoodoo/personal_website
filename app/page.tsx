import { ActionLinks } from "@/components/action-links";
import { ExperienceCard } from "@/components/experience-card";
import { MediaFrame } from "@/components/media-frame";
import { ProjectCard } from "@/components/project-card";
import { ResumeSection } from "@/components/resume-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { TechStack } from "@/components/tech-stack";
import { getHeroLinks, portfolio } from "@/data/portfolio";

export default function HomePage() {
  const heroLinks = getHeroLinks();
  const [spotlightProject, ...otherProjects] = portfolio.projects;

  return (
    <main id="content">
      <section className="hero section">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="hero__meta-line">
              <p className="eyebrow">{portfolio.profile.heroEyebrow}</p>
              {portfolio.profile.location ? (
                <p className="context-line hero__location">
                  <span aria-hidden="true">•</span> {portfolio.profile.location}
                </p>
              ) : null}
            </div>
            <p className="hero__greeting">{portfolio.profile.heroGreeting}</p>
            <h1>{portfolio.profile.name}</h1>
            <p className="hero__role">{portfolio.profile.role}</p>
            {portfolio.profile.summary ? (
              <p className="hero__lede">{portfolio.profile.summary}</p>
            ) : null}
            <ActionLinks links={heroLinks} />
            <TechStack rows={portfolio.profile.techStackRows} />
          </div>

          <aside className="panel hero__aside">
            <MediaFrame
              asset={portfolio.profile.headshot}
              className="hero-headshot"
              imagePosition={portfolio.profile.headshotPosition}
              priority
            />
          </aside>
        </div>
      </section>

      <section className="section section--tinted" id="projects">
        <div className="container">
          <SectionHeading title="Projects" />
          <ProjectCard emphasized project={spotlightProject} />

          <div className="projects-grid projects-grid--secondary">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="experience">
        <div className="container">
          <SectionHeading title="Experience" />
          <div className="stack-grid">
            {portfolio.experience.map((entry) => (
              <ExperienceCard entry={entry} key={entry.id} />
            ))}
          </div>
        </div>
      </section>

      <ResumeSection />

      <section className="section section--soft" id="education">
        <div className="container">
          <SectionHeading title="Education" />

          <div className="recognition-grid">
            <div className="recognition-column">
              <article className="panel recognition-panel">
                <p className="eyebrow">Education</p>
                <h3>{portfolio.education.school}</h3>
                <p className="recognition-panel__headline">{portfolio.education.degree}</p>
                {portfolio.education.minor ? (
                  <p className="recognition-panel__subhead">{portfolio.education.minor}</p>
                ) : null}
                {portfolio.education.gpa ? (
                  <p className="recognition-panel__meta">{portfolio.education.gpa}</p>
                ) : null}
                <ul className="recognition-list">
                  {portfolio.education.recognitions.map((item) => (
                    <li key={`${item.title}-${item.date}`}>
                      <strong>{item.title}</strong>
                      <span>{item.date}</span>
                      {item.note ? <p>{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </article>

              <details className="panel honors-panel">
                <summary>
                  <span className="eyebrow">Additional honors</span>
                </summary>
                <div className="honors-panel__body">
                  <ul className="honors-list">
                    {portfolio.additionalHonors.map((honor) => (
                      <li key={`${honor.title}-${honor.date}`}>
                        <div className="honors-list__row">
                          <strong>{honor.title}</strong>
                          <span>{honor.date}</span>
                        </div>
                        <p>{honor.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>

            <div className="recognition-column recognition-column--media">
              <article className="panel recognition-panel">
                <p className="eyebrow">Graduation video</p>
                <MediaFrame asset={portfolio.education.relatedVideo} />
              </article>

              <article className="panel recognition-panel">
                <p className="eyebrow">Gilpatrick Award</p>
                <MediaFrame asset={portfolio.education.gilpatrickPhoto} />
              </article>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
