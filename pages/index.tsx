import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../src/components/ImageSlider";

const imagesInput = [
  {
    url: "/joyeria.jpg",
    title: "joyeria",
  },
  {
    url: "/escultura.jpg",
    title: "escultura",
  },
  {
    url: "/fotografia.jpg",
    title: "fotografia",
  },
  {
    url: "postcard.jpg",
    title: "postcard",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Galerie Hior</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Lo mejor del arte en Costa Rica" />
        <meta name="robots" content="index, follow, archive" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center col-span-2 h-screen">
          <Image
            className="animate-fade-in"
            width="380"
            height="255"
            src="/logo.png"
            alt="logo"
          />
        </div>
        <div className="w-4/5 h-screen col-span-2 mx-auto">
          <ImageSlider slides={imagesInput} />
        </div>
      </main>
    </div>
  );
}
