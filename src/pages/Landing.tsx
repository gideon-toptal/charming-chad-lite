import Footer from "../components/Footer";
import Header, { PublicNavActions } from "../components/Header";

export default function Landing() {
  return (
    <div>
      <Header right={<PublicNavActions />} />
      <main></main>
      <Footer />
    </div>
  );
}
