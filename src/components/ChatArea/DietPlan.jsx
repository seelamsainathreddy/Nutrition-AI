import ReactMarkdown from 'react-markdown';

const DietPlan = ({ dietPlan }) => {
  return (
    <div className="mt-6 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Diet Plan</h2>
      <div className="prose prose-blue prose-headings:text-blue-600 prose-strong:text-gray-700 prose-ul:list-disc prose-li:marker:text-blue-500 max-w-none">
        <ReactMarkdown>
          {dietPlan || "Your diet plan will appear here..."}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DietPlan;