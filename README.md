   🎬 Movie Explorer — TMDB Movie Browser

Movie Explorer is a JavaScript web application that allows users to discover and browse movies using **The Movie Database (TMDB) API**.  
The app lets you search for specific movies, explore top-rated, now-playing, and upcoming movies — all displayed with their posters, titles, and release dates.

When you click on any movie card, a popup alert shows the movie’s full title and description, offering a quick and simple way to learn more.



   💡 What This Project Does

✅ Search Movies:
Type a movie name and get a list of matching results including their poster, title, and release date.

✅ Now Playing Movies: 
View a selection of movies that are currently playing in theaters, fetched directly from TMDB's “Now Playing” endpoint.

✅ Top Rated Movies: 
Explore movies that are highly rated by audiences around the world through TMDB’s “Top Rated” API endpoint.

✅ Upcoming Movies:
See what new releases are coming soon to theaters using TMDB’s “Upcoming” movies data.

✅ Movie Details Popup:  
Clicking on any movie card triggers a custom alert box that displays the movie’s title and overview, providing a quick summary without leaving the page.



   📦 How It Works

- The app uses **JavaScript fetch()** to make API calls to TMDB.
- Movie cards are created dynamically using a reusable `moviecard()` function.
- A click on a movie triggers `showDetails()`, fetching and displaying the movie’s title and description.
- Posters are loaded via TMDB’s image CDN, and fallback placeholders are used if images are missing.


   🌐 How to Use

- On page load, upcoming movies will automatically display.
- Use the search bar to look up any movie by title.
- Click the **Top Rated** or **Now Playing** buttons to explore those categories.
- Click any movie card to see its details in a popup.



   📋 Summary

This project is great for learning about:

- Using third-party APIs
- Dynamic DOM manipulation
- Event handling in JavaScript
- Fetching and displaying real-world data

