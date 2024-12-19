import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button"

import { jsPDF } from "jspdf";
import "jspdf-autotable";
import DietPlan from "./ChatArea/DietPlan";
import Explanation from "./ChatArea/Explanation";
import { hospitalLogo } from "../assets/icons";
import ProfileForm from "./ChatArea/ProfileForm2";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const ChatArea = () => {
  const [dietPlan, setDietPlan] = useState({
    breakfast: null,
    lunch: null,
    dinner: null,
    explanation: null,
  });
  const [updateVariables, setUpdateVariables] = useState({
    isLoading: false,
    visibleSpace: false,
  });

  // Create refs for DietPlan and Explanation
  const containerRef = useRef(null);


  const handleDownloadPdf = () => {
    // Initialize jsPDF
    const doc = new jsPDF();
  
    // Add Hospital Logo
    const logo = new Image();
    logo.src = hospitalLogo; // Replace with your logo's actual path
    doc.addImage(logo, "PNG", 10, 10, 50, 20); // Adjust position and size
  
    // Add Patient and Doctor Info
    doc.setFontSize(14);
    doc.text("Patient Name: John Doe", 10, 40);
    doc.text("Doctor Name: Dr. Smith", 10, 50);
  
    // Add Diet Plan Table
    const dietTableData = [
      ["Meal", "Items"],
      ["Breakfast", dietPlan.breakfast || "Not provided"],
      ["Lunch", dietPlan.lunch || "Not provided"],
      ["Dinner", dietPlan.dinner || "Not provided"],
    ];
  
    doc.autoTable({
      head: [dietTableData[0]],
      body: dietTableData.slice(1),
      startY: 60,
      styles: {
        halign: "center", // Center align text
        valign: "middle", // Middle vertical align
      },
    });
  
    // Add Explanation Table
    const explanationTableData = [
      ["Explanation"],
      [dietPlan.explanation || "No explanation provided"],
    ];
  
    doc.autoTable({
      head: [explanationTableData[0]],
      body: explanationTableData.slice(1),
      startY: doc.lastAutoTable.finalY + 10, // Place it below the Diet Plan table
      styles: {
        halign: "left", // Align text to the left for better readability
        valign: "top",  // Align explanation to the top
      },
    });
  
    // Save the PDF
    doc.save("DietPlan.pdf");
  };
  
  const handleSlideEnd = () => {
    // Scroll to DietPlan and Explanation
    if (containerRef.current) {
      // Scroll to the bottom of the container
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return (
    <div className="overflow-y-auto">
      <ProfileForm 
        setDietPlan={setDietPlan}
        setUpdateVariables={setUpdateVariables}
        onGenerate={handleSlideEnd}
      />


      <div  className="ml-6 mt-10 border rounded-lg p-10 w-[80%] mx-auto">
        <h1 ><strong>Diet Plan</strong></h1>
        <DietPlan dietPlan={dietPlan} isLoading={updateVariables.isLoading} />
        <Button className='mx-10 mt-6' onClick={handleDownloadPdf} variant="outline">Download Pdf</Button>
      </div>

      <div className="spacing h-[250px]"></div>
    </div>
  );
};

export default ChatArea;
