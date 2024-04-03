

import { Link } from "react-router-dom";

const Contact = () =>{
    return(
        <section className="Page-section">
            <h2 className="Page-header">Contact</h2>
            <article className="Sample-container">
                <h2 className="Container-header">Contact details</h2>
                <ul className="Contact-details">
                    <li>
                        <h3>Email: </h3>
                        <a href={"mailto: enquiry@hotbeans.co.uk"}>enquiry@hotbeans.co.uk</a>
                    </li>
                    <li>
                        <h3>Phone (available on business days 08:00-16:00)</h3>
                        <a href={"tel: +44 2548876888"}>+44 2548876888</a>
                    </li>
                    <li>
                        <h3>Mailing address:</h3>
                        <p>Sample street 3-4<br/>
                            XY5 45T
                        </p>
                    </li>
                    <li>
                        <h3>Alternatively use our application form <Link to="/application">Here</Link></h3>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default Contact;