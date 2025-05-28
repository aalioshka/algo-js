# Project structure

```bash
src/
│
├── api/
│   └── swapi.ts              # Axios config and fetchers for SWAPI
│
├── hooks/
│   └── usePeopleSearch.ts    # React Query hook for character search
│
├── components/
│   ├── CharacterCard.tsx     # UI for showing a single character
│   └── SearchForm.tsx        # Search input form
│
├── pages/
│   └── HomePage.tsx          # Main page rendering search + results
│
├── App.tsx                   # QueryClientProvider and routing
└── main.tsx                  # Entry point (Vite/CRA)

```