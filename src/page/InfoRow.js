import React, { useState } from "react";

export default function InfoRow() {
  const [info, setInfo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        required
      />
    </div>
  );
}
