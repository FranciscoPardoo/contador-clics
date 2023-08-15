import "../estilos/contador.css"

// eslint-disable-next-line react/prop-types
function Contador({ numClics }){
    return(
        <div className="contador">
            {numClics}
        </div>
    )
}

export default Contador;