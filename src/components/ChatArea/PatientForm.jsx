import React from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const PatientForm = ({setDietPlan}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    calories: '',
    protein: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful nutritionist assistant that creates personalized diet plans."
          },
          {
            role: "user",
            content: `Create a detailed diet plan for a patient named ${formData.name} with a daily calorie target of ${formData.calories} calories and protein target of ${formData.protein} grams. Include meal suggestions and timing.`
          }
        ],
        temperature: 0.7,
      });

      const dietPlan = completion.choices[0].message.content;
      setDietPlan(dietPlan);
    } catch (error) {
      console.error('Error generating diet plan:', error);
      setError('Failed to generate diet plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg ml-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Patient Information</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className='flex items-center'>
          <label htmlFor="name" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter patient's name"
            className="w-2/3 mt-1 block px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
    
        {/* Calorie Intake Field */}
        <div className='flex  items-center'>
          <label htmlFor="calories" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            Calorie Intake
          </label>
          <input
            type="number"
            id="calories"
            name="calories"
            placeholder="Enter daily calorie intake"
            className="w-2/3 mt-1 block px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.calories}
            onChange={handleChange}
          />
        </div>
    
        {/* Protein Intake Field */}
        <div className='flex  items-center'>
          <label htmlFor="protein" className="w-1/3 block text-sm font-medium text-gray-700 mr-3">
            Protein Intake (grams)
          </label>
          <input
            type="number"
            id="protein"
            name="protein"
            placeholder="Enter daily protein intake"
            className="w-2/3 mt-1 block  px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            value={formData.protein}
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
  );
}

export default PatientForm