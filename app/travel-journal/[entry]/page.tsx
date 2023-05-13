import { TRAVEL_JOURNAL_ENTRIES } from "@/constants/travelJournalEntries";
import { Gilda_Display } from "next/font/google";
import { Gallery } from "@/components/Gallery";
import { resolveFileNames } from "@/helpers/resolveFileNames";

const gildaDisplay = Gilda_Display({ weight: "400", subsets: ["latin"] });

// Generate static params at build time (workaround for export)
// https://github.com/vercel/next.js/issues/48022#issuecomment-1542654383
export async function generateStaticParams() {
  return TRAVEL_JOURNAL_ENTRIES.map((entry) => {
    entry: entry.key;
  });
}

export default function TravelJournalEntry({ params }: any) {
  const fileNames = resolveFileNames(`${params.entry}`);

  const entry = TRAVEL_JOURNAL_ENTRIES.find(
    (entry) => entry.key === params.entry
  );

  if (!entry) {
    return <p>No entry found</p>;
  }

  return (
    <div>
      <h2 className={`${gildaDisplay.className} text-lg inline`}>
        {entry.title}{" "}
      </h2>
      <span className="pl-1" />
      <h3 className={`${gildaDisplay.className} text-xs inline`}>
        {entry.date}{" "}
      </h3>

      <p className={`${gildaDisplay.className} text-sm mb-4 mt-2 text-justify`}>
        {entry.description}
      </p>

      <Gallery fileNames={fileNames} />
    </div>
  );
}
