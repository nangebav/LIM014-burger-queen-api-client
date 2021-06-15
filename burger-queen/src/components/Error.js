import '../style/main.scss'

function Error(props) {
    return (
        <section className="Error">
            <section className="errorLogIn">
                <section id="errorMessage"> {props.messageTitle} </section>
                <section id="errorBody"> 
                    {props.message1} <br></br>{props.message2} <br></br>
                    <button>{props.button}</button>
                </section>
            </section>
        </section>
    );
}
  
export default Error;
