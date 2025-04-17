import { Axios } from "./Axios";

const getAllGyms = (payload) => {
    const url = "/gyms";
    return Axios.get(url, payload);
}

const getGymById = (id) => {
    const url = `/gyms/${id}`;
    return Axios.get(url);
}

export const gymsServices = {
    getAllGyms,
    getGymById
}