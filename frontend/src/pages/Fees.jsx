import "../App.css";

function Fees() {
  const feeDetails = {
    semester: "4th Semester",
    totalFee: 85000,
    paidFee: 65000,
    remainingFee: 20000,
    dueDate: "15 October 2026",
    status: "Partially Paid",
  };

  return (
    <div className="fees-page">
      <div className="fees-container">
        <div className="fees-header">
          <div className="fees-logo">UniTrack</div>

          <h1>Fee Status</h1>

          <p>View your current semester fee details.</p>
        </div>

        <div className="fee-summary-card">
          <div className="fee-summary-top">
            <div>
              <span>Current Semester</span>
              <h2>{feeDetails.semester}</h2>
            </div>

            <div className="fee-status">
              {feeDetails.status}
            </div>
          </div>

          <div className="fee-details-grid">
            <div className="fee-item">
              <span>Total Fee</span>
              <strong>Rs. {feeDetails.totalFee.toLocaleString()}</strong>
            </div>

            <div className="fee-item">
              <span>Paid Amount</span>
              <strong>Rs. {feeDetails.paidFee.toLocaleString()}</strong>
            </div>

            <div className="fee-item">
              <span>Remaining</span>
              <strong>Rs. {feeDetails.remainingFee.toLocaleString()}</strong>
            </div>

            <div className="fee-item">
              <span>Due Date</span>
              <strong>{feeDetails.dueDate}</strong>
            </div>
          </div>

          <div className="fee-progress-section">
            <div className="fee-progress-text">
              <span>Payment Progress</span>
              <strong>
                {Math.round(
                  (feeDetails.paidFee / feeDetails.totalFee) * 100
                )}
                %
              </strong>
            </div>

            <div className="fee-progress-bar">
              <div
                className="fee-progress"
                style={{
                  width: `${
                    (feeDetails.paidFee / feeDetails.totalFee) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fees;