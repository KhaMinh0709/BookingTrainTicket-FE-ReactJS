import axios from "axios";

// Backend endpoint observed in your sample response: /api/schedule-trains/search on port 8081
const REST_API_BASE__SCHE_URL = "http://localhost:8081/api/schedule-trains";

export const ListTrainInSchedule = async ({ departureStation, arrivalStation, departureTime }) => {
    try {
        const response = await axios.get(`${REST_API_BASE__SCHE_URL}/search`, {
            params: {
                departureStation,
                arrivalStation,
                // backend expects `departureDate` (as in your curl example)
                departureDate: departureTime,
                // keep departureTime as an alias for compatibility
                departureTime
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching train schedule:", error?.response?.data ?? error.message ?? error);
        throw error; 
    }

};
const api = axios.create({
  baseURL: REST_API_BASE__SCHE_URL,
  timeout: 10000,
});

// Optional: interceptor để log lỗi / token
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("ScheduleTrain API Error:", err?.response?.data ?? err.message);
    throw err;
  }
);


export const getAllSchedules = async ({ page = 0, size = 10, sort = "departureTime,asc" } = {}) => {
  const res = await api.get("", { params: { page, size, sort } });
  return res.data;
};

export const getScheduleById = async (scheduleId) => {
  const res = await api.get(`/${scheduleId}`);
  return res.data;
};


export const createSchedule = async (scheduleData) => {
  const res = await api.post("", scheduleData);
  return res.data;
};

export const updateSchedule = async (scheduleId, updatedData) => {
  const res = await api.put(`/${scheduleId}`, updatedData);
  return res.data;
};

export const deleteSchedule = async (scheduleId) => {
  const res = await api.delete(`/${scheduleId}`);
  return res.data;
};

export const getScheduleByDate = async (date) => {
  const res = await api.get("/by-date", { params: { date } });
  return res.data;
};

export const getSchedulesByDepartureStation = async (departureStation) => {
  const res = await api.get("/by-departure", { params: { departureStation } });
  return res.data;
};

export const getSchedulesByArrivalStation = async (arrivalStation) => {
  const res = await api.get("/by-arrival", { params: { arrivalStation } });
  return res.data;
};

export const checkSeatAvailability = async (scheduleId, travelDate) => {
  const res = await api.get(`/${scheduleId}/availability`, { params: { travelDate } });
  return res.data;
};

export const refreshSchedules = async () => {
  const res = await api.post("/refresh");
  return res.data;
};


