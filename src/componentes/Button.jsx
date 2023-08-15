import "../estilos/button.css"

// eslint-disable-next-line react/prop-types
function Button({texto, esBotonDeClic, manejarClic}){
    return(
        <button 
            className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Button;