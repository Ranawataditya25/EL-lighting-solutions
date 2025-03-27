import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

// Add global styles with CSS variables
const styleElement = document.createElement("style");
styleElement.textContent = `
  :root {
    --background: 0 0% 97%;
    --foreground: 240 10% 20%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 20%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 20%;
    --primary: 204 100% 38%;
    --primary-foreground: 0 0% 100%;
    --secondary: 122 55% 49%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 96%;
    --muted-foreground: 240 5% 40%;
    --accent: 204 100% 40%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 204 100% 38%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 7%;
    --foreground: 0 0% 98%;
    --card: 240 10% 10%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 10%;
    --popover-foreground: 0 0% 98%;
    --primary: 204 100% 38%;
    --primary-foreground: 0 0% 100%;
    --secondary: 122 55% 45%;
    --secondary-foreground: 0 0% 100%;
    --muted: 240 10% 15%;
    --muted-foreground: 240 5% 65%;
    --accent: 204 100% 35%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 10% 20%;
    --input: 240 10% 20%;
    --ring: 204 100% 38%;
  }
`;

document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
