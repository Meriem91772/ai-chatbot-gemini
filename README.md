# ✨ Gemini AI Chatbot

<p align="center">
  <b>A sleek full-stack AI chatbot built with Next.js, TypeScript, and the Google Gemini API</b>
</p>

<p align="center">
  <a href="https://ai-chatbot-gemini-one.vercel.app/"><img src="https://img.shields.io/badge/Live-Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://github.com/Meriem91772/ai-chatbot-gemini"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## 🌸 Overview

**Gemini AI Chatbot** is a modern AI web application that allows users to interact with the **Google Gemini API** through a simple and elegant chatbot interface.

This project was built as part of an AI engineering learning journey to understand how to:

- build a real **full-stack AI application**
- connect a frontend to a backend API route
- send prompts to a large language model
- handle API keys securely with environment variables
- deploy a production-style app with **Vercel**

It may look simple on the surface, but it teaches the exact workflow behind many modern AI products.

---

## 🚀 Live Demo

🔗 **Try the app here:**  
[https://ai-chatbot-gemini-one.vercel.app/](https://ai-chatbot-gemini-one.vercel.app/)

---

## 🖼 Features

- 💬 Clean chatbot interface
- ⚡ Fast prompt-to-response interaction
- 🤖 AI-generated answers powered by **Gemini**
- 🔐 Secure API key handling with environment variables
- 🌐 Public deployment with **Vercel**
- 🎨 Beginner-friendly and easy to extend

---

## 🛠 Tech Stack

| Technology | Role |
|-----------|------|
| **Next.js** | Full-stack React framework |
| **React** | Frontend UI |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Google Gemini API** | AI responses |
| **Vercel** | Deployment |

---

## 🧠 How It Works

The application follows a simple but powerful flow:

1. The user types a message into the chatbot interface  
2. The frontend sends the prompt to a backend API route  
3. The backend communicates with the **Gemini API**  
4. Gemini generates a response  
5. The response is returned and displayed in the UI  

In short:

**User → Frontend → API Route → Gemini → Response → UI**

---

## 📁 Project Structure

```bash
app/
  api/
    chat/
      route.ts
  favicon.ico
  globals.css
  layout.tsx
  page.tsx

public/
  file.svg
  globe.svg
  vercel.svg
  window.svg

package.json
package-lock.json
tsconfig.json
next.config.ts
postcss.config.mjs
eslint.config.mjs
.gitignore
README.md
