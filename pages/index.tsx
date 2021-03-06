import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../src/components/ImageSlider";
import { Slide } from "../types/slide";

const imagesInput: Slide[] = [
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/joyeria.jpg",
    title: "joyeria",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/escultura.jpg",
    title: "escultura",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/fotografia.jpg",
    title: "fotografia",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/postcard.jpg",
    title: "postcard",
  },
];

const imagesInput2: Slide[] = [
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slideImages2/comision.jpg",
    title: "comision",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slideImages2/paisajismo.jpg",
    title: "paisajismo",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slideImages2/representation.jpg",
    title: "representation",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slideImages2/valuacion.jpg",
    title: "valuacion",
  },
  {
    url: "https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slideImages2/asesoria.jpg",
    title: "asesoria",
  },
];

export default function Home(): JSX.Element {
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

      <main className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto ">
        <div className="flex flex-col justify-center items-center col-span-2 h-screen bg-white">
          <Image
            className="animate-fade-in aspect-auto w-72 h-48"
            width="288"
            height="193"
            src="https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/logo.png"
            alt="logo"
          />
        </div>
        <div className="w-full md:w-3/5 h-96 col-span-2 mx-auto mb-10">
          <ImageSlider slides={imagesInput} />
        </div>
        <div className="w-4/5 md:min-w-500 col-span-2 mx-auto mb-10">
          <h2 className="text-3xl mb-4">??Qui??nes somos?</h2>
          <div className="md:flex">
            <Image
              className="aspect-auto w-72 h-48"
              width="288"
              height="193"
              src="https://cf-simple-s3-origin-gallery-hior-021672050205.s3.us-east-2.amazonaws.com/slidesImages/logo.png"
              alt="logo"
            />

            <p className="p-4">
              Desde el <i>2013</i> nuestra misi??n es fomentar, promocionar y
              difundir el arte costarricense y de la regi??n, dictando un nuevo
              discurso dentro de la historia y una narrativa consecuente para
              los coleccionistas e inversores de esta manera convirtiendo el
              arte del pa??s en un referente internacional de est??tica y calidad.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 col-span-2 mb-10">
          <h2 className="w-5/6 mx-auto text-3xl col-span-2 mb-4">Servicios</h2>
          <div className="px-6 col-span-2 md:col-span-1 md:col-start-2 mx-auto">
            <ul className="list-disc ">
              <li>Asesor??as</li>
              <li>Valuaci??n de obras</li>
              <li>Arte Corporativo</li>
              <li>Comisi??n de retratos</li>
              <li>Grabados institucionales</li>
              <li>Paisajismo escult??rico</li>
              <li>Representaci??n de Artistas</li>
              <li>Entre muchas opciones m??s</li>
            </ul>
          </div>
          <div className="mx-auto py-6 md:py-0 md:col-span-1 max-w-xl md:row-start-2">
            <p>
              Galerie Hior cuenta con un servicio especializado de b??squeda de
              arte el cual se centra en los gustos o las necesidades est??ticas
              de nuestra clientela o en caracteres de compra de obras como
              inversi??n. Adem??s poseemos servicios especializados tanto para
              colecciones privadas o p??blicas y para el sector comercial e
              institucional. Sea cual sea su caso, al contratarnos su
              satisfacci??n queda asegurada en nuestras manos. Para mayor
              informaci??n escribanos a:{" "}
              <span className="font-extrabold">info@galeriehior.com</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-96 col-span-2 mx-auto mb-10">
          <ImageSlider slides={imagesInput2} />
        </div>
        <p className="col-span-2 w-4/5 text-center mx-auto p-0.5">
          Para informaci??n sobre descuentos, reservas o financiamiento de obras
          cont??ctenos y con gusto le atenderemos.
        </p>
        <p className="col-span-2 w-4/5 text-center mx-auto p-0.5 mb-10">
          Further information about discounts, bookings or financing
          information, contact us and we will gladly answer.
        </p>
      </main>
    </div>
  );
}
