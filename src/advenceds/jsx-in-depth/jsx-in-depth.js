// Appelle la fonction de rappel children à raison de numTimes fois
// afin de produire une répétition du composant
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i, 'Lik'));
    }
    return <div>{items}</div>;
}

export default function ListOfTenThings() {
    const func = (index, value) => <div key={index}>Ceci est l'élément {index} de la liste {value}</div>;
    return (
        <Repeat numTimes={10}>
            {func}
        </Repeat>
    );
}
