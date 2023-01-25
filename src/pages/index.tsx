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
      <center>
        <div className="grid grid-cols-2">
{events.data?.map((element) => (
        <div className="mx-4 my-4 ">
          <div className="mt-10">
            <Card
              name={element.name}
              sorce={element.photo_link}
              text={element.details}
            />
          </div>
          </div>
        ))}
      
        </div>
        
      </center>
      
    </>
  );
};

export default Home;