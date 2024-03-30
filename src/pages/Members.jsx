
import {members} from "../assets/members";


const Members = () =>{


    return(
        <section className="Page-section">
            <h2 className="Page-header">Current Members</h2>
            <article className="Sample-container">
                <h2 className="Container-header">Recently employed</h2>
                <div className="Member-cards">
                    {members.recent.map(member =>{
                           return <MemberCard upperCardStyle={{backgroundColor: "#ECF0F1", color: "#000"}} member={member} />
                        })
                    }
                </div>
            </article>
            <article className="Sample-container">
                <h2 className="Container-header">Senior members</h2>
                <div className="Member-cards">
                    {members.senior.map(member =>{
                           return <MemberCard upperCardStyle={{backgroundColor: "#F8EAD8", color: "#000"}} member={member} />
                        })
                    }
                </div>
            </article>
            <article className="Sample-container">
                <h2 className="Container-header">Leaders</h2>
                <div className="Member-cards">
                    {members.leader.map(member =>{
                           return <MemberCard upperCardStyle={{backgroundColor: "#2F3542", color: "#fff"}} member={member} />
                        })
                    }
                </div>
            </article>
        </section>
    );
};

export default Members;


function MemberCard({upperCardStyle, member}){

    return(
        <div className="Member-card">
            <div style={upperCardStyle} className="Upper-card">
                <div className="Member-image">
                    <img loading="lazy" src={member.picture_path} alt={member.name} />
                </div>
                <div className="Member-description">
                    Joined in {member.start_date}<br></br>
                    {member.role}
                </div>
            </div>
            <div className="Lower-card">
                <div className="Member-name">{member.name}</div>
            </div>    
        </div>
    );
}