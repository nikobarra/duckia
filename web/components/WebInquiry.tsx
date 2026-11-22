"use client";
import { useState } from "react";
import { whatsappLink } from "@/content/site";
export function WebInquiry() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState("Presentar mis servicios");
  return (
    <form
      className="inquiry"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(
          whatsappLink(
            `Hola Nicolás, soy ${name}. Mi negocio es ${business}. Quiero una web para: ${need}.`,
          ),
          "_blank",
          "noopener,noreferrer",
        );
      }}
    >
      <label>
        Tu nombre
        <input
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Tu negocio
        <input
          required
          maxLength={200}
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
      </label>
      <label>
        ¿Qué necesitás?
        <select value={need} onChange={(e) => setNeed(e.target.value)}>
          <option>Presentar mis servicios</option>
          <option>Mostrar mi negocio y mis trabajos</option>
          <option>Mostrar un catálogo</option>
          <option>Renovar una web existente</option>
        </select>
      </label>
      <button className="inquiry-button" type="submit">
        Armar mi consulta por WhatsApp ↗
      </button>
      <p>
        Se abre WhatsApp con tu consulta preparada. Vos elegís cuándo enviarla.
      </p>
    </form>
  );
}
