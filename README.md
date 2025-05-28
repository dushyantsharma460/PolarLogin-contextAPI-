# Polar Bear Themed React Login App

A simple React app with user login and profile display, styled with a Polar Bear Arctic theme using Tailwind CSS.

---

## Features
- User login form with validation (username & password required)
- UserContext for state management
- Profile displays logged-in username
- Tailwind CSS with icy blue gradients and frosty style
- Responsive and clean UI
- Submit button disabled until inputs valid

---

## Installation
```bash
git clone https://github.com/dushyantsharma460/PolarLogin-contextAPI-
cd PolarLogin-contextAPI-
npm install
npm start
Open http://localhost:3000

Folder Structure
pgsql
Copy
Edit
src/
├── component/
│   ├── Login.jsx
│   ├── Profile.jsx
├── context/
│   ├── UserContext.js
│   ├── UserContextProvider.jsx
├── App.jsx
├── index.js
└── App.css
How to Use
Enter username & password

Submit enabled only if both fields are non-empty

After submit, profile welcomes user

Otherwise, prompts to login

Customize
Change polar bear image URL in App.jsx

Modify Tailwind classes for theme tweaks

Extend context for logout/auth features

License
MIT