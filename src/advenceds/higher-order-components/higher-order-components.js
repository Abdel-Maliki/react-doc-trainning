import {Component} from "react";


function Comment(props) {
    return <div>{props.comment.name}</div>;
}


class CommentList extends Component {

    render() {
        return (
            <div>
                {this.props.data.map((comment) => (
                    <Comment comment={comment} key={comment.id}/>
                ))}
            </div>
        );
    }
}

function TextBlock(props) {
    return <div>{props.text.name}</div>;
}


class BlogPost extends Component {
    render() {
        return (
            <>
                {this.props.data.map((text) => (
                    <TextBlock text={text} key={text.id}/>
                ))}
            </>
        );
    }
}


function withSubscription(WrappedComponent, selectData) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }

    }
}


class DataSource {
    static getComments() {
        return [{id: 1, name: 'comment'}];
    }

    static addChangeListener(handleChange) {
        console.log('addChangeListener');
        console.log('Class: DataSource, Function: addChangeListener, Line 78 handleChange.toString()(): '
            , handleChange.toString());
    }

    static removeChangeListener(handleChange) {
        console.log('removeChangeListener');
    }

    static getBlogPost(id) {
        return [{id: id, name: 'blog'}];

    }
}

export default function App(props) {
    const CommentListWithSubscription = withSubscription(
        CommentList,
        (DataSource) => DataSource.getComments()
    );

    const BlogPostWithSubscription = withSubscription(
        BlogPost,
        (DataSource, props) => DataSource.getBlogPost(props.id)
    );

    return <>
        <CommentListWithSubscription/>
        <BlogPostWithSubscription id={1}/>
    </>
}
