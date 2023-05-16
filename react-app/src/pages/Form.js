import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Project Title</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
        //   placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Required amount</label>
        <input
          type="currency"
          className="form-control"
          id="amount"
          placeholder="xyz/-"
        />
      </div>
      <div className="form-group">
        <label htmlFor="upidetails">Payment details</label>
        <input
          type="currency"
          className="form-control"
          id="upidetails"
          placeholder="UPI ID"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
