function OrderList(props) {
    return (
        <tbody>
            <tr>
                <td>
                    <section>
                        <p>{props.food}</p>
                        <span>{props.typeFoods}</span>
                    </section>
                </td>
                <td>{props.quantity}</td>
                <td>${props.price}</td>
            </tr>
        </tbody>
    );
}
  
export default OrderList;
