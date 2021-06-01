export default function UI({ onDelete, resultDeleteUser }) {
  return (
    <div>
      <button style={{ marginLeft: 34, color: "blue" }} onClick={onDelete}>Delete</button>
    </div>
  );
}
