/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ListSeatInCoach } from "../../../service/SeatService";
import ListSeat from "./ListSeat";

export default function ListCoach({ data }) {
  const [selectedCoach, setSelectedCoach] = useState();
  const [seat, setSeat] = useState([]);

  const handleCoachClick = (coachID) => {
    setSelectedCoach(coachID);
    console.log(coachID);
  };

  const getSeat = async (coachID) => {
    const res = await ListSeatInCoach(coachID);
    console.log(res);
    setSeat(res);
  };

  useEffect(() => {
    if (selectedCoach) {
        getSeat(selectedCoach);
    }
  }, [selectedCoach]);

  const getCoachColor = (coachID) => {
    return selectedCoach === coachID ? "bg-green-500" : "bg-sky-300";
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select a Coach</h2>
      <div className="flex items-center gap-1 overflow-x-auto pb-4">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCoachClick(item.coachID)}
            className={` 
              ${getCoachColor(item.coachID)} 
              text-white font-bold py-2 px-4 rounded-lg 
              transform transition-all duration-200 ease-in-out 
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            `}
            style={{
              minWidth: "60px",
              height: "40px",
            }}
          >
            {item.coachNumber}
          </button>
        ))}
      </div>
      {selectedCoach && (
        <p className="mt-4 text-lg">
          Hãy chọn ghế
        </p>
      )}
      {seat.length > 0 && (
        <ListSeat data={seat} />
      )}
    </div>
  );
}
