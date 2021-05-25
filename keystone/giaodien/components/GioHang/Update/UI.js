import HTML from "../../HTML";

export default function UI({ user, handleChange, onUpdate, resultUpdateUser }) {
  return (
    <div>
      <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>
        Giỏ hàng
      </button>
      {resultUpdateUser?.error && HTML.generation(resultUpdateUser.error, 4)}
      {resultUpdateUser?.data && HTML.generation(resultUpdateUser.data, 4)}
    </div>
  );
}
