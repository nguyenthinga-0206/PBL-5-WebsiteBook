import Chat from "./Chat";
export default {
  pages: (props) => {
    return [
      {
        label: "chat",
        path: "chat",
        component: Chat,
      },
    ];
  },
};
