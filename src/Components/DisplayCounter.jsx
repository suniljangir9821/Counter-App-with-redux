import { useSelector } from "react-redux";
const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="fs-1 mb-4"> Counter Current value: {counterVal}</p>;
};
export default DisplayCounter;
