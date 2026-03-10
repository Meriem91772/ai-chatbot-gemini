"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply || data.error);
    } catch (error) {
      setReply("Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Mon premier chatbot Gemini</h1>

      <textarea
        className="w-full border rounded-lg p-4 mb-4"
        rows={6}
        placeholder="Écris ton message ici..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Réflexion..." : "Envoyer"}
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Réponse</h2>
        <div className="border rounded-lg p-4 min-h-[120px]">
          {reply || "La réponse de Gemini apparaîtra ici."}
        </div>
      </div>
    </main>
  );
}
