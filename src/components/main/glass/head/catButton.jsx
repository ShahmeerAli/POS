import { useDispatch, useSelector } from "react-redux";
import { nextPage, sortProducts } from "../../../../actions/productActions";

const CatButton = ({name}) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)
    const handleClickTwo = (type) => {
        type==="All" && (type ="");
        dispatch(sortProducts(products,type));
        dispatch(nextPage([],"",[]));
    }



    return ( 
        <button class="button" onClick={()=>handleClickTwo(name)}>{name==="Main Course"? "Main" : name === "Soft Drinks" ? "Drinks" : name}</button>
     );
}
 
export default CatButton;