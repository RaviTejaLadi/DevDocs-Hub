import intro from "./intro.md?raw";
import htmlMustKnowTopics from "./html-must-know-topics.md?raw";

export const htmlTopics = [
  {
    id: "intro",
    title: "Introduction",
    content: intro,
  },
  {
    id: "html-must-know-topics",
    title: "HTML topics every developer must know",
    content: htmlMustKnowTopics,
  },
  {
    id: "forms",
    title: "Forms & Inputs",
    content:
      '# Forms\n\nThe HTML `<form>` element is used to create an HTML form for user input.\n\n```html\n<form action="/action_page.php" method="post">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <label for="lname">Last name:</label><br>\n  <input type="text" id="lname" name="lname" value="Doe"><br><br>\n  <input type="submit" value="Submit">\n</form>\n```\n\n## Input Types\n\nThe `<input>` element can be displayed in several ways, depending on the type attribute:\n\n* `text` - Displays a single-line text input field\n* `password` - Displays a password field\n* `email` - Displays an email input field\n* `number` - Displays a numeric input field\n* `checkbox` - Displays a checkbox\n* `radio` - Displays a radio button',
  },
];
