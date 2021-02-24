import { useDispatch } from "react-redux";
import { addToCart, calcAllTotal } from '../../../actions/orderActions';


const CartContent = ({item,storeCart,total,handleChange}) => {
    const dispatch = useDispatch();
    const qtyChangeHandler = (e,item,cart) => {
        let newCart = [...cart];
        let i = newCart.indexOf(item);
        newCart[i].qty = e;
        dispatch(addToCart(newCart));
        handleChange()
    }
    const removeFromCart = (item,cart) =>{
        const newCart = cart.filter(e => e !== item);
        dispatch(addToCart(newCart));
        dispatch(calcAllTotal(parseInt(total) - (parseInt(item.price)*parseInt(item.qty))))
    }

    return ( 
        <div class="main-cart">
            <div class="itemHead">
                <p>{item.title} <br/><span class="subscript">{item.description}</span></p>
            </div>
            <div class="qtyHead">
                <input type="number" value={item.qty} min="1" onChange={(e)=>qtyChangeHandler(e.target.value,item,storeCart)} />
            </div>
            <div class="priceHead">
                <p>Rs.{item.price}</p>
            </div>
            <div class="totalHead">
                <p>Rs.{item.price*item.qty}.00</p>
            </div>
            <div class="deleteItem">
                <button class="del" onClick={()=>removeFromCart(item,storeCart)} >X</button>
            </div>
        </div>
    );
}
 
export default CartContent;