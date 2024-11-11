"use client";

const { createContext, useContext, useState } = require("react");

const ReservationCountext = createContext();
const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationCountext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationCountext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationCountext);
  if (context === undefined)
    throw new Error("Context used outside the provider!");
  return context;
}
export { ReservationProvider, useReservation };
