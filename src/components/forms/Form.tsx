

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Form = () => {
  const [form, setForm] = useState({
    "nombre-contacto": "",
    telefono: "",
    "nombre-empresa": "",
    "contact-email": "",
    mensaje: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async () => {
    try {
      setStatus("sending");
      const response = await fetch("/api/send-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form["nombre-contacto"],
          phone: form.telefono,
          companyName: form["nombre-empresa"],
          email: form["contact-email"],
          message: form.mensaje
        })
      });

      const result = await response.json();
      setStatus(response.ok ? "success" : "error");
    } catch (err) {
      console.error("❌ Network error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="nombre-contacto">Nombre y Apellido</Label>
          <Input
            id="nombre-contacto"
            placeholder="Nombre y Apellido"
            value={form["nombre-contacto"]}
            onChange={(e) => setForm({ ...form, ["nombre-contacto"]: e.target.value })}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="telefono">Télefono</Label>
          <Input
            id="telefono"
            placeholder="Télefono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="nombre-empresa">Nombre de la Empresa</Label>
        <Input
          id="nombre-empresa"
          placeholder="Nombre de la empresa"
          value={form["nombre-empresa"]}
          onChange={(e) => setForm({ ...form, ["nombre-empresa"]: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="contact-email">Correo electrónico</Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="tu@empresa.com"
          value={form["contact-email"]}
          onChange={(e) => setForm({ ...form, ["contact-email"]: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="mensaje">Mensaje</Label>
        <Input
          id="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        />
      </div>
      <Button
        variant="medical"
        className="w-full"
        disabled={status === "sending"}
        onClick={handleSubmit}
      >
        {status === "sending" ? "Enviando..." : "Enviar Consulta"}
      </Button>
      {status === "success" && (
        <div className="text-green-600 text-center mt-2">Enviar consulta</div>
      )}
      {status === "error" && (
        <div className="text-red-600 text-center mt-2">Ocurrió un error al enviar. Intente nuevamente.</div>
      )}
    </div>
  );
};

export default Form;