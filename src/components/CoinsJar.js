import Coin from "./Coin";

const CoinsJar = ({items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<div className="container">{
        items.map((item) => (
            <Coin item={item}/>
        ))
    }</div>)
    
}

export default CoinsJar
