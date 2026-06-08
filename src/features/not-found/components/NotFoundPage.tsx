import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS } from '@/app/routes/paths';

const NotFoundPage = () => {
  
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{'Page Not Found'}</h1>
      <p className="max-w-md text-sm text-muted-foreground">{'This topic doesn\'t exist or couldn\'t be found.'}</p>
      <Button asChild variant="secondary">
        <Link to={ROUTE_PATHS.home}>{'Back to Home'}</Link>
      </Button>
    </section>
  );
};

export default NotFoundPage;
