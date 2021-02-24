import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../../../actions/productActions';
import { addToCart, calcAllTotal } from '../../../../actions/orderActions';

const RowOne = () => {
    
    const dispatch = useDispatch();
    const sort = useSelector(state => state.sort);
    const search = useSelector(state => state.search);
    const newPage = useSelector(state => state.page);
    const total = useSelector(state=>state.total.total)
    const storeCart = useSelector(state => state.cart.cart)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if(search.items){
            setProducts(search.items);
        }   
    }, [search])
    useEffect(() => {
        if(sort.items){
            setProducts(sort.items);
        }
    }, [sort])
    useEffect(() => {
        dispatch(addToCart(cart));
    }, [dispatch,cart])


    const [page, setPage] = useState([]);
    const [rowOne, setRowOne] = useState([]);
    const [rowTwo, setRowTwo] = useState([]);
    const [rowThree, setRowThree] = useState([]);
    const [changePage, setChangePage] = useState([0,18]);

    useEffect(() => {
        if(products){
            let newPage = products.slice(changePage[0],changePage[1]);
            setPage(newPage);
        }else{
            console.log("loading")
        }
    },[products,changePage])

    useEffect(() => {
        if(page){
            let row_one = page.slice(0,6);
            setRowOne(row_one);
        }
    }, [page])

    useEffect(() => {
        if(page){
            let row_two = page.slice(6,12);
            setRowTwo(row_two);
        }
    }, [page])

    useEffect(() => {
        if(page){
            let row_three = page.slice(12,18);
            setRowThree(row_three);
        }
    }, [page])

    useEffect(() => {
        if(newPage.page){
            setChangePage(newPage.page.newPage)
        }
    }, [newPage])

    const handleNextClick = () =>{ 
        dispatch(nextPage(changePage,"next",products));
    }

    const handleLastClick = () =>{
        dispatch(nextPage(changePage,"last",products));
    }


    const handleAddToCart = (item) =>{
        let x = [];
        if(storeCart.length>0){
            x = [...storeCart];
        } 
        item.qty = 1;
        if(!x.includes(item)){
            x.push(item);
            setCart(x);
            total ?
                dispatch(calcAllTotal(parseInt(total) + (parseInt(item.price)*parseInt(item.qty))))
                : dispatch(calcAllTotal(parseInt(item.price)*parseInt(item.qty)));  
        }else{
            alert("Already in cart")
        }
    }
    return (
        <>  
            {changePage[0] >= 18 ?
                <img src="./images/last.png" className="lastButton" alt="last" onClick={handleLastClick} />
                : null}
            {products.length >= changePage[0]+18 ? 
                <img src="./images/next.png" className="nextButton" alt="next" onClick={handleNextClick}/>
                : null}
            <div className="content-one">
                {rowOne.map(e => (
                            <div class="card">
                                <div class="cardImg">
                                    <img src={`./images/${e.image}.jpg`} alt=""/>
                                </div>
                                <div class="price">
                                    <p>{`Rs.${e.price}.00`}</p>
                                </div>
                                <div class="title">
                                    <p>{e.title}</p>    
                                </div>
                                <div class="subscript">
                                    <p>{e.description}</p>
                                </div>
                                <div class="addButton">
                                    <button onClick={()=>handleAddToCart(e)}>ADD</button>
                                </div>
                            </div>
                ))
                }
            </div>

            <div className="content-one">
                {rowTwo.map(e => (
                            <div class="card">
                                <div class="cardImg">
                                    <img src={`./images/${e.image}.jpg`} alt=""/>
                                </div>
                                <div class="price">
                                    <p>{`Rs.${e.price}.00`}</p>
                                </div>
                                <div class="title">
                                    <p>{e.title}</p>    
                                </div>
                                <div class="subscript">
                                    <p>{e.description}</p>
                                </div>
                                <div class="addButton">
                                    <button class="button" onClick={()=>handleAddToCart(e)}>ADD</button>
                                </div>
                            </div>
                ))
                }
            </div>

            <div className="content-one">
                {rowThree.map(e => (
                            <div class="card">
                                <div class="cardImg">
                                    <img src={`./images/${e.image}.jpg`} alt=""/>
                                </div>
                                <div class="price">
                                    <p>{`Rs.${e.price}.00`}</p>
                                </div>
                                <div class="title">
                                    <p>{e.title}</p>    
                                </div>
                                <div class="subscript">
                                    <p>{e.description}</p>
                                </div>
                                <div class="addButton">
                                    <button class="button" onClick={()=>handleAddToCart(e)}>ADD</button>
                                </div>
                            </div>
                ))
                }
            </div>
        </>
    );
}

export default RowOne;

// export default connect((state)=>({products: state.products.items}),{fetchProducts,})(RowOne);