"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function BiaChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bia", text: "Olá! Eu sou a Bia, sua atendente virtual. Qual é o seu nome?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const [userData, setUserData] = useState({
    nome: "",
    contato: "",
    motivo: "",
    horario: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let biaResponse = "";
    const nextStep = step + 1;

    switch (step) {
      case 0:
        setUserData((prev) => ({ ...prev, nome: input }));
        biaResponse = `Prazer, ${input}! Com quem você gostaria de falar?`;
        break;
      case 1:
        setUserData((prev) => ({ ...prev, contato: input }));
        biaResponse = `Entendi! E qual é o motivo do seu atendimento?`;
        break;
      case 2:
        setUserData((prev) => ({ ...prev, motivo: input }));
        biaResponse =
          "Obrigada pelas informações! Podemos agendar um horário para você. Qual dia e hora seria melhor pra você?";
        break;
      case 3:
        setUserData((prev) => ({ ...prev, horario: input }));
        biaResponse = `Perfeito! Vou agendar para ${input}. A pessoa responsável irá te contactar em breve.`;

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bia",
              text: `🔎 *Resumo do atendimento:*\n- Nome: ${userData.nome}\n- Contato: ${userData.contato}\n- Motivo: ${userData.motivo}\n- Horário: ${input}`,
            },
          ]);
        }, 1000);
        break;
      default:
        biaResponse = "Se precisar de mais alguma coisa, estou por aqui!";
        break;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bia", text: biaResponse }]);
    }, 500);

    setInput("");
    setStep(nextStep);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <MessageCircle />
        </button>
      ) : (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-green-300">
          {/* Header */}
          <div className="bg-green-500 text-white flex items-center px-4 py-2 gap-3">
            <img
              src="/at.png"
              alt="Avatar do assistente Bia"
              className="w-8 h-8 rounded-full object-cover border border-white"
            />
            <span className="font-semibold">Assistente Bia</span>
            <button onClick={() => setOpen(false)} className="ml-auto">
              <X />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-green-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-2 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva aqui..."
              className="flex-1 border rounded px-3 py-2 text-sm text-black placeholder-gray-500"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-white px-4 rounded hover:bg-green-600 text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
