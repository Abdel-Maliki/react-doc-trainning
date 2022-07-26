import React, {useRef} from 'react';

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

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}/>
        );
    }
}

export default function CustomTextInputFunction(props) {
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return <div>
        <input ref={textInput} type='text'/>
        <input
            type="button"
            value="Donner le focus au champ texte"
            onClick={handleClick}
        />
    </div>
}

