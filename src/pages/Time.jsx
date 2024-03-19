import React, {useState, useEffect} from "react";

export default function Clock() {
    const [currentDate, setDate] = useState(new Date());
    const refresh = () =>{
        setDate(new Date());
    };

    useEffect(() => {
        refresh();
    });

    return(
        <div className="Clock">
            <h1>Bienvenue sur cet afficheur date et heure</h1>
            <h2 className="horloge">Nous sommes le <br />
            <span>{currentDate.toLocaleDateString()}</span><br />
             et il est <br />
             <span>{currentDate.toLocaleTimeString()}</span>
             </h2>
        </div>
    );
}