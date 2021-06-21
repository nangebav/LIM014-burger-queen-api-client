function OrderList() {
    return (
        <section className="orderList">
        <table className="default" cellpadding="0" cellspacing="0" >
        <tr>
            <th align="left" >Mesa</th>
            <th align="left" >Cantidad</th>
            <th align="left" >Total del producto</th>
        </tr>
        <tr>
            <td>
                <section>
                    <p>Hamburguesa Doble</p>
                    <span>Pollo</span>
                </section>
            </td>
            <td>1</td>
            <td>$10</td>
        </tr >
        </table>
        </section>
    );
}
  
export default OrderList;
