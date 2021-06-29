

function StatusListTable(props) {

    return (
        <section className="tableCard">
            <section className="tableStatus">
                <section className="number">
                    <label > </label>
                </section>
                <p> {props.client} </p>
            </section>
            <section class="statusWrapper">
                <section className={props.status === 'delivering' ? 'statusOk' :'statusAlert'}>
                    <h1> {props.status} </h1>
                </section>
                <button><img alt="btn" src="/static/media/X.c2ea63cc.svg"></img></button>
            </section>

        </section>
    );
}
  
export default StatusListTable;
