import { Gilda_Display, Overpass } from "next/font/google";
import Link from "next/link";

const cormorant = Gilda_Display({ weight: "400", subsets: ["latin"] });

interface JournalEntry {
  title: string;
  date: string;
  href: string;
  key: string;
}

const journalEntries: JournalEntry[] = [
  {
    key: "sri_lanka",
    title: "Sri Lanka",
    date: "February 2023",
    href: "blog-cover-photo/sri-lanka.jpg",
  },
  {
    key: "taiwan",
    title: "Taiwan",
    date: "December 2022",
    href: "blog-cover-photo/nyc.jpg",
  },
  {
    key: "bali",
    title: "Bali",
    date: "2022",
    href: "blog-cover-photo/bali.jpg",
  },
];

const TravelJournalEntry = ({ entry }: { entry: JournalEntry }) => {
  return (
    <div className="relative cursor-pointer w-full">
      <Link
        className="relative object-cover group"
        href={`/travel-journal/${entry.key}`}
      >
        <div
          className={`${cormorant.className} object-cover text-center absolute inset-0 text-white
                    hover:opacity-100
                    opacity-0
                    duration-300 transition-opacity
                    flex justify-center items-center 
                    z-10
                `}
        >
          <div
            className="object-cover 
            transition-opacity
            opacity-0
            group-hover:opacity-100
            duration-300"
          >
            <span>
              {entry.title}
              <br />
            </span>
            <span className="text-xs">{entry.date}</span>
          </div>
        </div>

        <div
          className="object-cover 
            bg-black
          group-hover:opacity-30
          opacity-0  duration-300 transition-opacity
          w-full h-full absolute 
          "
        />
        <img src={entry.href} className="object-cover" />
      </Link>
    </div>
  );
};

const TravelJournalGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4 container">
      {journalEntries.map((entry) => (
        <TravelJournalEntry entry={entry} />
      ))}
    </div>
  );
};

export default function TravelJournal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TravelJournalGrid />
    </main>
  );
}
