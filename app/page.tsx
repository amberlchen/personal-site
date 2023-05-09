import {
  Gilda_Display,
  Overpass,
  Quicksand,
  Playfair_Display,
} from "next/font/google";

const gildaDisplay = Gilda_Display({ weight: "400", subsets: ["latin"] });
const overpass = Overpass({ weight: "600", subsets: ["latin"] });
const quicksand = Quicksand({ weight: "300", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const dates = [
  {
    dateRange: "May 9 - May 27",
    location: " Washington DC Area",
  },
  {
    dateRange: "May 28 - June 1",
    location: " New York City",
  },
  {
    dateRange: "June 6 - June 19",
    location: " Washington DC Area",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full text-black">
        <div className="bg-white text center col-span-3 row-span-2">
          <img src="/gallery/DSC_2342.jpg" />
        </div>

        <div
          className={`${gildaDisplay.className} bg-white text center col-span-3 sm:col-span-1`}
        >
          Engagement Photography & Lifestyle Portraits
          <p
            className={`${gildaDisplay.className} text-xs grid gap-2 mt-4  w-full`}
          >
            We can work together to capture and tell your story.
          </p>
        </div>
        <div></div>
        <div className="grid col-span-3 md:col-span-2 md:ml-2 w-full">
          <h4 className={`${gildaDisplay.className} text-xl`}>
            2023 TRAVEL DATES
          </h4>
          <ul
            className={`${quicksand.className} text-sm grid gap-2 mt-4  w-full`}
          >
            {dates.map((entry) => (
              <div
                key={entry.dateRange}
                className="grid grid-cols-4 sm:grid-cols-8 items-center"
              >
                <div className="col-auto sm:col-span-3">{entry.dateRange}</div>

                <div
                  className={`${playfairDisplay.className} sm:col-span-5 col-span-3 text-xl`}
                >
                  {entry.location}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="grid col-span-1 md:col-span-2 md:row-span-3 w-full">
          <img className="w-full object-cover" src="/gallery/DSC_2413.jpg" />
        </div>
      </div>
    </main>
  );
}
