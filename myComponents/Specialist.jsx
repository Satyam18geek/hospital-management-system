import React from 'react';
import doctor from '../json_files/doctors';

const Specialist = () => {
    return (
        <>
            <center> <h1 style={{ color: 'green', fontSize: '3rem', padding: '1rem 0' }}> -- Get to Know Our Specialists -- </h1> </center>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    doctor.map((data) => {
                        return (
                            <>

                                <div className="achievement_div" style={{ margin: '1rem 0', height: 'auto', backgroundColor: 'white', boxShadow: '0.1rem 0.1rem 0.5rem grey', borderRadius: '0.5rem' }}>
                                    <div> <img alt="doctor" src={data.image} style={{ borderRadius: '0.5rem 0.5rem 0 0', width: '100%' }} /> </div>
                                    <div style={{ padding: '1rem' }}> <h2> {data.title} </h2> <br /> <p style={{ fontSize: '1.8rem' }}> {data.discription} </p> <br /> <button><a href={data.view_profile} > View Profile </a> </button></div>
                                </div>

                            </>);
                    })
                }
            </div>
        </>
    );
}

export default Specialist;