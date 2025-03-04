"use client"

import { useEffect, useState } from "react"
import JobCard from "@/components/job-card"
import type { Job } from "@/types"
import { fetchJobs } from "@/lib/api"

interface JobListProps {
  onJobClick: (job: Job) => void
}

export default function JobList({ onJobClick }: JobListProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getJobs = async () => {
      try {
        setIsLoading(true)
        const jobData = await fetchJobs()
        setJobs(jobData)
      } catch (err) {
        setError("Failed to load job listings. Please try again later.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    getJobs()
  }, [])

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-64 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 text-center rounded-lg bg-red-50 dark:bg-red-900/20">
        <p className="text-red-600 dark:text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
      ))}
    </div>
  )
}

