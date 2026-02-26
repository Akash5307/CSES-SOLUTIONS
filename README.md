# CSES Solutions Viewer

A React web app for browsing C++ solutions to the [CSES Problem Set](https://cses.fi/problemset/).

## Adding a New Solution

### Step 1 — Write the `.cpp` file

Place the solution in the matching category folder under `src/solutions/`:

```
src/solutions/
  introductory-problems/
  sorting-and-searching/
  dynamic-programming/
  (add more folders for new categories)
```

Name the file using the problem slug, e.g. `number-spiral.cpp`.

### Step 2 — Register it in `src/data/csesSolutions.ts`

**a) Import the file at the top (Vite loads it as a string via `?raw`):**

```ts
import numberSpiral from '../solutions/introductory-problems/number-spiral.cpp?raw';
```

**b) Add an entry to the appropriate category's `problems` array:**

```ts
{
  id: 'number-spiral',
  title: 'Number Spiral',
  csesLink: 'https://cses.fi/problemset/task/1071',
  difficulty: 'Easy',   // 'Easy' | 'Medium' | 'Hard' | 'Varies'
  cppCode: numberSpiral,
  notes: 'Optional: brief explanation of the approach.',
},
```

That's it — the sidebar and solution view update automatically.

---

### Adding a New Category

Add a new object to the `csesProblemSet` array in `csesSolutions.ts`:

```ts
{
  name: 'Graph Algorithms',
  problems: [
    // entries go here
  ],
},
```

Also create the matching folder `src/solutions/graph-algorithms/` for the `.cpp` files.

---

## Development

```bash
npm install
npm run dev
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- highlight.js (C++ syntax highlighting)
