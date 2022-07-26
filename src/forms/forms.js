import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const {name} = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({[name]: value});
    }

    onSubmit() {
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <label>
                Participe :
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                />
            </label>

            <br/>
            <label>
                Nombre d'invités :
                <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                />
            </label>
        </form>
    }
}



export default function Forms(props) {
    return <Reservation/>
}
