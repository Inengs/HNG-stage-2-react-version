# React Version (Vite)

## Frameworks and Libraries

- React (via Vite)
- react-router-dom
- formik, yup
- react-toastify
- uuid

## Setup and Execution

1. Navigate to `react-version`:
   cd react-version
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open `http://localhost:5173` in your browser.

## UI Components and State

- Components: `Landing`, `Login`, `Signup`, `Dashboard`, `Tickets`, `EditTicket`.
- State: Managed via React hooks (`useState`, `useEffect`) and localStorage for tickets/users.
- Routing: `react-router-dom` with protected routes checking `ticketapp_session`.

## Accessibility

- Semantic HTML, `alt` attributes for images, visible focus states (`:focus { outline: 2px solid blue; }`).
- ARIA labels for buttons.

## Test Credentials

- Username: testuser
- Password: password123

## Known Issues

- None
