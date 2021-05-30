import HTML from "../../HTML";

export default function UI({handleIncrease,handleDecrease, onCreate, resultCreateCart }) {
  return (
    <div>
      <button onClick={handleIncrease}>+</button>

      <button onClick={handleDecrease}>-</button>
      <button type="submit" onClick={onCreate}>Add to Cart</button>
      {resultCreateCart?.error && HTML.generation(resultCreateCart.error, 4)}
      {resultCreateCart?.data && HTML.generation(resultCreateCart.data, 4)}
    </div>
  );
}
