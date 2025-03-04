"use client"

import { useState } from "react"
import JobList from "@/components/job-list"
import JobDetails from "@/components/job-details"
import { UserProvider } from "@/context/user-context"
import type { Job } from "@/types"

export default function JobDashboard() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleJobClick = (job: Job) => {
    setSelectedJob(job)
    setIsDetailsOpen(true)
  }

  const handleCloseDetails = () => {
    setIsDetailsOpen(false)
  }

  return (
    <UserProvider>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI-Powered Job Match Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Find the perfect job match based on your skills and experience
          </p>
        </header>

        <JobList onJobClick={handleJobClick} />

        {selectedJob && <JobDetails job={selectedJob} isOpen={isDetailsOpen} onClose={handleCloseDetails} />}
      </div>
    </UserProvider>
  )
}

