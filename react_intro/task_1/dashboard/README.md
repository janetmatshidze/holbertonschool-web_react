# React Dashboard

This project is a React application built using Vite.

## Task 1: Embedding expressions, functions

This task introduces embedding JavaScript expressions and functions inside React components.

### Features implemented

* Created utility functions in `src/utils.js`:

  * `getCurrentYear()` returns the current year.
  * `getFooterCopy(isIndex)` returns:

    * `Holberton School` when `isIndex` is true.
    * `Holberton School main dashboard` when `isIndex` is false.

* Updated `App.jsx`:

  * Uses `getCurrentYear()` and `getFooterCopy()` in the footer.
  * Renders the `Notifications` component as a child component.

* Created `Notifications.jsx`:

  * Contains a notifications component.
  * Displays the notification message:

    * "Here is the list of notifications"

* Created `Notifications.css`:

  * Adds styling for the notifications section.

## Running the project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Project structure

```
dashboard/
├── src/
│   ├── App.jsx
│   ├── Notifications.jsx
│   ├── Notifications.css
│   └── utils.js
├── public/
├── package.json
└── README.md
```
