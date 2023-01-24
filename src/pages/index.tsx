import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import { Navbar } from '../components/Navbar';
import { api } from "../utils/api";

const Home: NextPage = () => {
  return(
  <>
    <Navbar /> 
    <div className="flex mx-40 my-20 justify-between">
      <Card name="Nume" sorce="https://media.hotnews.ro/media_server1/image-2022-10-28-25869496-41-vladimir-putin.jpg" text="sadjkhjejkfdhafiuashfduiashdasdouiayshd8usaiyhdausiyh" />
    <Card name="Nume" sorce="https://media.hotnews.ro/media_server1/image-2022-10-28-25869496-41-vladimir-putin.jpg" text="sadjkhjejkfdhafiuashfduiashdasdouiayshd8usaiyhdausiyh" />
    </div>
    
  </>
  );
};

export default Home;
