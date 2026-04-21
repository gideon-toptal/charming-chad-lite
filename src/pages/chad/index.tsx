import Header from "../../components/Header";
import AuthenticatedNavActions from "../../components/Header/AuthenticatedNavActions";
import Welcome from "./modals/welcome";

const locations = [
  {
    name: "Hideout Bar",
    tags: ["Sports", "Pool", "Casual", "Busy", "Tonight"],
    promo: "Happy hour",
  },
  {
    name: "By The Way",
    tags: ["Dance", "Club", "Late"],
    promo: "Latin night hour",
  },
  {
    name: "Dog Park",
    tags: ["Casual", "Daytime"],
    promo: "Latin night hour",
  },
  {
    name: "Coffee Shop Way",
    tags: ["Quiet", "Morning"],
    promo: "Latin night hour",
  },
];
export default function Chad() {
  return (
    <div>
      <Header right={<AuthenticatedNavActions />} />
      <Welcome />

      <div>
        <h1>Hi, Chad.</h1>
        <label>
          Explore places near you:
          <select>
            <option>Charleston, SC</option>
          </select>
        </label>
        <div>
          {locations.map(({ name, tags }) => (
            <div>
              <h3>{name}</h3>
              <div style={{ display: "flex" }}>
                {tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
