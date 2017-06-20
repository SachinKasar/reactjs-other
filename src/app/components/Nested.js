import React from "react";

// FourWheel as a stateless Component
export const Nested = (props) => {
    return ( 
		 <div className="container">
			<div className="row">
				<div className="row">
					<h1> Nested </h1>
					 
					<br/><br/><button onClick={props.greet} className="btn btn-primary" >Greet From Nested</button>
				</div>
			</div>
		  </div>
        );
};
