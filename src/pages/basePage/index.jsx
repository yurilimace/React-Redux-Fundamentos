import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadDogList } from "../../actions/dogsActions";
import { ChangeMessage } from "../../actions/messageActions";
import BaseApi from "../../backend/baseApi";

const BasePage = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(selector, "<----- selector state");
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
      <button onClick={() => dispatch(ChangeMessage())}>click me</button>
      <button onClick={() => dispatch(LoadDogList())}>show dog list</button>
      <div style={{ marginLeft: "10px" }}>
        {selector.Dogs.listofDogs.map((e) => (
          <>
            <h5> tipo da raça: {e.name} </h5>
            <ul>
              {e.list.map((l) => (
                <>
                  <li> variação:{l} </li>
                </>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default BasePage;
