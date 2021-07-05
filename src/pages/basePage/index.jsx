import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BasePage = () => {
  const selector = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Essa é a pagina base para treino de uso do redux {selector} </h2>
      <button onClick={() => dispatch({ type: "change", teste: "objeto" })}>
        click me
      </button>
    </div>
  );
};

export default BasePage;
