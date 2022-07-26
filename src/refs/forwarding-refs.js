import React from 'react';

// https://fr.reactjs.org/docs/forwarding-refs.html

const FancyButton = logProps(React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={() => alert('click')}>
        {props.label}
    </button>
)));


class ForWardingRef extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.ref && this.ref.current) {
            this.ref.current.click();
        }

    }

    render() {
        return <FancyButton ref={this.ref} {...this.props}/>;
    }
}


function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Anciennes props :', prevProps);
            console.log('Nouvelles props :', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }


    return React.forwardRef((props, ref) => (
        <LogProps forwardedRef={ref} {...props}/>
    ))
}

export default ForWardingRef;
