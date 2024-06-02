import data from '../../artigos.json'

export default function Home(){
    console.log(data)
    return (
        <div className='grid grid-cols-3 bg-black'>
        {
            (data.map)(
                (filme, index) =>(
                    <>
                    <div className='card bg-primary-fundo text-white mt-4 m-3 rounded-lg flex flex-col' key={index}>
                        <h1 className='text-2xl m-2 mb-3'>{filme.title}</h1>
                        <img className='w-full mb-5' src={filme.image}/>
                        <div className='tags'>
                            {
                                filme.tags.map(tag =>(
                                    <span className='bg-blue-800 text-white p-1 m-2 rounded-xl ml-3.5 text-center' key={tag}>{tag}</span>
                            ))
                            }
                            <div className='texto'>
                                {
                                    filme.text.map(text =>(
                                        <span className='flex flex-row m-4 text-lg' key={text}>{text}</span>
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
    )
}