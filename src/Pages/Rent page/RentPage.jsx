import "./RentPage.css"
import { Filters } from "../../components/Filters/Filters"
import { Searchbar } from "../../components/Searchbar/Searchbar"
import { useData } from "../../DataContext"
import { PropertyListing } from "../../components/PropertyListing/PropertyListing"

const RentPage = () => {
    const {appearLocation , setAppearLocation , appearWhen , setAppearWhen , appearPrice , setAppearPrice , appearType , setAppearType} = useData();
    return(
        <div className="rent-page">
            <Searchbar/>
            <Filters/>
            <PropertyListing/>
        </div>
    )
}

export {RentPage}