import React, { useState, useEffect } from "react";
import axios from "axios";

const PrivacyForm = () => {
    const [privacy, setPrivacy] = useState({
        name: true,
        email: false,
        dob: false,
        gender: true,
        bio: false
    })

    //test use effect
    // useEffect(() => {
    //     axios.get("http://localhost:9007/privacy/2", privacy)
    //     .then((response) => {
    //         setPrivacy(response.data);
    //     })
    //     .catch((error) => console.error(error));
    // }, [])

    //update privacy
    function onSubmitHandler(e) {
         e.preventDefault()
        // axios.put('http://localhost:9007/privacy/6', privacy)
        // .then(response => {
        //     setPrivacy(response.data)
        //     window.location.pathname = ('/PrivacyPage')
        // },
        //     error => {
        //         console.log(error)
        //     })
        //     .catch(error => console.error(error))
    }

    function onChangeHandler(e) {
        setPrivacy({...privacy,
            [e.target.name]: e.target.checked });
    }

    return (
        <div className="container">
            <div className="row">
                <br />
                <div className="privacy-form">
                    <h4>Privacy Form</h4>
                    <p>Update your privacy settings below.</p>
                    
                    <form onSubmit={onSubmitHandler}>
                        {/* 
                        Test onChange
                        {console.log("name: " + privacy.name)}
                        {console.log("dob: " + privacy.dob)}
                        {console.log("gender: " + privacy.gender)}
                        {console.log("bio: " + privacy.bio)}
                        {console.log("email: "  + privacy.email)}
                        {console.log("-------")} */}
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="name"> Hide First & Last Name</label>
                            <input className="form-check-input" type="checkbox" id="name" name="name" checked={privacy.name} onChange={onChangeHandler}/>

                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="dob" name="dob" checked={privacy.dob} onChange={onChangeHandler} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Hide Date of Birth</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="gender" name="gender" checked={privacy.gender} onChange={onChangeHandler} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Hide Gender</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="bio" name="bio" checked={privacy.bio} onChange={onChangeHandler} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Hide Bio</label>
                        </div>
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Hide Email</label>
                            <input className="form-check-input" type="checkbox" id="email" name="email" checked={privacy.email} onChange={onChangeHandler}/>
                        </div>
                        <br />
                        <button type="submit" className="btn col-12">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PrivacyForm;