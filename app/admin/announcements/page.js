"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "college-crw-announcements";

const defaultMessages = [
  { text: "College Crw Official Launch 🚀", highlight: true },
  { text: "Free trips for Crew Captains 💰", highlight: true },
  { text: "First 100 users get exclusive perks 👀", highlight: false },
];

export default function AdminAnnouncementsPage() {
  const [messages, setMessages] = useState(defaultMessages);
  const [newMessage, setNewMessage] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
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
          setMessages(normalized);
        }
      } catch (error) {
        console.error("Failed to load announcements:", error);
      }
    }
  }, []);

  function addMessage() {
    const value = newMessage.trim();
    if (!value) return;

    setMessages((prev) => [...prev, { text: value, highlight: false }]);
    setNewMessage("");
    setSaved(false);
  }

  function updateMessage(index, value) {
    setMessages((prev) =>
      prev.map((msg, i) => (i === index ? { ...msg, text: value } : msg))
    );
    setSaved(false);
  }

  function toggleHighlight(index) {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === index ? { ...msg, highlight: !msg.highlight } : msg
      )
    );
    setSaved(false);
  }

  function removeMessage(index) {
    setMessages((prev) => prev.filter((_, i) => i !== index));
    setSaved(false);
  }

  function moveUp(index) {
    if (index === 0) return;
    const next = [...messages];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    setMessages(next);
    setSaved(false);
  }

  function moveDown(index) {
    if (index === messages.length - 1) return;
    const next = [...messages];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    setMessages(next);
    setSaved(false);
  }

  function saveMessages() {
    const cleaned = messages.filter((msg) => msg.text.trim() !== "");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    window.dispatchEvent(new Event("announcements-updated"));
    setMessages(cleaned);
    setSaved(true);
  }

  function resetMessages() {
    setMessages(defaultMessages);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultMessages));
    window.dispatchEvent(new Event("announcements-updated"));
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
      <section className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            Admin
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Announcement Dashboard
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-teal)]">
            Edit the moving announcement bar messages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold">Add New Message</h2>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter a new announcement"
              className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
            />
            <button
              type="button"
              onClick={addMessage}
              className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold">Current Messages</h2>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveMessages}
                className="rounded-full bg-[var(--brand-orange)] px-5 py-2.5 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
              >
                Save
              </button>

              <button
                type="button"
                onClick={resetMessages}
                className="rounded-full border border-[var(--brand-border)] px-5 py-2.5 font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-cream)]"
              >
                Reset Defaults
              </button>
            </div>
          </div>

          {saved && (
            <div className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              Announcements saved.
            </div>
          )}

          <div className="mt-8 space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.text}`}
                className="rounded-2xl border border-[var(--brand-border)] bg-[#fcfcf8] p-4"
              >
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={message.text}
                    onChange={(e) => updateMessage(index, e.target.value)}
                    className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
                  />

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => toggleHighlight(index)}
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        message.highlight
                          ? "bg-[var(--brand-yellow)] text-[var(--brand-navy)]"
                          : "border border-[var(--brand-border)] text-[var(--brand-navy)]"
                      }`}
                    >
                      {message.highlight ? "Highlighted" : "Highlight"}
                    </button>

                    <button
                      type="button"
                      onClick={() => moveUp(index)}
                      className="rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-bold"
                    >
                      Move Up
                    </button>

                    <button
                      type="button"
                      onClick={() => moveDown(index)}
                      className="rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-bold"
                    >
                      Move Down
                    </button>

                    <button
                      type="button"
                      onClick={() => removeMessage(index)}
                      className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}