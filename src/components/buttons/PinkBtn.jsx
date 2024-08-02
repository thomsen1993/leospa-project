import React from "react";

import Link from "next/link";

const PinkBtn = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-accent rounded-full text-whitetxt text-sm uppercase hover:text-primary transition px-7 py-2"
    >
      {children}
    </Link>
  );
};

export default PinkBtn;
