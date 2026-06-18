"use client";

import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

const DESKTOP_QUERY = "(min-width: 981px)";

export function ResumeSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const syncViewport = () => {
      setHasMounted(true);
      setIsExpanded(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  const toggleLabel = isExpanded ? "Hide preview" : "Preview resume";

  return (
    <section className="section section--tinted resume-section" id="resume">
      <div className="container">
        <SectionHeading title="Resume" />

        <div className="resume-section__actions">
          <ButtonLink download href={portfolio.profile.resumeHref} variant="primary">
            Download resume
          </ButtonLink>
          <button
            aria-controls="resume-preview"
            aria-expanded={hasMounted ? isExpanded : undefined}
            className="button-link button-link--ghost button-link--default resume-toggle"
            onClick={() => setIsExpanded((currentValue) => !currentValue)}
            type="button"
          >
            <span>{toggleLabel}</span>
            <span
              aria-hidden="true"
              className={`resume-toggle__arrow${isExpanded ? " resume-toggle__arrow--open" : ""}`}
            >
              ↓
            </span>
          </button>
        </div>

        <div
          className={`resume-preview-shell${isExpanded ? " is-open" : ""}${hasMounted ? " is-ready" : ""}`}
          id="resume-preview"
        >
          <div className="resume-preview-inner">
            <div className="panel resume-card">
              <iframe
                loading="lazy"
                src={`${portfolio.profile.resumeHref}#view=FitH`}
                title={`${portfolio.profile.name} resume preview`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
