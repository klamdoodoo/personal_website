import type { CopyField, ListField } from "@/data/portfolio";

type CopyFieldTextProps = {
  field: CopyField;
  className?: string;
};

type ListFieldDisplayProps = {
  field: ListField;
  variant?: "tags" | "list";
  ariaLabel: string;
};

export function CopyFieldText({ field, className }: CopyFieldTextProps) {
  const text = field.value ?? field.placeholder;
  const classes = [className, field.value ? "" : "placeholder-text"].filter(Boolean).join(" ");

  return <p className={classes}>{text}</p>;
}

export function ListFieldDisplay({
  field,
  variant = "tags",
  ariaLabel
}: ListFieldDisplayProps) {
  if (!field.items?.length) {
    return <p className="placeholder-text">{field.placeholder}</p>;
  }

  if (variant === "list") {
    return (
      <ul aria-label={ariaLabel} className="bullet-list">
        {field.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul aria-label={ariaLabel} className="tag-list">
      {field.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
