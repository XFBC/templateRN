import { api_contrato } from '../api';

export async function getNewsBanners() {
  try {
    const response = await api_contrato.get('banners-eventos');
    return response.data.results;
  } catch (error) {
    return error;
  }
}
