import data from '../../artigos.json'

export default function Home(){
    console.log(data)
    return (
        <>
        <h1 className='flex text-white justify-center'>Filmes novos</h1>
        <div className='grid grid-cols-3 bg-black'>
        {
            (data.map)(
                (filme, index) =>(
                    <>
                    <div className='card bg-primary-fundo text-white mt-4 m-3 rounded-lg flex flex-col' key={index}>
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
                    )
                    )
                }
        </div>
        </>
    )
}