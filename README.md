# Tesla.com Homepage Clone 🚗⚡

A pixel-perfect, fully responsive clone of the Tesla.com homepage, built with **React** and **Styled Components**. This project replicates the site's signature full-page scrolling and fade-in/fade-out animations.

![image](https://user-images.githubusercontent.com/68509830/230793108-5347b880-a33a-4cb7-aebf-cd70c1c2c074.png)

## ✨ What is This?

This project is a front-end clone of the main landing page for Tesla's website. The primary goal was to recreate its distinctive, immersive user experience, focusing on the full-page vertical scrolling and the subtle animations that make the site feel so polished.

It was built using **Create React App** and relies heavily on **Styled Components** for the CSS, demonstrating a component-based approach to building a modern, visually-driven web page.

### Core Features

* **📄 Full-Page Scrolling Sections:** The layout is divided into full-screen sections for each Tesla product. The page "snaps" to the next section on scroll, creating a smooth, presentation-like feel.
* **✨ Fade-in/Fade-out Animations:** As you scroll between sections, the title, description, and action buttons for the outgoing section fade out, while the new section's content fades in. This effect is managed with JavaScript by monitoring the scroll position.
* **🎨 Component-Based Architecture:** The UI is broken down into reusable React components (`Header`, `Section`, `Menu`, `Footer`), each with its own scoped styles thanks to Styled Components.
* ** dynamically-driven content:** All content for the different product sections (like "Model 3," "Solar Roof," etc.) is loaded from a single `SectionInfo.json` file, making it easy to update or add new sections.
* **📱 Fully Responsive Design:** The layout, navigation, and text are all responsive, ensuring a clean and functional experience on devices of all sizes.
* **🍔 Slide-out Navigation Menu:** Includes a slide-out side menu for additional navigation links, matching the behavior of the official website.

---

## 🔧 Tech Stack & Architecture

This project was built with a focus on creating a smooth, animated user experience with a clean, component-based structure.

* **Core Library:** **React** (via Create React App)
* **Language:** **JavaScript (ES6+)**
* **Styling:** **Styled Components** for all component-level CSS.
* **State Management:** **Redux Toolkit** (included from the CRA template, though not used for the primary UI logic) and React's `useState` for component-level state (like the menu's open/close status).
* **Icons:** **Material-UI Icons** for some UI elements like the close and arrow icons.

### Architectural Highlights

1.  **Full-Page Scroll Logic (`components/Home.js`)**
    The signature scrolling effect is custom-built. The main `Home` component acts as a scroll container with `overflow-y: scroll`. It attaches an event listener that detects the scroll direction. Based on which section is currently in the viewport, it programmatically scrolls the user to the next or previous section's `id` using `scrollIntoView()`. This creates the "snap" effect.

2.  **Scroll-Based Fade Animation (`components/Home.js`)**
    The fade-in and fade-out animations are also controlled by the scroll event listener in the `Home` component. The script calculates how far the user has scrolled within the current section. It then uses this percentage to dynamically update the `opacity` of the text and button elements, making them fade out as they approach the top of the viewport and fade in as they approach the center.

3.  **Styled Components for Scoped Styling**
    Every component in this project is styled using `styled-components`. This approach encapsulates the styles for each component, preventing global CSS conflicts and making the components self-contained and easy to reason about. It also allows for dynamic styling based on props, which is used for the background images of each section.

4.  **JSON-Driven Content**
    The content for each full-page section (title, description, button text, and background image name) is not hardcoded in the components. Instead, the `Home` component maps over the `SectionInfo.json` file and passes the data down to each `Section` component as props. This makes the site highly maintainable.

---

## 🏃‍♂️ Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YasaminAlizadeh/tesla-clone.git
    cd tesla-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.
