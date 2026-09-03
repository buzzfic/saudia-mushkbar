"use client";

import * as React from "react";
import { Play } from "lucide-react";

import type { MediaAppearance } from "@/lib/content";

/**
 * Click-to-load facade for third-party media.
 *
 * The original WordPress page loaded five YouTube / WTOL / iHeart iframes on
 * first paint. Here the iframe is only mounted once the visitor asks for it,
 * which keeps the third-party JavaScript, cookies and network cost off the
 * initial load. The title and outlet stay in the server-rendered HTML.
 */
export function MediaEmbed({ item }: { item: MediaAppearance }) {
  const [loaded, setLoaded] = React.useState(false);
  const isAudio = item.provider === "iHeartRadio";

  return (
    <div className="relative w-full overflow-hidden rounded-card border border-hairline bg-brand-900">
      <div className={isAudio ? "aspect-[16/7]" : "aspect-video"}>
        {loaded ? (
          <iframe
            src={item.embedUrl}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group flex size-full flex-col items-center justify-center gap-3 bg-brand-800 p-6 text-center transition-colors hover:bg-brand-700"
          >
            <span className="grid size-14 place-items-center rounded-full bg-accent text-brand transition-transform duration-200 group-hover:scale-105">
              <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
              {item.provider}
            </span>
            <span className="text-sm text-white/80">
              {isAudio ? "Play interview" : "Play video"}
              <span className="sr-only"> — {item.title}</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
