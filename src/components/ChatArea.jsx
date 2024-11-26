import React from 'react'
import { useState } from 'react'
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


  return (
    <div className='overflow-y-auto ml-[250px] '>
        <ProfileForm setDietPlan={setDietPlan} setIsLoading={setIsLoading}/>
        <DietPlan  dietPlan={dietPlan} isLoading={isLoading} />
        <Explanation dietPlan= {dietPlan} isLoading={isLoading}/>
    </div>
  )
}

export default ChatArea