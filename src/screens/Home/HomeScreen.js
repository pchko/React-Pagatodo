import React from 'react';


function HomeScreen(props) {

    const {history} = props;

    const handleClick = () => {
        history.push('/banks');
    }

    return (
        <div className="container mt-5">
            <h1>Home</h1>
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Consultar bancos
            </button>

            <hr />
            <h5>Página creada por <a target="_blank" href="https://github.com/pchko"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width: 20, height: 20, resize: "horizontal"}} /> Ing. Rogelio Pacheco</a></h5>
        </div>
    )
}

export default HomeScreen
