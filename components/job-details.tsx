"use client"

import { useContext } from "react"
import type { Job } from "@/types"
import { UserContext } from "@/context/user-context"
import { X, Building, MapPin, DollarSign, CheckCircle, XCircle } from "lucide-react"
import ApplyButton from "@/components/apply-button"

interface JobDetailsProps {
  job: Job
  isOpen: boolean
  onClose: () => void
}

export default function JobDetails({ job, isOpen, onClose }: JobDetailsProps) {
  const { userSkills } = useContext(UserContext)

  if (!isOpen) return null

  // Calculate missing skills
  const missingSkills = job.requiredSkills.filter((skill) => !userSkills.includes(skill))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-white rounded-xl shadow-lg dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{job.title}</h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Building className="h-5 w-5 mr-2" />
              <span>{job.company}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{job.location}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Job Description</h3>
            <p className="text-gray-600 dark:text-gray-300">
              This is an exciting opportunity to join {job.company} as a {job.title}. You will be working on
              cutting-edge projects and collaborating with a talented team.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Required Skills</h3>
            <div className="space-y-2">
              {job.requiredSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  {userSkills.includes(skill) ? (
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 mr-2 text-red-500" />
                  )}
                  <span
                    className={
                      userSkills.includes(skill) ? "text-gray-800 dark:text-gray-200" : "text-red-600 dark:text-red-400"
                    }
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <ApplyButton job={job} missingSkills={missingSkills} />
          </div>
        </div>
      </div>
    </div>
  )
}

