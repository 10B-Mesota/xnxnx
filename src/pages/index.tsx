import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import { Navbar } from "../components/Navbar";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const events = api.event.getEvents.useQuery();
  const createEvent = api.event.createEvent.useMutation();

  return (
    <>
      <Navbar />
      <div className="mx-40 my-20 flex justify-between">
        {events.data?.map((element) => (
          <Card
            name={element.name}
            sorce={element.photo_link}
            text={element.details}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
