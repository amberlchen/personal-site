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
});

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8">
      <div
        className={`${playfairDisplay.className} grid md:grid-cols-2 grid-cols-1 gap-8 sm:columns-2 text-justify w-full items-center`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-full place-content-center mt-6">
            <h2 className="text-xl">Lifestyle, Portraits, and Engagements</h2>
            <h5 className="text-sm pb-4">$250</h5>

            <ul className="text-xs space-y-1">
              <li>1.5 hours</li>
              <li>2 weeks turn around time</li>
              <li>Sneak preview of photos within 48 hours</li>
              <li>Edited photos available via download link</li>
            </ul>
            <p className="text-xs mt-12">
              If you are ready to make an investment in these memories, drop me
              a line:
              <a
                href="mailto:amberchenphotography@gmail.com"
                className="mt-1 block"
              >
                <button className="text-base">
                  amberchenphotography@gmail.com
                </button>
              </a>
            </p>
          </div>

          {/* <img src="images/DSCF2529.jpg" /> */}
          <img src="images/DSCF2559.jpg" />
        </div>
        <div>
          <img src="images/DSCF6384.jpg" />
        </div>
      </div>
    </main>
  );
}
