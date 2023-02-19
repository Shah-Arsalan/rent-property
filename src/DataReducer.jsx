const initialState = {
  location: "",
  when: "",
  price: "",
  type: "",
  searched: "",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOCATION":
      console.log(action.payload);
      return {
        ...state,
        location: action.payload.desiredlocation,
      };

    case "WHEN": {
      return {
        ...state,
        when: action.payload.desireddate,
      };
    }

    case "PRICE": {
      return {
        ...state,
        price: action.payload.desiredprice,
      };
    }

    case "TYPE": {
      return {
        ...state,
        type: action.payload.desiredtype,
      };
    }

    case "SEARCHFILTER": {
      return {
        ...state,
        searched: action.payload.value,
      };
    }

    case "CLEARFILTERS": {
      return {
        ...state,
        location: "",
        when: "",
        price: "",
        type: "",
        searched: "",
      };
    }

    default:
      return state;
  }
};

export { DataReducer, initialState };
