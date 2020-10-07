import { NuxtAxiosInstance } from "@nuxtjs/axios";

let $axios: NuxtAxiosInstance;

const KAI_ADMIN_ENDPOINT = "https://dev-api-tego022.bcms.tech/api/v1"

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
}

export function POST(path: string, data?: any, config?: any) {
  return $axios.post(`${KAI_ADMIN_ENDPOINT}/${path}`, data, config);
}

export function GET(path: string, config?: any) {
  return $axios.get(`${KAI_ADMIN_ENDPOINT}/${path}`, config);
}


export { $axios };
