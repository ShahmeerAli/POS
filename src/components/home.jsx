

const Home = ({handlePage,page}) => {
    return ( 
        <div className="mainBack" style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'images/mainBack1.jpg'})`,backgroundSize:'cover'}}>
            <div></div>
            <div className="mainBackContainer">
                {page.map(e => e.title !== "Home" ?
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>{e.title}</h1>
                            <p>{e.des}</p>
                        </div>
                        <div class="flip-card-back">
                            <button onClick={()=>handlePage(e.title)}>CLICK HERE</button>
                        </div>
                    </div>
                </div>
                : null
                )}
            </div>
        </div>
    );
}
 
export default Home;