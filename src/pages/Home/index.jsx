import { Container } from "../../global/components";
import Introduction from "../../components/HomeSection/Introduction";
import Services from "../../components/HomeSection/Services";
import ContactUs from "../../components/HomeSection/ContactUs";
import AboutSection from "../../components/HomeSection/AboutSection";
import Other from "../../components/HomeSection/Evaluate/Other";
import Subceribe from "../../components/HomeSection/Subceribe";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Container>
        <Introduction />
        <Services />
        <Other />
        <AboutSection />
        <Subceribe />
        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
