import React, {useContext} from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: 'ABDEL'});

export default class App extends React.Component {
    render() {
        return <ThemeContext.Provider value='dark'>
            <Toolbar/>
        </ThemeContext.Provider>
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
}

class ThemedButton extends React.Component {
    render() {
        return <ButtonUseContext/>;
    }



    componentDidMount() {
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }
}

// static contextType = ThemeContext
class Button extends React.Component {
    static contextType = ThemeContext;

    render() {
        return <button>{this.context}</button>
    }
}

// ThemeContext.Consumer
class ButtonContextConsumer extends React.Component {
    render() {
        return <button>
            <ThemeContext.Consumer>
                {(value) => value}
            </ThemeContext.Consumer>
        </button>
    }
}

// useContext(ThemeContext)
function ButtonUseContext() {
    const theme = useContext(ThemeContext);
    const userContext = useContext(UserContext);
    return <button>{theme + " " + userContext.name} </button>
}
