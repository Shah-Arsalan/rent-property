import { useData } from "../../DataContext";
import "./Searchbar.css"
const Searchbar = ()=> {
    const { dispatch , searchValue, setSearchValue}= useData();
    return(
        <div className="search-container">
        <div className="search-text">
Search Properties to Rent
        </div>
<input 
value={searchValue}
type="search" 
placeholder="Search with Search bar.."
onChange={(e) => {
    setSearchValue(e.target.value)
                dispatch({
                    type: "SEARCHFILTER",
                    payload: {
                      value: e.target.value,
                    },
                  });
              }}
className="search-box"
/>
        </div>
    )
}

export {Searchbar}