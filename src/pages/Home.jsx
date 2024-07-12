import React, {useEffect, useState} from "react";


import MemeCard from "../components/Card";
import { getAllMemes } from "../api/meme";

const HomePage = () => {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        getAllMemes().then((meme) => setMemes(meme.data.memes));
    },[])
    
    return (
        <div className="row">
            {
                memes.map((meme) => (
                    <MemeCard value={meme}/>
                ))
            }
        </div>
    );
}

export default HomePage;