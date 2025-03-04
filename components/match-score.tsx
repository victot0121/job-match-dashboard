interface MatchScoreProps {
  score: number
}

export default function MatchScore({ score }: MatchScoreProps) {
  // Determine color based on score
  const getColorClass = () => {
    if (score >= 80) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    if (score >= 50) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
    return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
  }

  // Determine progress bar color
  const getProgressColorClass = () => {
    if (score >= 80) return "bg-green-500 dark:bg-green-500"
    if (score >= 50) return "bg-yellow-500 dark:bg-yellow-500"
    return "bg-red-500 dark:bg-red-500"
  }

  return (
    <div className="flex flex-col items-end">
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClass()}`}>{score}% Match</div>
      <div className="w-24 h-1.5 mt-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
        <div className={`h-full rounded-full ${getProgressColorClass()}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

