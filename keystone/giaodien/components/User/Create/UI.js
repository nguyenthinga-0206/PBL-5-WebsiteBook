import HTML from "../../HTML";

export default function UI({ handleChange, onCreate, resultCreateUser }) {
  return (
    <div>
      <input name="name" onChange={handleChange("name")} />
      <input name="email" onChange={handleChange("email")} />
      <input
        type="password"
        name="password"
        onChange={handleChange("password")}
      />
      <button onClick={onCreate}>create</button>
      {resultCreateUser?.error && HTML.generation(resultCreateUser.error, 4)}
      {resultCreateUser?.data && HTML.generation(resultCreateUser.data, 4)}
    </div>
  );
}
