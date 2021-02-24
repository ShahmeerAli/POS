import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderTable } from "../../actions/orderActions";
import Pagination from "../pag";
import BillItems from "./billItems";
import BillList from "./billList";

const OrderPage = ({handlePage,page}) => {
    const orders = useSelector(state => state.orderTable.products);
    const bill = useSelector(state => state.bill.products);
    const [total, setTotal] = useState();
    const [totalSales, setTotalSales] = useState();
    const [id, setId] = useState();
    const [order, setOrder] = useState();
    const [display,setDisplay]= useState();
    const [pageNo, setPageNo] = useState(1);
    const [date, setDate] = useState();
    useEffect(() => {
        if(order){
            let sum = 0;
            order.map(e=>sum+=e.total);
            setTotalSales(sum);
        }
    }, [order])
    useEffect(() => {
        if(orders){
            let arr = [...orders];
            setOrder(arr);
        }else{
            setOrder([]);
        }
    }, [orders])
    useEffect(() => {
        if(order){
            let arr = [...order].reverse();
            let new_arr = arr.slice(0,6);
            setDisplay(new_arr);
        }else{
            setDisplay([]);
        }
    }, [order])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderTable());
    }, [dispatch])
    useEffect(() => {
        let sum = 0;
        bill ?
            bill.map(e => sum+=e.qty*e.price)
            : sum=0;
        setTotal(sum)
    }, [bill])
    const handleSearch = (event) =>{
        const id = event.target.value;
        let brr = [];
        let arr = [...orders];
        
        orders.map(e => e.billId === parseInt(id) ? brr.push(e) : null);
        let new_arr = arr.slice(0,6);
        let new_brr = brr.slice(0,6);
        
        
        id !== "" ?
            setOrder(new_brr)
            : setOrder(new_arr);
    }
    const handleSearchDate = (event) => {  
        console.log("fucksss")
        console.log(order);
        const date = event.target.value;
        let dateX = new Date(date).toLocaleString();
        let brr = [];
        let arr = [...orders];
        console.log(dateX);
        orders.map(e => e.date.slice(0,10) === dateX.slice(0,10) ? brr.push(e) : null);
        // let new_arr = arr.slice(0,6);
        // let new_brr = brr.slice(0,6);
        date !== "" ?
            setOrder(brr)
            : setOrder(arr);
    }
    const handleLast = () => {
        let arr = [...order].reverse();
        if(pageNo > 1){ 
            let pg = pageNo-1;
            setPageNo(pg)
            let new_arr =[];
            let x = (pg-1)*6
            new_arr = arr.slice(x,x+6)
            setDisplay(new_arr)
        }
    }
    const handleNext = () => {
        let arr = [...order].reverse();
        let check = (pageNo)*6;
        if(check <= arr.length){ 
            let pg = pageNo+1;
            setPageNo(pg)
            let new_arr =[];
            let x = (pg-1)*6
            new_arr = arr.slice(x,x+6)
            setDisplay(new_arr)
        }
    }
    return ( 
        <>
        <main>
            <section class="order-container"  style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'images/back7.jpg'})`}}>
                <div class="orderHead">
                    <p>Order Table</p>
                </div>
                <input type="text" class="searchFeild" placeholder="Search by Id..." onChange={handleSearch}></input>
                <input type="date" className="searchFeild" onChange={handleSearchDate}></input>
                <div class="subHead">
                    <div class="itemHead1">
                        <p>Order</p>
                    </div>
                    <div class="qtyHead1">
                        <p>Date</p>
                    </div>
                    <div class="totalHead1">
                        <p>Items</p>
                    </div>
                    <div class="deleteItem1">
                        <p>Total</p>
                    </div>
                    <div class="viewItem2">
                        <p>View</p>
                    </div>
                </div>
                {display ? 
                    display.map(e => (<BillList items={e} setId={setId} setDate={setDate}></BillList>)):null
                }
                <div className="pageHandler">
                    <button onClick={handleLast}>Last</button>
                    <button onClick={handleNext}>Next</button>
                </div>
                {totalSales && 
                <div className="sales">
                    <h2>Total Sales</h2>
                    <h2>Rs.{totalSales}.00</h2>
                </div>
                }
            </section>
            <section class="bill-container" style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'images/back11.jpg'})`}}>
                <div class="bill">
                    {bill ?
                    <>
                    <div class="orderHead">
                        <p>Order No # <span class="blue">{id}</span></p>
                        <div class="date">Date : {date}</div>
                    </div>
                    <div class="order-content">
                        <div class="order-subHead">
                            <div class="order-sno">
                                <p>Sno.</p>
                            </div>
                            <div class="order-item">
                                <p>Items</p>
                            </div>
                            <div class="order-qty">
                                <p>Qty</p>
                            </div>
                            <div class="order-price">
                                <p>Price</p>
                            </div>
                            {/* <div class="order-vat">
                                <p>VAT</p>
                            </div> */}
                            <div class="order-total">
                                <p>Total</p>
                            </div>
                        </div>
                        {bill ? bill.map( e => (<BillItems item={e} items={bill}></BillItems>)): null}
                        
                        <div class="order-total">
                            <div class="total-head">
                                <p>Total :</p>
                            </div>
                            <div class="total-value">
                                <p>${total}.00</p>
                            </div>
                        </div>
                        <div className="proceedButton">
                            <button className="button1">Print</button>
                            <button className="button1">Delete</button>
                        </div>

                    </div>
                    </>
                    : null}
                </div>
            </section>
        </main>
        <Pagination handlePage={handlePage} page={page}/>
        </>
    );
}
 
export default OrderPage;