import React { useState, useContext } from 'react'
import AuthContext from "../Context/authContext.js";
import { useContext, useState } from "react";

const Register = () => {
    const dataBase = firebase.firestone();
    const [state, setState] = useState({ email: "", password: "", name: "" });
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const register = () => {
        firebase
            .auth
            .createUserWithEmailAndPassword(state.email, state.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dataBase.collection("users")
                    .doc(user.uid)
                    .set
                name: state.name
                email: state.email
                avatar: "https://www.reddit.com/r/pics/comments/bvuwlu/arnold_schwarzenegger_holding_an_old_ipad/"
        })
    }
}