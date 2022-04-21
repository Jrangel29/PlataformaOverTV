import React from 'react';
import '../../Styles/App.css';
import BackArrowImg from '../../Images/BackArrow.svg';
import {useNavigate} from 'react-router-dom';

const BackArrow = () => {
    const navigate = useNavigate();
    return(
        <img style={{cursor: "pointer"}} onClick={() => navigate(-1)} className="backArrow" src={BackArrowImg}/>
    )
}

export default BackArrow;