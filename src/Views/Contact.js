import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Contact Us</h1>
      <p>
        Instagram:{" "}
        <a className="text-blue-500 underline" href="http://www.instagram.com">
          Instagram
        </a>
      </p>
      <p>
        Facebook:{" "}
        <a className="text-blue-500 underline" href="http://www.facebook.com">
          Facebook
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          className="text-blue-500 underline"
          href="http://www.linkedin.com/in/lintangpratama"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Contact;
