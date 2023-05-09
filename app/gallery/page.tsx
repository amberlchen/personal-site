import { Gallery } from "@/components/Gallery";
import { resolveFileNames } from "@/helpers/resolveFileNames";

export default function GalleryPage() {
  const fileNames = resolveFileNames(`gallery`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Gallery fileNames={fileNames} />
    </main>
  );
}
