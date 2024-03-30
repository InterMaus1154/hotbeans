


import { courses } from "../assets/courses";

import { Link } from "react-router-dom";

const Courses = () =>{
    return(
        <>
        <section className="Page-section">
            <h2 className="Page-header">Available courses</h2>
            <article className="Sample-container">
                <h2 className="Container-header">Apply for one of this course if you want to learn more about web development</h2>
                <h2 className="Container-header">You must be at least 16 to be eligible for our courses</h2>
                <div className="Course-boxes">
                    {
                        courses.map(course =>(
                            <div className="Info-box Course-box">
                                <h2 className="Box-header">{course.name}</h2>
                                <div className="Course-image">
                                    <img src={course.logo_path} alt={course.name} />
                                </div>
                                {
                                    course.descriptions.map(desc =>(
                                        <div className="Course-description">
                                            <h2>{desc.header}</h2>
                                            {
                                            desc.contents.map(content =>(
                                                <p>{content}</p>
                                            ))
                                            }
                                        </div>
                                    ))
                                }
                                <Link to={`/courses/${course.target}`} className="Button-rounded">Apply now</Link>
                            </div>
                        ))
                    }
                    
    
                </div>
            </article>
        </section>
            
        
        </>
    );
};

export default Courses;