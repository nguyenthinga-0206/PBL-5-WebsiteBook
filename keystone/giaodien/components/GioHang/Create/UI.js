import HTML from "../../HTML";

export default function UI({CartItems, onCreate, resultCreateCart }) {
  return (
    <div>
      <button onClick={onCreate}>Tăng</button>
      {resultCreateCart?.error && HTML.generation(resultCreateCart.error, 4)}
      {resultCreateCart?.data && HTML.generation(resultCreateCart.data, 4)}
    </div>
  );
}
