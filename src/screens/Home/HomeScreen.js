import React from 'react';


function HomeScreen(props) {

    const {history} = props;

    const handleClick = () => {
        history.push('/banks');
    }

    return (
        <div className="container mt-5">
            
            <h1>Home</h1>
            <div>
                <img src="https://www.tudecide.com/assets/images/empresas/banco-pagatodo.png" style={{height: 100}} alt="pagatodo"/>
            </div>
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Consultar bancos
            </button>

            <hr />
            <h5>Página creada por: Rogelio Pacheco <a target="_blank" rel="noreferrer" href="https://github.com/pchko"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width: 20, height: 20, resize: "horizontal"}} alt="github"/></a>&nbsp;<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rogelio-pacheco-martínez-b55906aa"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" style={{width: 20}} alt="linkedin"/></a></h5>
        </div>
    )
}

export default HomeScreen
