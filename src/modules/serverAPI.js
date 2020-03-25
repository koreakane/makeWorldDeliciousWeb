import axios from "axios";

const linkData = require("../linkData.json");
const API = linkData.api;

export const getStoreInfo = async () => {
    const response = await axios({
        method: "GET",
        url : API + "store"
    })

    console.log("GET store info response :");
    console.log(response.data);
    return response.data;
}

export const getInfluencerInfo = async () => {
    const response = await axios({
        method: "GET",
        url : API + "influencer"
    })

    console.log("GET Influencer response :");
    console.log(response.data);
    return response.data;
}