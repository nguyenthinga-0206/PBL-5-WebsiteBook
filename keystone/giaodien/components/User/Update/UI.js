import HTML from "../../HTML";

export default function UI({ user, handleChange, onUpdate, resultUpdateUser }) {
  return (
    <div>
      name
      <input
        name="name"
        onChange={handleChange("name")}
        defaultValue={user.name}
      />
      email
      <input 
        name="email" 
        onChange={handleChange("email")} 
        defaultValue={user.email}
      />
      password
      <input
        type="password"
        name="password"
        onChange={handleChange("password")}
        defaultValue={user.password}
      />
      <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>
        Update
      </button>
      {resultUpdateUser?.error && HTML.generation(resultUpdateUser.error, 4)}
      {resultUpdateUser?.data && HTML.generation(resultUpdateUser.data, 4)}
    </div>
  );
}
