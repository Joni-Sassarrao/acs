import Sozinho from "../Sozinho/Sozinho";
import Imagens from "../Imagens/Imagens";
import Card from "../Card/Card";
import Form from "../Fomulario/Form";

function Container(){
    return(
        <>
        <div className="container">
            <Sozinho/>
            <Imagens/>
            <Card/>
            <Form/>
        </div>
        </>
    )
}

export default Container