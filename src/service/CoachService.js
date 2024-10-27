import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/coach";

export const ListCoachInTrain = async (trainID) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/train/${trainID}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching seat in coach", error);
        throw error; 
    }
};
