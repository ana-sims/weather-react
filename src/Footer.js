import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="signature">
        Open-source code by{" "}
        <a
          href="https://github.com/ana-sims/my-awesome-project"
          className="text-info"
        >
          ana-sims
        </a>
        <i className="far fa-heart heart" />
      </div>
    </div>
  );
}
