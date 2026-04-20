import "./rating.css";
interface PickupLine {
  id: number;
  line: string;
  location: string;
  rating: number;
}
const pickupLines: PickupLine[] = [
  {
    id: 1,
    line: "You look like someone with good stories.",
    location: "Hideout Bar . Charleston",
    rating: 1,
  },
];

interface Rating {
  display: string;
  rating: number;
}
const PICK_UP_LINES_RATINGS: Rating[] = [
  { display: "🔥", rating: 5 },
  { display: "😂", rating: 4 },
  { display: "🙂", rating: 3 },
  { display: "😬", rating: 2 },
  { display: "⏭️", rating: 1 },
];
export default function RatePickupLines() {
  return (
    <div>
      <h2>Rate lines to get access</h2>

      {/* Pagination  */}
      <div>
        <p>1 of 50</p>
      </div>
      {/* Lines list  */}

      <div>
        {pickupLines.map(({ id, line, location, rating }) => (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p>{line}</p>
              <p>{location}</p>
            </div>
            <div className="line-rating">
              <ul>
                {PICK_UP_LINES_RATINGS.map((pickupRating) => (
                  <li
                    key={pickupRating.rating}
                    className={`${
                      rating === pickupRating.rating ? "active" : ""
                    }`}
                  >
                    {pickupRating.display}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
