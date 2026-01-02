import { Command, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        mt-20 border-t
        border-slate-200 dark:border-slate-800
        bg-gradient-to-br
        from-slate-50 to-white
        dark:from-slate-950 dark:to-slate-900
      "
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg sm:text-xl"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
              <Command className="h-5 w-5" />
            </div>

            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dev Docs Hub
            </span>
          </Link>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-slate-500 dark:text-slate-400
                hover:text-indigo-600 dark:hover:text-indigo-400
                transition-colors
              "
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <p
            className="
              text-xs sm:text-sm
              text-slate-500 dark:text-slate-400
              text-center sm:text-left
            "
          >
            © 2024 Dev Docs Hub. Built for developers. MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
