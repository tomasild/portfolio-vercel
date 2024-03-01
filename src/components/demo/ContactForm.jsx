import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Activar indicador de carga
    const formData = new FormData(e.target);

    fetch("https://formsubmit.co/ajax/tomas.ild.work@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => response.json())
    .then(data => {
      setIsLoading(false); // Desactivar indicador de carga
      if(data.success) {
        setMessage("Mensaje enviado con éxito.");
      } else {
        setMessage("Hubo un error al enviar el mensaje.");
      }
      // Limpia los campos del formulario
      e.target.reset();
      // Limpia el mensaje después de 10 segundos
      setTimeout(() => setMessage(""), 10000);
    })
    .catch(() => {
      setIsLoading(false); // Desactivar indicador de carga en caso de error
      setMessage("Hubo un error al enviar el mensaje.");
      // Limpia el mensaje después de 10 segundos
      setTimeout(() => setMessage(""), 10000);
    });
  };

  return (
    <form
      className="w-full p-4 space-y-2 overflow-y-hidden"
      onSubmit={handleSubmit}
    >
      <h2 className="font-semibold text-center text-lg">Contáctame</h2>
      <Input type="hidden" name="_captcha" value="false" />
      <Input
        type="hidden"
        name="_next"
        value="https://tusitio.com/gracias.html"
      />
      <div className="flex space-x-2">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Nombre:</label>
          <Input type="text" id="name" name="name" required />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <Input type="email" id="email" name="email" required />
        </div>
      </div>

      <label htmlFor="message">Mensaje:</label>
      <Textarea id="message" name="message" required></Textarea>

      <div className="flex  justify-between">
        <Button className="w-1/2" type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
        {message && <p className="text-left ml-2">{message}</p>}
      </div>
    </form>
  );
}

export default ContactForm;
