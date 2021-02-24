// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, searchProducts } from '../../../../actions/productActions';


const SearchButton = ({name}) => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const handleSearch = () => {
        dispatch(searchProducts(products,name));
        dispatch(nextPage([],"",[]));
    }
    return ( 
        // <FontAwesomeIcon icon={faSearch}/>
        <>
            <button class="searchButton" onClick={handleSearch}>SEARCH</button>
        </>
    );
}
 
export default SearchButton;