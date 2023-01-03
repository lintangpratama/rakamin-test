import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-center p-3 text-xs absolute bottom-0 w-full">&copy; Copyright {year}</footer>
  );
}

export default Footer;
