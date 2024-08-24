# TS-Node-OpenAI-Express-API

A TypeScript-based Node.js API integrating OpenAI capabilities using Express.js.

## Prerequisites

- Node.js (version 20 or later recommended)
- npm
- OpenAI API key

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ts-node-openai-express-api.git
   cd ts-node-openai-express-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to a new file named `.env`
   - Replace the placeholder values in `.env` with your actual values:

     ```bash
     PORT=3000
     OPENAI_API_KEY=your_actual_openai_api_key
     ```

## Running the Project

- For development:

  ```bash
  npm run dev
  ```

- For production:

  ```bash
  npm run build
  npm start
  ```

## Project Structure

- `src/`: Contains the TypeScript source files
- `dist/`: Contains the compiled JavaScript files (created when you run `npm run build`)
- `package.json`: Defines npm behaviors and packages for the project
- `tsconfig.json`: Specifies the root files and the compiler options required to compile the project
- `.env`: Stores environment variables (not tracked by git)
- `.env.example`: Example environment variable file to show required variables

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
