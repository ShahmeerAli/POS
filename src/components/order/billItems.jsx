const BillItems = ({item,items}) => {
    return ( 
        <div class="order-main">
            <div class="order-sno">
                <p>{items.indexOf(item)+1}</p>
            </div>
            <div class="order-item">
                <p>{item.title} <span class="subscript">( Regular AA951 )</span></p>
            </div>
            <div class="order-qty">
                <p>{item.qty}</p>
            </div>
            <div class="order-price">
                <p>${item.price}.00</p>
            </div>
            {/* <div class="order-vat">
                <p>$2.00</p>
            </div> */}
            <div class="order-total">
                <p>${item.price*item.qty}.00</p>
            </div>
        </div>

    );
}
 
export default BillItems;