import React from "react";

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
            
        )
        

    }
}

export default Welcome;