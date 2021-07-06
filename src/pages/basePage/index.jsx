import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const BasePage = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(selector, "<----- selector result");
  }, [selector]);
  return (
    <div>
      <h2>
        {" "}
        Essa é a pagina base para treino de uso do redux{" "}
        {selector.User.User.Name} - {selector.User.User.Age} -{" "}
        {selector.Message.message}
      </h2>
      <button
        onClick={() => dispatch({ type: "change", Name: "yuri", Age: 28 })}
      >
        click me
      </button>
      <button
        onClick={() =>
          dispatch({ type: "changeMessage", teste: "nova Mensagem" })
        }
      >
        click me
      </button>
    </div>
  );
};

export default BasePage;
