import Box from "../components/Box";
import Button from "../components/Button";
import Input from "../components/StyledInput";
import Card from "../components/Card";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings-section">
      <div className="settings-left-section">
        <Box width="100%" text="Change Your Iban">
          <div className="change-iban-wrapper">
            <div className="change-iban">
              <Input text="Old IBAN" />
              <Input text="New IBAN" />
            </div>
            <div className="confirm">
              <input type="radio" /> I confirm that i can’t take this action
              back
            </div>
            <Button text="Change" />
          </div>
        </Box>

        <Box width="100%" text="Change Your Pin">
          <div className="change-iban-wrapper">
            <div className="change-iban">
              <Input text="Old PIN" />
              <Input text="New PIN" />
            </div>
            <div className="confirm">
              <input type="radio" /> I confirm that i can’t take this action
              back
            </div>
            <Button text="Change" />
          </div>
        </Box>
      </div>

      <div className="settings-right-section">
        <div className="new-card-section">
          <Box width="100%" text="Create New Card">
            <div className="scale-card">
              <Card />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
