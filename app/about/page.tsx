import {
  Gilda_Display,
  Overpass,
  Quicksand,
  Playfair_Display,
} from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8">
      <img
        alt="A photo of Amber in northern Vietnam"
        src="images/DSCF3449.jpg"
      />

      <div
        className={`${playfairDisplay.className} columns-1 gap-8 sm:columns-2 text-sm text-justify leading-7`}
      >
        <p className="indent-6">
          Hi there, I&aposm Amber Chen, a Maryland-born photographer with a
          passion for capturing life&aposs most beautiful moments. Photography
          has always been an important part of my life, from family vacations to
          documenting my travels around the world. I&aposve recently decided to
          turn this passion into a full-time career and am excited to see where
          this journey takes me.
        </p>
        <p className="indent-6">
          I graduated from Cornell University in Upstate NY and spent the next
          six years living and working in New York City as a frontend engineer.
          However, I soon realized that my true passion lay in photography and
          decided to take a leap of faith to pursue it full-time. When I&aposm
          not behind the camera, you can find me surfing, playing volleyball,
          attending concerts, or soaking up the sun by the ocean.
        </p>
        <p className="indent-6">
          My love for photography stems from my father, who instilled in me a
          love for capturing life&aposs special moments through the lens of a
          camera. I remember being amazed by the way photos could transport me
          back in time and evoke powerful emotions even if I wasn&apost there in
          person.
        </p>
        <p className="indent-6">
          I&aposm dedicated to my craft and have experience working with friends
          to capture their special moments. Whether it&aposs a beautiful
          landscape or a cherished memory, I strive to capture the essence of
          every moment and bring it to life through my photographs. I&aposm
          excited to continue growing and developing my skills as a photographer
          and am committed to helping others preserve their most treasured
          memories through my work.
        </p>
      </div>
    </main>
  );
}
