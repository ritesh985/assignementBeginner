import React from 'react';
import PeopleItem from './PeopleItem'
const PeopleList= props=>{
        const renderedList = props.people.map( person =>{
            return(
                <PeopleItem
                    key={person.id} 
                    person = {person}
                />

            );
        });
        return (
            
            <div>
                
                    {renderedList}
                
            </div>
        );
    }
export default PeopleList;