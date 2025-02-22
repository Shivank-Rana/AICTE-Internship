import { useState } from "react";
import "../styles/CreateCampaign.css";

function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    duration: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Data:", formData);
    alert("Campaign submitted successfully!");
  };

  return (
    <div className="create-campaign-container">
      <h1>Create a Campaign</h1>
      <p>Start your journey by sharing your vision with the world.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          className="input-field"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Campaign Description"
          className="input-field"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="goal"
          placeholder="Funding Goal ($)"
          className="input-field"
          value={formData.goal}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (in days)"
          className="input-field"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          className="input-field"
          onChange={handleChange}
        />
        <button type="submit">Launch Campaign</button>
      </form>
    </div>
  );
}

export default CreateCampaign;
