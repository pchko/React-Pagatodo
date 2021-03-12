import React, {useContext, useEffect, useState} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { BanksContext } from '../../contexts/BanksContext';


function BankDetailScreen(props) {

    const {history} = props;
    const {banks} = useContext(BanksContext);
    const {idBank} = useParams();
    const [bank, setBank] = useState({});

    const handleReturn = () => {

        history.length <= 2 ? history.push("/") : history.goBack();
    }

    useEffect(() => {
        
        const getBank = () => {
            if(banks[idBank]) 
                setBank(banks[idBank]);
            else
                return <Redirect to ="/" />
        }

        getBank();
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-2">
                <img src={bank.url} className="img-thumbnail animate__animated animate_fadeInLeft"/>
            </div>
            <div className="col-10">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Nombre: </b>{bank.bankName}</li>
                    <li className="list-group-item"><b> Descripción: </b>{bank.description}</li>
                </ul>
                <br/>
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default BankDetailScreen
