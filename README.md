# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Get Started](#get-started)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/benjithorpe/FEM-signup-form)
- Live Site URL: [live site URL here](https://fe-signupform.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Svelte](https://svelte.dev/) - JS framework

### What I learned

- Using dynamic class rules inside svelte

```html
<!-- # ... -->
<input ... ... class="{variable ? 'class1 class1' : 'false-class'} extra-css" />
<!-- # ... -->
```

- Using tailwindcss and prettier

## Author

<!-- - Website - [benjithorpe](https://www.your-site.com) -->

- Frontend Mentor - [@benjithorpe](https://www.frontendmentor.io/profile/benjithorpe)
- Twitter - [@benjithorpe](https://www.twitter.com/benjithorpe1)

## Acknowledgments

Thanks to the Svelte team and discord for answering all questions.

## Get started

```bash
git clone https://github.com/benjithorpe/FEM-signup-form

cd FEM-signup-form
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

or run the script below to compile and minify the tailwind css automatically

```bash
npx tailwindcss -i ./public/tailwind.css -o ./public/bundle.css --watch --minify
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
