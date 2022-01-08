import { ReactNode } from "react";
import Head from 'next/head';
import { FooterGuest } from "components/shared/footer_guest";
import { HeaderGuest } from "components/shared/header_guest";
type Props = {
  children: ReactNode;
  title: string;
};
export const GuestLayout = ({ children, title }: Props) => {
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col">
        <main>{children}</main>
      </div>
    </>
  )
}