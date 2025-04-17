    async function fetchmovie() {
            
            const movieName=document.getElementById('search-input').value;
            const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDc5Nzg1Zjk4OGY4MWU5YWU2MDM1ZjY0ZDA4MmNhNSIsIm5iZiI6MTc0MzU5Njc0My45NTksInN1YiI6IjY3ZWQyY2M3MGQ3MTIxYTljYzAxMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VOC55mDLn4vjYGkdzoN1Dgb6HXZRKqCtagmXyCfLInM';
            const url =`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}`;

            try {
                document.getElementById('main-container').style.display = 'none';
                const res=await fetch(url,{
                headers:{
                    Authorization:`Bearer ${API_KEY}`,
                    'Content-Type':'application/json;charset=utf-8'
                        }
                    }
                );
    
                const data = await res.json();
                const container = document.getElementById('movies-container');
                container.innerHTML = '';
    
                if(data.results.length > 0){
                    data.results.forEach(movie =>{
                        if(!movie.poster_path || !movie.title)return;
                        const imageUrl = movie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/200x300?text=No+Image';
                       

                        const template=document.getElementById('movie-template');
                        const clone= template.content.cloneNode(true);
                        clone.querySelector('.moviePoster').src = imageUrl;
                        clone.querySelector('.moviePoster').alt = movie.title;
                        clone.querySelector('.movieTitle').textContent = movie.title;
                        clone.querySelector('.movieDate').textContent = `Release Date: ${movie.release_date || 'N/A'}`;
                        clone.querySelector('.movieDescription').textContent = movie.overview || 'No description available.';
    
         container.appendChild(clone);
                });
            } else {
                container.innerHTML = '<p>No results found.</p>';
            }
            } catch (error) {
            console.error('Error fetching movie:', error);
            }
        }
        async function fetchnowplayingmovie(){
            const API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDc5Nzg1Zjk4OGY4MWU5YWU2MDM1ZjY0ZDA4MmNhNSIsIm5iZiI6MTc0MzU5Njc0My45NTksInN1YiI6IjY3ZWQyY2M3MGQ3MTIxYTljYzAxMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VOC55mDLn4vjYGkdzoN1Dgb6HXZRKqCtagmXyCfLInM';
            const url=`https://api.themoviedb.org/3/movie/now_playing`
        try {
            document.getElementById('main-container').style.display = 'none';
            const res=await fetch(url,{
            headers:{
                Authorization:`Bearer ${API_KEY}`,
                'Content-Type':'application/json;charset=utf-8'
            }
            }
            );

            const data = await res.json();
            const container = document.getElementById('movies-container');
            container.innerHTML = '';

            if(data.results.length > 0){
                data.results.forEach(movie => {
                    if(!movie.poster_path || !movie.title) return;
                    const imageUrl = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/200x300?text=No+Image';
                    
                    const template=document.getElementById('main-template');
                    const clone= template.content.cloneNode(true);
                    clone.querySelector('.moviePoster').src = imageUrl;
                    clone.querySelector('.moviePoster').alt = movie.title;
                    clone.querySelector('.movieTitle').textContent = movie.title;
                    clone.querySelector('.movieDate').textContent = `Release Date: ${movie.release_date || 'N/A'}`;
                    
                    container.appendChild(clone);
                });
            
        } else {
            container.innerHTML = '<p>No results found.</p>';
        }
       }  catch (error) {
        console.error('Error fetching movie:', error);
        }
        }
    async function fetchtopmovie(){
        const API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDc5Nzg1Zjk4OGY4MWU5YWU2MDM1ZjY0ZDA4MmNhNSIsIm5iZiI6MTc0MzU5Njc0My45NTksInN1YiI6IjY3ZWQyY2M3MGQ3MTIxYTljYzAxMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VOC55mDLn4vjYGkdzoN1Dgb6HXZRKqCtagmXyCfLInM';
        const url=`https://api.themoviedb.org/3/movie/top_rated`

    try {
        document.getElementById('main-container').style.display = 'none';
      
        const res=await fetch(url,{
        headers:{
            Authorization:`Bearer ${API_KEY}`,
            'Content-Type':'application/json;charset=utf-8'
        }
        }
        );
        const data = await res.json();
        const container = document.getElementById('movies-container');
        container.innerHTML = '';

        if(data.results.length > 0){
            data.results.forEach(movie =>{
                if(!movie.poster_path || !movie.title)return;
                const imageUrl = movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/200x300?text=No+Image';
                const template=document.getElementById('main-template');
                const clone= template.content.cloneNode(true);
                clone.querySelector('.moviePoster').src = imageUrl;
                clone.querySelector('.moviePoster').alt = movie.title;
                clone.querySelector('.movieTitle').textContent = movie.title;
                clone.querySelector('.movieDate').textContent = `Release Date: ${movie.release_date || 'N/A'}`;
            
            container.appendChild(clone);
        });
    } else {
        container.innerHTML = '<p>No results found.</p>';
    }
   }  catch (error) {
    console.error('Error fetching movie:', error);
    }
}

async function fetchupcomingmovie(){
    const API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDc5Nzg1Zjk4OGY4MWU5YWU2MDM1ZjY0ZDA4MmNhNSIsIm5iZiI6MTc0MzU5Njc0My45NTksInN1YiI6IjY3ZWQyY2M3MGQ3MTIxYTljYzAxMzk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VOC55mDLn4vjYGkdzoN1Dgb6HXZRKqCtagmXyCfLInM';
    const url=`https://api.themoviedb.org/3/movie/upcoming`
try {
    const res=await fetch(url,{

    headers:{
        Authorization:`Bearer ${API_KEY}`,
        'Content-Type':'application/json;charset=utf-8'
    }
    }
    );

    const data = await res.json();
    const container = document.getElementById('main-container');



    if(data.results.length > 0){
        data.results.forEach(movie => {
            if(!movie.poster_path || !movie.title) return;
            const imageUrl = movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/200x300?text=No+Image';
            
            const template=document.getElementById('main-template');
            const clone= template.content.cloneNode(true);
            clone.querySelector('.moviePoster').src = imageUrl;
            clone.querySelector('.moviePoster').alt = movie.title;
            clone.querySelector('.movieTitle').textContent = movie.title;
            clone.querySelector('.movieDate').textContent = `Release Date: ${movie.release_date || 'N/A'}`;
            
            container.appendChild(clone);
        });
    
} else {
    container.innerHTML = '<p>No results found.</p>';
}
}  catch (error) {
console.error('Error fetching movie:', error);
}
}
        document.addEventListener('DOMContentLoaded', fetchupcomingmovie);
        document.getElementById('search-button').addEventListener('click', fetchmovie);
        document.getElementById('toprated-button').addEventListener('click', fetchtopmovie);
        document.getElementById('nowplaying-button').addEventListener('click', fetchnowplayingmovie);
    
   