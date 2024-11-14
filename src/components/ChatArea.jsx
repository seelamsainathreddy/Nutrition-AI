import React from 'react'
import PatientForm from './ChatArea/PatientForm'
import { useState } from 'react'
import DietPlan from './ChatArea/DietPlan'

const ChatArea = () => {

const [dietPlan, setDietPlan] = useState("");


  return (
    <div className='overflow-y-auto'>
        <PatientForm setDietPlan={setDietPlan}/>
        <DietPlan  dietPlan={dietPlan} />
    </div>
  )
}

export default ChatArea