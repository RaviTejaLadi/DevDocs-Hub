import LiveCodeEditor from './LiveCodeEditor';
import { PageSEO } from '@/components/seo';
import { ROUTE_PATHS } from '@/app/routes/paths';

const CodeEditorPage = () => {
  return (
    <section className="space-y-4">
      <PageSEO
        title="Live Code Editor"
        description="Switch between HTML, CSS, JavaScript, React, and Tailwind playgrounds with instant preview."
        path={ROUTE_PATHS.codeEditor}
        keywords={['code editor', 'sandpack', 'react playground', 'live preview']}
      />
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Live Code Editor</h1>
        <p className="text-sm text-muted-foreground">
          Switch between HTML, CSS, JavaScript, React, and Tailwind playgrounds with instant preview.
        </p>
      </div>

      <LiveCodeEditor />
    </section>
  );
};

export default CodeEditorPage;
