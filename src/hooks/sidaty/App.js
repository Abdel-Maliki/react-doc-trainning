import React, {useEffect, useState} from 'react';

function App() {

    const {posts, isLoading, isError, error, refetch} = usePosts();

    return (
        <div>
            <h1>Test Hooks</h1>

            <button onClick={refetch}>Actualiser</button>
            {isLoading && !error && <p>Chargement!!!</p>}
            {isError && <p>Erreur lors du chargement: {JSON.stringify(error)}</p>}
            {!isLoading && !isError && <PostTable posts={posts}/>}
        </div>
    );
}

export default App;

function PostTable({posts}) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>titre</td>
                    <td>Contenu</td>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

function usePosts() {

    const {data: posts, ...others} = useData('https://jsonplaceholder.typicode.com/posts');

    return {posts, ...others}
}

function useData(url) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setIsLoading(true);
        setError(null);
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                setData(posts);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
            });
    }

    return {data, isLoading, isError: !!error, error, refetch: fetchData}
}
