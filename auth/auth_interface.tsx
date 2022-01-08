export interface LoginData {
  email: string,
  password: string,
}
export interface RegisterData {
  names: string,
  surnames: string,
  phone: string,
  email: string,
  password: string,
}

export interface UserData {
  names: string,
  surnames: string,
  phone: string,
  rol : string,
}

export interface LoginResponse {
  names: string,
  surnames: string,
  phone: string,
  avatar: string,
  rol: string,
  token: string,
}

export type TypeSnackbar = {
  variant: 'error' | 'success' | 'info';
  message: string
}

export type AuthContextProps = {
  pageName: string;
  setPageName: (name:string) => void;
  userData: UserData | null;
  status: 'authenticated' | 'notAuthenticated';
  login: ( form: LoginData ) => void;
  register: ( form: RegisterData ) => void;
  logOut: () => void;
  auth: () => Promise<boolean>;
  snackBar: ( {message, variant}:TypeSnackbar ) => void;
}
