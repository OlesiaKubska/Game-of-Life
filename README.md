# 🎮 Game of Life - React + Vite Template

This project is a React implementation of Conway's Game of Life built with Vite, showcasing modern React features like hooks and the `useReducer` API for state management. The project utilizes `styled-components` for the UI and demonstrates the capabilities of React within a Vite environment for fast development and hot module replacement (HMR).

## 🚀 Features

- **Dynamic Board Generation**: The board's initial state is randomly generated, with each cell's live status determined at the start.
- **Interactive Gameplay**: Users can start, stop, and clear the game as needed. Cells can be toggled by clicking, allowing users to configure the initial state before starting the simulation.
- **Automated Game Updates**: The game board updates based on Conway's Game of Life rules using a timed interval when the game is running.
- **Styled Components**: Utilizes styled-components for CSS-in-JS styling, providing a clean and maintainable way to handle styles based on component state.

## 📂 Project Structure

- `GameOfLife.jsx`: Main React component handling the game logic and UI.
- `gameOfLifeReducer.js`: Reducer function for managing the state transitions of the game board based on dispatched actions.
- `GameOfMeal.styled.js`: Styled components for the Game of Life UI, defining the styling for the board, cells, and controls.

## 🛠 Getting Started

### Prerequisites

Ensure you have Node.js installed (preferably the latest LTS version). You can check your Node.js version using `node -v` in your terminal.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://your-repository-url.git
   cd game-of-life-vite
   ```
2. **Install dependencies:**
    ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000. Open this URL in your browser to view and interact with the Game of Life.

## Usage

- 🚀`Start the game:` Click the 'Start' button to begin the simulation.
- ⏸️`Stop the game:` Click the 'Stop' button to pause the simulation.
- 🔄`Clear the board:` Click the 'Clear' button to reset the board to a random initial state.
- 🖱️`Toggle cells:` Click on individual cells to toggle them between alive and dead states before starting or after stopping the simulation.

## 🤝 Contributing

Contributions to enhance the functionality or documentation are welcome. Please ensure to update tests as appropriate.
   
