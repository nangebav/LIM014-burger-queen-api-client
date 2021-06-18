function OrderList(props) {
    return (
        <tr>
            <td>
                <section>
                    <p>{props.food}</p>
                    <span>{props.typeFoods}</span>
                </section>
            </td>
            <td>{props.quantity}</td>
            <td>${props.price}</td>
        </tr >
    );
}
  
export default OrderList;
