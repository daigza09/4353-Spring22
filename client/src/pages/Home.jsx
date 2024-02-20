import { Link } from "react-router-dom";
import HomePageContentBox from "../components/HomePageContentBox";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
       <div>
         <h1 className="text-5xl font-bold text-black mb-8 bg-white">Lesson and insights</h1>
         <p>Where to grow </p>
       </div>
       {/* <img> </img> */}
      </div> 

      <div className="rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-white">Want a fuel quote?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HomePageContentBox title="About Us" body="We are yay"></HomePageContentBox>
        <HomePageContentBox title="Idk yet" body="Read this yuh"></HomePageContentBox>
        <HomePageContentBox title="Contact Us" body="Daisy, Reem, Meron, Lisa"></HomePageContentBox>
      </div>
    </main>
  );
}

export default Home;



