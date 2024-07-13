# Vitest TypeScript Example

This is an example project demonstrating how to use Vite with Vitest for unit testing in TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MYusron12/vitest-typescript.git
   cd vitest-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

### Running Tests

To run the unit tests using Vitest, run:

```bash
npm run test
```

## Project Structure

```
.
├── public
│   └── ...
├── src
│   ├── assets
│   │   └── ...
│   ├── basicUtils.ts      # Example source file with basic functions
│   ├── basicUtils.test.ts # Example test file for basicUtils.ts
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

### `src/basicUtils.ts`

This file contains basic functions to be tested.

```typescript
export function add(a: number, b: number): number {
  return a + b;
}

export function contains(str: string, substr: string): boolean {
  return str.includes(substr);
}
```

### `src/basicUtils.test.ts`

This file contains unit tests for the functions in `basicUtils.ts`.

```typescript
import { describe, it, expect } from "vitest";
import { add, contains } from "./basicUtils";

describe("Basic Utility functions", () => {
  it("adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
    expect(add(100, 200)).toBe(300);
  });

  it("checks if a string contains a substring", () => {
    expect(contains("hello world", "world")).toBe(true);
    expect(contains("hello world", "planet")).toBe(false);
    expect(contains("typescript", "script")).toBe(true);
    expect(contains("vitest", "test")).toBe(true);
    expect(contains("vitest", "jest")).toBe(false);
  });
});
```

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run test`: Runs the unit tests using Vitest.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```

```
