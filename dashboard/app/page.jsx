import { Pacifico } from "next/font/google";

//pagina
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

function Home() {
  return (
    <div className="bg-secondary h-screen w-screen text-5xl p-5">
      <h1 className={`text-center ${pacifico.className}`}>Home</h1>
    </div>
  );
}

export default Home;
