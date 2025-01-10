import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    fetch("https://formsubmit.co/ajax/tomas.ild.work@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          setMessage("Mensaje enviado con éxito.");
        } else {
          setMessage("Hubo un error al enviar el mensaje.");
        }
        e.target.reset();
        setTimeout(() => setMessage(""), 10000);
      })
      .catch(() => {
        setIsLoading(false);
        setMessage("Hubo un error al enviar el mensaje.");
        setTimeout(() => setMessage(""), 10000);
      });
  };

  return (
    <form
      className="w-full px-4 py-2 space-y-4 overflow-y-hidden z-50 contact-form"
      onSubmit={handleSubmit}
    >
      <h2 className="font-semibold text-center text-[1.6rem] form-heading py-4">
        Contáctame
      </h2>
      <Input
        className="border-gray-400 hidden"
        type="hidden"
        name="_captcha"
        value="false"
      />
      <Input
        className="border-gray-400 hidden"
        type="hidden"
        name="_next"
        value="https://www.tomasild.com/"
      />
      <div className="flex space-x-2 pt-4 lg:pt-0 xl:pt-0 form-fields">
        <div className="flex flex-col w-full space-y-1 form-field">
          <label htmlFor="name" className="text-[1rem]  font-semibold">
            Nombre
          </label>
          <Input
            className="border-gray-400 border-opacity-70 text-[1rem] md:text-[1.2rem"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col w-full space-y-1 form-field">
          <label htmlFor="email" className="text-[1rem]  font-semibold ">
            Email
          </label>
          <Input
            className="border-gray-400 border-opacity-70 text-[1rem] m "
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="space-y-1 form-field">
        <label htmlFor="message" className="text-[1rem]  font-semibold ">
          Mensaje
        </label>
        <Textarea
          className="border-gray-400 border-opacity-70 text-[1rem]  h-36"
          id="message"
          name="message"
          required
        ></Textarea>
      </div>

      <div className="flex justify-between form-actions">
        <Button
          variant="secondary"
          className={`w-full mt-2 text-base py-4 bg-accent text-white hover:bg-primary dark:bg-secondary dark:hover:bg-primary${
            isLoading ? " disabled" : ""
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin font-bold" />
          ) : (
            <Mail className="h-4 w-4 mr-2 font-bold" />
          )}
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
        {message && <p className="text-left ml-3 form-message">{message}</p>}
      </div>
    </form>
  );
}

export default ContactForm;
