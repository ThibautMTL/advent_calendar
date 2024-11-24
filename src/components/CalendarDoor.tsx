import { CalendarCase } from "@/types";
import React from "react";

interface CalendarDoorProps {
  caseCalendar: CalendarCase;
  isOpen: boolean;
  className?: string;
  onClick: (caseCalendar: CalendarCase) => void;
}

const CalendarDoor: React.FC<CalendarDoorProps> = ({ caseCalendar, isOpen, className, onClick }) => {
  return (
    <div
      className={`aspect-square relative cursor-pointer transition-opacity duration-500
      } ${isOpen ? 'scale-zoom' : ''} ${className}`}
      onClick={() => onClick(caseCalendar)}
    >
      <div
        className={`absolute inset-0 bg-primary rounded-3xl flex items-center justify-center text-dark font-alfa text-lg font-bold origin-left transition-transform duration-500 z-10 ${
          isOpen ? 'open-case' : ''
        }`}
      >
        {caseCalendar.day}
      </div>
      
      <div
        className={`absolute inset-0 bg-cover bg-center bg-dark rounded-3xl transition-opacity duration-500`}
      >
        
      </div>
    </div>
  );
};

export default CalendarDoor;
