import HTML from "../../HTML";


export default function UI({ handleChange, onUpdate, resultUpdateUser }) {
  return (
    <div>name
      <input name="name" onChange={handleChange("name")} />email
      <input name="email" onChange={handleChange("email")} />password
      <input
        type="password"
        name="password"
        onChange={handleChange("password")}
      />
      <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>Update</button>
      {resultUpdateUser?.error && HTML.generation(resultUpdateUser.error, 4)}
      {resultUpdateUser?.data && HTML.generation(resultUpdateUser.data, 4)}
    </div>
  );
}
