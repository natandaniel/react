# React Learning Examples

This repository contains a collection of examples showcasing React, a popular JavaScript library for building user interfaces. Samples use the Next.js React framework and are created using `create-next-app@latest`.

## Setting Up VSCode

1. **Install VSCode**: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).

2. **Install ESLint**:

   - Open VSCode and go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
   - Search for "ESLint" and click "Install".
   - Create an `.eslintrc` file in your project root and configure it for React:
     ```json
     {
       "extends": ["eslint:recommended", "plugin:react/recommended"],
       "plugins": ["react-hooks"],
       "rules": {
         "react-hooks/rules-of-hooks": "error",
         "react-hooks/exhaustive-deps": "warn"
       }
     }
     ```

3. **Install Prettier**:
   - In the Extensions view, search for "Prettier - Code formatter" and click "Install".
   - Open your VSCode settings (`Ctrl+,`) and search for "Format On Save". Enable this option to automatically format your code on save.
   - Optionally, create a `.prettierrc` file in your project root to customize Prettier settings:
     ```json
     {
       "singleQuote": true,
       "trailingComma": "es5"
     }
     ```

For more detailed instructions, visit the [React Editor Setup Guide](https://react.dev/learn/editor-setup).

## React Developer Tools

React Developer Tools is a powerful tool for inspecting React components, editing props and state, and identifying performance issues.

### Installation

#### Browser Extension

The easiest way to debug websites built with React is to install the React Developer Tools browser extension. It is available for several popular browsers:

- **Chrome**
- **Firefox**
- **Edge**

Once installed, you will see the _Components_ and _Profiler_ panels when visiting a React website.

#### Safari and Other Browsers

For other browsers, such as Safari, you can install the `react-devtools` npm package:

```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Then, open the developer tools from the terminal:

```bash
react-devtools
```

Connect your website by adding the following `<script>` tag to the beginning of your website's `<head>`:

```html
<html>
  <head>
    <script src="http://localhost:8097"></script>
  </head>
</html>
```

Reload your website in the browser to view it in developer tools.

#### Mobile (React Native)

For React Native apps, use React Native DevTools, which integrates React Developer Tools. All features work identically to the browser extension, including native element highlighting and selection.

For more information, visit the [React Developer Tools Guide](https://react.dev/learn/react-developer-tools).
