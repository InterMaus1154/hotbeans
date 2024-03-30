
import Form, {FORM_TYPES} from "../components/Form";


const ApplicationPage = ({currentCourse, currentJob, type}) =>{


    return(
            type == FORM_TYPES.COURSE ? 
            <section className="Page-section">
                <h2 className="Page-header">{currentCourse.name}</h2>
                {
                    currentCourse.descriptions.map(desc => (
                        <article className="Sample-container">
                            <h2 className="Container-header">{desc.header}</h2>
                            {
                                desc.contents.map(content =>(
                                    <p  style={{fontSize: "22px"}}>{content}</p>
                                ))
                            }
                        </article>
                    ))
                }
                <article className="Sample-container">
                    <h2 className="Container-header">Fill out this form to apply</h2>
                    <Form applyFor={currentCourse.name} type={FORM_TYPES.COURSE}/>
                </article>
            </section>
            :
            type == FORM_TYPES.JOB ? 
            <section className="Page-section">
                <h2 className="Page-header">{currentJob.heading}</h2>
                <h2 style={{color: "red"}}>You need to be at least 18 to apply!</h2>
                <h2>{currentJob.sub_heading}</h2>
                <article className="Sample-container">
                    <h2 className="Container-header">Fill out this form to apply</h2>
                    <Form applyFor={currentJob.heading} type={FORM_TYPES.JOB}/>
                </article>
            </section>
            :
            null
    );
};

export default ApplicationPage;

/*
<section className="Page-section">
            {type == FORM_TYPES.COURSE ? 
            <>
                <h2 className="Page-header">{currentCourse?.name}</h2>
                <article className="Sample-container">
                    <h2 className="Box-header"></h2>  
                </article>
                {
                    currentCourse?.descriptions.map(desc => (
                        <article key={crypto.randomUUID()} className="Sample-container">
                            <h2 className="Container-header">{desc.header}</h2>
                            {
                                desc.contents.map(content => (
                                    <p key={crypto.randomUUID()} style={{fontSize: "22px"}}>{content}</p>
                                ))
                            }
                        </article>
                    ))
                }
                <article className="Sample-container">
                    <h2 className="Container-header">Fill out this form to apply</h2>
                    <Form applyFor={name} type={FORM_TYPES.COURSE}/>
                </article>
                </>
                :
                type == FORM_TYPES.JOB ? <h2 className="Page-header">{currentJob.heading}</h2> : null
        </section>
            }

*/