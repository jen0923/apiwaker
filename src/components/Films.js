import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Films = () =>{
    const { id } = useParams();
    const [ apiData, setApiData ] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios
            .get(`https://swapi.dev/api/films/${id}`) 
            .then((response) =>{
                setIsError(false);
                console.log(response.data);
                setApiData(response.data);
            })
            .catch((err) =>{
                console.log(err);
                setIsError(true);
            })
    }, [id]);

    if(!isError){
        return(
            <div>
                <h1>{apiData.name}</h1>
                <p>Episodio: {apiData.title}</p>
                <p>Directorio: {apiData.director}</p>
                <p>Productor: {apiData.director}</p>
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

export default Films;
