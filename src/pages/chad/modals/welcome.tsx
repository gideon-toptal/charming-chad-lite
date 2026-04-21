import QuestionLink from "../../../components/QuestionLink";
import { pricingLink } from "../../../utils/links";

export default function Welcome() {
  const username = "chad";
  return (
    <div>
      <h1>Congrats, you're in</h1>
      <p> You are playing as: {username}</p>
      <p>Username: Vixen</p>
      <QuestionLink question="Edit username?" link={pricingLink} />

      <p>Flirting is the game</p>
      <p>Respect is the rule</p>
      <p>Keep it fun, flirty and human</p>

      <button>Continue</button>
    </div>
  );
}
