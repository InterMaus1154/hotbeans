

import { useRef, useEffect, useState } from "react";

import { Validator } from "../util/validator";
import { FORM_TYPES } from "./Form";

const PersonalForm = ({applyFor, setPersonalDetails}) =>{


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");

    useEffect(()=>{
        setPersonalDetails(current => current = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth,
            gender: gender
        });
    }, [firstName, lastName, email, dateOfBirth, gender]);

    return(
    <section className="Personal-details-form form">
        <label>Firstname
            <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="Firstname" name="firstname"/>
        </label>
        <label>Lastname
            <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="Lastname" name="lastname"/>
        </label>
        <label>Email
            <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" name="email" />
        </label>
        <label>Date of birth
            <input type="date" onChange={e=>setDateOfBirth(e.target.value)} placeholder="Date of birth" name="dbo"/>
        </label>
        <label>Gender
            <select style={{marginLeft:"6px"}} onChange={e=>setGender(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select>
        </label>
    </section>
    );
};

export default PersonalForm;