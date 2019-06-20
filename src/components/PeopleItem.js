import React from 'react';
import './PeopleItem.css';
//import faker from 'faker';
const PeopleItem = props=>{


    //console.log(props.person);
    const img = `https://avatars.dicebear.com/v2/avataaars/${props.person.username}.svg?options[mood][]=happy`;
    //console.log(img);
    
    return(
        <div className="content">
        <div className="ui card" style={{margin:'20px 0px', borderRadius:'0px', width:'100%'}}>
            <div  className="ui fluid grid" style={{padding:'10px', margin:'0px'}}>
                <div className="ui row" style={{padding:'0px'}}>
                            <div className="three wide column" style={{padding:'0px 15px 0px 0px'}}>
                                <img src={img} alt="avatar" width="200px" height="200px" />
                            </div>
                            <div className="thirteen wide column">
                                <h1 className="header">{props.person.name}</h1>
                                <p className="details"><strong>Email: </strong>{props.person.email} </p>
                                <p className="details"><strong>Phone: </strong>{props.person.phone}</p>
                                <p className="details"><strong>Company: </strong>{props.person.company.name}</p>
                                <p className="details"><strong>Website: </strong>{props.person.website}</p>
                                <p className="details"><strong>Address: </strong>
                                {props.person.address.street}, {props.person.address.suite},  {props.person.address.city},  {props.person.address.zipcode}</p>                            
                            </div>
                    </div>
            </div>
        </div>
        </div>
    );
} 

export default PeopleItem;