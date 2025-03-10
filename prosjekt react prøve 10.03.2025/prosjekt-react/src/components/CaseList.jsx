import React from "react";

export default function CaseList({ cases }) {
  return (
    <div>
      <h2>Saker</h2>
      <ul>
        {cases.map((c) => (
          <li key={c.id}>{c.bilnummer}: {c.feil}</li>
        ))}
      </ul>
    </div>
  );
}
