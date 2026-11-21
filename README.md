# Chef Claude

An AI-powered recipe assistant that turns the ingredients you already have into practical recipe suggestions.

## Overview

Chef Claude helps users decide what to cook by generating recipes based on their available ingredients. Add at least four ingredients, submit your list, and receive a recipe generated using Google's Gemini API.

## Features

- **Ingredient management** – Add and remove ingredients from your list.
- **Minimum ingredient requirement** – Recipe generation becomes available after adding at least four ingredients.
- **AI recipe generation** – Uses Google Gemini to suggest recipes based on the submitted ingredients. The model may also include a few common additional ingredients.
- **Markdown rendering** – Displays generated recipes with formatted headings, lists, and other Markdown elements.
- **Loading and error states** – Provides feedback while generating recipes and when a request fails.
- **Automatic scrolling** – Moves to the loading indicator and generated recipe when appropriate.
- **Responsive interface** – Adapts to desktop and mobile screen sizes.

## Tech Stack

| Area           | Technology                          |
| -------------- | ----------------------------------- |
| Frontend       | React 19, Vite 8                    |
| Styling        | CSS                                 |
| Markdown       | React Markdown                      |
| Backend        | Node.js, Express 5                  |
| AI Integration | Google Gemini API (`@google/genai`) |
| Configuration  | dotenv                              |

## Project Structure

```text
chef-claude/
├── public/
│   ├── favicon files
│   └── site.webmanifest
├── server/
│   ├── ai.js
│   └── index.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ClaudeRecipe.jsx
│   │   ├── Header.jsx
│   │   ├── IngredientsList.jsx
│   │   └── Main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm
- Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

Clone the repository:

```bash
git clone https://github.com/weimodein/chef-claude.git
cd chef-claude
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Keep your API key on the server side. Do not expose it through frontend environment variables or commit your `.env` file.

### Running the Application

The frontend and backend run in separate terminals.

**Terminal 1 – Frontend**

```bash
npm run dev
```

**Terminal 2 – Backend**

```bash
npm run server
```

The Vite development server proxies `/api` requests to the Express server at `http://localhost:3001`.

Open the local URL provided by Vite in your browser.

## Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Starts the Vite development server. |
| `npm run server`  | Starts the Express API server.      |
| `npm run build`   | Builds the frontend for production. |
| `npm run preview` | Previews the production build.      |
| `npm run lint`    | Runs ESLint.                        |

## How It Works

1. The user enters ingredients through the ingredient form.
2. Ingredients are stored in React state and displayed as removable items.
3. Once at least four ingredients have been added, the recipe generation button becomes available.
4. The frontend sends the ingredient list to the Express API through a POST request to `/api/recipe`.
5. The backend passes the ingredients to the Google Gemini API.
6. Gemini generates a recipe in Markdown format.
7. The frontend receives the response and renders it using React Markdown.

## API Endpoint

### `POST /api/recipe`

Generates a recipe using the submitted ingredients.

**Request body:**

```json
{
  "ingredients": ["chicken", "garlic", "onion", "soy sauce"]
}
```

**Successful response:**

```json
{
  "recipe": "# Chicken Adobo\n..."
}
```

**Error response:**

```json
{
  "error": "Add at least one ingredient."
}
```

The API returns HTTP `400` when the ingredient list is missing, empty, or invalid, and HTTP `500` when recipe generation fails.

## License

No license has been specified yet.

---

**Repository:** [weimodein/chef-claude](https://github.com/weimodein/chef-claude)
