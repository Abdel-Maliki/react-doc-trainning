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

export class AutoFocusTextInput extends React.Component {
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

function CustomTextInputFunction(props) {
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

class CustomTextInputCreateRefInFunction extends React.Component {
    constructor(props) {
        super(props);
        let textInput = null;
        this.setTextInputRef = element => textInput = element;
        this.focusTextInput = () => textInput && textInput.focus();
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        // Utilise la fonction de rappel `ref` pour stocker une référence à l’élément
        // DOM du champ texte dans une propriété d’instance (ex. this.textInput)
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Donner le focus au champ texte ref function"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

function CustomTextInputCreateRefInFunctionChild(props) {
    return <input ref={props.inputRef}/>
}


class CustomTextInputCreateRefInFunctionParent extends React.Component {

    constructor(props) {
        super(props);
        this.inputElement = null;
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        if (this.inputElement) this.inputElement.focus()
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        return <div>
            <CustomTextInputCreateRefInFunctionChild inputRef={el => this.inputElement = el} type='text'/>
            <input
                type="button"
                value="Donner le focus au champ texte"
                onClick={this.focusTextInput}
            />
        </div>
    }
}

export default CustomTextInputCreateRefInFunctionParent;
