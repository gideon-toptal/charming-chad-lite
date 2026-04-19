export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
