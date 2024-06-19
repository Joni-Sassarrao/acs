import data from '../../artigos.json'

export default function Home(){
    console.log(data)
    return (
        <>
        <h1 className='flex justify-center text-2xl text-white font-MontaguSlab mt-10'>Filmes Novos</h1>
        <div className='grid grid-cols-3'>
        {
            (data.map)(
                (filme, index) =>(
                    <>
                    <div className='card bg-primary-fundo text-white mt-4 m-3 rounded-lg flex flex-col' key={index}>
                        <img className='w-full mb-5 rounded-xl' src={filme.image}/>
                        <h1 className='text-2xl m-2 mb-3'>{filme.title}</h1>
                        <div className='tags'>
                            {
                                filme.tags.map(tag =>(
                                    <span className='bg-white text-black p-1 m-2 rounded-xl ml-3.5 text-center' key={tag}>{tag}</span>
                            ))
                            }
                        </div>
                    </div>
                    </>
                    )
                )
            }
        </div>
        </>
    )
}