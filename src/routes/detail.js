 
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

function Detail(){

    const[loading, setLoading]=useState(true);
    const[detail,setDetail]=useState([]);

    const {id}=useParams();

 
    const getMovies=async()=>{


        const response=await fetch(

            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
    
        const json=await response.json();
        setDetail(json.data.movie);
        setLoading(false);
    };


    useEffect(()=>{

        getMovies();
       
    },[])


    return(
        
        <div>
           
            {loading ? <h1>Loading..</h1>: 
            <div>   
       
<img src={detail.large_cover_image} />
        <h2>{detail.title_long}</h2>
        <p>like_count : {detail.like_count}</p>
           <p>rating : {detail.rating}</p>
           <p>runtime : {detail.runtime}</p>
           <p>year : {detail.year}</p>
           <ul>{detail.genres.map((g)=>
           <li key={g}>{g}</li>
           )}</ul>
           <p>{detail.description_full}</p>
           <p><a href={detail.url}>{detail.url}</a></p>
        </div>
        
        }
    
        </div>
    )

}

export default Detail;