import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      placeholder="Søk etter bilnummer eller feil..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}