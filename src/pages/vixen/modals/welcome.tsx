import QuestionLink from "../../../components/QuestionLink";
import { pricingLink } from "../../../utils/links";

export default function Welcome() {
  return (
    <div>
      <h1>Congrats, you're in</h1>
      <p> You are playing as a vixen</p>
      <p>Username: Vixen</p>
      <QuestionLink question="Edit username?" link={pricingLink} />

      <p>Enjoy flirtatious messages</p>
      <p>Enjoy some awkward messages</p>
      <p>Block or report any users/players</p>

      <button>Continue</button>
    </div>
  );
}
