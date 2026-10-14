"use client";

import { useField } from "@payloadcms/ui";
import { useState } from "react";

const splitItems = (value: string): string[] =>
  [...new Map(value.split(",").map((item) => item.trim()).filter(Boolean).map((item) => [item.toLowerCase(), item])).values()];

export function CommaSeparatedField({ path }: { path: string }) {
  const { value, setValue } = useField<string>({ path });
  const [draft, setDraft] = useState("");
  const items = splitItems(typeof value === "string" ? value : "");
  const isTag = path.endsWith("tagsText");
  const label = isTag ? "Tags" : "Focus Keywords";

  const saveItems = (next: string[]) => setValue(splitItems(next.join(", ")).join(", "));
  const addItems = (input: string) => {
    saveItems([...items, ...splitItems(input)]);
    setDraft("");
  };

  return (
    <div className="field-type brainadz-token-field">
      <label className="field-label" htmlFor={`${path}-token-input`}>{label}</label>
      <div className="brainadz-token-field__box" onClick={() => document.getElementById(`${path}-token-input`)?.focus()}>
        {items.map((item) => (
          <span className="brainadz-token-field__token" key={item.toLowerCase()}>
            {item}
            <button type="button" aria-label={`Remove ${item}`} onClick={(event) => { event.stopPropagation(); saveItems(items.filter((entry) => entry.toLowerCase() !== item.toLowerCase())); }}>×</button>
          </span>
        ))}
        <input
          id={`${path}-token-input`}
          aria-label={`Add ${label.toLowerCase()}`}
          value={draft}
          placeholder={items.length ? "Add more..." : isTag ? "Type or paste tags, separated by commas" : "Type or paste keywords, separated by commas"}
          onPaste={(event) => {
            const pasted = event.clipboardData.getData("text");
            if (!pasted.includes(",")) return;
            event.preventDefault();
            addItems(`${draft},${pasted}`);
          }}
          onChange={(event) => {
            const input = event.target.value;
            if (!input.includes(",")) { setDraft(input); return; }
            const parts = input.split(",");
            saveItems([...items, ...parts.slice(0, -1)]);
            setDraft(parts.at(-1) || "");
          }}
          onBlur={() => { if (draft.trim()) addItems(draft); }}
          onKeyDown={(event) => {
            if (event.key === "Enter") { event.preventDefault(); if (draft.trim()) addItems(draft); }
            if (event.key === "Backspace" && !draft && items.length) saveItems(items.slice(0, -1));
          }}
        />
      </div>
      <p className="field-description">{isTag ? "Separate tags with commas. Each new tag is created with a matching slug when you save." : "Separate phrases with commas, or press Enter after each phrase."}</p>
    </div>
  );
}
