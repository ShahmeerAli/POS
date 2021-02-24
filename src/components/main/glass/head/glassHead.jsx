import { useState } from "react";
import { useSelector } from "react-redux";
import CatButton from "./catButton";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";

const GlassHead = () => {
    const products = useSelector(state => state.products.products);
    console.log("fucking this", products)
    const optionsAll = products ? products.map(e=>e.category) : "";
    const options = ["All"];
    if (optionsAll) {
        for(let i=0; i < optionsAll.length; i++){
            if(options.indexOf(optionsAll[i]) === -1) {
                options.push(optionsAll[i]);
            }
        }  
    }
    const [name, setName] = useState("");
    const handleText = (text) =>{
        setName(text);
    }
    // const options = ["ALL","MAIN","DRINKS","JUICES"];
    return ( 
        <div className="header">
            { (options) ?options.map((e) => {return (
                <CatButton name={e}></CatButton>
            );}
            ) : ""}
            <SearchBar handleText={handleText}></SearchBar>
            <SearchButton name={name}></SearchButton>
        </div>
     );
}
 
export default GlassHead;