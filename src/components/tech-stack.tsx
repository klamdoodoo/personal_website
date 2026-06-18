import {
  siCplusplus,
  siNodedotjs,
  siPython,
  siReact
} from "simple-icons";

import type { TechIconId, TechStackItem } from "@/data/portfolio";

type TechStackProps = {
  rows: TechStackItem[][];
};

const SIMPLE_ICONS: Partial<Record<TechIconId, { hex: string; path: string; title: string }>> = {
  python: siPython,
  cplusplus: siCplusplus,
  react: siReact,
  nodejs: siNodedotjs
};

function AwsMark() {
  return (
    <svg aria-hidden="true" className="tech-stack__icon-svg" viewBox="0 0 24 24">
      <text x="12" y="11.2" textAnchor="middle" className="tech-stack__mark-text tech-stack__mark-text--aws">
        aws
      </text>
      <path
        d="M7.2 15.8c2.4 1.6 7.2 1.8 9.8.2"
        fill="none"
        stroke="#ff9900"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M16.6 15.2l1.2.2-.6 1.1"
        fill="none"
        stroke="#ff9900"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function OpenAiMark() {
  return (
    <svg aria-hidden="true" className="tech-stack__icon-svg" viewBox="0 0 24 24">
      <path
        d="M12 4.6a2.8 2.8 0 0 1 2.77 2.38 2.75 2.75 0 0 1 3.5 3.23 2.75 2.75 0 0 1 .5 4.4 2.77 2.77 0 0 1-2.74 4.74 2.77 2.77 0 0 1-4.03-.01 2.76 2.76 0 0 1-4.77-2.74 2.76 2.76 0 0 1-1.73-4.08 2.76 2.76 0 0 1 1.35-4.68A2.78 2.78 0 0 1 12 4.6Zm0 2.1a1.1 1.1 0 0 0-1.08.9l-.1.55-.54.15a1.08 1.08 0 0 0-.3 1.95l.47.31-.04.57a1.08 1.08 0 0 0 1.58 1l.5-.26.5.27a1.08 1.08 0 0 0 1.58-1l-.04-.57.47-.31a1.08 1.08 0 0 0-.3-1.95l-.54-.15-.1-.55A1.1 1.1 0 0 0 12 6.7Z"
        fill="none"
        stroke="#1d2733"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function TechIcon({ icon, label }: TechStackItem) {
  const simpleIcon = SIMPLE_ICONS[icon];

  if (simpleIcon) {
    return (
      <svg aria-hidden="true" className="tech-stack__icon-svg" viewBox="0 0 24 24">
        <path d={simpleIcon.path} fill={`#${simpleIcon.hex}`} />
      </svg>
    );
  }

  if (icon === "aws") {
    return <AwsMark />;
  }

  if (icon === "openai") {
    return <OpenAiMark />;
  }

  return (
    <span aria-hidden="true" className="tech-stack__icon-fallback">
      {label.slice(0, 2)}
    </span>
  );
}

export function TechStack({ rows }: TechStackProps) {
  return (
    <div className="tech-stack" aria-label="Tech stack">
      <p className="tech-stack__label">Tech stack</p>
      <div className="tech-stack__rows">
        {rows.map((row, index) => (
          <ul className="tech-stack__list" key={`tech-row-${index}`}>
            {row.map((item) => (
              <li className="tech-stack__item" key={item.label}>
                <span className="tech-stack__icon" aria-hidden="true">
                  <TechIcon icon={item.icon} label={item.label} />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
