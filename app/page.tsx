import TopMenu from "./components/TopMenu"
import Header from "./components/Header"
import HowItWorks from "./components/HowItWorks"
import Benefits from "./components/Benefits"
import WhoIsItFor from "./components/WhoIsItFor"
import MissionVision from "./components/MissionVision"
import Token from "./components/Token"
import JoinGNOM from "./components/JoinGNOM"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gnom-dark text-gnom-light">
      <TopMenu />
      <Header />
      <HowItWorks />
      <Benefits />
      <WhoIsItFor />
      <MissionVision />
      <Token />
      <JoinGNOM />
      <Footer />
    </main>
  )
}

