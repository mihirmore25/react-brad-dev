const App = () => {
    const names = ["Mihir", "Onkar", "Chinu", "Nanu"];
    let x = 10;
    let y = 20;
    let loggedIn = false;
    return (
        <>
            <ul>
                {names.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
            <p>
                The addition of x = {x} and y = {y} is {x + y}
            </p>
            {/* {loggedIn ? <p>Hello Member</p> : <p>Hello Guest</p>} */}
            {/* {loggedIn ? <p>Hello Member</p> : ""} */}
            {
              loggedIn && <p>Hello Member</p>
            }
        </>
    );
};

export default App;
