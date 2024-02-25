"use client";

import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {TextField, PrimaryButton, IconButton} from '@fluentui/react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { mergeStyleSets } from "@fluentui/react";
import { getDatabase, ref as databaseRef, push, set, get } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { Stack } from '@fluentui/react/lib/Stack';

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
const analytics = getAnalytics();
const database = getDatabase();
const storage = getStorage();


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
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');
    const [files, setFiles] = useState([])
    const [images, setImages] = useState([null, null, null, null]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = (files) => {
        console.log('Files:', files);
        setFiles(files);
        handleClose();
    };

    const handleImageChange = (file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newImages = [...images];
            newImages[index] = e.target.result; // Data URL of the image
            setImages(newImages);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };

    const ImageUploadBox = ({ image, index }) => {
        return (
            <div style={{ width: '300px', height: '200px', position: 'relative', border: '1px dashed grey', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} title="Upload image of listing">
                {image ? (
                    <>
                        <img src={image} alt={`upload-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', right: '5px', top: '5px' }} />
                    </>
                ) : (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ width: '100%', height: '100%', opacity: 0, position: 'absolute' }}
                            onChange={(e) => handleImageChange(e.target.files[0], index)}
                        />
                        <div style={{ position: 'absolute', pointerEvents: 'none' }}>+</div>
                    </>
                )}
            </div>
        );
    };

    const handleChange = (setter) => (e) => setter(e.target.value);

    const submitListing = () => {
        // Simple validation
        if (!name.trim() || !description.trim() || !address.trim() || isNaN(Number(price)) || Number(price) <= 0 || !contact.trim() || files.length === 0) {
            alert("Please fill in all fields correctly and add at least one image before submitting.");
            return;
        }

        const addressRef = databaseRef(database, `listings/${address}`);
        get(addressRef).then((snapshot) => {
            if (snapshot.exists()) {
                alert("This address is already in the listings.");
            } else {
                // Function to upload a single file to Firebase Storage and return the URL
                const uploadFile = (file) => {
                    const uploadRef = storageRef(storage, `listings/${address}/${file.name}`);
                    return uploadBytes(uploadRef, file).then(snapshot => getDownloadURL(snapshot.ref));
                };

                // Upload all files and collect their URLs
                Promise.all(files.map(file => uploadFile(file)))
                    .then(urls => {
                        const listingData = {
                            name: name,
                            description: description,
                            address: address,
                            price: Number(price),
                            contact: contact,
                            imageUrls: urls
                        };

                        set(addressRef, listingData)
                            .then(() => {
                                alert("Listing added successfully with all images!");
                            })
                            .catch(error => {
                                console.error("Error saving listing to database: ", error);
                                alert("Error saving listing");
                            });
                    })
                    .catch(error => {
                        console.error("Error uploading files: ", error);
                        alert("Error uploading images");
                    });
            }
        }).catch(error => {
            console.error("Error checking address existence: ", error);
            alert("Error checking if address exists");
        });
    };


    return (
        <Stack tokens={{ childrenGap: 20 }} horizontalAlign="center">
            <Stack horizontal tokens={{ childrenGap: 20 }} wrap horizontalAlign="end">
                {/* Image upload boxes */}
                {images.map((image, index) => (
                    <ImageUploadBox key={index} image={image} index={index} />
                ))}
                {/* Airbnb-styled Add Listing button */}
                <PrimaryButton
                    text="Add Listing"
                    onClick={submitListing}
                    styles={{
                        root: {
                            backgroundColor: '#FF5A5F', // Airbnb pink
                            borderColor: '#FF5A5F',
                            color: 'white',
                            selectors: {
                                ':hover': {
                                    backgroundColor: '#FF5A5F',
                                    opacity: 0.8
                                }
                            }
                        }
                    }}
                />
            </Stack>

            {/* Inputs for listing details */}
            <Stack horizontal tokens={{ childrenGap: 20 }} horizontalAlign="center" style={{ marginTop: '20px' }}>
                <TextField borderless placeholder="Add Title..." value={name} onChange={handleChange(setName)} />
                <TextField borderless placeholder="Add Price" value={price} onChange={handleChange(setPrice)} type="number" prefix="$" />
                <TextField borderless placeholder="Add Description..." value={description} onChange={handleChange(setDescription)} multiline autoAdjustHeight />
                <PrimaryButton text="Contact Student" />
            </Stack>
        </Stack>
    );
}