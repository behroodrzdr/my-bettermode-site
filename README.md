# PostGallery Application

## Introduction
PostGallery is a React application designed to display collections of posts fetched dynamically via GraphQL. The application employs cutting-edge technologies like Apollo Client, TypeScript, Tailwind CSS, and `react-window` for virtualization. It demonstrates best practices in modern web development, including the use of custom hooks, efficient state management, and type safety.

---

## Features
- Fetch and display collections and posts dynamically using GraphQL.
- Virtualized lists for improved performance using `react-window`.
- Custom React hooks for reusable and modular data-fetching logic.
- Type-safe development using TypeScript.
- Styled with Tailwind CSS for a responsive and clean UI.
- State management with Apollo Client and caching strategies.

---

## Prerequisites

Before running the project, ensure the following:

- **Node.js**: Version 16.x or above.
- **npm or Yarn**: Preferred package manager installed.
- **GraphQL Endpoint**: A running GraphQL API.
- **Environment Variables**: A `.env` file with the following variables:
  ```plaintext
  REACT_APP_GRAPHQL_ENDPOINT=<Your GraphQL API URL>
  REACT_APP_GRAPHQL_TOKEN=<Your API Token>
  ```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/behroodrzdr/my-bettermode-site
   cd my-bettermode-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # Or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project and add the required variables (see "Prerequisites").

---

## Running the Application

1. **Start the Development Server**:
   ```bash
   npm run dev
   # Or
   yarn run dev
   ```

   The application will be available at `http://localhost:3000`.

2. **Build for Production**:
   ```bash
   npm run build
   # Or
   yarn build
   ```

   The production-ready files will be in the `build/` directory.

---

## Project Structure

Here is an overview of the main directories and files:

```
src/
├── components/        # Reusable UI components
│   ├── Card           # Displays individual posts
│   ├── Hero
│    |── Home
│   ├── Layout          # Layout components
│   └── Shared          # Shared component
├── hooks/             # Custom hooks for data fetching
│   ├── useCollection.ts
│   ├── UsePostByCollection.ts
├── graphql/           # GraphQL queries and mutations
│   ├── collection.ts
│   └── posts.ts
├── types/             # TypeScript type definitions
│   ├── collection.ts
│   └── posts.ts
├── App.tsx            # Root component
├── index.tsx          # Entry point
└── styles/            # Tailwind CSS styles
    ├── index.css
    └── tailwind.css
```

---

## Key Technologies

- **React**: A JavaScript library for building user interfaces.
- **Apollo Client**: A powerful GraphQL client for data-fetching and caching.
- **GraphQL**: A query language for APIs.
- **TypeScript**: Provides type safety for JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.

---

## Development Notes

### 1. Apollo Client Configuration
The GraphQL API endpoint and token are configured in `src/graphql/client.ts`. Ensure the endpoint matches your API.

### 2. Custom Hooks
- **`useCollection`**: Fetches all collections and their associated spaces.
- **`usePostByCollection`**: Fetches posts based on a collection ID.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For questions or feedback, feel free to reach out:
- **Email**: behroodrzdr@gmail.com

