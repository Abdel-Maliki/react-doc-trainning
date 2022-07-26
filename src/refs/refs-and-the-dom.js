import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return <div>
            <input type='text' ref={this.textInput}/>
            <input type='button' value={'Valider'} onClick={this.focusTextInput}/>
        </div>;
    }
}


export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}
