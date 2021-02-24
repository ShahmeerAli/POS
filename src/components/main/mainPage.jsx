import Pagination from "../pag";
import Cart from "./cart/cartSection"
import Glass from "./glass/glassSection"




const MainPage = ({handlePage,page}) => {
    return (
        <> 
        <main>
            <Glass></Glass>
            <Cart></Cart>
        </main>
        <Pagination handlePage={handlePage} page={page}/>
        </>
    );
}
 
export default MainPage;