import './App.css';
import { useDispatch } from 'react-redux';
import MainPage from './components/main/mainPage';
import { useEffect, useState } from 'react';
import { getProducts } from './actions/productActions';
import { getLastBill } from './actions/orderActions';
import OrderPage from './components/order/orderPage';
import Home from './components/home';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  useEffect(() => {
    dispatch(getLastBill());
  }, [dispatch])
  const [page, setPage] = useState([{title:'Home',status:true},{title:'Generate',status:false,
  des:"This page has two sections products container and cart. Select this page to generate bills. You can filter product by product category and also there is a search bar, you can search products by name."},
  {title:'View',status:false,
  des:"This page has two sections bills container and each bill view. Select this page to view bills. You can filter bills by bill date from select option and also there is a search bar, you can bills products by id."},
  {title:'Manage',status:false,
  des:"This page can only be accessed by admin. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod sed do eiusmod."}]);
  const handlePage = (pageName) =>{
    let arr = [...page];
    arr.map(e => e.title !== pageName ? e.status = false : e.status = true);
    setPage(arr);
    console.log(arr);
  }
  return (
      <div>
        {page[1].status ? 
        <MainPage handlePage={handlePage} page={page}></MainPage> : null
      }
        {page[2].status ?
        <OrderPage handlePage={handlePage} page={page}></OrderPage> : null
      }
      {page[0].status ?
        <Home handlePage={handlePage} page={page}></Home>:null
      }
      {page[3].status ? 
        <Home handlePage={handlePage} page={page}></Home>:null
      }
        </div>
  );
}

export default App;
