"use client";

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { TextField, PrimaryButton } from "@fluentui/react";
import { DropzoneDialog } from "material-ui-dropzone";
import { mergeStyleSets } from "@fluentui/react";
import {
  getDatabase,
  ref as databaseRef,
  push,
  set,
  get,
} from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRVw3h88OaQfxhP0sXorKT2wC8rZhoxDA",
  authDomain: "subease-283bc.firebaseapp.com",
  databaseURL: "https://subease-283bc-default-rtdb.firebaseio.com",
  projectId: "subease-283bc",
  storageBucket: "subease-283bc.appspot.com",
  messagingSenderId: "845189068592",
  appId: "1:845189068592:web:702bb21551610c2aa1faf5",
  measurementId: "G-8J5SR6V4XJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const database = getDatabase();
const storage = getStorage();

const classNames = mergeStyleSets({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    margin: "10px",
    minWidth: "20%",
    maxWidth: "calc(50% - 20px)",
  },
});

export default function AddListing() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [files, setFiles] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (files) => {
    console.log("Files:", files);
    setFiles(files);
    handleClose();
  };

  const handleChange = (setter) => (e) => setter(e.target.value);

  const submitListing = () => {
    // Simple validation
    if (
      !name.trim() ||
      !description.trim() ||
      !address.trim() ||
      isNaN(Number(price)) ||
      Number(price) <= 0 ||
      !contact.trim() ||
      files.length === 0
    ) {
      alert(
        "Please fill in all fields correctly and add at least one image before submitting."
      );
      return;
    }

    const addressRef = databaseRef(database, `listings/${address}`);
    get(addressRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("This address is already in the listings.");
        } else {
          // Function to upload a single file to Firebase Storage and return the URL
          const uploadFile = (file) => {
            const uploadRef = storageRef(
              storage,
              `listings/${address}/${file.name}`
            );
            return uploadBytes(uploadRef, file).then((snapshot) =>
              getDownloadURL(snapshot.ref)
            );
          };

          // Upload all files and collect their URLs
          Promise.all(files.map((file) => uploadFile(file)))
            .then((urls) => {
              const listingData = {
                name: name,
                description: description,
                address: address,
                price: Number(price),
                contact: contact,
                imageUrls: urls,
              };

              set(addressRef, listingData)
                .then(() => {
                  alert("Listing added successfully with all images!");
                })
                .catch((error) => {
                  console.error("Error saving listing to database: ", error);
                  alert("Error saving listing");
                });
            })
            .catch((error) => {
              console.error("Error uploading files: ", error);
              alert("Error uploading images");
            });
        }
      })
      .catch((error) => {
        console.error("Error checking address existence: ", error);
        alert("Error checking if address exists");
      });
  };

  return (
    <div>
      <div className={classNames.container}>
        <TextField
          id={"name"}
          value={name}
          onChange={handleChange(setName)}
          className={classNames.textField}
          label="Name of Listing"
          required
        />
        <TextField
          id={"description"}
          value={description}
          onChange={handleChange(setDescription)}
          className={classNames.textField}
          label="Description"
          autoAdjustHeight
        />
        <TextField
          id={"address"}
          value={address}
          onChange={handleChange(setAddress)}
          className={classNames.textField}
          label="Address"
          required
        />
        <TextField
          id={"price"}
          value={price}
          onChange={handleChange(setPrice)}
          className={classNames.textField}
          label="Price"
          type="number"
          prefix="$"
        />
        <TextField
          id={"contact"}
          value={contact}
          onChange={handleChange(setContact)}
          className={classNames.textField}
          label="Contact Information"
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "5%",
        }}
      >
        <PrimaryButton onClick={handleOpen}>Add Image</PrimaryButton>
        <DropzoneDialog
          open={open}
          onSave={handleSave}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose}
        />
        <PrimaryButton onClick={submitListing}>Submit</PrimaryButton>
      </div>
    </div>
  );
}
