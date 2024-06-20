# Getting Started with Todo-list

This project demonstrates a microfrontend (MFE) implementation of a Todo List application using React and TypeScript. The application supports adding, toggling, and filtering todo items, and persists them using 'localStorage'.

## Setup Intrusctions

1. Clone the repository

### `git clone`
### `cd todo-list`

2. Install dependencies

### `npm install`

3. Start the development server

### `npm start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. Test the project

### `npm test`

## Design Choices

- Microfrontend Architecture: Used Webpack Module Federation to enable the component to be integrated into different host applications.
- State Management: Leveraged React's built-in state management for simplicity.
- Persistence: Used a custom hook to manage localStorage interactions.
- TypeScript: Ensured type safety and maintainability.
- Testing: Included unit tests for core components and logic using @testing-library/react.