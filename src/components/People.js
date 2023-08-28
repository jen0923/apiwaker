import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const People = () =>{
    const [apiData, setApiData] = useState({});
    const { id } = useParams();
    const [isError, setIsError] = useState(false);
    const [homeworld, setHomeworld] = useState();
    const [homeworldId, setHomeworldId] = useState();

    useEffect(()=>{
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setIsError(false);
                console.log(response.data);
                setApiData(response.data);
                getHomeworldId(response.data.homeworld);
                axios
                    .get(response.data.homeworld)
                    .then((homeworldResponse) =>{
                        console.log(homeworldResponse.data.name);
                        setHomeworld(homeworldResponse.data.name);
                    })
            })
            .catch((err) =>{
                console.log(err);
                setIsError(true);
            });
    }, [id]);

    const getHomeworldId = (homeworldURL) =>{
        // Agarrar id de un digito
        if(homeworldURL.charAt(homeworldURL.length - 3) === "/"){
            const hwId = homeworldURL.charAt(homeworldURL.length - 2);
            setHomeworldId(hwId);
        } else{
            // Agarrar id de dos digitos
            const firstId = homeworldURL.charAt(homeworldURL.length - 3);
            const secondId = homeworldURL.charAt(homeworldURL.length - 2);
            const id = `${firstId}${secondId}`;
            setHomeworldId(id);
        }
    }

    if(!isError){
        return(
            <div>
                <h1>{apiData.name}</h1>
                <p>Height: {apiData.height}</p>
                <p>Eye color: {apiData.eye_color}</p>
                <p>Skin color: {apiData.skin_color}</p>
                <p>Homeworld: {homeworld} </p>
                <Link to={`/Planets/${homeworldId}`}> Homeworld </Link>
            </div>
        );
    } else {
        return(
            <div>
                <h3>Estos no son los droides que está buscando</h3>
                <img src="https://i.kym-cdn.com/editorials/icons/mobile/000/004/391/Hello_there.jpg" alt="Imagen Obi Wan"></img>
            </div>
        );
    }
}

export default People;