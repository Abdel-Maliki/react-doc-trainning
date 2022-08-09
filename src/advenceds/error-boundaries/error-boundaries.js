import {Component, useEffect} from "react";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

class ErrorComponent extends Component {
    componentDidMount() {
        'zzz'.map((va) => va);
    }

    render() {
        return <div>Div</div>
    }
}

function ErrorComponentFunc() {
    useEffect(() => {
        'zzz'.map((va) => va);
    })

    return <div>Div</div>;
}


export default function App() {
    return <ErrorBoundaries>
        <ErrorComponent/>
        <ErrorComponentFunc/>
    </ErrorBoundaries>
};
