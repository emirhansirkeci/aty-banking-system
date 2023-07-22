import "./Transfer.css";
import mockData from "../data/last-transactions.json";
import withdrawDeposit from "../data/withdraw-deposit.json";

import Box from "../components/Box";
import Button from "../components/Button";
import Input from "../components/StyledInput";
import MoneyText from "../components/MoneyText";

export default function Transfer() {
  return (
    <div className="transfer">
      <div className="transfer-left-section">
        <Box width="100%" text="send money">
          <div className="send-money">
            <Input text="Player IBAN" />
            <Input text="Amount" />
            <div className="button">
              <Button text="Send" />
            </div>
          </div>

          <label className="last-tx-text">Last Transactions</label>
          <div className="last-tx-wrapper">
            {mockData.map((data) => {
              return (
                <div key={data.id} className="tx-section">
                  <div className="tx-type">{data.type}</div>
                  <div className="tx-info">
                    <div className="tx-name">{data.from}</div>
                    <MoneyText
                      fontSize="1.25rem"
                      color={data.type == "to" ? "red" : "green"}
                      amount={data.amount}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </div>

      <div className="transfer-right-section">
        <Box width="100%" text="Withdraw">
          <div className="withdraw-amount">
            <Input text="Amount" />
            <Button text="Withdraw" />
          </div>
          <div className="withdraw-list-wrapper">
            <label>Last Withdraws</label>
            {withdrawDeposit.map((el) => {
              return (
                <div className="withdraw-list">
                  <MoneyText fontSize="1rem" color={"red"} amount={el.amount} />
                  <div className="withdraw-date">{el.date}</div>
                </div>
              );
            })}
          </div>
        </Box>

        <Box width="100%" text="Deposit">
          <div className="withdraw-amount">
            <Input text="Amount" />
            <Button text="Deposit" />
          </div>
          <div className="withdraw-list-wrapper">
            <label>Last Deposits</label>
            {withdrawDeposit.map((el) => {
              return (
                <div className="withdraw-list">
                  <MoneyText
                    fontSize="1rem"
                    color={"green"}
                    amount={el.amount}
                  />
                  <div className="withdraw-date">{el.date}</div>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    </div>
  );
}
