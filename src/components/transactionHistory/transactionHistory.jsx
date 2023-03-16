import PropTypes from 'prop-types';
// import transactions from './transactions.json';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    )
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.number,
    })
  ).isRequired,
};

export default TransactionHistory;