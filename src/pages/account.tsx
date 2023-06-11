import React, { useState, ChangeEvent, FormEvent } from 'react';
import Layout from './components/Layout';

const AccountPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform account update logic here
    console.log('Account update submitted:', name, email);
    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <Layout>
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow">
      <h2 className="text-xl mb-4">Account Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Account
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default AccountPage;
