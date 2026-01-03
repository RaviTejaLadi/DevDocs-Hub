import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="
        mt-20 border-t
        border-slate-200 dark:border-slate-800
        bg-inherit
      "
    >
      <div className=" items-center p-3 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            ⚡ Dev Docs Hub
          </Link>

          {/* Social */}
          <p
            className="
              text-xs sm:text-sm
              text-muted-foreground
              text-center sm:text-left
            "
          >
            © {new Date().getFullYear()} Dev Docs Hub. Built for developers. MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
