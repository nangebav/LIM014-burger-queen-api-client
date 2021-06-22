function StatusListTable(props) {
    return (
        <section className="tableCard">
            <section className="tableStatus">
                <section className="number">
                    <label > {props.numberTable} </label>
                </section>
                <p> Mesa {props.numberTable} </p>
            </section>
            <section className={props.status === 'ENTREGADO' ? 'statusOk' :'statusAlert'}>
                <h1> {props.status} </h1>
            </section>
        </section>
    );
}
  
export default StatusListTable;
