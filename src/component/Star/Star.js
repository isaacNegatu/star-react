import React, { Component } from 'react';

class Star extends Component {
 
    constructor(props){
        super(props);

        this.state = {
            star : {
                name : '',
                role: ''
            }

        }
    }


    handleName = (event)=>{
        this.setState({
            star : {
                ...this.state.star,
                name : event.target.value
            }
            
        })
    }

    handleRole = (event) => {

        this.setState({
            star : {
                ...this.state.star,
                role : event.target.value
            }

        })
    }

    handleClick = () => {
        console.log(this.state.star);
        
    }

    render() {
        return (
            <div>

                <input type="text" onChange={this.handleName} placeholder="name" />
                <input type="text" onChange={this.handleRole} placeholder="role" />

                <button onClick={this.handleClick}> Submit </button>

                <br />


                <p>{this.state.star.name} is famous for {this.state.star.role} </p>
            </div>
        );
    }
}

export default Star;
