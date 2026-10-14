"use client";

import { useField } from "@payloadcms/ui";

type CharacterCounterProps = {
  field?: { maxLength?: number };
  maxLength?: number;
  path: string;
};

export function CharacterCounter({ field, maxLength, path }: CharacterCounterProps) {
  const { value } = useField<string>({ path });
  const characterCount = typeof value === "string" ? value.length : 0;
  const limit = maxLength || field?.maxLength;

  return (
    <div style={{ marginTop: 6, textAlign: "right", opacity: 0.65 }}>
      {characterCount}{limit ? ` / ${limit}` : ""} characters
    </div>
  );
}
