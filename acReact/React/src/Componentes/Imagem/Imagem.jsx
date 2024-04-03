import eu from "../imgs/eu.jpg";
import cocchi from "../imgs/cocchi.png";
import munhoz from "../imgs/munhoz.jpg";


function Imagem(){
    return(
        <>
        <h2>Gustavo Estevam Cocchi</h2>
            <div>
                <img src={cocchi} alt="cocchi"/>
                <p>Olá! Meu nome é Gustavo Estevam Cocchi, e sou estudante da Fiap School e estou no último ano do ensino médio técnico.</p>
            </div>
             <h2>João Pedro Sassarrão</h2>
            <div>
                <img src={eu} alt="joni"/>
                <p>Olá! Meu nome é João Pedro Sassarrão e sou estudante da Fiap School e estou no último ano do ensino médio técnico.</p>
            </div>
             <h2>Pedro Munhoz</h2> 
            <div>
                <img src={munhoz} alt="munhoz"/>
                <p>Olá! Meu nome é Pedro Munhoz e sou estudante da Fiap School e estou no último ano do ensino médio técnico.</p>
            </div>
        </>
    )
}

export default Imagem