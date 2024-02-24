import Image from "next/image";
import styles from "./page.module.css";
import Template from "@/Listings/Template";
import AddListing from "@/Listings/AddListing";

export default function Home() {
  return (
    <>
    <Template/>
    <AddListing/>
    </>
  );
}
