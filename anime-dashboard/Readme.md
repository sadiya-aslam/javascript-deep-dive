# Anime Dashboard 🚀

> A dynamic, data-driven web application that fetches and displays real-time anime statistics, trailers, and details.

## 🔗 Live Demo
[Click here to view the live application](#) *(Link coming soon!)*

## 📸 Sneak Peek




## ✨ Core Features
* **Asynchronous API Integration:** Leveraged the Jikan API to fetch and render real-time data seamlessly without blocking the main thread.
* **Persistent State Management:** Engineered a robust "Favorites" system utilizing the browser's `localStorage` API to maintain user preferences across sessions.
* **Advanced Data Handling:** Implemented dynamic genre filtering alongside comprehensive pagination (and infinite scroll iterations) to handle massive datasets efficiently.
* **Premium UI/UX:** Designed custom CSS skeleton animations to gracefully mask network latency, and built interactive DOM modals for detailed data visualization and embedded trailers.

## 🛠️ Tech Stack
* **HTML5** (Semantic structure)
* **CSS3** (Flexbox, Grid, custom keyframe animations)
* **Vanilla JavaScript** (DOM manipulation, Fetch API, Async/Await, Event Delegation)

## 🧠 What I Learned
Building this application pushed my understanding of asynchronous JavaScript and state management. My biggest technical hurdle was dealing with API rate limits and race conditions while implementing infinite scroll. When the user hit the scroll target repeatedly, it flooded the server with multiple requests per second, crashing the app. 

To solve this, I learned how to implement **Debouncing** and **Throttling** using `setTimeout` to control the execution rate of the API calls. Additionally, I solidified my ability to handle unpredictable network responses using rigorous `try/catch` error-handling blocks.
