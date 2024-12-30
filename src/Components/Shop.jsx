/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Shop = () => {
  const [filters, setFilters] = useState({
    eventType: "",
    breadType: "",
    cakeWeight: "",
    cakeShape: "",
    flavor: "",
    tiers: "",
    toppings: [],
    preferredText: "",
  });
  const [cakes, setCakes] = useState([]);
  const [image, setImage] = useState(null); // State to store generated image
  const navigate = useNavigate();
  const [imagePrompt, setImagePrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for buttons
  const [isToppingsDropdownOpen, setIsToppingsDropdownOpen] = useState(false);
  const [dalleimage, setDalleImage] = useState(null);

  const fetchCakes = async (appliedFilters) => {
    console.log("Fetching cakes with filters:", appliedFilters);
    const filteredCakes = [
      { id: 1, name: "Graduation Chocolate Cake", type: "Graduation", flavor: "Chocolate", weight: "1 kg", shape: "Round", tiers: "Single-Tier", toppings: ["Sprinkles"], price: 30 },
      { id: 2, name: "Wedding Vanilla Cake", type: "Wedding", flavor: "Vanilla", weight: "2 kg", shape: "Heart", tiers: "Two-Tier", toppings: ["Fondant Decorations"], price: 100 },
    ];
    setCakes(filteredCakes);
  };

  useEffect(() => {
    fetchCakes(filters);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === "toppings") {
      setFilters((prev) => ({
        ...prev,
        toppings: prev.toppings.includes(value)
          ? prev.toppings.filter((topping) => topping !== value)
          : [...prev.toppings, value],
      }));
    } else {
      setFilters((prev) => ({ ...prev, [filterType]: value }));
    }
  };

  const removeFilter = (filterType, value) => {
    if (filterType === "toppings") {
      setFilters((prev) => ({
        ...prev,
        toppings: prev.toppings.filter((topping) => topping !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [filterType]: "" }));
    }
  };

  // Simulate API call delay


  const handleGenerateImage = async () => {
    const BASE_URL = import.meta.env.BASE_URL;
    console.log(BASE_URL);
    setLoading(true);
    console.log("Generating AI image...");
    try {
      // Construct prompt from all filters
      // const prompt = `A ${filters.cakeWeight} ${filters.cakeShape} ${filters.tiers} cake for ${filters.eventType} made with ${filters.breadType} and ${filters.flavor} flavor, decorated with ${filters.toppings.join(", ")}. ${filters.preferredText ? `Text on cake: ${filters.preferredText}` : ""} ${imagePrompt}`.trim();
      const prompt = `A realistic and practical cake design for ${filters.eventType} , made with ${filters.breadType}. The cake should weigh ${filters.cakeWeight} kg and have a ${filters.cakeShape}. It will have a  ${filters.flavor}flavor, with ${filters.tiers} tiers, and the Preferred text on the cake is  ${filters.preferredText ? `${filters.preferredText}` : ""} written on it. Add ${filters.toppings.join(", ")} as decorations. Include the following custom details: ${imagePrompt}. The design should be simple enough for a baker to create while matching the given requirements.`;
      const response = await fetch(`http://user.frostiq.me/image/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })

      });

      if (!response.ok) {
        throw new Error('Image generation failed');
      }
      const imageData = await response.json();
      console.log(imageData);
      setGeneratedImage(imageData.imageUrl);
      setDalleImage(imageData._id);

      setImage(<img src={imageData.imageUrl} alt="Generated Cake" />);
      setLoading(false);
    } catch (error) {
      console.error('Error generating image:', error);
    }

  };



  const handleRegenerateImage = () => {
    setLoading(true);
    setTimeout(() => {
      setImage(<img src="generated-image-placeholder.jpg" alt="Generated Cake" />);
      setLoading(false);
    }, 2000); // Simulate API call delay
  };

  const handleContinue = () => {
    console.log("Continue to cake item page with image:", dalleimage);
    if (dalleimage) {
      navigate(`/cakes/${dalleimage}`, { state: { dalleimage } });
    } else {
      alert("No image available to proceed");
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-gray-100">
          {/* Dropdown Filters */}
          {[
            { label: "Event Type", type: "eventType", options: ["Birthday", "Wedding", "Baby Shower", "Graduation", "Valentines Day", "Christmas", "Hallowen", "New Year"] },
            { label: "Bread Type", type: "breadType", options: ["Vanilla Sponge", "Chocolate Sponge", "Red Velvet", "Marble", "Coffee Cake", "Fruit Cake", "Lemon Sponge", "Whole Wheat", "Gluten-Free", "Vegan"] },
            { label: "Cake Weight", type: "cakeWeight", options: ["0.5 kg", "1 kg", "1.5 kg", "2 kg", "3 kg", "5 kg", "Custom Weight"] },
            { label: "Cake Shape", type: "cakeShape", options: ["Round", "Square", "Rectangle", "Heart", "Oval", "Hexagon", "Number Shaped", "Letter Shaped"] },
            { label: "Flavour", type: "flavor", options: ["Chocolate", "Vanilla", "Red Velvet", "Strawberry", "Butterscotch", "Pineapple", "Mango", "Coffee", "Blueberry", "Coconut"] },
            { label: "Number of Tiers", type: "tiers", options: ["Single-Tier", "Two-Tier", "Three-Tier", "Four-Tier", "Custom Tiers"] },
          ].map((filter) => (
            <div className="mb-4" key={filter.type}>
              <label className="font-medium">{filter.label}</label>
              <select
                className="block w-full mt-2 bg-gray-100 hover:bg-[#bbbbb9] focus:bg-[#bbbbb9] border border-gray-300 rounded p-2"
                onChange={(e) => handleFilterChange(filter.type, e.target.value)}
              >
                <option value="">Select</option>
                {filter.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Toppings */}
          <div className="mb-4 relative">
            <label className="font-medium">Toppings</label>
            <div
              className="mt-2 border border-gray-300 p-2 rounded cursor-pointer bg-gray-100"
              onClick={() => setIsToppingsDropdownOpen(!isToppingsDropdownOpen)}
            >
              Select Toppings
            </div>
            {isToppingsDropdownOpen && (
              <ul className="absolute bg-white border border-gray-300 rounded shadow-lg mt-1 w-full z-10 max-h-40 overflow-y-auto">
                {["Fresh Fruits", "Chocolate Ganache", "Fondant Decorations", "Nuts", "Edible Flowers", "Sprinkles", "Whipped Cream", "Caramel Drizzle", "Macarons", "Meringues"].map((topping) => (
                  <li
                    key={topping}
                    className={`p-2 cursor-pointer ${filters.toppings.includes(topping) ? "bg-[#bbbbb9]" : "hover:bg-[#bbbbb9]"
                      }`}
                    onClick={() => handleFilterChange("toppings", topping)}
                  >
                    {topping}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              {filters.toppings.map((topping) => (
                <span key={topping} className="bg-gray-200 px-2 py-1 rounded flex items-center">
                  {topping}
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => removeFilter("toppings", topping)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Text */}
          <div className="mb-4">
            <label className="font-medium">Preferred Text</label>
            <input
              type="text"
              className="block w-full mt-2 border border-gray-300 p-2"
              placeholder="Enter text for the cake"
              onChange={(e) => handleFilterChange("preferredText", e.target.value)}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-4">
          {/* Selected Filters */}
          <div className="mb-4">
            <h2 className="text-lg font-bold">Selected Filters</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) =>
                value && key !== "toppings" ? (
                  <span key={key} className="bg-gray-200 px-2 py-1 rounded flex items-center">
                    {key}: {value}
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => removeFilter(key, value)}
                    >
                      ×
                    </button>
                  </span>
                ) : null
              )}
              {filters.toppings.map((topping) => (
                <span key={topping} className="bg-gray-200 px-2 py-1 rounded flex items-center">
                  Topping: {topping}
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => removeFilter("toppings", topping)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Input and Image Placeholder */}
          <div className="mb-4 flex items-center">
            <input
              type="text"
              className="flex-grow border border-gray-300 p-2 rounded-l"
              placeholder="Enter prompt for image"
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
              onClick={handleGenerateImage}
            >
              Generate Image
            </button>
          </div>


          {/* Loading Animation or Image */}
          <div className="mb-6">
            {loading ? (
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            ) : image ? (
              <div className="border p-4 rounded shadow-sm">{image}</div>
            ) : (
              <div className="border p-4 rounded shadow-sm">
                <p>Image will be generated here...</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleRegenerateImage}
            >
              Regenerate
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </main >

      </div >

    </>
  );
};

export default Shop;
