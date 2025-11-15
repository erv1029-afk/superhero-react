🚀 Technologies Used
• 	React: Component-based UI architecture
• 	Context API + useReducer: Global state management for hero data and loading/error states
• 	Akabab Superhero API: Public RESTful API for character data with reliable image hosting
• 	Vite: Fast build tool for modern React apps
• 	Netlify: Deployment platform with Git integration
• 	CSS (Global): Comic-style layout and typography using dramatic accents and cozy flair

🧠 Approach
This app was built with modularity, clarity, and storytelling in mind:
• 	Context-first architecture: Centralized state using  and  for clean data flow
• 	Component isolation: Each UI piece (, , , , ) is self-contained and expressive
• 	Progressive enhancement: Started with core functionality, then layered in styling and UX polish
• 	Learner-friendly logic: Annotated reducer actions and fetch flows to support future developers

📦 Usage Instructions
1. 	Clone the repo
git clone https://github.com/erv1029-afk/superhero-react.git
cd superhero-react
2. 	Install dependencies
npm install
3. 	Run the app locally
npm run dev
4. 	Search for a hero Type a name (e.g., ) and explore their stats!

🚀 Live Demo
Check out the deployed app here:
https://storied-twilight-307dca.netlify.app/

🧪 Known Issues & Unsolved Problems
- 🐛 No error animation for missing heroes
If a user searches for a hero that doesn’t exist, the UI shows a friendly message but could be enhanced with animation or illustration.
- 🚧 Limited styling for fallback images
Fallback images are functional and consistent, but could be styled with silhouettes or badges to match the app’s dramatic flair.


🚀 Future Upgrades
- 🖼️ Image Styling Enhancements
Add silhouette overlays or badges to fallback images for visual storytelling.
- 🔍 Enhanced Search Functionality
Add fuzzy search, autocomplete, or filtering by power stats to improve UX and accessibility.
- 🎨 Styling & Theming
Introduce dramatic, cozy UI themes with animated transitions, responsive layouts, and accessibility enhancements.
- 📦 Component Refactoring
Modularize hero cards, loading states, and error handling into reusable components with expressive documentation.
- 🌐 Internationalization (i18n)
Support multiple languages and cultural hero variants to celebrate global storytelling.






