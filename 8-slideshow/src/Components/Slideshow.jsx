import Slide from "./Slide";
import Controls from "./Controls";
import "./style.css";
import { useState, useEffect, useReducer } from "react";
import productsReducer from "./productsReducer";

const API_URL = "https://dummyjson.com/products";

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  // Step 3: Wire up the reducer
  const [products, dispatch] = useReducer(productsReducer, {});

  const deleteSlide = () => {
    //Step 1: dispatch an action
    const action = {
      type: "delete",
      index: index,
    };

    dispatch(action);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Failed to fetch data");

        const jsonData = await response.json();
        dispatch({
          type: "fetchProducts",
          payload: jsonData?.products,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="slideshow-container">
      {products.length > 0 && (
        <>
          <Slide data-qa="slide" products={products} activeIndex={index} />
          <Controls
            data-qa="controls"
            activeIndex={index}
            setActiveIndex={setIndex}
          />
          <button onClick={deleteSlide}>Delete slide</button>
        </>
      )}
    </div>
  );
};

export default Slideshow;
