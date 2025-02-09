import Image from "next/image";
import LandingPage from "./landingPage/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <h2 className="text-red-400">hello</h2>
    </div>
  );
}
