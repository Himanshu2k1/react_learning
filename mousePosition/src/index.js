import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Effect from "./Effect";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Effect /> */}
    <App />
  </StrictMode>
);
