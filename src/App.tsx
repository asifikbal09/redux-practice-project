import "./App.css";
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const {count} = useAppSelector((state)=>state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="border border-spacing-2 rounded-md border-orange-600 p-16 bg-slate-200">
        <h1 className="text-5xl text-center">{count}</h1>
        <div className="flex justify-center gap-5 my-5">
          <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white ">
            Increment
          </button>
          <button onClick={()=>dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white ">
            Increment By 5
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
