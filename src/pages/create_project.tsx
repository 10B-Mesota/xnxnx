import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import { Navbar } from "../components/Navbar";
import { api } from "../utils/api";

const cproj: NextPage = () => {
  const events = api.event.getEvents.useQuery();
  const createEvent = api.event.createEvent.useMutation();

  return (
    <>
      <Navbar />
      <h1 className="underline decoration-green-400 decoration-2 text-6xl">Take the initiative now!</h1>
      <h2 className="text-4xl italic">Be the creator of a brand new project quickly by following these easy steps!</h2>
      <ul className="steps">
        <li className="step step-success">Title</li>
        <li className="step step-success">Description</li>
        <li className="step step-success">Timeline</li>
        <li className="step step-success">Picture</li>
        <li data-content="✓" className="step step-success">Submit</li>
    </ul>
    </>
  );
};

export default cproj;