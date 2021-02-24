import MainContent from "./body/mainContent"
import GlassHead from "./head/glassHead"

const Glass = () => {
    
    return ( 
        <section style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'images/back6.jpg'})`}} className={'glass'}>
            <GlassHead></GlassHead>
            <MainContent></MainContent>
        </section>
     );
}
 
export default Glass;