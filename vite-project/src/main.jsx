import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "visit me"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>{ReactElement}</StrictMode>
);
