import { useEffect, useState } from "react";
import Movie from "../components/moviecomponent";


function Home(){
    const[loading, setLoading]=useState(true);
    const[movie,setMovie]=useState();

    const getMovies=async()=>{


        const response=await fetch(

            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
    
        const json=await response.json();
        setMovie(json.data.movies);
        setLoading(false);
    };


    
    useEffect(()=>{

      getMovies();
        
    }, [])



  return(
    <div>
        {loading ? <h1>Loading..</h1>: 
        <div>   
    {movie.map((movie)=>
    <Movie 
    key={movie.id}
    CoverImage={movie.medium_cover_image}
    title={movie.title}
    summary={movie.summary}
    genres={movie.genres}
    Id={movie.id}
    />
     )}
    </div>
    
    }

    </div>
  );
}

export default Home;