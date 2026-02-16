# Mini Chat Web Application

A real-time chat application built with React and Firebase.

## Features

- User authentication (login, register, password reset)
- Real-time messaging
- User search functionality
- Chat history
- Responsive design

## Tech Stack

- **Frontend**: React, SCSS
- **Backend**: Firebase (Authentication & Realtime Database)
- **Build Tool**: npm

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project setup

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Mini-Chat-Web-Application
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase credentials in `src/firebase.js`

4. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Project Structure

- `src/pages/` - Page components (Login, Register, Home, etc.)
- `src/components/` - Reusable UI components (Chat, Messages, Input, etc.)
- `src/context/` - React Context for state management (Auth & Chat)
- `src/firebase.js` - Firebase configuration
- `public/` - Static files

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production

## Usage

1. Register a new account or login with existing credentials
2. Search for other users
3. Start chatting in real-time
4. View your chat history

## License

This project is open source and available under the MIT License.
