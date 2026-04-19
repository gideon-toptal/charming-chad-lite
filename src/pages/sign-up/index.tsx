import type { SubmitEvent } from "react";
import QuestionLink from "../../components/QuestionLink";
import { loginLink } from "../../utils/links";
import Footer from "../../components/Footer";

export default function SignUp() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>Let's get you set up</h2>
      <form onSubmit={handleSubmit}>
        <label>First and last name</label>
        <input placeholder="name" />

        <label>Username</label>
        <input placeholder="username" />

        <label>Email</label>
        <input type="email" placeholder="girliesloveme@gmail.com" />

        <label>Phone number</label>
        <input placeholder="+16412331475" />

        <label>Password</label>
        <input type="password" placeholder="Badman" />

        <p>Gender</p>
        <input type="radio" id="male" name="gender" value="male" checked />
        <label htmlFor="male">Man</label>

        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Woman</label>

        <input
          type="radio"
          id="declineToIdentify"
          name="gender"
          value="declineToIdentify"
        />
        <label htmlFor="declineToIdentify">Prefer to not say</label>

        <div>
          <input type="checkbox" id="terms" name="terms" value="terms" />
          <label htmlFor="terms">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        <input type="submit" value="Continue" />
        <QuestionLink question="Already have an account?" link={loginLink} />
      </form>

      <Footer />
    </div>
  );
}
