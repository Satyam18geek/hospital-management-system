import React, { useState } from 'react';
import '../css/css/login_page_css.css';

const ContactUs = () => {
    const [select_tag, set_select_tag] = useState("select");
    const [textarea_tag, set_textarea_tag] = useState("");

    const submitForm = (e) => {
        /*let data = {
            select_tag,
            textarea_tag
        };
        console.log(data);

        fetch(`http://localhost:8080/send-feedback-data`, {
            method: "post",
            data
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
*/
    }

        return (
            <>
                <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
                    <form method="POST" action="http://localhost:8080//send-feedback-data" onSubmit={submitForm}>
                        <div className="login-form">
                            <div>
                                <div> <center> <h1> Feedback/Query </h1> </center> </div>
                                <br />
                            </div>
                            <div style={{ padding: '5% 0%' }}>
                                <select value={select_tag} onChange={(e) => { set_select_tag(e.target.value); }} style={{ width: '100%', fontSize: '1.5rem' }} >
                                    <option value="select"> Select the Issue </option>
                                    <option value="Bug"> Bug </option>
                                    <option value="Continuous Lag">Continuous Lag</option>
                                    <option value="Not proper resuls"> Not proper resuls </option>
                                    <option value="Feedback"> Feedback </option>
                                    <option value="Others"> others </option>
                                </select>
                            </div>
                            <div id="textarea">
                                <textarea placeholder="describe here" value={textarea_tag} style={{ width: '100%', height: '8rem' }} onChange={(e) => { set_textarea_tag(e.target.value) }}>  </textarea>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <input type="submit" name="submit" style={{ color: 'white', border: '0.2rem solid indigo', backgroundColor: 'indigo' }} />
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }

    export default ContactUs;