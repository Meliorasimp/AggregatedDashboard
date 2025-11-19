import LandingpageNavbar from "../components/LandingpageNavbar";
import "../styles/index.css";
import Github from "../assets/github.png";
import Weather from "../assets/atmospheric-conditions.png";
import Coin from "../assets/coin.png";
import Spotify from "../assets/spotify.png";
import Rocket from "../assets/rocket.png";
import News from "../assets/newspaper.png";
const Landingpage = () => {
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
    <div className="min-h-screen flex justify-center items-center flex-col bg-white">
      <LandingpageNavbar />
      <section className="h-[90vh] w-8/10 gap-4 flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-semibold mb-4">Choose your APIs</h1>
          <h2 className="text-3xl gray font-semibold mb-4">
            Build Your Dashboard
          </h2>
          <p className="text-xl gray w-4/5">
            Connect powerful APIs, build flexible dashboards, and streamline
            your workflow. Whether for analytics, weather, finance, or
            productivity — design data-driven dashboards that work for you.
          </p>
          <button className="bg-primary-color text-white py-2 px-4 rounded bg-blue-400 mt-6 w-40 hover:bg-blue-500">
            Get Started
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="h-4/5 w-full p-4">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full bg-gray-200 p-6 rounded-2xl">
              <div className="col-span-1 row-span-1 bg-gray-300 rounded-2xl p-4 flex flex-col justify-between">
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

              <div className="col-span-2 row-span-1 bg-gray-300 rounded-2xl p-4">
                <div className="text-sm font-semibold mb-3">News</div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-400 rounded"></div>
                  <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                </div>
              </div>

              <div className="col-span-1 row-span-1 bg-gray-300 rounded-2xl p-4">
                <div className="h-full flex items-center justify-center">
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-gray-400 rounded"></div>
                    <div className="h-3 bg-gray-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-1 bg-gray-300 rounded-2xl p-4">
                <div className="h-full flex items-center justify-center">
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-gray-400 rounded"></div>
                    <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 row-span-1 bg-gray-300 rounded-2xl p-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="h-3 bg-gray-400 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-400 rounded w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[90vh] w-8/10 gap-4 flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          Seamless APIs. Infinite Possibilities
        </h1>
        <h3 className="text-2xl font-semibold gray">
          Your Connection to Real-time Intelligence
        </h3>
        <div className="w-full h-full mt-10 grid grid-cols-3 gap-8 rounded-2xl p-8 place-items-center">
          {APIlist.map((api, index) => (
            <div
              key={index}
              className="w-80 bg-gray-200 h-56 rounded-xl flex flex-col items-center justify-center"
            >
              <img
                src={api.image}
                alt={api.altImage}
                className="w-14 h-14 mb-2"
              />
              <span className="text-2xl font-semibold">{api.name}</span>
              <p className="mx-5 mt-2 text-center">{api.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-30 h-[99vh] w-8/10 gap-4 flex flex-col">
        <h1 className="text-4xl font-semibold">
          Powerful Features, Seamless Experience
        </h1>
        <p className="gray text-2xl w-2/3">
          Customize your data universe — all your favorite APIs in one
          intelligent dashboard.
        </p>
        <div className="bg-amber-50 mt-4 h-1/3">Hello</div>
        <div className="bg-amber-50 mt-4 h-1/3">Hello</div>
      </section>
    </div>
  );
};

export default Landingpage;
