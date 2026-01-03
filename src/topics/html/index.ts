import intro from './intro.md?raw';
import htmlMustKnowTopics from './html-must-know-topics.md?raw';
import type { TopicItem } from '..';

export const htmlTopics: TopicItem[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: intro,
  },
  {
    id: 'html-must-know-topics',
    title: 'HTML topics every developer must know',
    content: htmlMustKnowTopics,
  },
  {
    id: 'forms',
    title: 'Forms & Inputs',
    content:
      '# Forms\n\nThe HTML `<form>` element is used to create an HTML form for user input.\n\n```html\n<form action="/action_page.php" method="post">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <label for="lname">Last name:</label><br>\n  <input type="text" id="lname" name="lname" value="Doe"><br><br>\n  <input type="submit" value="Submit">\n</form>\n```\n\n## Input Types\n\nThe `<input>` element can be displayed in several ways, depending on the type attribute:\n\n* `text` - Displays a single-line text input field\n* `password` - Displays a password field\n* `email` - Displays an email input field\n* `number` - Displays a numeric input field\n* `checkbox` - Displays a checkbox\n* `radio` - Displays a radio button',
  },
  {
    id: 'attributes',
    title: 'HTML Attributes',
    content:
      '# HTML Attributes (Deep Understanding)\n\n- Global attributes (`id`, `class`, `data-*`, `hidden`)\n- `contenteditable`\n- `tabindex`\n- `role`',
  },
  {
    id: 'seo',
    title: 'SEO Essentials',
    content:
      '# SEO Essentials\n\n- Correct heading structure\n- Meta tags for SEO\n- Semantic markup for crawlers\n- Image alt text\n- Canonical links',
  },
  {
    id: 'tables',
    title: 'Tables',
    content:
      '# Tables (Use Carefully)\n\n- `<table>`, `<thead>`, `<tbody>`, `<tfoot>`\n- `<tr>`, `<th>`, `<td>`\n- Table accessibility (`scope`, captions)',
  },
  {
    id: 'images-media',
    title: 'Images & Media',
    content:
      '# Images & Media\n\n- `<img>` and `alt` text (non-optional)\n- Responsive images (`srcset`, `sizes`)\n- `<picture>`\n- Audio & video (`<audio>`, `<video>`)\n- Lazy loading (`loading="lazy"`)',
  },
];
