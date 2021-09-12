import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import economiaApi from '../services/indexApi';
import { walletExpense, fetchEconomiaThunk } from '../redux/actions';

function Form() {
  const [id, setId] = useState(0);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [exchangeRates, setExchangeRates] = useState({});

  const dispatch = useDispatch();

  const state = {
    id,
    value,
    description,
    method,
    currency,
    tag,
    exchangeRates
  };

  useEffect(() => {
    economiaApi()
      .then(data => setExchangeRates(data));
  }, {})

  const renderDispatch = () => {
    setId(id + 1);
    dispatch(fetchEconomiaThunk());
    dispatch(walletExpense(state));
  }

  const renderInputValor = () => {
    return (
      <label htmlFor='value'>
        Valor:
        <input
          id='value'
          name='value'
          value={value}
          onChange={({ target }) => setValue(target.value)}
          type='number'
        />
      </label>
    );
  }

  const renderInputDescricao = () => {
    return (
      <label htmlFor='description'>
        Descrição:
        <input
          id='description'
          name='description'
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </label>
    );
  }

  const renderSelectMoeda = () => {
    return (
      <label htmlFor='currency-input'>
        Moeda
        <select
          id="currency-input"
          name="currency"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {Object.entries(exchangeRates).map((itemCurrency) => {
            if (itemCurrency[0] === 'USDT') return '';
            return (
              <option key={itemCurrency[0]} >
                {itemCurrency[0]}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  const renderSelectPagamento = () => {
    return (
      <label htmlFor='pagamento'>
        Método de Pagamento:
        <select
          id='pagamento'
          name='method'
          value={method}
          onChange={({ target }) => setMethod(target.value)}
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  const renderTag = () => {
    return (
      <label htmlFor='tag'>
        Tag:
        <select
          id='tag'
          name='tag'
          value={tag}
          onChange={({ target }) => setTag(target.value)}
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  return (
    <div className="container-form">
      <h2>Trybe Wallet</h2>
      <form>
        <div className="box-form">
          {renderInputDescricao()}
          {renderTag()}
          {renderSelectPagamento()}
          {renderSelectMoeda()}
          {renderInputValor()}
          <button
            onClick={() => renderDispatch()}
            type="button"
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;