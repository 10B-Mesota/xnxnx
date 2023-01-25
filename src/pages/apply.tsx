import { NextPage } from "next";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { api } from "../utils/api";

const Apply: NextPage = () => {
  const router = useRouter();
  const { event_name } = router.query;

  return (
    <>{event_name ? <>apllying to {event_name}</> : <>Invalid post id</>}</>
  );
};

export default Apply;
