import axios from 'axios'

export const instagramAPI = axios.create({
  baseURL: "https://graph.instagram.com",
});