import Image from "next/image";
import styles from "./page.module.css";
import Apartment from "@/Listings/Apartment";

export default function Home() {
  return (
    <>
    <p>
      Hello world
    </p>
    <Apartment/>
    </>
  );
}
