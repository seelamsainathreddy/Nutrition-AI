import ReactMarkdown from 'react-markdown';

const DietPlan = ({ dietPlan, isLoading }) => {
  const mealSections = {
    breakfast: dietPlan?.breakfast || "Breakfast plan will appear here...",
    lunch: dietPlan?.lunch || "Lunch plan will appear here...",
    dinner: dietPlan?.dinner || "Dinner plan will appear here..."
  };

  return (
    <div className="mt-6 ml-6 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Diet Plan</h2>
      
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="spinner"></div>
          <p className="ml-2">Loading diet plan...</p>
        </div>
      ) : (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-medium text-blue-600 mb-3">Breakfast</h3>
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown>{mealSections.breakfast}</ReactMarkdown>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-blue-600 mb-3">Lunch</h3>
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown>{mealSections.lunch}</ReactMarkdown>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium text-blue-600 mb-3">Dinner</h3>
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown>{mealSections.dinner}</ReactMarkdown>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DietPlan;