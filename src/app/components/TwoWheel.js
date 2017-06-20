import React from "react";
import {render} from "react-dom";
import {Nested} from "./Nested";

// TwoWheel as a Class Component
export class TwoWheel extends React.Component {
	constructor(props) {
		super();
	    //this.price = props.price;
		this.state = {price:props.price, visitor:'PQR'}
	}
    render() {
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1> TwoWheel </h1>
						<ul>
							<Nested greet={this.props.greet}/>
						</ul>
						 
						<br/><br/><button onClick={this.props.greet} className="btn btn-primary" >Greet Customer</button>
						 
						
					</div>
				</div>
				</div>
      
        );
    } 
}
