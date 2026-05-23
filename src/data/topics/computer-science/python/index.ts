import type { TopicItem } from '@/data/topics';
import control_flow from './control-flow.md?raw';
import data_types from './data-types.md?raw';
import file_handling from './file-handling.md?raw';
import functions from './functions.md?raw';
import installation from './installation.md?raw';
import introduction from './introduction.md?raw';
import modules from './modules.md?raw';
import oops from './oops.md?raw';
import popular_libraries from './popular-libraries.md?raw';
import virtual_environments from './virtual-environments.md?raw';

export const pythonTopics: TopicItem[] = [
  { id: 'python-control-flow', title: 'Control Flow', content: control_flow },
  { id: 'python-data-types', title: 'Data Types', content: data_types },
  { id: 'python-file-handling', title: 'File Handling', content: file_handling },
  { id: 'python-functions', title: 'Functions', content: functions },
  { id: 'python-installation', title: 'Installation', content: installation },
  { id: 'python-introduction', title: '📖 Introduction', content: introduction },
  { id: 'python-modules', title: 'Modules', content: modules },
  { id: 'python-oops', title: 'Oops', content: oops },
  { id: 'python-popular-libraries', title: 'Popular Libraries', content: popular_libraries },
  { id: 'python-virtual-environments', title: 'Virtual Environments', content: virtual_environments },
];
