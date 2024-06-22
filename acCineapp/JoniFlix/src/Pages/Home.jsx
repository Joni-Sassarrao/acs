import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../artigos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home(){
    console.log(data)
    const [filmes, setFilmes] = useState([])

    const settings = {
        Infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1 className="flex justify-center text-3xl text-white font-MontaguSlab mt-10">Filmes Novos</h1>

        <div className="flex flex-col">
            <Slider {...settings}>
                {filmes.map(filme => (
                    <div className="ml-[100px]" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`} alt={filme.title} />
                        <h1 className="text-white">{filme.title}</h1>
                        <Link to={`/${filme.id}`} className="bg-white text-black rounded-lg items-center">
                            Detalhes do Filme
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
        <div className="grid grid-cols-1 w-3/4 m-auto ml-[280px]">
            <Slider {...settings}>
                {
                (data.map)(
                    (filme, index) =>(
                        <>
                        <div className='card bg-black text-white mt-4 m-3 rounded-lg' key={index}>
                            <img className='w-full mb-5' src={filme.image}/>
                            <div className='flex flex-row items-center'>
                                <h1 className='text-lg m-2 mb-3'>{filme.title}</h1>
                                    <div className='tags'>
                                    {
                                        filme.tags.map(tag =>(
                                            <span className='bg-blue-800 text-white p-1 m-2 rounded-xl ml-3.5 text-center' key={tag}>{tag}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                }
            </Slider>
        </div>
        </>
    )
}