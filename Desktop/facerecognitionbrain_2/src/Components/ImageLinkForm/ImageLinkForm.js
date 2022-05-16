import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className='tc f3'>
                {'This is the magic brain ,helps to locate the face'}
             </p>
             <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 grow f3 link ph3 pv2 dib white bg-light-red'onClick={onButtonSubmit} >detect</button>
                </div>
             </div>
            
        </div>
    );
}

export default ImageLinkForm;