// Step 2: Define what happens when an action is fired.

const productsReducer = (state, action) => {
  switch (action.type) {
    case "delete":
      const newProducts = [...state];
      newProducts.splice(action.index, 1);
      return [...newProducts];

    case "fetchProducts":
      return [...action.payload];
  }
};

export default productsReducer;
