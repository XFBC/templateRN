import axios from 'axios';

export const api_contrato = axios.create({
  baseURL: 'https://api-temp.vercel.app/api/assembleia-paraense',
});
