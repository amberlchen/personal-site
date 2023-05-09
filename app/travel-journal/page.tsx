import {
  JournalEntry,
  TRAVEL_JOURNAL_ENTRIES,
} from "@/constants/travelJournalEntries";
import { Gilda_Display } from "next/font/google";
import Link from "next/link";

const gildaDisplay = Gilda_Display({ weight: "400", subsets: ["latin"] });

const TravelJournalEntry = ({ entry }: { entry: JournalEntry }) => {
  return (
    <div className="relative cursor-pointer w-full">
      <Link
        className="relative object-cover group"
        href={`/travel-journal/${entry.key}`}
      >
        <div
          className={`${gildaDisplay.className} object-cover text-center absolute inset-0 text-white
                    hover:opacity-100
                    opacity-0
                    duration-300 transition-opacity
                    flex justify-center items-center 
                    z-10
                    invisible
                    md:visible
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
      {TRAVEL_JOURNAL_ENTRIES.map((entry) => (
        <div key={entry.key}>
          <TravelJournalEntry entry={entry} />
          <div
            className={`${gildaDisplay.className}
      object-cover
            text-center
            md:invisible
      `}
          >
            <span className="block">{entry.title}</span>
            <span className="text-xs -mt-8">{entry.date}</span>
          </div>
        </div>
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
