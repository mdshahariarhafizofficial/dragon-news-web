import React, { useEffect, useState } from 'react';
import { LatestNewsContext } from './LatestContext';

const LatestNewsProvider = ({children}) => {
    const [latest, setLatest] = useState([])

    // Load Latest News
    useEffect(()=>{
        fetch('../news.json')
        .then(res => res.json())
        .then(data => setLatest(data))
    },[])

    
    

    // Context Data
    const contextData = {
        latest,
    }

    return (
        <LatestNewsContext value={contextData}>
            {children}
        </LatestNewsContext>
    );
};

export default LatestNewsProvider;