import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { c } = useSelector((state) => state.custome);

  // dispatch
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "increament"
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement"
    });
  };

  const IncrementByValue = () => {
    dispatch({
      type: "increamentByValue",
      payload: 25
    });
  };

  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={IncrementByValue}>IncrementBy25</button>
    </div>
  );
}
export default Home;
