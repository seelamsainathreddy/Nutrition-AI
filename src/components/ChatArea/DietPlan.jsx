import ReactMarkdown from 'react-markdown';

const DietPlan = ({ dietPlan, isLoading }) => {
  const mealSections = {
    breakfast: dietPlan?.breakfast || "Breakfast plan will appear here...",
    lunch: dietPlan?.lunch || "Lunch plan will appear here...",
    dinner: dietPlan?.dinner || "Dinner plan will appear here...",
    explanation: dietPlan?.explanation || "explaination will appear here"
  };

  return (
      <>
      
      {isLoading ? (
        <div className="flex items-center justify-center mt-6">
          <div className="spinner"></div>
          <p className="ml-2">Loading diet plan...</p>
        </div>
      ) : (
              <div className="space-y-6 mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 text-left px-4 py-2">Meal</th>
                <th className="border border-gray-300 text-left px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Breakfast</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="prose prose-blue max-w-none">
                    <ReactMarkdown>{mealSections.breakfast}</ReactMarkdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Lunch</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="prose prose-blue max-w-none">
                    <ReactMarkdown>{mealSections.lunch}</ReactMarkdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Dinner</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="prose prose-blue max-w-none">
                    <ReactMarkdown>{mealSections.dinner}</ReactMarkdown>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="explaination">
            <h3><strong>Explaination</strong></h3>
            <p className='ml-4 mt-4'><ReactMarkdown>{mealSections.explanation}</ReactMarkdown></p>
        </section>
   
      </div>

      )}

    </>

  );
};

export default DietPlan;