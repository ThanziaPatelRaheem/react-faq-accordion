export const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer: "A component is a reusable piece of UI in a React application.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside your JavaScript files.",
  },
  {
    id: 4,
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from parent to child components, while state is used to manage the internal data of a component.",
  },
  {
    id: 5,
    question: "What is a controlled component?",
    answer:
      "A controlled component is a form element that is controlled by React state, ensuring the UI always reflects the current state.",
  },
  {
    id: 6,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight representation of the real DOM that React uses to improve performance by minimizing direct DOM manipulations.",
  },
  {
    id: 7,
    question: "What is a functional component?",
    answer:
      "A functional component is a React component defined as a JavaScript function that returns JSX.",
  },
  {
    id: 8,
    question: "What is a class component?",
    answer:
      "A class component is a React component defined using ES6 classes and includes lifecycle methods.",
  },
  {
    id: 9,
    question: "What is prop drilling?",
    answer:
      "Prop drilling is the process of passing props through multiple levels of components to reach a deeply nested component.",
  },
  {
    id: 10,
    question: "What is a higher-order component (HOC)?",
    answer:
      "A higher-order component is a function that takes a component and returns a new component, allowing you to reuse component logic.",
  },
  {
    id: 11,
    question: "What is a React fragment?",
    answer:
      "A React fragment is a wrapper component that allows you to group multiple elements without adding an extra node to the DOM.",
  },
  {
    id: 12,
    question: "What is context in React?",
    answer:
      "Context is a way to pass data through the component tree without having to pass props down manually at every level.",
  },
  {
    id: 13,
    question: "What is a React hook?",
    answer:
      "A React hook is a special function that lets you use state and other React features in functional components.",
  },
  {
    id: 14,
    question: "What is the useState hook?",
    answer:
      "The useState hook is a built-in hook that allows you to add state to functional components.",
  },
  {
    id: 15,
    question: "What is the useEffect hook?",
    answer:
      "The useEffect hook is used to perform side effects in function components, like fetching data or updating the DOM.",
  },
  {
    id: 16,
    question: "What is a custom hook?",
    answer:
      "A custom hook is a reusable function in React that allows you to extract and share logic between components.",
  },
  {
    id: 17,
    question: "What is a render prop?",
    answer:
      "A render prop is a function prop used to share code between React components by allowing them to decide what to render.",
  },
  {
    id: 18,
    question: "What is memoization in React?",
    answer:
      "Memoization is a technique used to optimize performance by caching the result of expensive calculations and reusing them when inputs haven't changed.",
  },
  {
    id: 19,
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that prevents unnecessary re-renders by memoizing a component's output.",
  },
  {
    id: 20,
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "Server-side rendering is the process of rendering a React application on the server before sending the HTML to the client, improving performance and SEO.",
  },
  {
    id: 21,
    question: "What is lazy loading in React?",
    answer:
      "Lazy loading is a technique used to load components or resources only when they are needed, improving initial load times.",
  },
  {
    id: 22,
    question: "What is hydration in React?",
    answer:
      "Hydration is the process of React attaching event listeners to the static HTML that was pre-rendered by the server.",
  },
  {
    id: 23,
    question: "What is reconciliation in React?",
    answer:
      "Reconciliation is the process by which React updates the DOM to match the Virtual DOM when the component state or props change.",
  },
  {
    id: 24,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useEffect runs asynchronously after the browser has painted, while useLayoutEffect runs synchronously before the browser paints.",
  },
  {
    id: 25,
    question: "What is the purpose of the key prop in React?",
    answer:
      "The key prop is used to uniquely identify elements in a list to help React efficiently update and reorder them.",
  },
  {
    id: 26,
    question: "What is the difference between useState and useRef?",
    answer:
      "useState triggers a re-render when its value changes, while useRef provides a persistent, mutable reference that does not trigger re-renders.",
  },
  {
    id: 27,
    question: "What is the difference between useEffect and useMemo?",
    answer:
      "useEffect is used for side effects, while useMemo is used to memoize expensive calculations and avoid unnecessary recalculations.",
  },
  {
    id: 28,
    question:
      "What is the difference between class components and function components?",
    answer:
      "Class components use ES6 classes and lifecycle methods, while function components use hooks for state and side effects.",
  },
  {
    id: 29,
    question: "What is the difference between React and React Native?",
    answer:
      "React is a JavaScript library for building web user interfaces, while React Native is a framework for building mobile applications using React.",
  },
  {
    id: 30,
    question: "What is the purpose of React.PureComponent?",
    answer:
      "React.PureComponent is a base class that performs a shallow comparison of props and state to optimize component updates.",
  },
  {
    id: 31,
    question: "What is the purpose of React.forwardRef?",
    answer:
      "React.forwardRef is a method that lets you pass a ref through a component to a child component for direct DOM access.",
  },
  {
    id: 32,
    question: "What is the difference between React keys and refs?",
    answer:
      "Keys are used to uniquely identify elements in a list, while refs provide a way to directly access DOM elements or component instances.",
  },
  {
    id: 33,
    question: "What is a React portal?",
    answer:
      "A React portal allows you to render a component outside of its parent component's DOM hierarchy.",
  },
  {
    id: 34,
    question: "What is the difference between useCallback and useMemo?",
    answer:
      "useCallback returns a memoized callback function, while useMemo returns a memoized value.",
  },
  {
    id: 35,
    question: "What is the purpose of the React Profiler?",
    answer:
      "The React Profiler is a tool that helps you measure the performance of your components by recording render times and identifying slow components.",
  },
];
