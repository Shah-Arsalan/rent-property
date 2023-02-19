const sortBySearch = (state , data ) => {
    if (state.searched === "") {
      return data;
    }
    return data.filter((el) =>
      el.name.toLowerCase().includes(state.searched.toLowerCase())
    );
  };


  const sortByLocation = (state , data ) => {
    if (state.location === "Bengaluru") {
    return data.filter((el) =>
      el.location === "Bengaluru"
    );
    }

    if (state.location === "Delhi") {
        return data.filter((el) =>
        el.location === "Delhi"
        );
        }

        return data;
  };


  const sortByDate = (state , data ) => {
    if (state.when === "20-02-23") {
    return data.filter((el) =>
      el.when === "20-02-23"
    );
    }

    if (state.when === "21-02-23") {
        return data.filter((el) =>
        el.when === "21-02-23"
        );
        }

        return data;
  };


  const sortByPrice = (state , data ) => {
    if (state.price === "500-2500" ) {
    return data.filter((el) =>
      el.price >= 500 && el.price <= 2500
    );
    }

    if (state.price === "2501-5000" ) {
        return data.filter((el) =>
        el.price >= 2501 && el.price <= 5000
        );
        }

        return data;
  };



  const sortByType = (state , data ) => {
    if (state.type === "single-family" ) {
    return data.filter((el) =>
      el.type === "single-family"
    );
    }

    if (state.type === "multiple-family" ) {
        return data.filter((el) =>
          el.type === "multiple-family"
        );
        }

        return data;
  };



  export {sortBySearch , sortByLocation , sortByDate , sortByPrice , sortByType}