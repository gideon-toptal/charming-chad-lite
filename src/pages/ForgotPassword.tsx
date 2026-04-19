import QuestionLink from "../components/QuestionLink";
import { signUpLink } from "../utils/links";

export default function ForgotPassword() {
  return (
    <div>
      <p>Forgot your password?</p>
      <p>No problem, we'll email you instructions to reset your password</p>
      <label> Enter your email</label>
      <input type="email" />
      <input type="submit" value="Submit" />
      <a href="/login">Back to login</a>
      <QuestionLink question="Don't have an account?" link={signUpLink} />
    </div>
  );
}
