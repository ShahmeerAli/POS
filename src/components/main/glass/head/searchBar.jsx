const SearchBar = ({handleText}) => {
    const handleChange = (event) => {
        handleText(event.target.value);
        console.log(event.target.value);
    }
    return ( 
        <input type="text" class="searchFeild" placeholder="Search..." onChange={handleChange}></input>
    );
}
 
export default SearchBar;