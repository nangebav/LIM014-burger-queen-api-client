
import '../style/main.scss'


function ProductSupply(props) {
    return (
        <main className="productSupply">
        <div>
          <p> {props.productName}</p>
        </div>
        <article className="supplyWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counterSupply">
            <div>{props.initialSupply}</div>
            <div className="actualSupply">{props.actualSupply}</div>
            <div className="buttonWrap">
              <button> + </button> 
              <button> - </button> 
            </div>
          </div>
          
        </article>
      </main>
    );
}
  
export default ProductSupply;
