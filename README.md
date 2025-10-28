# TicketFlow - React Implementation

A modern ticket management web application built with React, Vite, and Tailwind CSS.

# Live URL

https://hng-stage-2-react-version.vercel.app/

## Features

- 🎨 Modern UI with wavy hero section and decorative elements
- 🔐 Secure authentication system with protected routes
- 📊 Dashboard with ticket statistics
- ✅ Full CRUD operations for ticket management
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Form validation with inline error messages
- 🔔 Toast notifications for user feedback
- ♿ Accessibility compliant

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage** - Data persistence

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation & Setup

1. **Clone the repository**

```bash
   git clone <your-repo-url>
   cd ticket-app-react
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start development server**

```bash
   npm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (SVG wave)
├── components/      # Reusable components
│   ├── Layout.jsx
│   ├── ProtectedRoute.jsx
│   ├── Toast.jsx
│   └── TicketCard.jsx
├── pages/           # Page components
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   └── TicketManagement.jsx
├── utils/           # Utility functions
│   ├── auth.js
│   └── storage.js
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## UI Components

### Landing Page

- Hero section with wavy SVG background
- Decorative circular elements
- Feature boxes with shadows and rounded corners
- Call-to-action buttons for Login and Signup
- Responsive grid layout

### Authentication

- Login and Signup forms with validation
- Real-time error messages
- Toast notifications for success/failure
- Password confirmation on signup

### Dashboard

- Ticket statistics cards (Total, Open, In Progress, Closed)
- Color-coded status indicators
- Quick action buttons
- Logout functionality

### Ticket Management

- Create new tickets with form validation
- View all tickets in card layout
- Edit existing tickets
- Delete tickets with confirmation
- Status badges with color coding:
  - **Green**: Open tickets
  - **Amber**: In Progress tickets
  - **Gray**: Closed tickets

## Data Validation Rules

### Mandatory Fields

- **Title**: Required, cannot be empty
- **Status**: Required, must be one of: `open`, `in_progress`, `closed`

### Optional Fields

- **Description**: Max 500 characters
- **Priority**: Low, Medium, or High

## Authentication System

### Session Management

- Uses `localStorage` with key: `ticketapp_session`
- Token-based authentication (mock)
- Protected routes redirect to login if unauthorized

### Test Credentials

Any email and password combination will work for testing purposes:

- **Email**: test@example.com
- **Password**: password123

## Error Handling

The app handles the following error scenarios:

1. **Form Validation Errors**

   - Empty required fields
   - Invalid email format
   - Password mismatch
   - Invalid status values

2. **Authentication Errors**

   - Invalid credentials
   - Expired sessions
   - Unauthorized access attempts

3. **CRUD Operation Errors**
   - Failed to create ticket
   - Failed to update ticket
   - Failed to delete ticket

All errors display user-friendly messages via:

- Inline error messages (below form fields)
- Toast notifications (top-right corner)

## Accessibility Features

- Semantic HTML elements
- Proper heading hierarchy
- Focus states for interactive elements
- Color contrast compliance
- Alt text for images
- Keyboard navigation support

## Responsive Design

- **Mobile** (< 768px): Stacked layout, hamburger menu
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (> 1024px): 3-column grid, max-width 1440px

## Known Issues

None at this time.
