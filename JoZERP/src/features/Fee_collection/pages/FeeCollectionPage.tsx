import React, { useState } from "react";
import "../styles/FeeCollectionPage.css";
import CustomSelect from "../components/CustomSelect";
import Header from "../components/Header";
import { useAlert } from "../../../common/context/AlertContext";
import FeeDataPage from "./FeeDataPage";

interface Option {
  label: string;
  value: string;
}

const FeeCollectionPage: React.FC = () => {

  const [feeHead, setFeeHead] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [transactionId, setTransactionId] = useState("");

  const { showAlert } = useAlert();

  const handleProcessPayment = () => {
    if (isFormValid) {
      showAlert({
        message: "Are you sure you want to process the payment?",
        onYes: handleConfirmPayment,
      });
    }
  };

  const handleConfirmPayment = () => {
    // In a real app, this would append to the history
    alert("Payment processed successfully!");

    setFeeHead("");
    setAmount(0);
    setPaymentMode("");
    setTransactionId("");

  };

  const feeOptions: Option[] = [
    { label: "Tuition Fees (Sem 2)", value: "tuition" },
    { label: "Hostel Rent", value: "hostel" },
    { label: "Transport Fee", value: "transport" },
  ];

  const paymentOptions: Option[] = [
    { label: "Cash", value: "cash" },
    { label: "Online Transfer (NEFT)", value: "neft" },
    { label: "Credit / Debit Card", value: "card" },
    { label: "UPI / QR Scan", value: "upi" },
  ];

  // const formatAmount = (num: number) => {
  //   return "₹" + num.toLocaleString("en-IN");
  // };


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value.replace(/,/g, "");
    const num = Number(value);

    if (!isNaN(num)) {
      setAmount(num);
    }

  };

  const adjustAmount = (value: number) => {
    setAmount((prev) => Math.max(0, prev + value));
  };

  const isFormValid = feeHead !== "" && paymentMode !== "" && amount > 0;

  return (
    <div className="fee-collection-container">
      <Header />

      <div className="student-card">

        <div className="student-left">
          <div className="fc_avatar">JM</div>
          <div>
            <h3>Julio Morgan</h3>
            <p>B.Tech (CS) - 2nd Year - ID: 26JOZ42</p>
          </div>
        </div>

        <div className="student-right">

          <div className="summary-item">
            <span>Total Dues</span>
            <h2>₹12,500</h2>
          </div>

          <div className="summary-item">
            <span>Paid</span>
            <h2 className="paid">₹8,000</h2>
          </div>

          <div className="summary-item">
            <span>Balance</span>
            <h2 className="balance">₹4,500</h2>
          </div>

        </div>

      </div>

      <div className="payment-card">

        <h3>Payment Records</h3>

        <div className="form-row">

          <CustomSelect
            label="Fee Head"
            value={feeHead}
            options={feeOptions}
            onChange={setFeeHead}
            placeholder="Tuition Fee/Transport"
          />

          <div className="field">

            <label>Amount to Pay (₹)</label>

            <div className={`amount-wrapper ${amount > 0 ? "valid" : ""}`}>

              <span className={`rupee ${amount > 0 ? "valid" : ""}`}>₹</span>

              <input
                type="text"
                className={amount > 0 ? "valid" : ""}
                value={amount === 0 ? "" : amount.toLocaleString("en-IN")}
                onChange={handleAmountChange}
                placeholder="0"
              />

              <div className="spinner">

                <button type="button" onClick={() => adjustAmount(500)}>
                  ˄
                </button>

                <button type="button" onClick={() => adjustAmount(-500)}>
                  ˅
                </button>

              </div>

            </div>

          </div>

          <CustomSelect
            label="Payment Mode"
            value={paymentMode}
            options={paymentOptions}
            onChange={setPaymentMode}
            placeholder="Cash"
          />

          <div className="field">

            <label>Transaction ID / Ref (Optional)</label>

            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Ref. No"
            />

          </div>

          <div className="field">

            <label>&nbsp;</label>

            <button
              className={`pay-btn ${isFormValid ? "active" : ""}`}
              onClick={handleProcessPayment}
            >
              Process Payment
            </button>
          </div>
        </div>

        <div className="history-section">
          <FeeDataPage />
        </div>
      </div>

    </div>
  );
};

export default FeeCollectionPage;