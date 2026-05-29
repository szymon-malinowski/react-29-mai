# Individual Learning Phase: State and Conditional Rendering in a Mini-Shop App

## Your Goal

You will build a small, interactive product card for an online shop using React 19. You will work with `useState`, purposefully change state, observe re-rendering, and use conditional rendering to show or hide content based on the current state. Additionally, you will cleanly separate props and state.

## What you need

- A running React 19 development environment, e.g., with Vite
- An editor like VS Code
- A browser with DevTools
- Basic knowledge of JSX and functional components
- Optional: Browser console to make re-rendering visible

## Time Planning

- 10 minutes: Create project or prepare existing React project
- 15 minutes: Task 1
- 20 minutes: Task 2
- 20 minutes: Task 3
- 20 minutes: Task 4
- 15 minutes: Task 5
- 20 minutes: Extension tasks or reflection

## Basic Tasks

### Task 1:

Create Product Card as starting point
**Goal:** You lay out the basic structure of the app and work with Props for the first time.
**Assignment:** Create a small shop app with an `App` component and a `ProductCard` component. In `App`, create a product object, e.g., with `name`, `price`, `category`, `description`, and `initialStock`. Pass these values as props to `ProductCard`. In the product card, display at least the product name, price, category, and a short description text.
**Expected Result / Target State:** You see a static product card in the browser. The data comes from `App` via props to `ProductCard`.

### Task 2:

Implement interaction with `useState`
**Goal:** You use local state to control interactive content.
**Assignment:** Add two state values with `useState` in `ProductCard`:
- `quantity` for the order quantity, initial value `0`
- `isFavorite` for the favorite status, initial value `false`

Build suitable buttons:
- `+` increases the quantity by 1
- `-` decreases the quantity by 1, but never below 0
- a button or icon toggles the favorite status

Display the current value of `quantity` and the current favorite status visibly in the UI. Additionally, add a `console.log` in the component so you can observe the re-rendering with every state change.
**Expected Result / Target State:** You can change quantity and favorite status. After each click, the display updates immediately, and you can recognize the re-rendering in the console.

### Task 3:

Control stock and order logic via State
**Goal:** You change state purposefully and link multiple states together.
**Assignment:** Add another state value `stock`, which starts with `initialStock`. Adjust the logic:
- When you increase the quantity, the stock should decrease by 1
- If no stock is available, the quantity must not be increased further
- When you decrease the quantity, you can decide whether the stock is increased again or not; but then consistently stick to your logic
- Add a `Reset` button that resets quantity, favorite status, and stock to their initial state

Display stock and quantity clearly separated.
**Expected Result / Target State:** Your product card reacts logically to user input. Quantity and stock remain consistent, and you can restore the initial state.

### Task 4:

Implement conditional rendering for status messages
**Goal:** You use `if / else`, the Ternary Operator, and `&&` to display content based on state.
**Assignment:** Add several conditional displays to your product card:
- Use a Ternary Operator to show either `In Stock` or `Sold Out`
- Use `&&` to show a warning like `Only a few items left`, if the stock is low, e.g., when `stock <= 3`
- Hide or disable the order buttons if `stock === 0`
- Show a hint like `You have marked this product as a favorite`, but only if `isFavorite === true`
- Additionally, consciously use a classic `if / else` once, e.g., for a text variable or for selecting a status color

**Expected Result / Target State:** The UI visibly adapts to the current state. Depending on stock, quantity, and favorite status, different content is shown or hidden.

### Task 5:

Cleanly separate Props and State
**Goal:** You recognize the difference between Props and State in a small component structure.
**Assignment:** Further divide your app:
- Create a `StockStatus` component that only displays the stock status
- Create an `OrderSummary` component that displays quantity and total sum
- Pass the required values as props to these components
- Keep the actual state in `ProductCard`

Add a calculated output in `OrderSummary` like `Total Price: quantity * price`. Ensure that subordinate components do not create their own copies of the same data as state if props are sufficient.
**Expected Result / Target State:** Your app consists of multiple components. Product data comes as props from above, local interactive state resides in `ProductCard`, and child components display the values via props.

## Extension Tasks

### Extension Task 1: Multiple Products with Independent States

**Goal:** You transfer your concept to multiple instances of the same component.
**Assignment:** In `App`, create an array with at least two products and render multiple `ProductCard` components using `map()`. Ensure that each product card manages its own state for quantity, favorite, and stock.
**Expected Result / Target State:** You see multiple product cards. Interactions in one card do not affect the other cards.

### Extension Task 2: Show and Hide Detail Area

**Goal:** You control visible UI areas via state.
**Assignment:** Add a `showDetails` state in `ProductCard`. Build a button `Show Details` / `Hide Details`. When the detail area is active, display additional information such as description, category, or shipping notice. Use conditional rendering for this.
**Expected Result / Target State:** You can purposefully show and hide the detail area. The button text adapts to the current state.

### Extension Task 3: Control Admin Mode from the App

**Goal:** You combine state in the parent component with conditional rendering in child components.
**Assignment:** In `App`, create an `adminMode` state. Toggle it with a button. Pass `adminMode` as a prop to `ProductCard`. In the product card, display additional admin elements only when `adminMode` is active, e.g., a button to restock or a technical status display.
**Expected Result / Target State:** You control parts of the UI from the parent component. The child component reacts to props and displays admin functions only when needed.

## Important Notes

- Work step-by-step and test in the browser after every small change.
- Use descriptive state names like `quantity`, `stock`, `isFavorite`, and `showDetails`.
- Never change state directly, but always via the setter functions of `useState`.
- Pay attention to whether data comes from outside or is changed within the component itself:
  - Props come from outside
  - State belongs to the component itself
- Use the browser console to consciously observe re-rendering.
- If your UI becomes cluttered, break it down into smaller components.
- Check if certain actions should be blocked in a specific state, e.g., when stock is empty.

## Reflection Questions

- Which data in your app are Props, and which are State?
- Where did you observe re-rendering particularly clearly?
- Which elements of your UI are conditionally rendered and why?
- When was `&&` practical, when was the Ternary Operator more suitable?
- Why should `StockStatus` receive data via Props instead of creating its own state for it?
- Which state change had visible effects on multiple parts of the UI?

---