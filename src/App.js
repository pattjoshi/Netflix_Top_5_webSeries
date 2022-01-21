
import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';


const App = () => (
    <>
        <h1 className='heading_style'> List of top 5 Nerflix Series in 2021</h1>
        {/* props :an element representing a user-defined component
            How to aaccess props :- Pass this component */}

        {Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link} />

            )
        })};
    </>

);

export default App;
