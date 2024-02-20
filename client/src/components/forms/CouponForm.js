import React from "react";
import DatePicker from "react-datepicker";

const CouponForm = ({
  name,
  setName,
  handleSubmit,
  expiry,
  setExpiry,
  discount,
  setDiscount,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* {JSON.stringify(name)} */}

        <label>Name</label>
        <input
          type="text"
          className="form-control mt-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          required
          minLength={6}
          maxLength={12}
        />
        <br />

        {/* {JSON.stringify(expiry)} */}
        <label>Expiry</label>
        <br />
        <DatePicker
          className="form-control mt-3"
          selected={expiry}
          value={expiry}
          onChange={(date) => setExpiry(date)}
        />
        <br />

        {/* {JSON.stringify(discount)} */}
        <label className="mt-4 ">Discount (in % percentage)</label>
        <input
          type="number"
          className="form-control mt-3"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CouponForm;
