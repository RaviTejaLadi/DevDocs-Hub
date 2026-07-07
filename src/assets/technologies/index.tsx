import { Code } from 'lucide-react';
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function createTechIcon(displayName: string) {
  const Icon = ({ className, ...props }: IconProps) => (
    <Code className={className} aria-hidden {...props} />
  );
  Icon.displayName = displayName;
  return Icon;
}

export const HTML = createTechIcon('HTML');
export const Css = createTechIcon('CSS');
export const JavaScript = createTechIcon('JavaScript');
export const Tailwind = createTechIcon('Tailwind');
export const React = createTechIcon('React');
export const NextJS = createTechIcon('NextJS');
export const Vue = createTechIcon('Vue');
export const Node = createTechIcon('Node');
export const Express = createTechIcon('Express');
export const Sql = createTechIcon('SQL');
export const MongoDB = createTechIcon('MongoDB');
