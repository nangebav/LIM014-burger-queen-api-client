import {useHistory} from 'react-router-dom';
import '../style/main.scss'

function Error(props) {

    const history = useHistory();

    return (
        <section className="Error">
            <section className="errorLogIn">
                <section id="errorMessage"> {props.messageTitle} </section>
                <section id="errorBody"> 
                    {props.message1} <br></br>{props.message2} <br></br>
                    <button onClick ={()=> history.push('/')}>{props.button}</button>
                </section>
            </section>
        </section>
    );
}
  
export default Error;
