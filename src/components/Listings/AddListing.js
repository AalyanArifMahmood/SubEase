"use client";

import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { TextField, PrimaryButton } from '@fluentui/react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { mergeStyleSets } from "@fluentui/react";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDRVw3h88OaQfxhP0sXorKT2wC8rZhoxDA",
    authDomain: "subease-283bc.firebaseapp.com",
    databaseURL: "https://subease-283bc-default-rtdb.firebaseio.com",
    projectId: "subease-283bc",
    storageBucket: "subease-283bc.appspot.com",
    messagingSenderId: "845189068592",
    appId: "1:845189068592:web:702bb21551610c2aa1faf5",
    measurementId: "G-8J5SR6V4XJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const classNames = mergeStyleSets({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    textField: {
        margin: '10px',
        minWidth: '20%',
        maxWidth: 'calc(50% - 20px)',
    },
});

export default function AddListing() {
    const database = getDatabase();
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = (files) => {
        console.log('Files:', files);
        setFiles(files);
        handleClose();
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');

    const handleChange = (setter) => (e) => setter(e.target.value);

    const submitListing = () => {
        const listingsRef = ref(database, 'listings');
        const newListingRef = push(listingsRef);
        push(newListingRef, {
            name,
            description,
            address,
            price: Number(price), 
            contact,
        }).then(() => {
            console.log("Listing added successfully!");
        }).catch((error) => {
            console.error("Error adding listing: ", error);
        });
    };

    return (
        <div>
            <div className={classNames.container}>
                <TextField id={"name"} value={name} onChange={handleChange(setName)} className={classNames.textField} label="Name of Listing" required />
                <TextField id={"description"} value={description} onChange={handleChange(setDescription)} className={classNames.textField} label="Description" autoAdjustHeight />
                <TextField id={"address"} value={address} onChange={handleChange(setAddress)} className={classNames.textField} label="Address" required />
                <TextField id={"price"} value={price} onChange={handleChange(setPrice)} className={classNames.textField} label="Price" type="number" prefix="$" />
                <TextField id={"contact"} value={contact} onChange={handleChange(setContact)} className={classNames.textField} label="Contact Information" required />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: "5%" }}>
                <PrimaryButton onClick={handleOpen}>
                    Add Image
                </PrimaryButton>
                <DropzoneDialog
                    open={open}
                    onSave={handleSave}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={handleClose}
                />
                <PrimaryButton onClick={submitListing}>Submit</PrimaryButton>
            </div>
        </div>
    );
}