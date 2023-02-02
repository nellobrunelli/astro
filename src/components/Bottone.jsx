import React, {Component} from "react";

class Bottone extends Component {
    state = {
        descrizione: this.props.descrizione
    };

    render () {
        return (
            <div>
                <button>
                    {this.state.descrizione}
                </button>
            </div>
        );
    }
}

export default Bottone;
