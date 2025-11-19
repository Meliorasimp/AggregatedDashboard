import LandingpageNavbar from "../components/LandingpageNavbar";
import "../styles/index.css";
import Github from "../assets/github.png";
import Weather from "../assets/atmospheric-conditions.png";
import Coin from "../assets/coin.png";
import Spotify from "../assets/spotify.png";
import Rocket from "../assets/rocket.png";
import News from "../assets/newspaper.png";
import { type RootState } from "../store";
import { useSelector } from "react-redux";
import RegisterModal from "../components/RegisterModal";
const Landingpage = () => {
  const isRegisterModalOpen = useSelector(
    (state: RootState) => state.interaction.isRegisterModalOpen
  );

  console.log(isRegisterModalOpen);
  const APIlist: Array<{
    name: string;
    description: string;
    image: string;
    altImage: string;
  }> = [
    {
      name: "Github API",
      description:
        "Fetch your Github Data to track your User statistics such as Code changes, Repositories and more...",
      image: Github,
      altImage: "Github API",
    },
    {
      name: "Open Weather API",
      description:
        "Fetch your Weather Data based on Your Locations to display statistics such as Humidity, Chance of rain and more...",
      image: Weather,
      altImage: "Open Weather API",
    },
    {
      name: "Coin Gecko API",
      description:
        "Get Crypto Prices, Market trends, Coins and Charts all in your own Dashboard",
      image: Coin,
      altImage: "Coin Gecko API",
    },
    {
      name: "Spotify Web API",
      description:
        "Track your Songs, playlists, top artists and much more in your own Dashboard",
      image: Spotify,
      altImage: "Spotify Web API",
    },
    {
      name: "NASA Open APIs",
      description:
        "Fetch Space Imagery, Astronomy data, Mars rover from NASA Open-source APIs ",
      image: Rocket,
      altImage: "NASA Open APIs",
    },
    {
      name: "GNews API",
      description:
        "Find out what’s Happening in your Country using GNews.io’s Open-Source APIs",
      image: News,
      altImage: "GNews API",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <LandingpageNavbar />
      <section className="h-[90vh] w-8/10 gap-4 flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Choose your APIs
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Build Your Dashboard
          </h2>
          <p className="text-xl text-gray-600 w-4/5 leading-relaxed">
            Connect powerful APIs, build flexible dashboards, and streamline
            your workflow. Whether for analytics, weather, finance, or
            productivity — design data-driven dashboards that work for you.
          </p>
          <button className="bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-xl mt-6 w-fit font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="h-4/5 w-full p-4">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50">
              <div className="col-span-1 row-span-1 bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">City</div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">☁️</span>
                      <span className="text-xl font-semibold">68°C</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 row-span-1 bg-linear-to-br from-purple-100 to-purple-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm font-semibold mb-3 text-purple-900">
                  News
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-purple-200 rounded"></div>
                  <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                  <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                </div>
              </div>

              <div className="col-span-1 row-span-1 bg-linear-to-br from-green-100 to-green-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex items-center justify-center">
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-green-200 rounded"></div>
                    <div className="h-3 bg-green-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-1 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex items-center justify-center">
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-orange-200 rounded"></div>
                    <div className="h-3 bg-orange-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 row-span-1 bg-linear-to-br from-indigo-100 to-indigo-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-2">
                  <div className="h-4 bg-indigo-200 rounded"></div>
                  <div className="h-3 bg-indigo-200 rounded w-4/5"></div>
                  <div className="h-3 bg-indigo-200 rounded w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[90vh] w-8/10 gap-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Seamless APIs. Infinite Possibilities
        </h1>
        <h3 className="text-2xl font-medium text-gray-600">
          Your Connection to Real-time Intelligence
        </h3>
        <div className="w-full h-full mt-10 grid grid-cols-3 gap-8 rounded-2xl p-8 place-items-center">
          {APIlist.map((api, index) => (
            <div
              key={index}
              className="w-80 bg-white h-56 rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer group"
            >
              <div className="w-16 h-16 mb-3 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={api.image} alt={api.altImage} className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold text-gray-800 mb-2">
                {api.name}
              </span>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {api.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-30 h-[140vh] w-8/10 gap-4 flex flex-col">
        <h1 className="text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Powerful Features, Seamless Experience
        </h1>
        <p className="text-gray-600 text-2xl w-2/3 leading-relaxed">
          Customize your data universe — all your favorite APIs in one
          intelligent dashboard.
        </p>
        <div className="h-[40vh] flex gap-x-8">
          <div className="bg-linear-to-br from-purple-100 to-pink-100 mt-8 h-full rounded-3xl shadow-xl border border-purple-200 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center w-8/12">
            <img src={Coin} alt="" className="w-12 h-12 rounded-2xl" />
            <h1 className="text-2xl mt-4 font-semibold">
              Multi API Integration
            </h1>
            <div className="mt-4 text-lg leading-loose">
              Connect to multiple data sources — from Weather, Finance, News,
              Sports, to GitHub — and visualize everything in one unified
              dashboard. Create your own control center that keeps every insight
              right at your fingertips.
            </div>
          </div>
          <div className="bg-linear-to-br from-purple-100 to-pink-100 mt-8 h-full rounded-3xl shadow-xl border border-purple-200 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center w-4/12">
            <img src={Coin} alt="" className="w-12 h-12 rounded-2xl" />
            <h1 className="text-2xl mt-4 font-semibold">Dynamic Widget</h1>
            <div className="mt-4 text-lg leading-loose">
              Build your perfect dashboard with dynamic widgets that bring your
              APIs to life.
            </div>
          </div>
        </div>
        <div className="h-[40vh] flex gap-x-8 mt-4">
          <div className="bg-linear-to-br from-purple-100 to-pink-100 mt-8 h-full rounded-3xl shadow-xl border border-purple-200 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center w-4/12">
            <img src={Coin} alt="" className="w-12 h-12 rounded-2xl" />
            <h1 className="text-2xl mt-4 font-semibold">
              Multi API Integration
            </h1>
            <div className="mt-4 text-lg leading-loose">
              Connect to multiple data sources — from Weather, Finance, News,
              Sports, to GitHub — and visualize everything in one unified
              dashboard.
            </div>
          </div>
          <div className="bg-linear-to-br from-purple-100 to-pink-100 mt-8 h-full rounded-3xl shadow-xl border border-purple-200 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center w-8/12">
            <img src={Coin} alt="" className="w-12 h-12 rounded-2xl" />
            <h1 className="text-2xl mt-4 font-semibold">Real-Time Updates</h1>
            <div className="mt-4 text-lg leading-loose">
              Stay ahead with live, auto-refreshing data from all your connected
              APIs. Whether it’s weather conditions, stock prices, news
              headlines, or GitHub activity — your dashboard updates instantly
              so you never miss a moment. Watch insights change in real time,
              without ever needing to refresh the page.
            </div>
          </div>
        </div>
      </section>
      {isRegisterModalOpen && <RegisterModal />}
    </div>
  );
};

export default Landingpage;
