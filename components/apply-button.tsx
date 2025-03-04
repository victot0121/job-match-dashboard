"use client"

import { useState } from "react"
import type { Job } from "@/types"
import { AlertCircle } from "lucide-react"

interface ApplyButtonProps {
  job: Job
  missingSkills: string[]
}

export default function ApplyButton({ job, missingSkills }: ApplyButtonProps) {
  const [showAlert, setShowAlert] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  const handleApply = () => {
    if (missingSkills.length > 0) {
      setShowAlert(true)
    } else {
      // Mock successful application
      setIsApplied(true)
      setTimeout(() => {
        setIsApplied(false)
      }, 3000)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleApply}
        disabled={isApplied}
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
          isApplied
            ? "bg-green-500 text-white cursor-default"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}
      >
        {isApplied ? "Applied Successfully!" : "Apply Now"}
      </button>

      {showAlert && (
        <div className="absolute bottom-full mb-2 right-0 w-72 p-4 bg-white border border-red-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-red-800">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-600 dark:text-red-400">Missing Skills</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                You're missing some required skills for this position:
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600 dark:text-gray-300">
                {missingSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className="mt-3 flex justify-between">
                <button
                  onClick={() => setShowAlert(false)}
                  className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowAlert(false)
                    setIsApplied(true)
                    setTimeout(() => {
                      setIsApplied(false)
                    }, 3000)
                  }}
                  className="text-sm text-primary hover:text-primary/90"
                >
                  Apply Anyway
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

