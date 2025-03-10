import React, { useContext } from "react";
import { CaseContext } from "../context/CaseContext";
import SearchBar from "../components/SearchBar";
import CaseList from "../components/CaseList";

export default function Home() {
  const { cases } = useContext(CaseContext);
  return (
    <div>
      <h1>Åpen sak</h1>
      <SearchBar />
      <CaseList cases={cases} />
    </div>
  );
}