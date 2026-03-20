"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "college-crw-announcements";

const defaultMessages = [
  { text: "College Crw Official Launch 🚀", highlight: true },
  { text: "Free trips for Crew Captains 💰", highlight: true },
  { text: "First 100 users get exclusive perks 👀", highlight: false },
];

const SPEED = 32;

export default function AnnouncementBar() {
  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    function loadMessages() {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        setMessages(defaultMessages);
        return;
      }

      try {
        const parsed = JSON.parse(raw);

        if (Array.isArray(parsed) && parsed.length > 0) {
          const normalized = parsed.map((item) =>
            typeof item === "string"
              ? { text: item, highlight: false }
              : {
                  text: item.text || "",
                  highlight: Boolean(item.highlight),
                }
          );

          setMessages(normalized.filter((item) => item.text.trim() !== ""));
        } else {
          setMessages(defaultMessages);
        }
      } catch (error) {
        console.error("Failed to load announcements:", error);
        setMessages(defaultMessages);
      }
    }

    loadMessages();
    window.addEventListener("announcements-updated", loadMessages);

    return () => {
      window.removeEventListener("announcements-updated", loadMessages);
    };
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
      <div
        className="marquee-track hover:[animation-play-state:paused]"
        style={{ animationDuration: `${SPEED}s` }}
      >
        {messages.concat(messages).map((msg, i) => (
          <div
            key={`${i}-${msg.text}`}
            className="flex shrink-0 items-center gap-8 px-12 py-3 text-sm font-semibold md:px-16"
          >
            <span
              className={
                msg.highlight
                  ? "announcement-highlight text-[var(--brand-yellow)]"
                  : "text-[var(--brand-cream)]"
              }
            >
              {msg.text}
            </span>

            <Link
              href="/trips"
              className="rounded-full bg-[var(--brand-orange)] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
            >
              Explore
            </Link>

            <span className="text-[var(--brand-yellow)]/70">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}