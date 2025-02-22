import "../styles/Explore.css";

function Explore() {
  return (
    <div className="container explore">
      <h1>Explore Campaigns</h1>
      <p>Browse inspiring projects and help bring them to life.</p>

      <section>
        <h2>Popular Categories</h2>
        <ul>
          <li>Technology - Future innovations.</li>
          <li>Arts - Creative and artistic projects.</li>
          <li>Health - Medical advancements.</li>
          <li>Education - Learning tools and platforms.</li>
          <li>Environment - Sustainable solutions.</li>
        </ul>
      </section>

      <section>
        <h2>Trending Campaigns</h2>
        <ul>
          <li><strong>Eco-Friendly Water Purifier</strong> - Uses natural materials.</li>
          <li><strong>Next-Gen E-Bike</strong> - High-speed, long-range battery.</li>
        </ul>
      </section>

      <section>
        <h2>Recently Launched Campaigns</h2>
        <ul>
          <li><strong>Biodegradable Packaging</strong> - Reducing plastic waste.</li>
          <li><strong>AI-Powered Medical Diagnosis</strong> - Early disease detection.</li>
        </ul>
      </section>

      <button>View More Campaigns</button>
    </div>
  );
}

export default Explore;
