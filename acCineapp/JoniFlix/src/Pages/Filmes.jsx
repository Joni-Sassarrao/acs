import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Filmes(){

    const [filmes, setFilmes] = useState([])

    const settings = {
        Infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1 className="text-white font-MontaguSlab mt-5 mb-20 ml-5 text-2xl">Comédia</h1> 
        <div className="flex flex-col w-[1600px] m-8 ml-[155px]">
            <Slider {...settings}>
                {filmes.map(filme => (
                    <div className="ml-[85px]" key={filme.id}>
                        <img className="rounded-lg border" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                        <h1 className="text-white flex justify-start mt-1 mb-2">{filme.title}</h1>
                        <Link to={`/${filme.id}`} className="hover:bg-gray-400 hover:duration-200 bg-white text-black rounded-lg flex items-center mr-[230px] justify-center font-K2D font-bold p-1">
                            Detalhes do Filme
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
        <h1 className="text-white font-MontaguSlab mt-5 mb-20 ml-5 text-2xl">Ação</h1> 
        <div className="flex flex-col w-[1600px] m-8 ml-[155px]">
            <Slider {...settings}>
                {filmes.map(filme => (
                    <div className="ml-[85px]" key={filme.id}>
                        <img className="rounded-lg border" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                        <h1 className="text-white flex justify-start mt-1 mb-2">{filme.title}</h1>
                        <Link to={`/${filme.id}`} className="hover:bg-gray-400 hover:duration-200 bg-white text-black rounded-lg flex items-center mr-[230px] justify-center font-K2D font-bold p-1">
                            Detalhes do Filme
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
        <div className="bg-black h-[10px]"></div>
        </>
    )
}