import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS } from '@/app/routes/paths';
import { useI18n } from '@/i18n/I18nProvider';

const NotFoundPage = () => {
  const { t } = useI18n();

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t('docs.pageNotFound')}</h1>
      <p className="max-w-md text-sm text-muted-foreground">{t('docs.notFoundDescription')}</p>
      <Button asChild variant="secondary">
        <Link to={ROUTE_PATHS.home}>{t('docs.backHome')}</Link>
      </Button>
    </section>
  );
};

export default NotFoundPage;
