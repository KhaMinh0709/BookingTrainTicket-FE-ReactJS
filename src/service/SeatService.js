import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/seats";

export const ListSeatInCoach = async (coachID) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/coach/${coachID}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching seat in coach", error);
        throw error; 
    }
};
