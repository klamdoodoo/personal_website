import Image from "next/image";

import type { MediaAsset } from "@/data/portfolio";

type MediaFrameProps = {
  asset: MediaAsset;
  className?: string;
  imagePosition?: string;
  priority?: boolean;
};

function getRatioClass(ratio: MediaAsset["ratio"]) {
  switch (ratio) {
    case "portrait":
      return "media-frame--portrait";
    case "logo":
      return "media-frame--logo";
    case "landscape":
      return "media-frame--landscape";
    case "wide":
    default:
      return "media-frame--wide";
  }
}

export function MediaFrame({
  asset,
  className,
  imagePosition = "center",
  priority = false
}: MediaFrameProps) {
  const classes = ["media-frame", getRatioClass(asset.ratio), className]
    .filter(Boolean)
    .join(" ");
  const resolvedImagePosition = asset.position ?? imagePosition;
  const frameStyle = asset.aspectRatio ? { aspectRatio: asset.aspectRatio } : undefined;
  const resolvedFit = asset.fit ?? (asset.type === "logo" ? "contain" : "cover");

  if (asset.type === "video") {
    if (asset.src) {
      return (
        <div className={classes} style={frameStyle}>
          <video
            className="media-frame__video"
            controls
            playsInline
            preload="metadata"
            style={{
              objectFit: resolvedFit,
              objectPosition: resolvedImagePosition
            }}
          >
            <source src={asset.src} type="video/mp4" />
            {asset.placeholder}
          </video>
        </div>
      );
    }

    if (asset.embedUrl) {
      return (
        <div className={classes} style={frameStyle}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="media-frame__embed"
            referrerPolicy="strict-origin-when-cross-origin"
            src={asset.embedUrl}
            title={asset.alt}
          />
        </div>
      );
    }

    return (
      <div aria-label={asset.alt} className={`${classes} media-frame--placeholder`} role="img">
        <div className="media-frame__placeholder">
          <p>{asset.placeholder}</p>
        </div>
      </div>
    );
  }

  if (asset.src) {
    return (
      <div className={classes} style={frameStyle}>
        <Image
          alt={asset.alt}
          fill
          priority={priority}
          sizes="(max-width: 900px) 100vw, 50vw"
          src={asset.src}
          style={{
            objectFit: resolvedFit,
            objectPosition: resolvedImagePosition
          }}
        />
      </div>
    );
  }

  return (
    <div aria-label={asset.alt} className={`${classes} media-frame--placeholder`} role="img">
      <div className="media-frame__placeholder">
        <p>{asset.placeholder}</p>
      </div>
    </div>
  );
}
