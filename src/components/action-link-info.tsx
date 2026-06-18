"use client";

import type { FocusEvent, KeyboardEvent } from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";

type ActionLinkInfoProps = {
  label: string;
  note: string;
};

export function ActionLinkInfo({ label, note }: ActionLinkInfoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  useLayoutEffect(() => {
    if (!isOpen) {
      setHorizontalOffset(0);
      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    let frameId = 0;

    const updatePosition = () => {
      const panel = panelRef.current;
      const boundary = container.closest<HTMLElement>(".project-card");

      if (!panel || !boundary) {
        setHorizontalOffset(0);
        return;
      }

      const boundaryInset = 20;
      const panelRect = panel.getBoundingClientRect();
      const boundaryRect = boundary.getBoundingClientRect();
      const rightOverflow = panelRect.right - (boundaryRect.right - boundaryInset);
      const leftOverflow = boundaryRect.left + boundaryInset - panelRect.left;

      let nextOffset = 0;

      if (rightOverflow > 0) {
        nextOffset -= rightOverflow;
      }

      if (leftOverflow > 0) {
        nextOffset += leftOverflow;
      }

      setHorizontalOffset(Math.round(nextOffset));
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isOpen]);

  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocusedElement = event.relatedTarget;

    if (!(nextFocusedElement instanceof Node) || !event.currentTarget.contains(nextFocusedElement)) {
      closePanel();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closePanel();
      containerRef.current?.querySelector<HTMLButtonElement>(".action-link-info__trigger")?.focus();
    }
  };

  return (
    <div
      className="action-link-info"
      onBlur={handleBlur}
      onFocus={openPanel}
      onKeyDown={handleKeyDown}
      onMouseEnter={openPanel}
      onMouseLeave={closePanel}
      ref={containerRef}
    >
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={`More information about ${label}`}
        className="action-link-info__trigger"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        type="button"
      >
        <span aria-hidden="true">i</span>
      </button>
      {isOpen ? (
        <div
          className="action-link-info__panel"
          id={panelId}
          ref={panelRef}
          role="note"
          style={horizontalOffset ? { transform: `translateX(${horizontalOffset}px)` } : undefined}
        >
          {note}
        </div>
      ) : null}
    </div>
  );
}
