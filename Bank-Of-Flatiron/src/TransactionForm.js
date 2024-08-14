import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount),
    };
    addTransaction(newTransaction);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;