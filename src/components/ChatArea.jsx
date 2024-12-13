import React, { useState, useRef } from 'react'
import DietPlan from './ChatArea/DietPlan'
import Explanation from './ChatArea/Explanation'
import ProfileForm from './ChatArea/ProfileForm'
const ChatArea = () => {

const [dietPlan, setDietPlan] = useState({
  breakfast: null,
  lunch: null,
  dinner: null,
  explanation: null
});
const [isLoading, setIsLoading] = useState(false);

// Create refs for DietPlan and Explanation
const dietPlanRef = useRef(null);
const explanationRef = useRef(null);

const handleGenerateClick = () => {
  // Scroll to DietPlan and Explanation

  if (explanationRef.current) {

    explanationRef.current.scrollIntoView({ behavior: 'smooth' });

  }
};

  return (
    <div className='overflow-y-auto ml-[250px] '>
        <ProfileForm setDietPlan={setDietPlan} setIsLoading={setIsLoading} onGenerate={handleGenerateClick}/>
        <div ref={dietPlanRef}>
          <DietPlan  dietPlan={dietPlan} isLoading={isLoading} />
        </div>
        <div ref={explanationRef}>
          <Explanation dietPlan= {dietPlan} isLoading={isLoading}/>
        </div>
    </div>
  )
}

export default ChatArea