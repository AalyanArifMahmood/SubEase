"use client";

import React, { useState, useEffect } from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Page from "@/app/itemDisplay/page";

const LandingPage = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [userNow, setUserNow] = useState([]);
    const [correct, setCorrect] = useState(true); // Assuming 'correct' is used somewhere

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken; // Assuming you're using 'token' somewhere

                    // The signed-in user info.
                    const user = result.user;
                    setUserNow(prevUserNow => [...prevUserNow, user]);
                }
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Log the error or set an error state as needed
            console.error("SignIn Error", errorCode, errorMessage);
        });
    }, []);

    const signIn = () => {
        signInWithRedirect(auth, provider);
    };

    if (userNow.length === 0) {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ marginTop: '8%', fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville' }}>SubEase</h1>
                <h2 style={{ fontSize: '4vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Please Proceed Below</h2>
                <PrimaryButton text="Login" onClick={signIn} allowDisabledFocus />
            </div>
        );
    } else {
        if (userNow[0].email.slice(userNow[0].email.length - 15) === "@macalester.edu") {
            return <Page userNow={userNow} />;
        } else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ marginTop: '8%', fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Sorry, the page unavailable with your current account</h1>
                    <h1 style={{ marginTop: '8%', fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Try Logging in with a <b>valid</b> Macalester Email</h1>
                </div>
            );
        }
    }
};

export default LandingPage;
