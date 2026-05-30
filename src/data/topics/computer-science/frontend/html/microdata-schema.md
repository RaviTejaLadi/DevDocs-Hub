# 🔍 HTML Microdata & Schema

**Microdata** is a way to add structured information to HTML content so that search engines can better understand your webpage. **Schema.org** provides a standard vocabulary for describing things like articles, products, events, organizations, people, and more.

Think of it this way:

* 👨 User sees: "iPhone 17 Pro - ₹1,29,900"
* 🤖 Search engine sees: "This is a product named iPhone 17 Pro with a specific price."

This additional context helps search engines display **rich results** such as ratings, prices, FAQs, recipes, and event information.

---

# 📌 What is Structured Data?

Structured data organizes information in a format that machines can understand.

Without structured data:

```html
<p>iPhone 17 Pro - ₹1,29,900</p>
```

A search engine only sees text.

With structured data:

```html
<p itemprop="name">iPhone 17 Pro</p>
<p itemprop="price">129900</p>
```

Now the search engine knows this content represents a product and its price.

---

# 🏗️ What is Schema.org?

[Schema.org](https://schema.org?utm_source=chatgpt.com) is a collaborative project that provides standardized structured data types.

Common schema types include:

| Schema Type  | Purpose                    |
| ------------ | -------------------------- |
| Person       | Individual information     |
| Product      | Product details            |
| Organization | Company information        |
| Article      | Blog posts and news        |
| Event        | Event details              |
| Recipe       | Cooking recipes            |
| FAQPage      | Frequently asked questions |
| Review       | Product or service reviews |

---

# 📖 What is HTML Microdata?

Microdata uses special HTML attributes to add structured data.

### Main Attributes

| Attribute   | Purpose                        |
| ----------- | ------------------------------ |
| `itemscope` | Creates a new item             |
| `itemtype`  | Defines schema type            |
| `itemprop`  | Defines a property             |
| `itemid`    | Unique identifier              |
| `itemref`   | References external properties |

---

# 🎯 Basic Microdata Example

## Person Schema

```html
<!-- Person microdata -->
<div itemscope itemtype="https://schema.org/Person">

    <h2 itemprop="name">
        John Doe
    </h2>

    <p itemprop="jobTitle">
        Frontend Developer
    </p>

</div>
```

### Explanation

| Attribute             | Meaning            |
| --------------------- | ------------------ |
| `itemscope`           | Defines an item    |
| `itemtype`            | Person schema      |
| `itemprop="name"`     | Person's name      |
| `itemprop="jobTitle"` | Person's job title |

---

# 🛍️ Product Schema Example

One of the most common uses of microdata is product information.

```html
<!-- Product microdata -->
<div itemscope itemtype="https://schema.org/Product">

    <h2 itemprop="name">
        Laptop Pro X
    </h2>

    <p itemprop="description">
        High-performance laptop for developers.
    </p>

    <span itemprop="price">
        85000
    </span>

</div>
```

Search engines can recognize:

```text
Product Name: Laptop Pro X
Price: 85000
Description: High-performance laptop
```

---

# ⭐ Review Schema Example

```html
<!-- Product review -->
<div itemscope itemtype="https://schema.org/Review">

    <span itemprop="author">
        Ravi
    </span>

    <p itemprop="reviewBody">
        Excellent product.
    </p>

</div>
```

---

# 🏢 Organization Schema

```html
<!-- Organization schema -->
<div itemscope itemtype="https://schema.org/Organization">

    <h2 itemprop="name">
        Tech Solutions
    </h2>

    <p itemprop="address">
        Hyderabad, India
    </p>

</div>
```

Useful for:

* Companies
* Startups
* Educational institutions
* Non-profit organizations

---

# 📰 Article Schema

For blogs and news websites.

```html
<!-- Blog article schema -->
<article
    itemscope
    itemtype="https://schema.org/Article">

    <h1 itemprop="headline">
        Learn HTML Microdata
    </h1>

    <p itemprop="author">
        John Doe
    </p>

</article>
```

---

# 📅 Event Schema

```html
<!-- Event schema -->
<div
    itemscope
    itemtype="https://schema.org/Event">

    <h2 itemprop="name">
        Web Development Workshop
    </h2>

    <p itemprop="startDate">
        2026-07-15
    </p>

</div>
```

Useful for:

* Conferences
* Workshops
* Meetups
* Webinars

---

# 🍕 Recipe Schema

```html
<!-- Recipe schema -->
<div
    itemscope
    itemtype="https://schema.org/Recipe">

    <h2 itemprop="name">
        Margherita Pizza
    </h2>

    <p itemprop="cookTime">
        PT30M
    </p>

</div>
```

Search engines may display:

* Cooking time
* Ingredients
* Ratings
* Nutrition information

---

# 🧩 Nested Microdata

Microdata items can contain other items.

```html
<!-- Person with address -->
<div
    itemscope
    itemtype="https://schema.org/Person">

    <span itemprop="name">
        John Doe
    </span>

    <div
        itemprop="address"
        itemscope
        itemtype="https://schema.org/PostalAddress">

        <span itemprop="addressLocality">
            Hyderabad
        </span>

    </div>

</div>
```

Structure:

```text
Person
│
├── Name
│
└── Address
     └── City
```

---

# 🚀 Rich Results

Structured data can help search engines create rich results.

Examples:

### Product Result

```text
★★★★★ 4.8
Laptop Pro X
₹85,000
In Stock
```

---

### FAQ Result

```text
Q: What is HTML?
A: HTML is the standard markup language...
```

---

### Recipe Result

```text
🍕 Margherita Pizza
⏱️ 30 Minutes
⭐ 4.9 Rating
```

---

# 📊 Microdata vs JSON-LD

There are multiple ways to add structured data.

| Feature                | Microdata    | JSON-LD     |
| ---------------------- | ------------ | ----------- |
| Added directly in HTML | ✅ Yes        | ❌ No        |
| Easy to read           | Moderate     | High        |
| Recommended by Google  | ⚠️ Supported | ✅ Preferred |
| HTML clutter           | More         | Less        |
| Maintenance            | Harder       | Easier      |

---

# 🌟 JSON-LD Example (Modern Approach)

Today, most websites use JSON-LD instead of Microdata.

```html
<!-- JSON-LD structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Frontend Developer"
}
</script>
```

Advantages:

* Cleaner HTML
* Easier maintenance
* Google's preferred format

---

# ⚠️ Common Mistakes

## Missing `itemscope`

❌ Wrong

```html
<div itemtype="https://schema.org/Person">
```

✅ Correct

```html
<div
    itemscope
    itemtype="https://schema.org/Person">
```

---

## Invalid Schema Type

❌ Wrong

```html
itemtype="Person"
```

✅ Correct

```html
itemtype="https://schema.org/Person"
```

---

## Using Incorrect Properties

❌ Wrong

```html
<span itemprop="username">
```

If the schema doesn't define `username`, search engines may ignore it.

Always use valid Schema.org properties.

---

# 🎯 Best Practices

✅ Use official Schema.org types

✅ Validate structured data before publishing

✅ Prefer JSON-LD for new projects

✅ Keep data accurate and up to date

✅ Use relevant schema types only

✅ Add structured data to important pages

---

# 🌐 Common Schema Types

| Website Type    | Recommended Schema |
| --------------- | ------------------ |
| Blog            | Article            |
| E-commerce      | Product            |
| Company Website | Organization       |
| Portfolio       | Person             |
| Event Website   | Event              |
| Food Blog       | Recipe             |
| Help Center     | FAQPage            |

---

# 🚀 Quick Summary

```text
Schema.org
      ↓
Defines Structured Data Types
      ↓
Microdata / JSON-LD
      ↓
Search Engines Understand Content
      ↓
Rich Search Results
```

### Microdata Example

```html
<div
    itemscope
    itemtype="https://schema.org/Product">

    <h2 itemprop="name">
        Laptop Pro X
    </h2>

</div>
```

### Main Attributes

```text
itemscope → Create item
itemtype  → Define type
itemprop  → Define property
```

💡 **Tip:** While HTML Microdata is still supported, modern websites typically use **JSON-LD** because it keeps HTML clean and is the preferred structured data format for major search engines. Understanding Microdata is still valuable because you'll encounter it in existing websites and legacy projects.
