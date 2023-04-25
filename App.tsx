import { Fragment } from "react";
import HomeScreen from "./src/screens/home/home-screen";
import UserScreen from "./src/screens/user/user-screen";
import ChatScreen from "./src/screens/chat/chat-screen";

export default function App() {
  return (
    <Fragment>
      <ChatScreen />
    </Fragment>
  );
}
