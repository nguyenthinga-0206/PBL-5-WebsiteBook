import HTML from "../../HTML";

export default function UI({ chitiet, handleClick, onUpdate, resultUpdateChitiet }) {
  return (
    <div>
      <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>
        Update
      </button>
      {resultUpdateChitiet?.error && HTML.generation(resultUpdateChitiet.error, 4)}
      {resultUpdateChitiet?.data && HTML.generation(resultUpdateChitiet.data, 4)}
    </div>
  );
}
