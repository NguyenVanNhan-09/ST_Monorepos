import { Axios } from "./Axios";

const getAllGyms = (payload) => {
    const url = "/gyms";
    return Axios.get(url, payload);
}

const getGymById = (id) => {
    const url = `/gyms/${id}`;
    return Axios.get(url);
}

const ceateAuthGym = (payload) => {
    const url = "/auth-gyms";
    return Axios.post(url, payload);
}

const getAuthGymById = (id) => {
    const url = `/auth-gyms/${id}`;
    return Axios.get(url);
}

const getAllAuthGyms = (payload) => {
    const url = "/auth-gyms";
    return Axios.get(url, payload);
}

export const gymsServices = {
    getAllGyms,
    getGymById,
    ceateAuthGym,
    getAuthGymById,
    getAllAuthGyms
}