import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DescriptionPage.css';


const DescriptionPage= ({ Description }) => {
   
    const params = useParams();
    const navigate = useNavigate();

    const Movie = Description.find(el => el.title === params.title);
    return (
        <>
        
<h3>{Movie.title}</h3>

<div className='Descriptionpage'>
{Movie.trailer}

<p className='Summary'> {Movie.summary} </p>
</div>
<div className='Descriptionpage'>
<p className='Cast'>{Movie.cast}</p>

<button className='GoBack' onClick={() => navigate(-1)}>Go Back </button>
</div>
       </>
    )
}

export default DescriptionPage;