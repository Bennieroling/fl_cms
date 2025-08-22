import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";

type FormValues = {
  nombreContacto: string;
  telefono: string;
  nombreEmpresa: string;
  contactEmail: string;
  mensaje: string;
};

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    defaultValues: {
      nombreContacto: "",
      telefono: "",
      nombreEmpresa: "",
      contactEmail: "",
      mensaje: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus("sending");
      const response = await fetch("/api/send-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.nombreContacto,
          phone: values.telefono,
          companyName: values.nombreEmpresa,
          email: values.contactEmail,
          message: values.mensaje
        })
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        console.log("✅ Email sent successfully:", result);
      } else {
        setStatus("error");
        console.error("❌ API error:", result);
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      setStatus("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="nombreContacto"
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nombre y Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre y Apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefono"
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Télefono</FormLabel>
                <FormControl>
                  <Input placeholder="Télefono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="nombreEmpresa"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de la empresa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactEmail"
          rules={{
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Correo no válido"
            }
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@empresa.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mensaje"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Input placeholder="Mensaje" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="medical"
          className="w-full"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar Consulta"}
        </Button>

        {status === "success" && (
          <div className="text-green-600 text-center mt-2">Consulta enviada con éxito.</div>
        )}
        {status === "error" && (
          <div className="text-red-600 text-center mt-2">Ocurrió un error al enviar. Intente nuevamente.</div>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;