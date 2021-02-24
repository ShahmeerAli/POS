import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calcAllTotal, getLastBill } from "../../../actions/orderActions";
import CartContent from "./cartContent";
import axios from "axios";
import printJS from 'print-js';
const Cart = () => { 
    const dispatch = useDispatch();
    const storeCart = useSelector(state => state.cart.cart);
    const lastBillId = useSelector(state => state.lastBillId.billId);
    const [billId, setBillId] = useState();
    const total = useSelector(state => state.total.total);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        dispatch(getLastBill());
      }, [dispatch])
    useEffect(() => {
        setCart(storeCart);
    }, [storeCart])
    useEffect(() => {
        lastBillId ?
        setBillId(lastBillId)
        :setBillId(0);
    }, [lastBillId])
    const handleChange = () =>{
        let sum = 0;
        cart ?
            cart.map(e => sum += parseInt(e.price)*(e.qty)):sum=0
        dispatch(calcAllTotal(sum));
    }
    const handleCancel = () => {
        dispatch(calcAllTotal(0));
        dispatch(addToCart([]));
    }

    const checkOut = () => {
        if(cart.length>0){
            




            
            if(!billId){
                setBillId(0);
            }
            let dt = new Date().toLocaleString();
            console.log(dt)
            cart.map(e =>
                e.billId = parseInt(billId)+1,
            )
            cart.map(e => 
                e.date = dt,
            )
            cart.map(e => 
                e.amount = e.price*e.qty,
            )
            let total = 0;
            cart.map(e=>total+=e.amount);
            cart.push({
                title:"",
                qty:"",
                price:"",
                amount:total,
                description:"Total"
            })
                    
            axios.post('http://localhost:5001/bills', cart);
            dispatch(calcAllTotal(0));
            dispatch(addToCart([]));
            setBillId(billId+1);    
            alert("bill created successfully");
            // ========================================== 
			printJS({printable: cart, properties: [{ field:'qty', displayName:'Q.'},{field:'title',displayName:'Item'},{field:'description',displayName:'detail'},'price' ,{field:'amount',displayName:'Rs'}], type: 'json',header:"JAMAL'S KITCHEN ",footer:"test"});
            // printJS({printable:data, type: 'json',header:"JAMAL'S KITCHEN ",footer:"test"});
            // ===================================
            
        }else{
            alert("no items in cart")
        }
    }
    return ( 
        <section className='cart' style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'images/back11.jpg'})`}}>
            <div className="cart-container">
                    <div class="orderHead">
                        <p>Order No # <span class="blue">{parseInt(billId)+1 }</span></p>
                    </div>
                    <div class="subHead">
                        <div class="itemHead">
                            <p>Items</p>
                        </div>
                        <div class="qtyHead">
                            <p>Qty</p>
                        </div>
                        <div class="priceHead">
                            <p>Price</p>
                        </div>
                        <div class="totalHead">
                            <p>Total</p>
                        </div>
                        <div class="deleteItem">
                            <p>Remove</p>
                        </div>
                    </div>
                    {   
                        cart ?  
                            cart.map(e =>(

                                <CartContent item={e} storeCart={storeCart} total={total} handleChange={handleChange} ></CartContent>
                            ))
                            : null
                    }
                    {
                        total > 0 ?
                        <>
                            <div class="cartTotal">
                                <div class="totalText">
                                    <p>Total</p>
                                </div>
                                <div class="allTotal">
                                    <p class="red">Rs.{total}</p>
                                </div>
                            </div>
                            <div class="proceedButton">
                                <div class="proceedAccept">
                                    <button class="button" onClick={checkOut}>Proceed</button>
                                </div>
                                <div class="proceedCancel">
                                    <button class="button" onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        </>
                        : null
                    }   
                </div>
        </section>
     );
}
 
export default Cart;