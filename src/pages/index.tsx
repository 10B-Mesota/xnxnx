import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return <Card name="Nume" />;
};

export default Home;
