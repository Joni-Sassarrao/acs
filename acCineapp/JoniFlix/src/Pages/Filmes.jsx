import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Filmes(){
    console.log(useParams)
    const {id} = useParams()
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1 className="text-white font-MontaguSlab ml-5">Filmes</h1>
        <div className="flex flex-row gap-3 flex-wrap">
            {
                filmes.map(
                    filme =>(
                        <div className="card-fime" key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`}/>
                            <h1>{filme.title}</h1>
                            <Link to={`${filme.id}`} className="bg-purple-800">Saiba Mais</Link>        
                        </div>
                    )
                )
            }
        </div>
        </>
    )
}