"use client";
import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { TextField } from '@fluentui/react';
import { mergeStyleSets } from "@fluentui/react";

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


/**
 * name of listing
 * description
 * address
 * photo
 * price
 * contact information
 */
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
    return (
        <div className={classNames.container}>
            <TextField id={"name"} className={classNames.textField} label="Name of Listing" required />
            <TextField id={"description"} className={classNames.textField} label="Description"  autoAdjustHeight />
            <TextField id={"address"} className={classNames.textField} label="Address" required />
            <TextField id={"price"} className={classNames.textField} label="Price" type="number" prefix="$" />
            <TextField id={"contact"} className={classNames.textField} label="Contact Information" required />
        </div>
    );
}