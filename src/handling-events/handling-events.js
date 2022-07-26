import React from 'react';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
    }

    return <a href="#" onClick={handleClick}>Clique ici</a>
}

class LoggingButton extends React.Component {
    // Cette syntaxe nous assure que `this` est bien lié dans la méthode handleClick.
    // Attention : cette syntaxe est encore *expérimentale*.
    handleClick = () => console.log('Class: LoggingButton, Function: handleClick, Line 13 (): '
        ,);

    render() {
        return (
            <button onClick={this.handleClick}>
                Clique ici
            </button>
        );
    }
}

class LoggingButtonArrowFunc extends React.Component {
    handleClick() {
        console.log('Class: LoggingButtonArrowFunc, Function: handleClick, Line 29 (): '
            ,);
    }

    render() {
        return <button onClick={() => this.handleClick()}>Cliquez ici arrow</button>
    }
}

export default function HandlingEvents(props) {
    return <LoggingButtonArrowFunc/>
}
