function Fruits() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    return (
        <div>
            <h1>Fruits</h1>

            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fruits; 