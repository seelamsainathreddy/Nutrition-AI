import React from 'react';
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});



const PatientForm = ({setDietPlan, setIsLoading}) => {
  const [formData, setFormData] = React.useState({
    age: '',
    weight: '',
    height: ''
  });
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    try {
      console.log("inside the handle submit");

      // Construct the message string
      const message = `age: ${formData.age}, weight: ${formData.weight}, height: ${formData.height}`;

      const response = await fetch("https://pragmatic-armor-441322-c5.el.r.appspot.com/api/dietPlan/", {
        method: 'POST', // Change to POST
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({ message }), // Send the message as the request body
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response as JSON
      const data = await response.json();
      console.log("Received data:", data);

      // Update state with the received data
      setDietPlan(data);
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setIsLoading(false);
    }
  };

  return (
<>    <div className="mt-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg ml-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Patient Information</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className='flex items-center'>
          <label htmlFor="age" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter patient's age"
            className="w-2/3 mt-1 block px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.age}
            onChange={handleChange}
          />
        </div>
    
        {/* Calorie Intake Field */}
        <div className='flex  items-center'>
          <label htmlFor="weight" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            weight
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Enter weight of the person"
            className="w-2/3 mt-1 block px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
    
        {/* Protein Intake Field */}
        <div className='flex  items-center'>
          <label htmlFor="height" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            Height (Ft)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Enter height of the person"
            className="w-2/3 mt-1 block  px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.height}
            onChange={handleChange}
          />
        </div>
    
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get Diet Plan
          </button>
        </div>
      </form>
    </div>
  </>
  );

}

export default PatientForm