import React, { useState } from "react";

import App from "./App";

export default function Effect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <App />}
    </div>
  );
}
