import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div className="pt-15 p-4 bg-gradient-to-br from-blue-50 to-white">
      <Hero />
      <Features />
      <AboutUs />
    </div>
  );
};

export default Home;
