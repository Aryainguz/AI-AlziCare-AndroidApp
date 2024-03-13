import axios from 'axios';

const BASE = "https://alzi-care-chat-assistant-api.vercel.app/api"

const getResponse = (userMsg)=>axios.get(`${BASE}/chat?usertext=${userMsg}`)

export default getResponse