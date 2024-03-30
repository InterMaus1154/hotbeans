import PersonalForm from "./PersonalForm";

import { useState, useRef } from "react";

import { Validator } from "../util/validator";

export const FORM_TYPES = Object.freeze({
    COURSE: "course",
    JOB: "job",
    GENERAL:"general"
});

const Form = ({applyFor, type}) =>{

    const [personalDetails, setPersonalDetails] = useState({});

    const {firstName, lastName, email, dateOfBirth, gender} = personalDetails;

    const fileInputRef = useRef("");
    const subjectInputRef = useRef("");
    const detailsInputRef = useRef("");

    const submitForm = event =>{
        const AGE_RESTRICTION = type == FORM_TYPES.COURSE ? 16 : 18;
        event.preventDefault();
        if(!Validator.validateForm(firstName, lastName, email, dateOfBirth, AGE_RESTRICTION)){
            alert("Check your inputs! Make sure you filled out all inputs and you provided a valid email address!");
            return;
        }
        if(type == FORM_TYPES.JOB && fileInputRef.current.value.trim().length == 0){
            alert("Please upload your CV!");
            return;
        }

        if(type == FORM_TYPES.GENERAL && (subjectInputRef.current.value.trim().length == 0 || detailsInputRef.current.value.trim().length == 0)){
            alert("You need to fill out all inputs");
            return;
        }

        alert("Thank you for your application! We will contact you as soon as possible!")

    };
    
    const labelStyle = {
        display: "block",
        margin: "12px 0"
    }

    return (
        <form onSubmit={submitForm}>
            <PersonalForm applyFor={applyFor} setPersonalDetails={setPersonalDetails} />
            {
                type == FORM_TYPES.JOB ?
                    <label style={labelStyle}>Upload your CV
                        <input type="file" name="file" ref={fileInputRef}/>
                    </label>
                : type == FORM_TYPES.GENERAL ?
                <>
                    <label style={labelStyle}>Subject
                        <input type="text" name="subject" ref={subjectInputRef} placeholder="Subject"/>
                    </label>
                    <label style={labelStyle}>Details
                        <textarea name="details" ref={detailsInputRef}></textarea>
                    </label>
                </>
                :
                null
            }
            <button style={{alignSelf:"first baseline", fontSize: "14px"}} type="submit">Submit</button>
        </form>
    );
};

export default Form;