import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBill } from "../../actions/orderActions";



const BillList = ({items,setId,setDate}) => {
    const dispatch = useDispatch();
    const clickHandler = (id,date) =>{
        dispatch(getBill(id));
        setId(id)
        setDate(date)
    }
    const [dt,setDt] = useState([]);
    useEffect(() => {
        if(items.date){
            let arr = items.date.split(',');
            setDt(arr);
        }
    }, [items])
    return ( 
        <div class="main-cart">
            <div class="itemHead1">
                <p>{items.billId}</p>
            </div>
            <div class="qtyHead1">
                <p><span class="subscript"> {dt[0]} <br/> {dt[1]}</span></p>
            </div>
            <div class="totalHead1">
                <p>{items.items}pcs</p>
            </div>
            <div class="deleteItem1">
                <p>${items.total}.00</p>
            </div>
            <div class="viewItem1" onClick={()=>clickHandler(items.billId,items.date)}>
                <p>o</p>
            </div>
        </div>
    );
}
 
export default BillList;