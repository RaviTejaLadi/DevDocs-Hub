import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { termsSections } from '../constants/termsSections';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto p-3 sm:p-4 md:p-8 bg-inherit min-h-screen">
      <Card className="max-w-4xl mx-auto bg-inherit border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gradient-sheen">{'Terms of Service'}</CardTitle>
          <p className="text-sm text-muted-foreground">{'Last Updated'}: January 3, 2026</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {termsSections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">{section.title}</h2>
                {section.body}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;
