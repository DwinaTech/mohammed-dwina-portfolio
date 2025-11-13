import { Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#18181b] text-white py-6 mt-12">
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://www.facebook.com/DwinaTech/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://github.com/dwinatech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Linkedin size={22} />
        </a>
      </div>
      <p className="text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Mohammed Dwina. All rights reserved.
      </p>
    </footer>
  );
}
