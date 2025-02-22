import { useParams } from "react-router-dom";
import "../styles/CampaignDetails.css";

function CampaignDetails() {
  const { id } = useParams();

  return (
    <div className="campaign-details-container">
      <header className="campaign-header">
        <h1>Campaign Details</h1>
        <p>Find out more about this campaign and contribute if you believe in the vision.</p>
      </header>
      <section className="campaign-info">
        <h2>Campaign ID: {id}</h2>
        <p>This section will contain detailed information about the selected campaign.</p>
      </section>
    </div>
  );
}

export default CampaignDetails;
