import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Crowdfund</h1>
      <p>Support groundbreaking ideas and turn innovation into reality.</p>
      
      <section>
        <h2>Featured Campaigns</h2>
        <ul>
          <li><strong>AI Smart Assistant</strong> - Voice recognition with real-time translation.</li>
          <li><strong>Solar Car</strong> - Renewable energy for zero-emission travel.</li>
          <li><strong>Farming Drone</strong> - Optimizing agriculture with smart tech.</li>
        </ul>
      </section>
      
      <section>
        <h2>How It Works</h2>
        <ol>
          <li>Explore innovative projects.</li>
          <li>Back a project securely.</li>
          <li>Track progress and updates.</li>
        </ol>
      </section>

      <Link to="/explore" className="no-underline">
        <button>Start Exploring</button>
      </Link>
    </div>
  );
}

export default Home;
