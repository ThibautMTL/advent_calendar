'use client'
import { useState } from "react";
import moviesData from "@/data/movies.json";
import CalendarDoor from "@/components/CalendarDoor";
import { CalendarCase } from "@/types";

export default function Home() {
  const [openDoors, setOpenDoors] = useState<number[]>([]);
  const [filmSelected, setFilmSelected] = useState<CalendarCase | null>(null);

  const handleDoorClick = (caseCalendar: CalendarCase) => {
    if (!openDoors.includes(caseCalendar.day)) {
      setOpenDoors([...openDoors, caseCalendar.day]);
    }

    //wait 3 seconds before opening the film
    setTimeout(() => {
      setFilmSelected(caseCalendar);
    }, 3000);
  };

  const handleFilmClose = () => {
    setOpenDoors([]);
    setFilmSelected(null);
  };

  const isValidDate = (day: number) => {
    return true;
  };

  return (
    <div className="min-h-screen w-full bg-dark relative z-0 overflow-hidden">
      {!filmSelected && (
      <div className={`calendar-container min-h-screen bg-dark p-8 border-5 border-primary relative z-0 ${openDoors.length > 0 ? 'disappear-calendar' : ''}`}>
      <div className={`-mx-8 relative z-0 ${openDoors.length > 0 ? 'opacity-0' : ''}`}>
      <h1 className="text-4xl text-center text-primary mb-6 font-bold font-alfa uppercase tracking-wide relative z-10">
        <span className="text-xl">2024</span>
        <br/>Event
        <br/>Calendar
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center relative">
        <img src="/icons/star-1.svg" className="absolute -top-4 -translate-x-full" alt="star" />
        <span className="text-primary text-2xl font-alfa text-right leading-none w-[90%]">
          1 jour
          <br/>
          1 film
        </span>
        </div>
        <div className="relative flex justify-center items-center">
        <img src="/images/popcorn.svg" alt="popcorn" className="absolute -right-8 [max-width:none] [width:240px] h-auto translate-y-6" />
        </div>
      </div>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 max-w-4xl mx-auto relative z-10 mt-24 mb-36">
        {moviesData.movies.map((caseCalendar: CalendarCase) => (
          <CalendarDoor
          key={caseCalendar.day}
          caseCalendar={caseCalendar}
          isOpen={openDoors.includes(caseCalendar.day)}
          isValidDate={isValidDate}
          onClick={handleDoorClick}
          className={`${!openDoors.includes(caseCalendar.day) && openDoors.length > 0 ? 'opacity-0' : ''}`}
        />
        ))}
      </div>
      <div className="absolute left-0 bottom-[59.5%] w-full h-[3.5%] bg-secondary"></div>
      <div className="absolute left-0 bottom-[43.5%] w-full h-[8%] bg-secondary"></div>
      <div className="absolute left-0 bottom-0 w-full h-[40%] bg-secondary"></div>
      <div className="absolute left-0 bottom-0 w-[20%] h-[9.25%] flex justify-end">
        <div className="w-[100%] h-[100%] relative -translate-y-[25%] translate-x-[100%]">
        <img src="/icons/star-1.svg" alt="étoile" className="w-auto h-[60%] absolute bottom-0 left-0" />
        <img src="/icons/star-1.svg" alt="étoile" className="w-auto h-[40%] absolute top-0 right-0" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[30%] h-[13.5%] flex justify-end translate-y-[45px]">
        <img src="/images/camera.svg" alt="camera" className="w-auto h-full" />
      </div>
      </div>)}
      {filmSelected && (
      <div className={`film-container min-h-screen bg-dark relative z-0 ${filmSelected ? 'appear-film' : ''}`}>
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary font-alfa text-secondary text-xl" onClick={() => handleFilmClose()}>X</button>
        <img src={filmSelected.image} alt={filmSelected.title} className="w-full h-full object-cover" />
        <div className="relative bg-secondary w-full flex item-center justify-center py-10 mt-10">
          <div className="relative h-full">
        <button className=" bg-primary rounded-2xl py-4 px-4 text-dark font-alfa text-xl relative z-0"><a href={filmSelected.link} target="_blank">Voir la <br />bande annonce</a></button>
        <img src="/icons/star-1.svg" alt="étoile" className="w-auto absolute top-0 right-0 -translate-y-[150%] translate-x-[50%]" />
          </div>
        </div>
      </div>)}
    </div>
  );
}
