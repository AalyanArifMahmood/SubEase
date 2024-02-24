import styles from "./page.module.css";
import Holder from "../components/Apartment/Holder";
import AddListing from "@/components/Listings/AddListing";

export default function Home() {
  return (
    <>
      <Holder/>
      <AddListing/>
    </>
  );
}
