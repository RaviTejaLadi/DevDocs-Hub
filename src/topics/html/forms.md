# Forms

### 1. The Form Wrapper (`<form>`, `action`, `method`)

The `<form>` tag acts as a container for all input elements. It tells the
browser where to send the data when the user hits "Submit".

- **`action`:** The URL where the data is sent (e.g., `/submit-login`). If left
  empty, it submits to the current page.
- **`method`:** How the data is sent.
- **`GET`:** Appends data to the URL (e.g., `search?q=cat`). Used for
  **searching** or retrieving data. _Never use for passwords._
- **`POST`:** Sends data in the request body (hidden from URL). Used for
  **submitting** data (passwords, payments, uploads).

### 2. The Input Tag (`<input>`)

The workhorse of forms. It is a **void element** (no closing tag). The `type`
attribute drastically changes how it looks and behaves.

- **Common Types:**
- `type="text"`: Standard single-line text (Name, City).
- `type="email"`: Validates that text contains "@" and a domain.
- `type="password"`: Masks characters (displays dots or asterisks).
- `type="number"`: Restricts input to digits; usually adds up/down spinner
  arrows.
- `type="date"`: triggers a native calendar picker.
- `type="file"`: Allows users to upload files from their device.

### 3. Labels & Accessibility (`<label>`)

Every input should have a label. This is vital for accessibility (screen
readers) and User Experience (UX).

- **The Connection:** You must link the label to the input using the `for` and
  `id` attributes.
- **UX Benefit:** When a user clicks the **text** of the label, the browser
  automatically focuses the corresponding input box.

```html
<label for="user-email">Email Address:</label>
<input type="email" id="user-email" name="email" />
```

_(Note: `for="user-email"` matches `id="user-email"`)_

### 4. Selection Controls

#### Checkboxes vs. Radio Buttons

- **Checkbox (`type="checkbox"`):** Used for **multiple** selections (e.g.,
  "Select your hobbies: Pizza, Coding, sleep").
- _Visual:_ Usually a square box.

- **Radio Button (`type="radio"`):** Used for **single** exclusive selection
  (e.g., "Select Gender: M, F, or Other").
- _Visual:_ Usually a round circle.
- _Grouping:_ To make radios mutually exclusive (choosing one deselects the
  other), they **must share the exact same `name` attribute**.

```html
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

#### Dropdown Menus (`<select>`, `<option>`)

Used when you have many options and want to save screen space.

- **`<select>`:** The wrapper.
- **`<option>`:** The individual items. The `value` attribute is what gets sent
  to the server; the text between tags is what the user sees.

```html
<select name="country">
  <option value="US">United States</option>
  <option value="IN">India</option>
</select>
```

### 5. Multi-line Text (`<textarea>`)

Unlike `<input>`, `<textarea>` is **not** self-closing. It is used for long
text, like comments or bios.

- **Attributes:** `rows` and `cols` control the default size.
- **Note:** Default text goes _between_ the tags, not in a value attribute.

```html
<textarea rows="4">Default text here...</textarea>
```

### 6. Critical Attributes

These attributes control behavior and validation:

- **`name`:** **The most important attribute for backend developers.** This acts
  as the variable name. If an input has no `name`, its data is **not sent** to
  the server.
- **`placeholder`:** Grey hint text that disappears when the user types (e.g.,
  "Enter your name..."). _Do not use this as a replacement for a label._
- **`required`:** Prevents form submission if the field is empty.
- **`disabled`:** The input is visible but unusable and **not sent** to the
  server.
- **`readonly`:** The input is visible and selectable (for copying), but the
  user cannot change the text.

### 7. Buttons (`<button>`)

Always specify the `type` attribute to avoid unexpected behavior.

- **`type="submit"`:** The default. Validates the form and sends data to the
  `action` URL.
- **`type="reset"`:** Clears all inputs to their default values (rarely used in
  modern UX).
- **`type="button"`:** A "dumb" button. It does nothing on its own. You use this
  to trigger JavaScript (e.g., "Open Modal").

### 8. HTML-Only Validation

Modern browsers can validate data without any JavaScript.

- **Required fields:** Browser shows "Please fill out this field."
- **Email format:** Browser shows "Please include an '@' in the email address."
- **Number limits:** `<input type="number" min="1" max="10">`.
- **Pattern:** `<input pattern="[A-Za-z]{3}">` (Advanced: uses Regex to enforce
  formats).
