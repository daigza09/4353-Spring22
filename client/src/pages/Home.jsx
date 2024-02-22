import { Link } from "react-router-dom";
import HomePageContentBox from "../components/HomePageContentBox";
import insightsImage from "../assets/farawayOIL.jpeg";
import aboutUsImage from "../assets/AboutUs.jpeg";
import whyChooseUsImage from "../assets/WhyChooseUs.jpeg";
import ourServicesImage from "../assets/Oil.jpeg";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-lg p-8 shadow-md mb-8">
          <div className="text-left md:w-1/2 md:pr-8">
            <h1 className="text-6xl font-bold text-black mb-4">Fuel Quotes Made Easy</h1>
            <p className="text-lg text-gray-700 mb-4">Get instant fuel quotes tailored to your needs. Our easy-to-use platform provides accurate fuel quotes based on your requirements, helping you plan your journey with confidence.</p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src={insightsImage} alt="Insights" className="rounded-lg" />
          </div>
        </div>
      </div> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <HomePageContentBox
          title="About Us"
          body="We are committed to providing the best fuel quotes and services to our customers."
          image={aboutUsImage}
        />
        <HomePageContentBox
          title="Why Choose Us"
          body="Our streamlined process ensures you get the best fuel quotes without any hassle."
          image={whyChooseUsImage}
        />
        <HomePageContentBox
          title="Our Services"
          body="From competitive pricing to exceptional customer service, we've got you covered."
          image={ourServicesImage}
        />
      </div>
      <div className="mt-12 text-center"> 
        <p className="text-xl text-gray-700 mb-4">Ready to get started?</p> 
        <Link to="/FuelForm" className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-lg">Get Your Fuel Quote</Link> {/* Increase button size */}
      </div>
    </main>
  );
}

export default Home;
