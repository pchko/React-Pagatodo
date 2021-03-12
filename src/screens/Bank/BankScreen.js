import React, {useEffect, useContext, useState} from 'react';
import BankCard from '../../components/BankCard';
import { BanksContext } from '../../contexts/BanksContext';
import { ApiClient } from '../../services/ApiClient';


function BankScreen() {

    const {banks:banksContext, setBanks:setBanksContext} = useContext(BanksContext);
    const [banks, setBanks] = useState([]);

    useEffect(() => {
        const checkBanks = async () => {
            if(banksContext.length === 0){
                console.log("Consulta API");
                let data = await ApiClient.getBanks().catch( (err) => {
                    console.log({err});
                });
                data && setBanksContext(data);
                data && setBanks(data);
            }else{
                console.log("Consulta Context");
                setBanks(banksContext);
            }
        }

        checkBanks();
    }, [])

    return (
        <div className="card-columns animate__fadeIn">
            {
                banks.map( (bank, idx) => {
                    return <BankCard key={`bank_${idx}`} bank={bank} idx={idx} />
                })
            }
        </div>
    )
}

export default BankScreen
