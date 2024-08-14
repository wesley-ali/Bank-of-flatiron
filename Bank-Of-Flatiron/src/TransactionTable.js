import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td className={transaction.amount > 0 ? 'income' : 'expense'}>
              {transaction.amount > 0 ? +${transaction.amount} : transaction.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;