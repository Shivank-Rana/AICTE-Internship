import "../styles/Profile.css";

function Profile() {
  return (
    <div className="container">
      <h1>My Profile</h1>
      <div className="profile-info">
        {/* <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" /> */}
        <div>
          <p><strong>Name:</strong> Shivank</p>
          <p><strong>Email:</strong> shivraana009@gmail.com</p>
          <p><strong>Location:</strong> Delhi, India</p>
          <p><strong>Member Since:</strong> January 2024</p>
        </div>
      </div>

      <section>
        <h2>My Campaigns</h2>
        <ul>
          <li><strong>Smart Fitness Band</strong> - AI-driven health tracker with real-time monitoring.</li>
          <li><strong>Smart Home Automation</strong> - Secure and efficient IoT-based home system.</li>
          <li><strong>Eco-Friendly Charging Station</strong> - Solar-powered public charging spots.</li>
          <li><strong>Wearable Translator</strong> - Instantly translates multiple languages.</li>
        </ul>
      </section>

      <section>
        <h2>My Contributions</h2>
        <ul>
          <li><strong>Electric Skateboard</strong> - Rechargeable, portable city transport.</li>
          <li><strong>3D-Printed Prosthetics</strong> - Affordable prosthetic limbs for disabled people.</li>
          <li><strong>Autonomous Delivery Drone</strong> - AI-powered, contactless package delivery.</li>
          <li><strong>Renewable Energy Battery</strong> - Sustainable energy storage solution.</li>
        </ul>
      </section>

      <section>
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Campaign</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feb 10, 2025</td>
              <td>Electric Skateboard</td>
              <td>$50</td>
              <td className="success">Completed</td>
            </tr>
            <tr>
              <td>Jan 28, 2025</td>
              <td>Autonomous Delivery Drone</td>
              <td>$75</td>
              <td className="success">Completed</td>
            </tr>
            <tr>
              <td>Jan 15, 2025</td>
              <td>Renewable Energy Battery</td>
              <td>$40</td>
              <td className="pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Profile;
