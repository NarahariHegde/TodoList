import React, { useState } from "react";
import Additems from "./Additems";
const TodoList = () => {
  const [val, setVal] = useState(" ");

  const [arr, setArr] = useState([]);

  const Events = e => {
    setVal(e.target.value);
  };
  const Add = () => {
    console.log("clicked");
    setArr(objectval => {
      return [...objectval, val];
    });

    setVal(" ");
  };

  const Remove = id => {
    console.log("removed");
    setArr(objectval => {
      return objectval.filter((element, index) => {
        return index !== id;
      });
    });
  };

  //   const Update = (id) => {
  //     console.log("updated");
  //     setVal((objectval)=>{
  //         return <li>{objectval}</li>;
  //     })
  //   };

  const Clear = () => {
    setArr([]);
  };

  return (
    <>
      <div className="main-class">
        <h1 className="head">TodoList</h1>
        <div className="container">
          <div className="textt">
            <input
              type="text"
              placeholder="add the list"
              value={val}
              onChange={Events}
            />
            <button onClick={Add} className="btna">
              add
            </button>
          </div>
        </div>
        <div>
          <ol>
            {arr.map((ele, index) => {
              return (
                <Additems text={ele} key={index} id={index} onDelete={Remove} />
              );
            })}
          </ol>
        </div>
        <div className="clearall">
          <button onClick={Clear} className="btnc">
            clear all
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
