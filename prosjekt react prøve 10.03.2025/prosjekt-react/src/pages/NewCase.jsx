import React, { useContext, useState } from "react";
import { CaseContext } from "../context/CaseContext";

export default function NewCase() {
  const { addCase } = useContext(CaseContext);
  const [formData, setFormData] = useState({ bilnummer: "", feil: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCase({ ...formData, id: Date.now() });
    setFormData({ bilnummer: "", feil: "" });
  };

  return (
    <div>
      <h2>Registrer ny sak</h2>
      <form onSubmit={handleSubmit}>
        <input name="bilnummer" value={formData.bilnummer} onChange={handleChange} placeholder="Bilnummer" required />
        <input name="feil" value={formData.feil} onChange={handleChange} placeholder="Feil" required />
        <button type="submit">Lagre sak</button>
      </form>
    </div>
  );
}