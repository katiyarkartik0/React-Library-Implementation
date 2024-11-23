# **MyReact Implementation**

A custom React-like library built from scratch to understand the core concepts of rendering, state management, and event handling in a functional component architecture. This project demonstrates how to create a minimal React-like framework using modern JavaScript and tools like Babel and Webpack.

---

## **Table of Contents**
1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
3. [Project Structure](#project-structure)
4. [Key Concepts](#key-concepts)
   - [Rendering](#rendering)
   - [JSX and `createElement`](#jsx-and-createelement)
   - [State Management](#state-management)
5. [Tools and Configurations](#tools-and-configurations)
   - [Babel](#babel)
   - [Webpack](#webpack)
6. [Future Enhancements](#future-enhancements)
7. [License](#license)

---

## **Features**
- Lightweight implementation of a React-like library.
- Custom `useState` hook for state management.
- Support for JSX syntax with a custom pragma.
- Simple event handling (e.g., `onClick`).
- Component-based architecture with support for functional components.

---

## **Getting Started**

### **Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn package manager

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/myreact-implementation.git
   cd myreact-implementation

## **Core Implementation Details**

This section describes the core functionalities of the custom `MyReact` library, including rendering, JSX transformation, and state management.



### **1. Rendering (`render.js`)**
The `render` function is responsible for creating real DOM elements from virtual DOM objects and attaching them to the DOM.

- **Key Features:**
  - **Handling Functional Components**: If the `type` of an element is a function, the `render` function executes the function to get the component’s output and recursively renders it.
  - **Event Listener Attachment**: Supports basic event handling by attaching events like `onClick` directly to DOM elements.
  - **Recursive Rendering**: Handles nested children by recursively rendering each child element.

- **Key Methods:**
  - `emptyRootElement(container)`: Clears the root container before rendering.
  - `isContainerRoot(container)`: Ensures rendering is limited to the root container.
  - `attachEventListener(dom, event, callback)`: Attaches event listeners (e.g., `onClick`) to DOM elements.


### **2. JSX and `createElement` (`createElement.js`)**
JSX syntax is transformed into JavaScript objects that represent the virtual DOM. 

- **How It Works:**
  - The `createElement` function returns an object with the following structure:
    ```javascript
    {
      type: "div",           // HTML tag or a component
      props: {               // Element properties
        children: [],        // Nested children
        onClick: callback,   // Event listeners
      },
    }
    ```
  - `children` can be nested elements, arrays, or text nodes. If a child is plain text, it’s wrapped as a `TEXT_ELEMENT` using `createTextElement`.

- **Example:**
  ```jsx
  <button onClick={handleClick}>Click Me</button>


### **3. State Management (`useState.js`)**
The `useState` hook is a minimal implementation of React’s `useState`, enabling stateful components and re-rendering on state updates.

#### **How It Works**
1. **Global State Management**:
   - `globalState`: An array to store all state values across components.
   - `stateCurrentAddress`: A pointer to track the current state index for each hook call during rendering.

2. **Initialization**:
   - On the first call, `globalState[index]` is undefined, so the `initialValue` is used.
   - `useState` returns the current state and a `setState` function.

3. **State Updates**:
   - `setState` updates the value in `globalState` and triggers a re-render of the entire app.

4. **State Indexing**:
   - The `stateCurrentAddress` ensures each component’s state is stored and retrieved in the correct order across renders.

#### **Example**
```javascript
const [count, setCount] = MyReact.useState(0);
const increment = () => setCount(count + 1);

return (
  <div>
    <button onClick={increment}>Increment</button>
    <span>{count}</span>
  </div>
);
```

### **Custom JSX Pragma**

A custom JSX pragma enables JSX syntax to work seamlessly with the custom `MyReact` library by mapping JSX code to `MyReact.createElement`.

#### **Why Use a Custom JSX Pragma?**
JSX, by default, is transformed into calls to `React.createElement`. Since this project uses a custom React-like library (`MyReact`), we need Babel to map JSX to `MyReact.createElement` instead.

The custom pragma achieves this by explicitly instructing Babel to use `MyReact.createElement`.


#### **How to Add the Pragma**
Include the following directive at the top of every file containing JSX:
```javascript
/* @jsx MyReact.createElement */
```
