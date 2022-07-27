import './composition-vs-inheritance.css';
import React from 'react';

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts"/>;
}

function Chat() {
    return <div className="Chat"/>;
}

function App() {
    return (
        <SplitPane left={<Contacts/>} right={<Chat/>}/>
    );
}


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class WelcomeDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Bienvenue à bord, ${this.state.login} !`);
    }

    render() {
        return (
            <Dialog
                title="Bienvenue"
                message="Merci de visiter notre vaisseau spatial !">
                <input value={this.state.login}
                       onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Inscrivez-moi !
                </button>
            </Dialog>
        )
    }
}

export default function CompositionVasInheritance() {
    return <WelcomeDialog/>
}
