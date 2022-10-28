import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice"

export function Counter() {
    const count  = useSelector((state) => state.counter.value)
    const dispath = useDispatch();

    return(
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispath(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispath(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispath(incrementByAmount("5"))}
        >
          Decrement
        </button>
      </div>
    </div>
    )
}