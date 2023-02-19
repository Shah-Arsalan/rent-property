import "./PropertyListing.css"
import { properties } from "../../DummyData"
import { ProductCard } from "../Card/Card"
import { useData } from "../../DataContext";
import { useFilter } from "../../useFilter";
const PropertyListing = () => {
    const { setAppearLocation , setAppearWhen ,  setAppearPrice ,setAppearType} = useData();
    console.log("the properties are" , properties);
    const { filterredData } =  useFilter();
    return(
 <div className="property-list" onClick={() => {
    setAppearLocation(false);
    setAppearWhen(false);
    setAppearPrice(false);
    setAppearType(false);

 }}>
{filterredData.map(ele => {
    return <ProductCard product={ele}/>
})}
 </div>
    )
}

export {PropertyListing}