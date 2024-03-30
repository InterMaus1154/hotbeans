
import {Link} from 'react-router-dom';

import WdsPic from "../assets/pictures/wds.jpg";
import MoshPic from "../assets/pictures/mosh.jpg"
import FccPic from "../assets/pictures/fcc_primary_small.jpg"

import { jobs } from '../assets/jobs';

const Services = () =>{
    return(
        <section className="Page-section">
            <h2 className="Page-header">Services</h2>
            <article className="Sample-container">
                <h2 className="Container-header">Current job vacancies</h2>
                {   jobs.map(job =>{
                        return(
                            <div className="Info-box Job-box">
                                <h2 className="Box-header">{job.heading}</h2>
                                <p>{job.sub_heading}</p>
                                {
                                    job.expectations.map(expectation => {
                                        return(
                                            <>
                                                <p>{expectation.heading}</p>
                                                <ul>
                                                    {
                                                        expectation.elements.map(element => {
                                                            return(
                                                                <li>{element}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </>
                                        )
                                    })
                                }
                                <h3>Role:</h3>
                                <p>{job.role}</p>
                                <Link style={{color: "#000000"}} to={`/jobs/${job.target}`} className="Button-rounded">Click for more</Link>
                            </div>
                        )
                    })
                }
            </article>
            <article className="Sample-container">
                <h2 className="Container-header">Learning resources</h2>
                <h3>Check if we have available courses <Link style={{color: "#000000"}} to="/courses">here</Link></h3>
                <h3>If you don't find a course you like, check out our partners</h3>
                <div className="Info-box Resource-box">
                    <h2 className="Box-header">Web Dev Simplified</h2>
                    <div className="Resource-info">
                        <div className="Resource-image"><img src={WdsPic} alt="Web dev simplified"/></div>
                        <div className="Resource-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin elit in libero ullamcorper efficitur. Proin magna enim, suscipit non nibh in, viverra interdum augue. </p></div>
                    </div>
                    <div className="Resource-video">
                        <div className="Video-title">Introduction to web development</div>
                        <iframe src="https://www.youtube.com/embed/HfTXHrWMGVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <a href="https://courses.webdevsimplified.com/" target="_blank" className="Button-rounded">Click for more</a>
                </div>
                <div className="Info-box Resource-box">
                    <h2 className="Box-header">Programming with Mosh</h2>
                    <div className="Resource-info">
                        <div className="Resource-image"><img src={MoshPic} alt="Web dev simplified"/></div>
                        <div className="Resource-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin elit in libero ullamcorper efficitur. Proin magna enim, suscipit non nibh in, viverra interdum augue. </p></div>
                    </div>
                    <div className="Resource-video">
                        <div className="Video-title">HTML Crash Course in an hour for beginners</div>
                        <iframe src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <a href="https://programmingwithmosh.com/" target="_blank" className="Button-rounded">Click for more</a>
                </div>
                <div className="Info-box Resource-box">
                    <h2 className="Box-header">Free Code Camp</h2>
                    <div className="Resource-info">
                        <div className="Resource-image"><img src={FccPic} alt="Web dev simplified"/></div>
                        <div className="Resource-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin elit in libero ullamcorper efficitur. Proin magna enim, suscipit non nibh in, viverra interdum augue. </p></div>
                    </div>
                    <div className="Resource-video">
                        <div className="Video-title">HTML5 and CSS3 from scratch - full course</div>
                        <iframe src="https://www.youtube.com/embed/mU6anWqZJcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <a href="https://www.freecodecamp.org/" target="_blank" className="Button-rounded">Click for more</a>
                </div>
            </article>
        </section>    
    );
};


export default Services;