import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {

  const {count} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="border border-spacing-2 rounded-md border-orange-600 p-16 bg-slate-200">
        <h1 className="text-5xl text-center">{count}</h1>
        <div className="flex justify-center gap-5 my-5">
          <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white ">
            Increment
          </button>
          <button onClick={()=>dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white ">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
