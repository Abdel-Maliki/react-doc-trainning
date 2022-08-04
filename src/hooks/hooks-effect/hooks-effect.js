import {useEffect, useState} from "react";

function Exemple() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `vous avez cliquer ${count} fois`
    });

    return <div>
        <p>vous avez cliquez {count} fois</p>
        <button onClick={() => setCount(count + 1)}>Cliquez</button>
    </div>
}

export default function App() {
    return <Exemple/>
}
