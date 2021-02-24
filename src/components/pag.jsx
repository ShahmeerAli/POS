const Pagination = ({handlePage,page}) => {
    return ( 
        <div className="pag">
            {page.map(e=> <button onClick={() => handlePage(e.title)}>{e.title}</button> )}
        </div>
    );
}
 
export default Pagination;