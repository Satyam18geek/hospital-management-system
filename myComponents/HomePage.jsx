import React from 'react';
import '../css/css/index_page_css.css';
import '../css/css/homepage_sliders.css';
import news from '../json_files/achievement.js';
import image1 from '../images/image1.jpg';

const HomePage = () => {
    return (
        <>
            <br />
            <div className="im-scrollbar-and-news-container">
                <div className="main-scrollbar">
                    <div> <img src={image1} style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                    <div> <img src="https://picsum.photos/1366/500" style={{ width: '100%', height: '100%' }} /> </div>
                </div>
                <div className="latest-News">
                    <div className="news-1">
                        <div style={{ position: 'sticky', top: '0', backgroundColor: 'lightgreen', padding: '0.71rem 1.2rem' }}> <h2> News 1 </h2> </div>
                        <div style={{ padding: '0rem 0.5rem' }}>
                            {
                                news.map((data) => {
                                    return (
                                        <>
                                            <div style={{ backgroundColor: '#f6f6f6', display: 'flex', borderRadius: '0.2rem', border: '0.1rem solid grey', height: '5rem', width: '100%', margin: '0.5rem 0' }}>
                                                <div style={{ width: '30%' }} > <img src="https://picsum.photos/300/200" style={{ width: '100%', height: '100%' }} /> </div>
                                                <div style={{ width: '70%', fontSize: '1.5rem', padding: '0.5rem 1rem' }} > {data.discription} </div>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>);
}

export default HomePage;