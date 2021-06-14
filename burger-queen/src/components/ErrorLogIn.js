import '../style/main.scss'

function Error() {
    return (
        <section id="Error">
            <section className="errorLogIn">
                <section id="errorMessage"> MENSAJE </section>
                <section id="errorBody"> 
                    <p>Cuenta de usuario no es válida. <br></br> Inténtelo otra vez.</p>
                    <button>Aceptar</button>
                </section>
            </section>
        </section>

    );
}
  
export default Error;
  