import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form';

function Wallet() { 

    const expenses = useSelector((state) => state.wallet.expenses);

    const renderExpenses = () => {
        return expenses.map(item => {
            const { currency, exchangeRates } = item;
            const moeda = exchangeRates[currency];
            const moedaConvert = moeda.name.split('/');            
            return (
              <div>
                  <table>
                    <tr key={ item.id }>
                        <td>{item.description}</td>
                        <td>{item.tag}</td>
                        <td>{item.method}</td>
                        <td>{item.value}</td>
                        <td>{moedaConvert[0]}</td>
                        <td>{parseFloat(moeda.ask).toFixed(2)}</td>
                        <td>{(moeda.ask * parseInt(item.value, 10)).toFixed(2)}</td>
                        <td>{moedaConvert[1]}</td>
                        <button
                            type="button"
                        >
                        Excluir
                        </button>
                    </tr>
                  </table>  
              </div>
            )           
        });
    };

    const renderDescription = () => {
        return (
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>);
    };

    return (
        <div>
            <Form />
            { renderDescription() }
            { renderExpenses() }
        </div>
    );    
}

export default Wallet;