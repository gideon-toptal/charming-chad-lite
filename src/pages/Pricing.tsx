export default function Pricing() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Play for free</h1>
        <ul>
          <li>Earn access by rating lines</li>
          <li>Default avatar & username</li>
        </ul>
        <button>Start for free</button>
      </div>
      <div>
        <h1>
          Premium access <span>$9.99/mo</span>
        </h1>
        <ul>
          <li>Skip the rating requirement</li>
          <li>Choose your avatar & username</li>
          <li>Enter the vibe room and Meet ups instantly</li>
          <li>Play with pickup lines anytime</li>
        </ul>
        <button>Unlock access now</button>
      </div>
    </div>
  );
}
