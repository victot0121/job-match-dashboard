# AI-Powered Job Match Dashboard

## Overview

The AI-Powered Job Match Dashboard is a mini-project that displays job recommendations with AI-generated match scores, job details, and an "Apply Now" feature. This project demonstrates API handling, UI/UX design, and state management using Next.js, React, and Tailwind CSS.

## Features

- **Job List Component**: Displays job recommendations, including title, company, location, salary range, and match score.
- **Match Score Visualization**: Color-coded match score using a progress bar or badge.
- **Job Details Component**: Clicking on a job opens a modal or a new page with job details and required skills.
- **Apply Now Button**: Allows users to apply for a job (mock action). If skills are missing, an alert suggests upskilling options.
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes.

## Tech Stack

- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **State Management**: Context API or Zustand
- **API Handling**: Fetch or Axios
- **Bonus**: TypeScript (if implemented)

## API Handling

The job data is fetched from a mock API (local JSON file or an online API like MockAPI). User skills are compared with job requirements to calculate the match score.

### Mock API for Job Listings

```json
[
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": "$70,000 - $90,000",
    "requiredSkills": ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    "matchScore": 85
  },
  {
    "id": 2,
    "title": "UI Engineer",
    "company": "DesignPro",
    "location": "New York, USA",
    "salary": "$80,000 - $100,000",
    "requiredSkills": ["Figma", "React", "CSS"],
    "matchScore": 70
  }
]
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/job-match-dashboard.git
   cd job-match-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open the app in the browser at `http://localhost:3000`

## Deployment

To deploy the project on Vercel:

1. Install Vercel CLI (if not installed):
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```

### Live Demo

[View Live Site](https://job-match-dashboard-rny1.vercel.app/)

## Evaluation Criteria

- **Code Quality & Best Practices**: Clean, modular, and well-structured code.
- **UI/UX Design & Responsiveness**: Aesthetic and functional UI.
- **API Integration & Data Handling**: Proper data fetching and dynamic rendering.
- **State Management & Performance**: Efficient component re-renders and clean state handling.
- **Bonus**: TypeScript implementation or additional enhancements.

## Submission

- **Deadline**: 3-5 days from assignment.
- **Format**: Submit a GitHub repository with a clear README.
- **Bonus**: Deploy on Vercel and provide a live demo link.

## License

This project is licensed under the MIT License.

---

### Author

[Victor Oyiga](https://github.com/victot0121)
