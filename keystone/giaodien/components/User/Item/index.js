import UI from "./UI";

export default function UserItem({ UI, user }) {
  return (
    <div>
      <UI user={user} />
    </div>
  );
}
