import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const initMermaid = (isDark: boolean) => {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: 'base',
    themeVariables: isDark
      ? {
          // ── Dark theme (oklch 0.13 base) ──────────────────────────
          background: '#1a1b26',
          mainBkg: '#1e2030',
          primaryColor: '#1e2030',
          primaryTextColor: '#f0f0f5',
          primaryBorderColor: '#4a5080',

          secondaryColor: '#252840',
          secondaryTextColor: '#c8cae0',
          secondaryBorderColor: '#3a3d5c',

          tertiaryColor: '#1a1d2e',
          tertiaryTextColor: '#c8cae0',
          tertiaryBorderColor: '#3a3d5c',

          lineColor: '#5a6090',
          edgeLabelBackground: '#1e2030',

          clusterBkg: '#161826',
          clusterBorder: '#3a3d5c',

          nodeTextColor: '#f0f0f5',
          //   labelTextColor:       '#c8cae0',

          fontSize: '14px',
          fontFamily: 'system-ui, -apple-system, sans-serif',

          // Sequence
          actorBorder: '#5a6090',
          actorBkg: '#1e2030',
          actorTextColor: '#f0f0f5',
          actorLineColor: '#3a3d5c',
          signalColor: '#8890c0',
          signalTextColor: '#f0f0f5',
          labelBoxBkgColor: '#1e2030',
          labelBoxBorderColor: '#3a3d5c',
          labelTextColor: '#c8cae0',
          noteBkgColor: '#252840',
          noteBorderColor: '#3a3d5c',
          noteTextColor: '#c8cae0',
          activationBorderColor: '#5a6090',
          activationBkgColor: '#252840',

          // ER
          attributeBackgroundColorEven: '#1e2030',
          attributeBackgroundColorOdd: '#252840',

          // Pie
          pie1: '#6b7ab5',
          pie2: '#4a8fa8',
          pie3: '#5a9e7a',
          pie4: '#8a6bab',
          pie5: '#b57a4a',
          pie6: '#ab4a6b',
          pie7: '#4a6bab',
          pie8: '#7aab5a',
          pieTextColor: '#f0f0f5',
          pieLegendTextColor: '#c8cae0',
          pieSectionTextColor: '#ffffff',

          // Gantt
          sectionBkgColor: '#1a1d2e',
          altSectionBkgColor: '#161826',
          sectionBkgColor2: '#1e2030',
          taskBorderColor: '#5a6090',
          taskBkgColor: '#2a2e4a',
          taskTextColor: '#f0f0f5',
          taskTextOutsideColor: '#c8cae0',
          taskTextClickableColor: '#a0a8e0',
          activeTaskBorderColor: '#7a80c0',
          activeTaskBkgColor: '#30355a',
          gridColor: '#2a2d40',
          doneTaskBkgColor: '#1a1d2e',
          doneTaskBorderColor: '#3a3d5c',
          critBorderColor: '#8b3a4a',
          critBkgColor: '#2a1a20',
          todayLineColor: '#6b7ab5',

          // Git
          git0: '#6b7ab5',
          git1: '#4a8fa8',
          git2: '#5a9e7a',
          git3: '#8a6bab',
          git4: '#b57a4a',
          git5: '#ab4a6b',
          git6: '#4a6bab',
          git7: '#7aab5a',
          gitBranchLabel0: '#ffffff',
          gitBranchLabel1: '#ffffff',
          gitBranchLabel2: '#ffffff',
          gitBranchLabel3: '#ffffff',
          gitBranchLabel4: '#ffffff',
          gitBranchLabel5: '#ffffff',
          gitBranchLabel6: '#ffffff',
          gitBranchLabel7: '#ffffff',
          commitLabelColor: '#c8cae0',
          commitLabelBackground: '#1e2030',
          tagLabelColor: '#ffffff',
          tagLabelBackground: '#6b7ab5',
          tagLabelBorder: '#4a5080',
        }
      : {
          // ── Light theme (oklch 0.99 base) ─────────────────────────
          background: '#ffffff',
          mainBkg: '#f6f7fb',
          primaryColor: '#edf0fa',
          primaryTextColor: '#1a1c2e',
          primaryBorderColor: '#9098c8',

          secondaryColor: '#f0f2fb',
          secondaryTextColor: '#2a2d45',
          secondaryBorderColor: '#b8bcd8',

          tertiaryColor: '#f8f9fd',
          tertiaryTextColor: '#2a2d45',
          tertiaryBorderColor: '#c8cade',

          lineColor: '#8890c0',
          edgeLabelBackground: '#edf0fa',

          clusterBkg: '#f0f2fb',
          clusterBorder: '#c0c4de',

          nodeTextColor: '#1a1c2e',
          //   labelTextColor:       '#2a2d45',

          fontSize: '14px',
          fontFamily: 'system-ui, -apple-system, sans-serif',

          // Sequence
          actorBorder: '#9098c8',
          actorBkg: '#edf0fa',
          actorTextColor: '#1a1c2e',
          actorLineColor: '#b8bcd8',
          signalColor: '#6870a8',
          signalTextColor: '#1a1c2e',
          labelBoxBkgColor: '#edf0fa',
          labelBoxBorderColor: '#c0c4de',
          noteBkgColor: '#fefbe8',
          noteBorderColor: '#e8e0a0',
          noteTextColor: '#4a4020',
          activationBorderColor: '#9098c8',
          activationBkgColor: '#dde2f8',

          // ER
          attributeBackgroundColorEven: '#f0f2fb',
          attributeBackgroundColorOdd: '#f8f9fd',

          // Pie
          pie1: '#5a6aa8',
          pie2: '#3a7e9a',
          pie3: '#4a8e6a',
          pie4: '#7a5a9a',
          pie5: '#a56a3a',
          pie6: '#9a3a5a',
          pie7: '#3a5a9a',
          pie8: '#6a9a4a',
          pieTextColor: '#1a1c2e',
          pieLegendTextColor: '#2a2d45',
          pieSectionTextColor: '#ffffff',

          // Gantt
          sectionBkgColor: '#f0f2fb',
          altSectionBkgColor: '#f8f9fd',
          sectionBkgColor2: '#edf0fa',
          taskBorderColor: '#9098c8',
          taskBkgColor: '#dde2f8',
          taskTextColor: '#1a1c2e',
          taskTextOutsideColor: '#2a2d45',
          taskTextClickableColor: '#3a45a0',
          activeTaskBorderColor: '#6870a8',
          activeTaskBkgColor: '#c8d0f0',
          gridColor: '#e0e2f0',
          doneTaskBkgColor: '#f0f2fb',
          doneTaskBorderColor: '#c0c4de',
          critBorderColor: '#c05060',
          critBkgColor: '#fce8ea',
          todayLineColor: '#5a6aa8',

          // Git
          git0: '#5a6aa8',
          git1: '#3a7e9a',
          git2: '#4a8e6a',
          git3: '#7a5a9a',
          git4: '#a56a3a',
          git5: '#9a3a5a',
          git6: '#3a5a9a',
          git7: '#6a9a4a',
          gitBranchLabel0: '#ffffff',
          gitBranchLabel1: '#ffffff',
          gitBranchLabel2: '#ffffff',
          gitBranchLabel3: '#ffffff',
          gitBranchLabel4: '#ffffff',
          gitBranchLabel5: '#ffffff',
          gitBranchLabel6: '#ffffff',
          gitBranchLabel7: '#ffffff',
          commitLabelColor: '#2a2d45',
          commitLabelBackground: '#edf0fa',
          tagLabelColor: '#ffffff',
          tagLabelBackground: '#5a6aa8',
          tagLabelBorder: '#3a4888',
        },
    flowchart: { curve: 'basis', padding: 20, nodeSpacing: 50, rankSpacing: 70, htmlLabels: true, useMaxWidth: true },
    sequence: { actorMargin: 60, mirrorActors: false, useMaxWidth: true },
    gantt: { barHeight: 24, barGap: 6, topPadding: 40, leftPadding: 80, gridLineStartPadding: 40 },
    er: { layoutDirection: 'TB', useMaxWidth: true },
  });
};

const MermaidRenderer = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isDark = document.documentElement.classList.contains('dark');
    initMermaid(isDark);

    const id = 'mermaid-' + Math.random().toString(36).slice(2);

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!ref.current) return;

        const patched = svg
          .replace(/<rect /g, '<rect rx="4" ry="4" ')
          .replace(/width="[^"]*"/, 'width="100%"')
          .replace(/height="[^"]*"/, 'height="auto"');

        ref.current.innerHTML = patched;

        const svgEl = ref.current.querySelector('svg');
        if (!svgEl) return;

        // Consistent edge styling
        svgEl.querySelectorAll('.edgePath path, .flowchart-link').forEach((el) => {
          (el as SVGElement).style.strokeWidth = '1.8px';
        });

        // Edge label text
        svgEl.querySelectorAll('.edgeLabel span, .edgeLabel div').forEach((el) => {
          (el as HTMLElement).style.fontSize = '12px';
          (el as HTMLElement).style.fontWeight = '500';
        });
      })
      .catch(() => {
        if (ref.current) {
          ref.current.innerHTML =
            '<p style="padding:16px;font-size:13px;color:#c05060">Unable to render diagram — please check syntax.</p>';
        }
      });
  }, [chart]);

  return (
    <div
      ref={ref}
      className="my-6 rounded-md bg-slate-100/30 backdrop-blur-sm overflow-x-auto p-4 sm:p-6 [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:mx-auto"
    />
  );
};

export default MermaidRenderer;
