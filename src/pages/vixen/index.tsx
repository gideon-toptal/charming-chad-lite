import Header from "../../components/Header";
import AuthenticatedNavActions from "../../components/Header/AuthenticatedNavActions";
import FAQs from "../FAQs";
import Pricing from "../Pricing";

export default function Vixen() {
  return (
    <div>
      <Header right={<AuthenticatedNavActions />} />
      <h1>Welcome</h1>
      As a vixen you set the vibe
      <div>
        <p> You get to:</p>
        <ul>
          <li>Play with pickup lines</li>
          <li>Flirt in Vibe Room & Meet Ups</li>
          <li>Block or report anytime - your space, your rules</li>
        </ul>
      </div>
      <Pricing />
      <FAQs />
    </div>
  );
}
