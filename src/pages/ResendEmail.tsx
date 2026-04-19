export default function ResendEmail() {
  const handleResendEmail = () => {};
  return (
    <div>
      <p>Forgot your password?</p>
      <p>Link sent, Check your inbox for instructions</p>

      <button onClick={handleResendEmail}>Resend email</button>
      <a href="/login">Back to login</a>
      <p>
        Don't have an account? <a href="/sign-up">Sign up</a>
      </p>
    </div>
  );
}
