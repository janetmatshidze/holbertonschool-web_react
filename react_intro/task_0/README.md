# Holberton School Dashboard

This project is a basic React application created using Vite.

## Task 0: Basic application

The goal of this task was to create the initial structure of the Holberton School dashboard application using React and Vite.

## Features implemented

* Created a React application named `dashboard` using Vite.

* Added required images:

  * Holberton logo in `src/assets`
  * Close button image in `src/assets`
  * Favicon in `public`

* Updated `index.html`:

  * Changed the document title to:

    ```
    Holberton - School dashboard
    ```
  * Updated the favicon to use the Holberton logo.

* Removed unused files:

  * `index.css`
  * `public/vite.svg`
  * `src/assets/react.svg`

## React Components

Created the main `App` component in:

```
src/App.jsx
```

The component contains:

### Header

A `div` with the class:

```
App-header
```

Includes:

* Holberton logo image with alt text:

  ```
  holberton logo
  ```
* Heading:

  ```
  School dashboard
  ```

### Body

A `div` with the class:

```
App-body
```

Contains:

```
Login to access the full dashboard
```

### Footer

A `div` with the class:

```
App-footer
```

Displays:

```
Copyright {current year} - holberton School
```

## Testing setup

Configured Jest and testing dependencies:

* Babel configuration
* Jest environment
* React Testing Library
* User event testing utilities

Added required configuration files:

```
setupTests.js
.babelrc
fileTransformer.js
```

## Running the application

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project structure

```
dashboard/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── holberton-logo.jpg
│   │   └── close-button.png
│   ├── App.jsx
│   └── index.jsx
├── .babelrc
├── fileTransformer.js
├── setupTests.js
├── package.json
└── README.md
```


