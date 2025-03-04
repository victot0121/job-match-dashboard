import type { Job } from "@/types"
import MatchScore from "@/components/match-score"
import { MapPin, Building, DollarSign } from "lucide-react"

interface JobCardProps {
  job: Job
  onClick: () => void
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div
      className="relative flex flex-col p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h2>
        <MatchScore score={job.matchScore} />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Building className="h-4 w-4 mr-2" />
          <span>{job.company}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {job.requiredSkills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
          {job.requiredSkills.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              +{job.requiredSkills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

