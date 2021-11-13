import {ExampleWrapper} from "../../wasm-wrappers/example-wrapper";

function Demo() {
  return <div>
    <button onClick={() => console.log(ExampleWrapper.add(1, 10))}>Test Add</button>
    <button onClick={() => console.log(ExampleWrapper.subtract(1, 10))}>Test Subtract</button>
    <button onClick={() => console.log(ExampleWrapper.sumOfElements([1, 2, 3, 4, 5, -5]))}>Test Sum of array</button>
    <button onClick={() => console.log(ExampleWrapper.addTwoArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))}>Test Sum of
      arrays
    </button>
    <button onClick={() => console.log(ExampleWrapper.applyTh([1, 2, 3, 4, 5], 3))}>Test th</button>
  </div>
}

export default Demo;
