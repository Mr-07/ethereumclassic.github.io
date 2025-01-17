import React from "react";
import "twin.macro";

import Link from "./link";

export default function Sponsors() {
  return (
    <div tw="text-sm">
      <Link tw="text-shade-light" to="https://www.netlify.com/">
        This site is powered by Netlify
      </Link>
    </div>
  );
}
