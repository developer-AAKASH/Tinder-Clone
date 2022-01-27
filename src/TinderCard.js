import React, { useState } from 'react';
import "./Tinder-Card.css";

export default function TinderCard() {
    const [ people, setPeople ] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: "Jeff Bezoz",
            url: "https://www.wired.com/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
        },
        {
            name: "Mark Zukerberg",
            url: "https://media.istockphoto.com/photos/mark-zuckerberg-at-g8-in-deauville-france-picture-id482954389?k=20&m=482954389&s=612x612&w=0&h=uozn7gacYP5C1SLgJDKASVJftrSilHj4FiV80oi-_Cs="
        },
    ]);
    return <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map(( person )=>(
                <div>
                    <img 
                        className="cardImageSize"
                        src={person.url}
                        alt=""
                    />
                    <h1>{person.name}</h1>
                </div>
            ))}
        </div>
    </div>
};
