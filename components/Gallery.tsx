"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// TODO: Handle image loading

export const Gallery = ({ fileNames }: { fileNames: string[] }) => {
  return (
    <div className="grid-colcade w-full ">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="2rem">
          {fileNames.map((fileName: string) => (
            <img
              key={fileName}
              src={fileName}
              alt="Photo"
              className="w-full object-contain object-center opacity-100 hover:opacity-80"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {fileNames.length === 0 && (
        <p className="text-center w-full">
          No photos can be loaded at this time.
        </p>
      )}
    </div>
  );
};
