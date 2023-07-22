import Box from "../components/Box";
import Button from "../components/Button";
import MoneyText from "../components/MoneyText";
import mockData from "../data/bills.json";
import "./Bills.css";

export default function Bills() {
  return (
    <div className="bills-section">
      <div className="bills-left-section">
        <Box width="100%" text="LSPD">
          <div className="bills-wrapper">
            {mockData.map((data) => {
              return (
                <div className="bills-list">
                  <div className="bills-type">{data.from}</div>
                  <div className="bills-info">
                    <div className="bills-reason">{data.reason}</div>
                    <div className="bills-pay">
                      <MoneyText
                        fontSize="1.5rem"
                        color={"red"}
                        amount={data.amount}
                      />
                      <Button text="Pay" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>

        <Box width="100%" text="EMS">
          <div className="bills-wrapper">
            {mockData.map((data) => {
              return (
                <div className="bills-list">
                  <div className="bills-type">{data.from}</div>
                  <div className="bills-info">
                    <div className="bills-reason">{data.reason}</div>
                    <div className="bills-pay">
                      <MoneyText
                        fontSize="1.5rem"
                        color={"red"}
                        amount={data.amount}
                      />
                      <Button text="Pay" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </div>

      <div className="bills-right-section">
        <Box width="100%" text="Mechanic">
          <div className="bills-wrapper">
            {mockData.map((data) => {
              return (
                <div className="bills-list">
                  <div className="bills-type">{data.from}</div>
                  <div className="bills-info">
                    <div className="bills-reason">{data.reason}</div>
                    <div className="bills-pay">
                      <MoneyText
                        fontSize="1.5rem"
                        color={"red"}
                        amount={data.amount}
                      />
                      <Button text="Pay" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>

        <Box width="100%" text="Other">
          <div className="bills-wrapper">
            {mockData.map((data) => {
              return (
                <div className="bills-list">
                  <div className="bills-type">{data.from}</div>
                  <div className="bills-info">
                    <div className="bills-reason">{data.reason}</div>
                    <div className="bills-pay">
                      <MoneyText
                        fontSize="1.5rem"
                        color={"red"}
                        amount={data.amount}
                      />
                      <Button text="Pay" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    </div>
  );
}
