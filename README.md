# React Learning Examples

This repository contains a collection of examples showcasing React, a popular JavaScript library for building user interfaces.

## Editor Setup for React Development

A properly configured editor can significantly enhance your coding experience when working with React. Here are some key recommendations for setting up VSCode:

### Setting Up VSCode

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
