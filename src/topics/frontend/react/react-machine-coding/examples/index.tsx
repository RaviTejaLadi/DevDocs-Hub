import CounterData from './basic/counter.md?raw';
import todoData from './basic/todo.md?raw';
import loginFormData from './basic/loginForm.md?raw';
import toggleButtonData from './basic/toggleButton.md?raw';
import simpleCalculatorData from './basic/simpleCalculator.md?raw';
import colorPickerData from './basic/colorPicker.md?raw';
import showHideComponentData from './basic/showHideComponent.md?raw';
import timerData from './basic/timer.md?raw';
import likeButtonData from './basic/likeButton.md?raw';
import randomQuoteGeneratorData from './basic/randomQuoteGenerator.md?raw';
import accordionData from './basic/accordion.md?raw';
import breadcrumbData from './basic/breadcrumb.md?raw';
import dropdownData from './basic/dropdown.md?raw';
import imageGalleryData from './basic/imageGallery.md?raw';
import modalData from './basic/modal.md?raw';
import progressBarData from './basic/progressBar.md?raw';
import ratingData from './basic/rating.md?raw';
import searchData from './basic/search.md?raw';
import tabsData from './basic/tabs.md?raw';
import tooltipData from './basic/tooltip.md?raw';

import { ReactNode } from 'react';
import Counter from '@/components/examples/basic/Counter';
import Todo from '@/components/examples/basic/Todo';
import LoginForm from '@/components/examples/basic/LoginForm';
import ToggleButton from '@/components/examples/basic/ToggleButton';
import Calculator from '@/components/examples/basic/Calculator';
import ColorPicker from '@/components/examples/basic/ColorPicker';
import ToggleVisibility from '@/components/examples/basic/ToggleVisibility';
import Timer from '@/components/examples/basic/Timer';
import LikeButton from '@/components/examples/basic/LikeButton';
import QuoteGenerator from '@/components/examples/basic/QuoteGenerator';
import Accordion from '@/components/examples/basic/Accordion';
import Breadcrumbs from '@/components/examples/basic/Breadcrumbs';
import { DropdownUsage } from '@/components/examples/basic/Dropdown';
import { ImageGalleryUsage } from '@/components/examples/basic/ImageGallery';
import { ModalUsage } from '@/components/examples/basic/Modal';
import { ProgressBarUsage } from '@/components/examples/basic/ProgressBar';
import { RatingUsage } from '@/components/examples/basic/Rating';
import { SearchUsage } from '@/components/examples/basic/Search';
import { TabsUsage } from '@/components/examples/basic/Tabs';
import { TooltipUsage } from '@/components/examples/basic/Tooltip';

interface machineCodingExamplesDataSchema {
  id: string;
  title: string;
  content: string;
  component?: ReactNode;
}
export const machineCodingExamplesData: machineCodingExamplesDataSchema[] = [
  {
    id: 'counter',
    title: '🧮 Counter',
    component: <Counter />,
    content: CounterData,
  },
  {
    id: 'toggle-button',
    title: '🔘 Toggle Button',
    component: <ToggleButton />,
    content: toggleButtonData,
  },
  {
    id: 'like-button',
    title: '❤️ Like Button',
    component: <LikeButton />,
    content: likeButtonData,
  },
  {
    id: 'show-hide',
    title: '👀 Show/Hide Component',
    component: <ToggleVisibility />,
    content: showHideComponentData,
  },
  {
    id: 'login-form',
    title: '🔐 Login Form',
    component: <LoginForm />,
    content: loginFormData,
  },
  {
    id: 'simple-calculator',
    title: '🧮 Simple Calculator',
    component: <Calculator />,
    content: simpleCalculatorData,
  },
  {
    id: 'todo',
    title: '✅ Todo App',
    component: <Todo />,
    content: todoData,
  },
  {
    id: 'timer',
    title: '⏱️ Timer',
    component: <Timer />,
    content: timerData,
  },
  {
    id: 'color-picker',
    title: '🎨 Color Picker',
    component: <ColorPicker />,
    content: colorPickerData,
  },
  {
    id: 'random-quote-generator',
    title: '💬 Random Quote Generator',
    component: <QuoteGenerator />,
    content: randomQuoteGeneratorData,
  },
  {
    id: 'accordion',
    title: '📖 Accordion',
    component: (
      <Accordion
        items={[
          {
            title: 'What is React?',
            content: 'React is a JavaScript library for building user interfaces.',
          },
          {
            title: 'How to use components?',
            content: 'Components let you split the UI into independent, reusable pieces.',
          },
        ]}
      />
    ),
    content: accordionData,
  },
  {
    id: 'dropdown',
    title: '📋 Dropdown',
    component: <DropdownUsage />,
    content: dropdownData,
  },
  {
    id: 'modal',
    title: '🪟 Modal',
    component: <ModalUsage />,
    content: modalData,
  },
  {
    id: 'tabs',
    title: '🗂️ Tabs',
    component: <TabsUsage />,
    content: tabsData,
  },
  {
    id: 'breadcrumb',
    title: '🍞 Breadcrumb',
    component: (
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            path: '/home',
          },
          {
            label: 'Dashboard',
            path: '/dashboard',
          },
        ]}
      />
    ),
    content: breadcrumbData,
  },
  {
    id: 'image-gallery',
    title: '🖼️ Image Gallery',
    component: <ImageGalleryUsage />,
    content: imageGalleryData,
  },
  {
    id: 'progress-bar',
    title: '📊 Progress Bar',
    component: <ProgressBarUsage />,
    content: progressBarData,
  },
  {
    id: 'rating',
    title: '⭐ Rating',
    component: <RatingUsage />,
    content: ratingData,
  },
  {
    id: 'search',
    title: '🔍 Search Bar',
    component: <SearchUsage />,
    content: searchData,
  },
  {
    id: 'tool-tip',
    title: '💡 ToolTip',
    component: <TooltipUsage />,
    content: tooltipData,
  },
];
