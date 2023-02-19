import { useContext  , useReducer, useState} from "react";
import { createContext } from "react";
import { DataReducer, initialState } from "./DataReducer";




const DataContext = createContext();
const DataProvider = ({ children }) => {

    const [appearLocation , setAppearLocation] = useState(false)
    const [appearWhen , setAppearWhen] = useState(false)
    const [appearPrice , setAppearPrice] = useState(false)
    const [appearType , setAppearType] = useState(false)
    const [location ,setLocation] = useState("")
    const[searchValue , setSearchValue] = useState("")
    const [state, dispatch] = useReducer(DataReducer, initialState);
    


  return (
    <DataContext.Provider value={{ appearLocation , setAppearLocation , appearWhen , setAppearWhen , appearPrice , setAppearPrice , appearType , setAppearType , location , setLocation ,state , dispatch , searchValue , setSearchValue}}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
