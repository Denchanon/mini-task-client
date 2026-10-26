# Mini Task Tracker (Client)

A small task tracker web app built with **React** and **Vite**. You can add tasks, mark them as done, and delete them.
It talks to a REST API in [mini-task-server](https://github.com/Denchanon/mini-task-server).

## Features
- Load the task list from the API on startup
- Add a new task
- Toggle a task between done and not done (the ✓ button turns green when done)
- Delete a task

## Tech stack
React 19 · Vite · Fetch API · ESLint

## Getting started
1. Start the [mini-task-server](https://github.com/Denchanon/mini-task-server) backend first.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root that points to the API:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
