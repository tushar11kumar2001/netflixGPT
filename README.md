# NETFLIX-GPT
This repository contains a modern web application built with Vite and Tailwind CSS, featuring user authentication and multi-language support. The app integrates with TMDB API to fetch movie data and includes functionalities powered by Google Generative AI.

## Features
  - **Vite and Tailwind CSS**: Initialized using npm create vite@latest for fast build and development, styled with Tailwind CSS for a modern UI.
  - **Routing**: Implemented with React Router, including useNavigate() for navigation.
  - **Authentication**: User signup, login, and sign-out functionalities with email verification.
  - **Form Validation**: Email and password validation on login and registration pages.
  - **Redux Integration**: Configured Redux store with configureStore and createSlice for state management.
  - **Multi-language Support**: Includes English and Hindi pages for sign-in and registration.
  - **TMDB API Integration**: Fetches data from TMDB's now playing, top-rated, and popular movies lists.
  - **Google Generative AI**: Incorporated for advanced features and improvements.
  - **Custom Components**:
          - **Header**: A responsive header component.
          - **Login Page**: A user-friendly login interface with validation.
          - **Sign-in Page (English and Hindi)**: Multi-language support for the sign-in process.
          - **Registration Page (English and Hindi)**: Multi-language support for user registration.
          - **GPT Search Bar**: A search bar powered by GPT for enhanced user interaction.
          
## Setup Instructions
  - 1. **Install Vite and Tailwind CSS:**

     - npm create vite@latest
     - cd your-project-name
     - npm install
     - npm install -D tailwindcss
     - npx tailwindcss init
     
  - 2. **Tailwind CSS Configuration:**
     - Configure Tailwind in tailwind.config.js and add to index.css.

  - 3. **Routing:**
    - Setup routing using React Router.

  - 4. **TMDB API Integration:**
Register for a TMDB API key, then create an app and get an access token. Use the token to fetch movie data.

  - 5. **Google Generative AI:**
Integrate Google Generative AI for additional features.

## Usage
   - **Sign In and Registration**:
       - Users can sign in and register, with support for English and Hindi languages.

   - **Movie Data**:
       - Fetch and display now playing, top-rated, and popular movies using the TMDB API.

   - **GPT Search**:
       - Utilize the GPT search bar for intelligent querying and interactions.

## Contributions
   - Contributions are welcome! Please submit a pull request or open an issue for any features or bug fixes.