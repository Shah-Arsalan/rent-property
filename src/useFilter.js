import { useData } from "./DataContext";
import { properties } from "./DummyData";
import { sortByDate, sortByLocation, sortByPrice, sortBySearch, sortByType } from "./FilterFuctions";

const useFilter = () => {
  const { state } = useData();
  const productData = properties;
  const searchedData = sortBySearch(state , productData)
  const locatedData = sortByLocation(state, searchedData);
  const DatedData = sortByDate(state, locatedData);
  const PricedData = sortByPrice(state, DatedData);
  const finalData = sortByType(state , PricedData)
  return { filterredData: finalData};
};

export { useFilter };
