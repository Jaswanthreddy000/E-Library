# Personal Bookshelf

This project is a React application allowing users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

### Book Search Page

- Create an input field for users to type in a book's name.
- Display search results in real-time as the user types.
- Utilize the Open Library API for fetching results.
  - API Endpoint: [https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1](https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1)
  - Parameters:
    - `q`: Name of the book.
    - `edition_count` : Edition Count of the book
    - `author_name`: Author Name
    - `first_publish_year` : First Published Year
    - `limit`: Set to 10 results per page.
    - `page`: Only display results from page 1.
- Display the search results in a list of cards. Each card represents a book result.

### Personal Bookshelf Page

- Enable users to add books from the search results to a "My Bookshelf" page.
- Utilize the Web Storage API (localStorage) to store the user's bookshelf persistently.
- Create a separate page to display the user's personal bookshelf.
- Incorporate a button on the search results page directing users to their personal bookshelf page.

## Tech Stack & Styling

- Initialize the project using Create React App (CRA).
- Styling: You're free to use any approach - CSS-in-JS, CSS modules, or regular CSS classnames, etc.
- Only client-side rendering is needed; no server-side rendering.

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/personal-bookshelf.git
    cd personal-bookshelf
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the application:

    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Dependencies

- React
- Axios
- Node.js
- Bootstrap
- font-awesome-icons from cdnjs
