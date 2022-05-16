import React from 'react';


const Navigation=({onRouteChange,isSignedIn})=>{
    if(isSignedIn)
        return(
            <nav style={{display:'flex',justifyContent:'flex-end',padding:'20px'}}>
                <p className='f3  link dim black underline pointer' 
                onClick={()=>onRouteChange('signin')}>Sign out
                </p>
            </nav>
    );else{
        return(
            <nav style={{display:'flex',justifyContent:'flex-end',padding:'20px'}}>
                <p className='f3 pa3 link dim black underline pointer' 
                onClick={()=>onRouteChange('signin')}>Sign out</p>
                <p className='f3  pa3 link dim black underline pointer' 
                onClick={()=>onRouteChange('Register')}>Register</p>
            </nav>
        );
    }
}

export default Navigation;