import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import ChildCard from "./ChildCard";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import Gifts from "../about/Gifts";

export default function ChildSponsor() {
  const [view, setView] = useState("resident"); // Track the current view (resident or non-resident)

  // Function to handle switching the view to resident
  const viewResident = () => setView("resident");

  // Function to handle switching the view to non-resident
  const viewNonResident = () => setView("non-resident");

  return (
    <>
      <Header />
      <Navigation />
      <section className="py-12 mt-[150px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col min-h-screen items-center gap-12 justify-center">
          <div className="flex justify-center gap-8 mb-2 text-[15px] font-semibold">
            <button
              className={`flex items-center gap-2 ${
                view === "resident"
                  ? "text-gray-600 border-b-2 border-orange-500"
                  : "text-gray-400"
              }`}
              onClick={viewResident}
            >
              <FaHouse /> Resident
            </button>
            <button
              className={`flex items-center gap-2 ${
                view === "non-resident"
                  ? "text-gray-600 border-b-2 border-orange-500"
                  : "text-gray-400"
              }`}
              onClick={viewNonResident}
            >
              <MdOutlineFamilyRestroom /> Non-Resident
            </button>
          </div>

          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-screen-xl">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
             
                {view === "resident" ? (
                  <>
                    <ChildCard
                      img="./img/sponsor-child/John-luke-b.jpg"
                      name="John Luke"
                      percent={5.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/ala-d.jpg"
                      name="Ala D"
                      percent={5.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-angelica.jpg"
                      name="Angelita A"
                      percent={5.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/minos-d.jpg"
                      name="Minos D"
                      percent={5.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-angelica.jpg"
                      name="Angelita A"
                      percent={10.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-mary-joy.jpg"
                      name="Mary Joy C."
                      percent={17.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-leam.jpg"
                      name="Carl Leam N."
                      percent={25.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-charisse.jpg"
                      name="Charissa N."
                      percent={25.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/chelsey-b.jpg"
                      name="Chelsey B"
                      percent={27.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-shiela.jpg"
                      name="Shiela Mariel S"
                      percent={35.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-CIELITAHINE.jpg"
                      name="Cielitahine D"
                      percent={37.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-junior.jpg"
                      name="Junior N"
                      percent={40.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-milquizedec.jpg"
                      name="Melquizedec D"
                      percent={40.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-keren.jpg"
                      name="Karen D."
                      percent={45.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-mary-ann.jpg"
                      name="Mary Ann V"
                      percent={50.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-mikaela.jpg"
                      name="Michaela C"
                      percent={50.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-sarah.jpg"
                      name="Sara A"
                      percent={50.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-ricka.jpg"
                      name="Ricka"
                      percent={52.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-alden.jpg"
                      name="Alden D."
                      percent={57.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-andrea.jpg"
                      name="Andrea C"
                      percent={62.5}
                    />
                    <div className="xl:col-span-full md:col-span-1 xl:flex justify-center">
                      <ChildCard
                        img="/img/sponsor-child/opt-cornilito.jpg"
                        name="Cornelito D."
                        percent={100.0}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Non-Resident Cards */}
                    <ChildCard
                      img="/img/sponsor-child/trixie.jpg"
                      name="Trixie Mae N"
                      percent={37.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/danica.jpg"
                      name="Danica V"
                      percent={40.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/rosemae.jpg"
                      name="Rose Mae N"
                      percent={40.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-rachelle.jpg"
                      name="Rachelle M"
                      percent={42.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-don.jpg"
                      name="Richard T"
                      percent={45.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/marygrace.jpg"
                      name="Mary Grace V"
                      percent={50.0}
                    />
                    <ChildCard
                      img="/img/sponsor-child/eugene.jpg"
                      name="Eugene Lance D"
                      percent={52.5}
                    />
                    <ChildCard
                      img="/img/sponsor-child/opt-gladays.jpg"
                      name="Gladys T"
                      percent={57.5}
                    />
                    <div className="col-span-full flex justify-center gap-5">
                      <ChildCard
                        img="/img/sponsor-child/julieann.jpg"
                        name="Julie Ann T"
                        percent={60.0}
                      />
                      <ChildCard
                        img="/img/sponsor-child/opt-mark.jpg"
                        name="Mark John B"
                        percent={85.0}
                      />
                      <ChildCard
                        img="/img/sponsor-child/opt-marian.jpg"
                        name="Marian Nhicole B"
                        percent={100.0}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gifts />
      <Footer />
    </>
  );
}
