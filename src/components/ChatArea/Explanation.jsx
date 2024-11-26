import React from 'react'
import ReactMarkdown from 'react-markdown'

const Explanation = ({ dietPlan, isLoading }) => {
  console.log("diet plan in explanation", dietPlan);
  return (
    <div className="mt-6 ml-6 max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-medium text-blue-600 mb-3">Explanation</h3>
      <div className="prose prose-blue max-w-none">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="spinner"></div>
            <p className="ml-2">Loading explanation...</p>
          </div>
        ) : (
          <ReactMarkdown>
            {dietPlan.explanation || "Explanation will appear here..."}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

export default Explanation