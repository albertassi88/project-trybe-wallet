import economiaApi from '../../services/indexApi';  

export const userAction = (value) => ({
    type: 'USER',
    value,
});

export const walletExpense = (value) => ({
    type: 'WALLET_EXPENSES',
    value,
});
  
export const walletCurrencie = (value) => ({
    type: 'WALLET_CURRENCIES',
    value,
});

export const fetchEconomiaThunk = () => async (dispatch) => {
    const result = await economiaApi()
    .then(date => date);
    dispatch(walletCurrencie(result));
};


