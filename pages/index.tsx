import type { NextPage } from "next";
import { HomePage } from "components/home/home_page";
import { GuestLayout } from "layouts/guest_layout";
const home: NextPage = () => {
  return <GuestLayout title="Home">
    <HomePage/>
  </GuestLayout>;
};

export default home;
