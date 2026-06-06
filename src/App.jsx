import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Diagnostic from "./components/Diagnostic";
import Review from "./components/Review";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";
import "./App.css";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Diagnostic />
      <Review />
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === "/services") {
    return <ServicePage />;
  }

  return <HomePage />;
}

export default App;