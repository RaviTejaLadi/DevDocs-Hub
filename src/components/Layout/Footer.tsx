import { Link } from 'react-router-dom';
import { Github, FileText } from 'lucide-react';
import { Logo } from '../Logo';
import { useI18n } from '@/i18n/I18nProvider';

const Footer = () => {
  const { t } = useI18n();
  const FOOTER_LINKS = [
    { to: '/', label: t('footer.overview') },
    { to: '/terms', label: t('footer.terms') },
  ];

  return (
    <footer className="mt-24 border border-border/40 bg-muted/20 rounded-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Logo showText size="md" className="font-semibold w-fit" />
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
              {FOOTER_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className="hover:text-foreground transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">{t('nav.github')}</span>
            </a>
            <Link to="/terms" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">{t('footer.terms')}</span>
            </Link>
          </div>
        </div>

        <p className="mt-6 pt-6 border-t border-border/40 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} ReviseStack. {t('footer.tagline')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
