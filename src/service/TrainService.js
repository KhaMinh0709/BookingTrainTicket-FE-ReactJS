import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/schedule";

export const ListTrainInSchedule = async ({ departureStation, arrivalStation, departureTime }) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/search`, {
            params: {
                departureStation,
                arrivalStation,
                departureTime
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching train schedule:", error);
        throw error; 
    }
};
