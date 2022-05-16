import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center '>
            <div className='absolute mt3'>
                <img src={imageUrl} alt='face' width='500px' heigth='auto' />
            </div>    

        </div>
    );
}

export default FaceRecognition;