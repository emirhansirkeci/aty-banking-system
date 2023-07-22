import "./Dashboard.css";
import mockData from "../data/transactions.json";
import MoneyText from "../components/MoneyText";
import Box from "../components/Box";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Box width="50%" text="Last Transactions">
        <div className="tx-wrapper">
          {mockData.map((data) => {
            return (
              <div key={data.id} className="tx-section">
                <div className="tx-type">{data.type}</div>
                <div className="tx-info">
                  <div className="tx-name">{data.from}</div>
                  <MoneyText
                    fontSize="1.5rem"
                    symbols={true}
                    color={
                      data.type == "withdraw" || data.type == "transfer"
                        ? "red"
                        : "green"
                    }
                    amount={data.amount}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Box>

      <div className="dashboard-right">
        <Box width="100%" height="16rem" text="Bank Statement">
          <div className="st-section">
            <div className="st-wrapper">
              <div className="st-week">This Week</div>
              <div className="st-info">
                <div className="st-type">Incomes</div>

                <div className="st-amount">
                  <MoneyText
                    fontSize="1.5rem"
                    color="green"
                    symbols={false}
                    amount="12.890"
                  />
                </div>
              </div>
            </div>

            <div className="st-wrapper">
              <div className="st-week">This Week</div>
              <div className="st-info">
                <div className="st-type">Outgoings</div>
                <div className="st-amount">
                  <MoneyText fontSize="1.5rem" color="red" amount="12.890" />
                </div>
              </div>
            </div>
          </div>
        </Box>

        <span className="card-section">
          <div className="scaled-card">
            <Card />
          </div>
        </span>
      </div>
    </div>
  );
}
