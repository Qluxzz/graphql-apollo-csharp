import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

const rootElem = document.getElementById("root")
if (!rootElem) throw new Error("Failed to find element with id root")

const root = createRoot(rootElem)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
