import Footer from "../components/Footer";
import Header from "../components/Header";
import PublicNavActions from "../components/Header/PublicNavActions";

export default function Landing() {
  return (
    <div>
      <Header right={<PublicNavActions />} />
      <main></main>
      <Footer />
    </div>
  );
}
