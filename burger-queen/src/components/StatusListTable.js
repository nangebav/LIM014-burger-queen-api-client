function StatusListTable() {
    return (
        <section className="tableStatus">
            <p> Mesa </p>
            <nav> 
                <select className="selectTable">
                <option>  Pendiente </option>
                <option> Entregado </option>
                </select>
            </nav>
        </section>
    );
}
  
export default StatusListTable;
