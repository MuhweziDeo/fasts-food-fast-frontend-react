import React from 'react';

const Banner=(props)=>{
    return(
        <section className="bg-primary">
        <div className="container py-md ">
            {props.children}
        </div>
        </section>

    );
};
 export default Banner;
