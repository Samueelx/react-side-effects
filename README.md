# React fundamentals - Side Effects
The general purpose ("main effect") of a React Component function is to return some JSX so as React knows what to render.
We might also want to do some **side effects** as a result of rendering a component.

## Side Effects
Side effects might be useful for things like:

- Making a request to an API for data from a backend server.
- Interacting with the browser API (`document` and `window`).
- Using unpredictable timing functions like `setTimeout` and `setInterval`.
- Setting up a subscription.

Side effects are not predictable because they are actions that are performed with the "outside world". We perform side effects when we need to reach outside of our React Components to do something. This will not give us predictable results.

This is why **useEffect** exists - if we perform a side effect directly in our component body, it'll probably get in the way of our React components rendering.

## useEffect
In order to use side effects in our components, we use the **useEffect** Hook. To use this hook, we need to call `useEffect()` in our components.

The **Effect** hook allows you to perform side effects in function components.

### Basic Syntax
The basic syntax for useEffect is as follows: 

        function MyComponent() {
            // 1. Call it above the returned JSX
            // 2. Pass 2 arguments to it: a function and an array

            useEffect(() => {}, []);

            ...
        }

The function passed to `useEffect` is a callback function. After our component has been rendered, that's when the callback function in the `useEffect` function will run. We can perform our side effect(s).

The second argument is an array, called the *dependencies array*. We use this array to control when `useEffect` will run.

## Important things to note


## Author
[Samuel Gitimu](https://github.com/Samueelx)