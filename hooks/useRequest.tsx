import axios from "axios";
import { useContext } from 'react';
import { useRouter } from 'next/router'
//import { AuthContext } from "../auth/auth_context";

export const useRequest = () => {

const baseURL = process.env.API_HOST || "https://redsuelvaapi.sappsdev.com";
const request = axios.create({ baseURL });

//const { logOut } = useContext( AuthContext );
const router = useRouter()

request.interceptors.request.use(async (config: any) => {
  const token = await localStorage.getItem("token");
  if (token) {
    config.headers["token"] = token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

request.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    if (401 === error.response.status) {
      router.push('/');
    }
    if(403 === error.response.status){
      //return await logOut();
    }

    return Promise.reject(error);
  }
);
  return {
    request,
  }
}