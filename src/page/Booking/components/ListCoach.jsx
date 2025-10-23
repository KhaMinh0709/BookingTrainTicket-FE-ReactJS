/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ListSeat from "./ListSeat";

export default function ListCoach({ data = [], onSelectionChange }) {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [seat, setSeat] = useState([]);
  const [clearSeats, setClearSeats] = useState(false);

  const handleCoachClick = (coachID) => {
    setSelectedCoach(coachID);
    setClearSeats(true);
  };

  const getCoach = (coachID) => {
    // Try to find coach in provided data by coachID or coachNumber
    const found = data.find(c => String(c.coachID) === String(coachID) || String(c.coachNumber) === String(coachID));
    if (found && Array.isArray(found.seatList) && found.seatList.length > 0) {
      const mapped = found.seatList.map(n => ({ seatNumber: n, coachNumber: found.coachNumber ?? coachID }));
      setSeat(mapped);
      return;
    }

    // No backend: generate a mock seat layout for UI demo
    const mock = Array.from({ length: 40 }, (_, i) => ({ seatNumber: i + 1, coachNumber: coachID }));
    setSeat(mock);
  };

  useEffect(() => {
    if (selectedCoach) {
      getCoach(selectedCoach);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCoach]);

  const getCoachColor = (coachID) => {
    return selectedCoach === coachID ? "bg-green-500" : "bg-sky-300";
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chọn toa</h2>
      <div className="flex items-center gap-1 overflow-x-auto pb-4">
        {(data && data.length > 0 ? data : Array.from({ length: 10 }, (_, i) => ({ coachNumber: i + 1 }))).map((item, index) => (
          <button
            key={index}
            onClick={() => handleCoachClick(item.coachID ?? item.coachNumber ?? index + 1)}
            className={`${getCoachColor(item.coachID ?? item.coachNumber ?? index + 1)} text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            style={{ minWidth: "60px", height: "40px" }}
          >
            {item.coachNumber ?? (index + 1)}
          </button>
        ))}
      </div>
      {selectedCoach && (
        <p className="mt-4 text-lg">
          Vị trí đang chọn: <span className="font-bold">{selectedCoach}</span>
        </p>
      )}
      {seat && (
        <ListSeat
          coachId={selectedCoach}
          data={seat}
          clearSeats={clearSeats}
          onClearComplete={() => setClearSeats(false)}
          onSelectionChange={(payload) => {
            if (typeof onSelectionChange === 'function') onSelectionChange(payload);
          }}
        />
      )}
    </div>
  );
}
