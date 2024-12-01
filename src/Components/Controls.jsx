import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store/Counter";
import { privacyActions } from "../Store/Privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    if (!inputEle.current.value) return;
    dispatch(counterActions.add(inputEle.current.value));
    inputEle.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.togglePrivacy());
  };
  const handleSubtract = () => {
    if (!inputEle.current.value) return;
    dispatch(counterActions.subtract(inputEle.current.value));
    inputEle.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3 ">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4 me-sm-3 fw-bold"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <div className="input-group input-group-lg w-50">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Enter number
          </span>
          <input
            type="number"
            min={0}
            className="form-control w-25"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            ref={inputEle}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
