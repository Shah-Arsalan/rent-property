import { useState } from "react";
import { useData } from "../../DataContext";
import "./Filters.css"

const Filters = () => {

  const {appearLocation , setAppearLocation , appearWhen , setAppearWhen , appearPrice , setAppearPrice , appearType , setAppearType , setSearchValue } = useData();
  const {state , dispatch} = useData();
  const {location , when , price , type} = state;
    

  return (
    <div className="filter-container">
      <div className="filter-child" onClick={() => setAppearLocation(prev => !prev)}>
        <p className="filter-heading">Location</p>
        <p>{location}</p>
      </div>
      { appearLocation &&     <div className="radio-filters">
                    <div className="filter-element">
                      <input
                        value="Bengaluru"
                        type="radio"
                        id="Bengaluru"
                        onChange={()=>dispatch({
            type: "LOCATION",
            payload: { desiredlocation: "Bengaluru" },
          })}
                        name="location-filter"
                      />
                      <label className="filter-label" htmlFor="Bengaluru">
                        Bengaluru
                      </label>
                    </div>
                    <div className="filter-element">
                      <input
                        value="Delhi"
                        type="radio"
                        id="Delhi"
                        onChange={()=>dispatch({
            type: "LOCATION",
            payload: { desiredlocation: "Delhi" },
          })}
                        name="location-filter"
                      />
                      <label className="filter-label" htmlFor="Delhi">
                        Delhi
                      </label>
                    </div>
                  </div>}
      <div className="filter-child" onClick={() => setAppearWhen(prev => !prev)}>
        <p className="filter-heading">When</p>
        <p>{when}</p>
      </div>
      { appearWhen &&   <div className="radio-filters  date-filter">
                    <div className="filter-element">
                      <input
                        value="20-02-23"
                        type="radio"
                        id="20-02-23"
                        onChange={()=>dispatch({
            type: "WHEN",
            payload: { desireddate: "20-02-23" },
          })}
                        name="when-filter"
                      />
                      <label className="filter-label" htmlFor="20-02-23">
                      20-02-23
                      </label>
                    </div>
                    <div className="filter-element">
                      <input
                        value="21-02-23"
                        type="radio"
                        id="21-02-23"
                        onChange={()=>dispatch({
            type: "WHEN",
            payload: { desireddate: "21-02-23" },
          })}
                        name="when-filter"
                      />
                      <label className="filter-label" htmlFor="21-02-23">
                      21-02-23
                      </label>
                    </div>
                  </div>}
      <div className="filter-child" onClick={() => setAppearPrice(prev => !prev)}>
        <p className="filter-heading">Price</p>
        <p>{price && `₹ ${price}`}</p>
      </div>
      { appearPrice &&     <div className="radio-filters price-filters">
                    <div className="filter-element">
                      <input
                        value="500-2500"
                        type="radio"
                        id="500-2500"
                        onChange={()=>dispatch({
            type: "PRICE",
            payload: { desiredprice: "500-2500" },
          })}
                        name="price-filter"
                      />
                      <label className="filter-label" htmlFor="500-2500">
                       500-2500
                      </label>
                    </div>
                    <div className="filter-element">
                      <input
                        value="2501-5000"
                        type="radio"
                        id="2501-5000"
                        onChange={()=>dispatch({
            type: "PRICE",
            payload: { desiredprice: "2501-5000" },
          })}
                        name="price-filter"
                      />
                      <label className="filter-label" htmlFor="2501-5000">
                        2501-5000
                      </label>
                    </div>
                  </div>}
      <div className="filter-child" onClick={() => setAppearType(prev => !prev)}>
        <p className="filter-heading">Property Type</p>
        <p>{type}</p>
      </div>
      { appearType &&     <div className="radio-filters type-filters">
                    <div className="filter-element">
                      <input
                        value="single-family"
                        type="radio"
                        id="single-family"
                        onChange={()=>dispatch({
            type: "TYPE",
            payload: { desiredtype: "single-family" },
          })}
                        name="type-filter"
                      />
                      <label className="filter-label" htmlFor="single-family">
                       Single Family
                      </label>
                    </div>
                    <div className="filter-element">
                      <input
                        value="multiple-family"
                        type="radio"
                        id="multiple-family"
                        onChange={()=>dispatch({
            type: "TYPE",
            payload: { desiredtype: "multiple-family" },
          })}
                        name="type-filter"
                      />
                      <label className="filter-label" htmlFor="multiple-family">
                        Multiple Family
                      </label>
                    </div>
                  </div>}
      <div className="filter-child search-button">

      <button class="primary-button" onClick={()=> { 

        dispatch({type : "CLEARFILTERS"});
        setSearchValue("")


      } }>
              Clear Filters
            </button>

      </div>
    </div>
  );
};


export {Filters}