interface Chat {
  username: string;
  messagePreview: string;
  lastUpdate: string;
}
const chatsData: Chat[] = [
  {
    username: "John Doe",
    messagePreview: "Hi, I was waiting for the right person to notice",
    lastUpdate: "Today",
  },
  {
    username: "Dave G",
    messagePreview: "Hi, I was waiting for the right person to notice",
    lastUpdate: "Today",
  },
  {
    username: "John Doe",
    messagePreview: "Hi, I was waiting for the right person to notice",
    lastUpdate: "Today",
  },
  {
    username: "Dave G",
    messagePreview: "Hi, I was waiting for the right person to notice",
    lastUpdate: "Today",
  },
];
export default function VibeRoomChats() {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Vibe Room chats</h1>
      <input placeholder="🔍 Search for username or word" />
      <ul>
        {chatsData.map(({ username, messagePreview }) => (
          <div>
            <p>{username}</p>
            <p>{messagePreview}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
