import LiveCodeEditor from '@/components/LiveCodeEditor/LiveCodeEditor';

const CodeEditorPage = () => {
  return (
    <section className="space-y-4">
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
