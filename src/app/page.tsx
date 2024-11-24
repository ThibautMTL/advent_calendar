'use client'
import { useState } from "react";
import moviesData from "@/data/movies.json";
import CalendarDoor from "@/components/CalendarDoor";
import { CalendarCase } from "@/types";

export default function Home() {
  const [openDoors, setOpenDoors] = useState<number[]>([]);
  const [filmSelected, setFilmSelected] = useState<CalendarCase | null>(null);

  const handleDoorClick = (caseCalendar: CalendarCase) => {
    if (!isValidDate(caseCalendar)) {
      return;
    }

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

  const isValidDate = (caseCalendar: CalendarCase) => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11, où 11 est décembre
    const currentDay = today.getDate();
    
    // Autoriser l'ouverture uniquement en décembre
    if (currentMonth !== 11) {
      return false;
    }
    
    // Autoriser l'ouverture si le jour est passé ou correspond à aujourd'hui
    return currentDay >= caseCalendar.day;
  };

  return (
    <div className="min-h-screen w-full bg-dark relative z-0 overflow-hidden">
      {!filmSelected && (
      <div className={`calendar-container min-h-screen bg-dark px-8 border-5 border-primary relative z-0 ${openDoors.length > 0 ? 'disappear-calendar' : ''}`}>
      <div className={`-mx-8 relative z-10 ${openDoors.length > 0 ? 'opacity-0' : ''}`}>
      <h1 className="text-4xl sm:text-6xl text-center text-primary mb-6 font-bold font-alfa uppercase tracking-wide relative z-10">
        <span className="text-xl sm:text-3xl sm:leading-5">2024</span>
        <br/>Event Calendar
      </h1>
      <div className="flex w-full relative">
        <div className="w-1/2 sm:w-full flex justify-center items-center relative">
        <span className="text-primary text-2xl sm:text-5xl font-alfa text-right sm:text-center leading-none w-[90%]">
          1 jour
          <br/>
          1 film
        </span>
        </div>
        <img src="/icons/star-1.svg" className="absolute -top-4 translate-x-[100%]" alt="star" />
        <img src="/icons/star-2.svg" alt="star" className="absolute w-4 top-0 right-[35%] -translate-y-[700%]" />
          <img src="/images/popcorn.svg" alt="popcorn" className="absolute -right-8 [max-width:428px] [width:35vw] h-auto -translate-y-[25%]" />
      </div>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto relative z-10 mt-24 mb-36">
        {moviesData.movies.map((caseCalendar: CalendarCase) => (
          <CalendarDoor
          key={caseCalendar.day}
          caseCalendar={caseCalendar}
          isOpen={openDoors.includes(caseCalendar.day)}
          onClick={handleDoorClick}
          className={`${!openDoors.includes(caseCalendar.day) && openDoors.length > 0 ? 'opacity-0' : ''}`}
        />
        ))}
      </div>
      <div className="absolute left-0 bottom-[59.5%] w-full h-[3.5%] bg-secondary lg:hidden">
      <div className="w-full h-full relative">
          <img src="/icons/star-2.svg" alt="star" className="absolute bottom-0 left-[33%] translate-y-[100%]" />
        </div>
      </div>
      <div className="absolute left-0 bottom-[43.5%] w-full h-[8%] bg-secondary">
      <div className="w-full h-full relative">
          <img src="/icons/star-1.svg" alt="star" className="absolute w-5 bottom-2 left-0" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[40%] bg-secondary">
        <div className="w-full h-full relative">
          <img src="/icons/star-1.svg" alt="star" className="absolute top-0 left-[33%]" />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-[20%] h-[9.25%] flex justify-end">
        <div className="w-[100%] h-[100%] relative -translate-y-[25%] translate-x-[100%]">
        <img src="/icons/star-1.svg" alt="étoile" className="w-auto h-[60%] absolute bottom-0 left-0" />
        <img src="/icons/star-1.svg" alt="étoile" className="w-auto h-[40%] absolute top-0 right-0" />
        </div>
      </div>
      <div className="absolute right-0 sm:right-[20%] bottom-0 w-[30%] h-[13.5%] sm:h-auto flex justify-end translate-y-[45px]">
        <img src="/images/camera.svg" alt="camera" className="w-auto h-full" />
      </div>
      </div>)}
      {filmSelected && (
      <div className={`film-container min-h-screen bg-dark relative z-0 ${filmSelected ? 'appear-film' : ''}`}>
        <div className="relative flex flex-col lg:flex-row">
          <div className="relative">
            <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary font-alfa text-secondary text-xl" onClick={() => handleFilmClose()}>X</button>
            <img src={filmSelected.image} alt={filmSelected.title} className="w-full h-full object-cover lg:h-screen lg:w-auto" />
          </div>
          <div className="relative bg-secondary w-full lg:w-auto flex item-center justify-center py-10 lg:py-36 mt-10 lg:ml-10 lg:mt-0">
            <div className="relative h-full">
              <button className=" bg-primary rounded-2xl py-4 px-4 lg:px-6 lg:-mx-5 text-dark font-alfa text-xl lg:text-4xl relative z-0"><a href={filmSelected.link} target="_blank">Voir la <br />bande annonce</a></button>
              <img src="/icons/star-1.svg" alt="étoile" className="w-auto lg:w-[60px] absolute top-0 right-0 lg:right-4 -translate-y-[150%] translate-x-[50%]" />
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}
