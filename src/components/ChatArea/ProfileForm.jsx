import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


const ProfileForm = ({setDietPlan, setIsLoading}) => {
  const [formData, setFormData] = React.useState({
    age: '',
    gender: '',
    heightWeight: '',
    conditions: '',
    allergies: '',
    medications: '',
    activityLevel: '',
    dietaryPreferences: '',
    smokingAlcohol: '',
    weightGoals: '',
    symptomManagement: ''
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
      const message = {
        age: formData.age,
        gender: formData.gender,
        heightWeight: formData.heightWeight,
        conditions: formData.conditions,
        allergies: formData.allergies,
        medications: formData.medications,
        activityLevel: formData.activityLevel,
        dietaryPreferences: formData.dietaryPreferences,
        smokingAlcohol: formData.smokingAlcohol,
        weightGoals: formData.weightGoals,
        symptomManagement: formData.symptomManagement
      }
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
    <div className="mt-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ml-6">
        <h1 className='text-3xl mb-5'>Patient Infromation</h1>
     <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                {/* <!-- Demographics Section --> */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Demographics</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">Age</label>
                            <div className="mt-2">
                                <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">Gender</label>
                            <div className="mt-2">
                                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="height-weight" className="block text-sm/6 font-medium text-gray-900">Height and Weight</label>
                            <div className="mt-2">
                                <input type="text" name="heightWeight" id="height-weight" value={formData.heightWeight} onChange={handleChange} placeholder={'e.g., 5\'8", 150 lbs'} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Medical History Section --> */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Medical History</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="conditions" className="block text-sm/6 font-medium text-gray-900">Existing conditions</label>
                            <div className="mt-2">
                                <textarea id="conditions" name="conditions" value={formData.conditions} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="e.g., PCOS, IBS"></textarea>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="allergies" className="block text-sm/6 font-medium text-gray-900">Allergies and intolerances</label>
                            <div className="mt-2">
                                <textarea id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="medications" className="block text-sm/6 font-medium text-gray-900">Current medications and supplements</label>
                            <div className="mt-2">
                                <textarea id="medications" name="medications" value={formData.medications} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Lifestyle Information Section --> */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Lifestyle Information</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="activity-level" className="block text-sm/6 font-medium text-gray-900">Physical activity level</label>
                            <div className="mt-2">
                                <select id="activity-level" name="activityLevel" value={formData.activityLevel} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                                    <option>Sedentary</option>
                                    <option>Lightly active</option>
                                    <option>Moderately active</option>
                                    <option>Very active</option>
                                    <option>Extra active</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="dietary-preferences" className="block text-sm/6 font-medium text-gray-900">Dietary preferences and restrictions</label>
                            <div className="mt-2">
                                <textarea id="dietary-preferences" name="dietaryPreferences" value={formData.dietaryPreferences} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="smoking-alcohol" className="block text-sm/6 font-medium text-gray-900">Smoking and alcohol consumption</label>
                            <div className="mt-2">
                                <textarea id="smoking-alcohol" name="smokingAlcohol" value={formData.smokingAlcohol} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Health Goals Section --> */}
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Health Goals</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="weight-goals" className="block text-sm/6 font-medium text-gray-900">Weight loss or gain</label>
                            <div className="mt-2">
                                <textarea id="weight-goals" name="weightGoals" value={formData.weightGoals} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="symptom-management" className="block text-sm/6 font-medium text-gray-900">Symptom management</label>
                            <div className="mt-2">
                                <textarea id="symptom-management" name="symptomManagement" value={formData.symptomManagement} onChange={handleChange} rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Generate</button>
            </div>
        </form>
    </div>
  );
}

export default ProfileForm