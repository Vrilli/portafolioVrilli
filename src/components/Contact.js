import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://formsubmit.co/vrillyjcr@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        text: subject,
        comments: message,
        _subject: "¡Nuevo envío!",
      }),
    })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setIsSent(true);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        resetForm();
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
    const resetForm = () => {
      setName("");
      setEmail("");
      setMessage("");
    };
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-4xl uppercase text-accent font-medium mb-2
              tracking-wide"
              >
                Contactame!
              </h4>
              <h2 className="text-[45px] lg:text-[80px] leading-none mb-12">
                ¡Vamos a trabajar <br /> Juntos!
              </h2>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            action="https://formsubmit.co/vrillyjcr@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              placeholder="Dejame tu nombre!"
              type="text"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              placeholder="Dejame tu correo!"
              type="email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Dejame un Mensaje!"
            ></textarea>

            {isSent ? (
              <button className=" text-accent">Mensaje enviado!</button>
            ) : (
              <button className="btn btn-sm" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar mensaje"}{" "}
              </button>
            )}
            {error && (
              <p className="text-red-500 text-sm mt-2">{error.message}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
