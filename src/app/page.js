import Image from "next/image";
import styles from "./page.module.css";
import Apartment from "@/components/apartment/Apartment";
import AddListing from "@/components/Listings/AddListing";

export default function Home() {
  return (
    <>
    <Apartment/>
    <AddListing/>
    </>
  );
}
