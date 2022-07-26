import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={() => alert('click')}>
        {props.children}
    </button>
));

class ForWardingRef extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.click();
    }

    render() {
        return <FancyButton ref={this.ref}/>;
    }
}

export default ForWardingRef;
