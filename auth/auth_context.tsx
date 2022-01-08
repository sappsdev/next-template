import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { createContext, Fragment, useState } from "react";
import { AppSnackbar } from "../elements/app_snackbar";
import { useRequest } from "../hooks/useRequest";
import { AuthContextProps, LoginData, LoginResponse, RegisterData, TypeSnackbar, UserData } from "./auth_interface";

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const { request } = useRequest()
  const status = 'notAuthenticated';
  const [pageName, setPagename] = useState("");
  const [userData, setUserData] = useState<UserData>({
    names: '',
    surnames: '',
    phone: '',
    rol : '',
  });
  const [snack, setSnack] = useState({
    message: '',
    variant: 'info',
    open: false,
  });

  const setPageName = (name:string) => {
    setPagename(name);
  }
  const snackBar = ({message, variant}:TypeSnackbar) => {
    setSnack({ 
      message: message, 
      variant: variant, 
      open: true
    });
    setTimeout(() =>{ 
      setSnack({ 
        message: '',
        variant: 'info', 
        open: false
    })}, 5000);
  }  

  const login = async (form : LoginData) => {
    try {
      const url = "/v1/user/login"
      const { data } = await request.post<LoginResponse>(url, form);
      await localStorage.setItem("token", data.token);
      setUserData({
        names : data.names,
        surnames : data.surnames,
        phone : data.phone,
        rol: 'user'
      })
      router.push('/dashboard');

    } catch (error:any) {
      snackBar({
        message: 'Email / Contraseña incorrecta',
        variant: 'error'
      })
    }
  };
  const register = async (form : RegisterData) => {
    try {
      const url = "/v1/user/register"
      const { data } = await request.post<LoginResponse>(url, form);
      setUserData({
        names : data.names,
        surnames : data.surnames,
        phone : data.phone,
        rol: 'user'
      })   
      await localStorage.setItem("token", data.token);
      router.push('/dashboard');

    } catch (error:any) {
      snackBar({
        message: 'Error al crear la cuenta',
        variant: 'error'
      })
    }
  };
  const auth = async () => {
    try {
      const url = "/v1/user/auth"
      
      const { data } = await request.post<LoginResponse>(url, {});
      setUserData({
        names : data.names,
        surnames : data.surnames,
        phone : data.phone,
        rol: 'user'
      })        
      return true;

    } catch (error:any) {
      return false;
    }
  };
  const logOut = async () => {
    await localStorage.removeItem("token");
    router.push('/')
  };

  return(
    <AuthContext.Provider value={{
      pageName,
      setPageName,
      userData,
      login,
      register,
      logOut,
      auth,
      status,
      snackBar,
    }}>
        { children }
        <AppSnackbar 
          variant={snack.variant}
          message={snack.message}
          open={snack.open}
        />     
    </AuthContext.Provider>
  ); 
}

