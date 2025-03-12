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

## React Concepts Summary

This section provides a brief overview of essential React concepts:

1. **Creating and Nesting Components**:

   - Components are the building blocks of React apps. They are JavaScript functions that return JSX.

   ```jsx
   function MyButton() {
     return <button>I'm a button</button>;
   }

   export default function MyApp() {
     return (
       <div>
         <h1>Welcome to my app</h1>
         <MyButton />
       </div>
     );
   }
   ```

2. **Writing Markup with JSX**:

   - JSX allows you to write HTML-like syntax in JavaScript. It requires closing tags and a single parent element.

   ```jsx
   function AboutPage() {
     return (
       <>
         <h1>About</h1>
         <p>
           Hello there.
           <br />
           How do you do?
         </p>
       </>
     );
   }
   ```

3. **Adding Styles**:

   - Use `className` for CSS classes and style objects for inline styles.

   ```jsx
   <img className="avatar" style={{ borderRadius: "50%" }} />
   ```

4. **Displaying Data**:

   - Embed JavaScript expressions in JSX using curly braces.

   ```jsx
   const user = {
     name: "Hedy Lamarr",
     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
   };
   return <h1>{user.name}</h1>;
   ```

5. **Conditional Rendering**:

   - Use JavaScript logic for conditional rendering.

   ```jsx
   return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
   ```

6. **Rendering Lists**:

   - Use `map()` to render lists and assign a unique `key` to each item.

   ```jsx
   const products = [
     { title: "Cabbage", id: 1 },
     { title: "Garlic", id: 2 },
   ];
   return (
     <ul>
       {products.map((product) => (
         <li key={product.id}>{product.title}</li>
       ))}
     </ul>
   );
   ```

7. **Using Hooks**:

   - Hooks like `useState` allow you to add state to functional components.

   ```jsx
   const [count, setCount] = useState(0);
   ```

8. **Sharing Data Between Components**:
   - Lift state up to share it between components.
   ```jsx
   function MyApp() {
     const [count, setCount] = useState(0);
     return <MyButton count={count} onClick={() => setCount(count + 1)} />;
   }
   ```

For more detailed explanations, visit the [React Learning Guide](https://react.dev/learn).
