🚀 Technologies Used
• 	React: Component-based UI architecture
• 	Context API + useReducer: Global state management for hero data and loading/error states
• 	SuperHero API: External RESTful API for character data
• 	Vite: Fast build tool for modern React apps
• 	Netlify: Deployment platform with Git integration
• 	CSS (Global): Comic-style layout and typography using  font and dramatic accents

🧠 Approach
This app was built with modularity, clarity, and storytelling in mind:
• 	Context-first architecture: Centralized state using  and  for clean data flow
• 	Component isolation: Each UI piece (SearchBar, HeroList, Loader, Error) is self-contained and expressive
• 	Progressive enhancement: Started with core functionality, then layered in styling and UX polish
• 	Learner-friendly logic: Annotated reducer actions and fetch flows for future developer

📦 Usage Instructions
1. 	Clone the repo
git clone https://github.com/erv1029-afk/superhero-react.git
cd superhero-react
2. 	Install dependencies
npm install
3. 	Set up your  file
REACT_APP_SUPERHERO_TOKEN=your_api_token_here
4. 	Run the app locally
npm run dev
5. 	Search for a hero
Type a name (e.g., "Batman") and explore their stats!


🚀 Live Demo
Check out the deployed app here:
https://storied-twilight-307dca.netlify.app/

## 🧪 Known Issues & Unsolved Problems

- 🔒 **Image URLs from SuperHero API are unreliable**  
  While the API provides rich data like name, intelligence, and strength, many image links fail due to CORS restrictions or hotlinking blocks. This app includes fallback logic and local assets to ensure a consistent visual experience.

- 🐛 **No error message for missing heroes**  
  If a user searches for a hero that doesn’t exist or returns `null`, the UI currently shows a blank state. Future improvements could include a friendly “Hero not found” message or animation.

- 🚧 **Limited styling for fallback images**  
  Fallback images are functional but not yet styled to match the dramatic flair of the rest of the app. A silhouette or badge could enhance visual storytelling.

> These issues are documented to support future learners and contributors. Pull requests welcome!

## 🚀 Future Upgrades

- 🖼️ **Image Hosting Improvements**  
  Replace unreliable external image URLs with a curated local image set or a proxy solution to ensure consistent rendering across all heroes.

- 🔍 **Enhanced Search Functionality**  
  Add fuzzy search, autocomplete, or filtering by power stats to improve user experience and accessibility.

- 🎨 **Styling & Theming**  
  Introduce dramatic, cozy UI themes with animated transitions, responsive layouts, and accessibility enhancements.

- 📦 **Component Refactoring**  
  Modularize hero cards, loading states, and error handling into reusable components with expressive documentation.

- 🌐 **Internationalization (i18n)**  
  Support multiple languages and cultural hero variants to celebrate global storytelling.

> These upgrades are part of an ongoing effort to make the app more resilient, inclusive, and learner-friendly. Contributions and ideas are welcome!




