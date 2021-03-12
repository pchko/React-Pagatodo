import React from 'react'
import { Link } from 'react-router-dom';

function BankCard( props ) {

    const {bank, idx} = props;

    return (
        <div className="card ms-3">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src={bank.url} className="card-img" alt={bank.bankName} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{bank.bankName}</h5>
                        <p className="card-text">{bank.description}</p>
                        <Link to={`./bank/${idx}`}> Más...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankCard
