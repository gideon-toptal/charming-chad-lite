import { useState } from "react";

export default function AgeVerification() {
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Welcoming to charming chad</p>
      <p>Please verify your age to enter</p>
      <p>You must be 21 or older to play the game</p>
      <form onSubmit={handleSubmit}>
        {" "}
        <label>Date of birth</label>
        <input type="date" placeholder="MM" />
        <div>
          <input
            type="checkbox"
            id="confirmation"
            name="scales"
            checked={confirmation}
            onChange={() => setConfirmation(!confirmation)}
          />
          <label htmlFor="confirmation">I confirm i am 21 or older</label>
        </div>
        <input type="submit" value="Continue" />
      </form>
    </div>
  );
}
