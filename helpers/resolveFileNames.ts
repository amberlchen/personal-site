import fs from "fs";
import path from "path";

export const resolveFileNames = (slug: string) => {
  const dir = path.resolve("./public", slug);

  try {
    const filenames = fs.readdirSync(dir);

    const images = filenames.map((name) => path.join("/", slug, name));

    // Return only valid image files
    return images.filter((pathName) => pathName.toLowerCase().endsWith(".jpg"));
  } catch (e) {}

  return [];
};
