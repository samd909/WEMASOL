import React from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section
      className="
        relative h-screen w-full flex items-center justify-center 
        text-white overflow-hidden
        bg-gradient-to-br from-green-700 via-emerald-500 to-lime-600
        animate-gradient
      "
    >
      {/* Gradient animation override */}
      <style>
        {`
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradientMove 12s ease infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 drop-shadow-lg">
          Nachhaltige Energiekonzepte für <br /> Eigentümer & Investoren
        </h1>

        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8 drop-shadow">
          Wir verbinden Eigentümer & Investoren für Mieterstrom-
          und Solaranlagenprojekte
        </p>

        <button className="px-6 py-3 rounded-full shadow-lg bg-black/70 hover:bg-black/90 transition flex items-center gap-2">
          Jetzt Projekt prüfen lassen <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
