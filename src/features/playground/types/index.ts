import type { LucideIcon } from 'lucide-react';

export type PlaygroundCategory = 'javascript' | 'typescript' | 'css' | 'html';

export type PlaygroundMeta = {
  id: string;
  label: string;
  description: string;
  category: PlaygroundCategory;
  icon: LucideIcon;
  methodCount?: number;
};

export type PlaygroundDefinition = PlaygroundMeta & {
  available: boolean;
};

export type ArrayMethodCategory = 'mutator' | 'accessor' | 'iteration' | 'search' | 'static';

export type ArrayMethodDefinition = {
  id: string;
  name: string;
  category: ArrayMethodCategory;
  signature: string;
  description: string;
  mutates: boolean;
  returns: string;
  example: string;
  defaultArray: string;
  extraArgsLabel?: string;
  defaultExtraArgs?: string;
  extraArgsPlaceholder?: string;
};

export type ArrayRunResult = { ok: true; result: unknown; arrayAfter: unknown[] } | { ok: false; error: string };

export type ObjectMethodCategory = 'static' | 'inspection' | 'transformation' | 'mutation';

export interface ObjectMethodDefinition {
  id: string;
  name: string;
  category: ObjectMethodCategory;
  signature: string;
  description: string;
  mutates: boolean;
  returns: string;
  example: string;
  defaultObject: string;

  extraArgsLabel?: string;
  defaultExtraArgs?: string;
  extraArgsPlaceholder?: string;
}
