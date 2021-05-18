import axios from 'axios'

export const instagramAPI = axios.create({
  baseURL: "https://graph.instagram.com",
});

export const API = axios.create({
  baseURL: "/api/v1/",
});