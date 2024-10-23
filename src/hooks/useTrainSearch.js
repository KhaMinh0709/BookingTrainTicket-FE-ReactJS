// hooks/useTrainSearch.js
import { useReducer, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ListTrainInSchedule } from "../service/TrainService";

const initialState = {
  departure: '',
  arrival: '',
  departureDate: '',
  returnDate: '',
  tripType: 'oneWay',
  trains: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DEPARTURE':
      return { ...state, departure: action.payload };
    case 'SET_ARRIVAL':
      return { ...state, arrival: action.payload };
    case 'SET_DEPARTURE_DATE':
      return { ...state, departureDate: action.payload };
    case 'SET_RETURN_DATE':
      return { ...state, returnDate: action.payload };
    case 'SET_TRIP_TYPE':
      return { ...state, tripType: action.payload };
    case 'SET_TRAINS':
      return { ...state, trains: action.payload, isLoading: false };
    case 'SET_LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export const useTrainSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const departure = queryParams.get('departure') || '';
    const arrival = queryParams.get('arrival') || '';
    const departureDate = queryParams.get('departureDate') || '';
    const returnDate = queryParams.get('returnDate') || '';
    const tripType = queryParams.get('tripType') || 'oneWay';

    dispatch({ type: 'SET_DEPARTURE', payload: departure });
    dispatch({ type: 'SET_ARRIVAL', payload: arrival });
    dispatch({ type: 'SET_DEPARTURE_DATE', payload: departureDate });
    dispatch({ type: 'SET_RETURN_DATE', payload: returnDate });
    dispatch({ type: 'SET_TRIP_TYPE', payload: tripType });

    if (departure && arrival && departureDate) {
      searchTrains({ departure, arrival, departureDate, returnDate, tripType });
    }
  }, [location.search]);

  const searchTrains = async (searchParams) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const trainsData = await ListTrainInSchedule({
        departureStation: searchParams.departure,
        arrivalStation: searchParams.arrival,
        departureTime: searchParams.departureDate,
      });
      dispatch({ type: 'SET_TRAINS', payload: trainsData });
    } catch (error) {
      console.error("Error loading trains:", error);
      dispatch({ type: 'SET_TRAINS', payload: [] });
    }
  };

  const handleSearch = (searchParams) => {
    searchTrains(searchParams);
    const queryParams = new URLSearchParams({
      departure: searchParams.departure,
      arrival: searchParams.arrival,
      departureDate: searchParams.departureDate,
      ...(searchParams.tripType === 'roundTrip' && { returnDate: searchParams.returnDate }),
    }).toString();
    navigate(`/DatVe?${queryParams}`);
  };

  return {
    ...state,
    dispatch,
    handleSearch,
  };
};
