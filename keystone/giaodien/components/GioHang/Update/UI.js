import HTML from "../../HTML";

export default function UI({ user, handleChange, onUpdate, resultUpdateUser }) {
  return (
    <div>
      <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>
        Giỏ hàng
      </button>
    </div>
  );
}
