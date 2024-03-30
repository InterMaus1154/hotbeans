
import Form, {FORM_TYPES} from "../components/Form";

const Applicaton = () =>{
    return(
        <section className="Page-section">
            <h2 className="Page-header">Application</h2>
            <article className="Sample-container">
                <h2 className="Container-header">Contact us here if you have any further question!</h2>
                <Form type={FORM_TYPES.GENERAL}/>
            </article>
        </section>
    );
};

export default Applicaton;