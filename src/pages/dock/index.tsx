export default function Dock() {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <div>
        <p>Account: Free for now</p>
        <p>Upgrade to unlock more</p>
        <button>Upgrade</button>
      </div>

      <div>
        <div>
          <p>Premium</p>
          <p>No more waiting</p>
          <button>upgrade</button>
        </div>
        <div>
          <p>Vibe Room - Locked 🔒</p>
          <p>Meet Ups Room - Locked 🔒</p>
        </div>
      </div>
      <div>
        <p>Chat</p>
        <p>Your chats will show up here</p>
        <p>
          Quiet for now. Head into the vibe room or meet up and stir things up{" "}
        </p>
      </div>
      <div>
        <p>Latest pickup lines</p>
        <p>Explore, react and have fun</p>
      </div>
    </div>
  );
}
