import axios from 'axios'

export const instagramAPI = axios.create({
  baseURL: "https://graph.instagram.com",
});

export const API = axios.create({
  baseURL: "http://localhost:3000/",
});