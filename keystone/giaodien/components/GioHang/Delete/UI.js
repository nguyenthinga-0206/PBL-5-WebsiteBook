import HTML from "../../HTML";
export default function UI({ onDelete, resultDeleteUser }) {
  return (
    <div>
      <button style={{ marginLeft: 34, color: "blue" }} onClick={onDelete}>Delete</button>
      {resultDeleteUser?.error && HTML.generation(resultDeleteUser.error, 4)}
      {resultDeleteUser?.data && HTML.generation(resultDeleteUser.data, 4)}
    </div>
  );
}
