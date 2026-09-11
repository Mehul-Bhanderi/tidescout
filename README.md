# Tide Data Application

This project is a React application that fetches and displays tide data using the World Tides API. It provides various components to visualize tide information, including charts and insights based on the data.

## Project Structure

- **src/**: Contains the main application code.
  - **App.tsx**: Main application component that sets up routing.
  - **index.css**: Global styles for the application.
  - **main.tsx**: Entry point for the React application.
  - **vite-env.d.ts**: TypeScript definitions for Vite environment variables.
  - **components/**: Contains reusable components.
    - **ActivityRecommendations.tsx**: Displays activity recommendations based on tide data.
    - **Header.tsx**: Header component for the application.
    - **LoadingSpinner.tsx**: Loading spinner component for loading states.
    - **LocationStatus.tsx**: Displays the current status of the selected location.
    - **TideChart.tsx**: Visualizes tide heights in a chart format.
    - **TideInfo.tsx**: Displays detailed tide information.
    - **TideInsights.tsx**: Provides insights based on tide data.
  - **hooks/**: Contains custom hooks.
    - **useLocation.ts**: Manages location state.
    - **useTideData.ts**: Fetches and processes tide data using an API key.
  - **routes/**: Contains API routes.
    - **api.ts**: Allows updating the API key used in the `useTideData` hook.
  - **types/**: Contains TypeScript types and interfaces.
    - **index.ts**: Type definitions used throughout the application.
  - **utils/**: Contains utility functions.
    - **activityRecommendations.ts**: Functions for generating activity recommendations.
    - **timeUtils.ts**: Functions for handling time-related operations.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd tide-data-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

## API Key Configuration

You can set the API key used in the application by making a request to the `/api` route. This allows you to update the API key dynamically without modifying the source code directly.

## License

This project is licensed under the MIT License.