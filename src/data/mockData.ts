export const mockStudents = [
  { id: 1, name: "Aarav Sharma", score: 92, level: "Advanced", avatar: "AS" },
  { id: 2, name: "Priya Patel", score: 85, level: "Advanced", avatar: "PP" },
  { id: 3, name: "Rohan Gupta", score: 74, level: "Intermediate", avatar: "RG" },
  { id: 4, name: "Sneha Reddy", score: 68, level: "Intermediate", avatar: "SR" },
  { id: 5, name: "Karan Singh", score: 55, level: "Beginner", avatar: "KS" },
  { id: 6, name: "Ananya Joshi", score: 88, level: "Advanced", avatar: "AJ" },
  { id: 7, name: "Vikram Mehta", score: 42, level: "Beginner", avatar: "VM" },
  { id: 8, name: "Diya Nair", score: 79, level: "Intermediate", avatar: "DN" },
];

export const mockLectures = [
  { id: 1, title: "Introduction to Machine Learning", subject: "Computer Science", date: "2026-02-28", students: 32, avgScore: 76 },
  { id: 2, title: "Photosynthesis & Plant Biology", subject: "Biology", date: "2026-02-27", students: 28, avgScore: 82 },
  { id: 3, title: "Newton's Laws of Motion", subject: "Physics", date: "2026-02-26", students: 35, avgScore: 69 },
  { id: 4, title: "World War II: Causes & Effects", subject: "History", date: "2026-02-25", students: 30, avgScore: 85 },
];

export const bloomLevels = [
  { level: "Remember", color: "bloom-remember", count: 8, description: "Recall facts and basic concepts" },
  { level: "Understand", color: "bloom-understand", count: 6, description: "Explain ideas or concepts" },
  { level: "Apply", color: "bloom-apply", count: 5, description: "Use information in new situations" },
  { level: "Analyze", color: "bloom-analyze", count: 4, description: "Draw connections among ideas" },
  { level: "Evaluate", color: "bloom-evaluate", count: 3, description: "Justify a stand or decision" },
  { level: "Create", color: "bloom-create", count: 2, description: "Produce new or original work" },
];

export const mockQuestions = [
  { id: 1, question: "What is supervised learning?", bloom: "Remember", points: 5 },
  { id: 2, question: "Explain the difference between classification and regression.", bloom: "Understand", points: 10 },
  { id: 3, question: "Apply a decision tree algorithm to classify the given dataset.", bloom: "Apply", points: 15 },
  { id: 4, question: "Analyze the bias-variance tradeoff in the given model.", bloom: "Analyze", points: 15 },
  { id: 5, question: "Evaluate which model performs better for this use case and justify.", bloom: "Evaluate", points: 20 },
  { id: 6, question: "Design a novel ML pipeline for real-time sentiment analysis.", bloom: "Create", points: 25 },
  { id: 7, question: "Define the term 'overfitting'.", bloom: "Remember", points: 5 },
  { id: 8, question: "Summarize how gradient descent works.", bloom: "Understand", points: 10 },
];

export const conceptPerformance = [
  { concept: "Supervised Learning", mastery: 85 },
  { concept: "Neural Networks", mastery: 72 },
  { concept: "Decision Trees", mastery: 90 },
  { concept: "Overfitting", mastery: 65 },
  { concept: "Gradient Descent", mastery: 78 },
  { concept: "Feature Engineering", mastery: 58 },
];

export const classPerformance = [
  { week: "Week 1", score: 68 },
  { week: "Week 2", score: 72 },
  { week: "Week 3", score: 75 },
  { week: "Week 4", score: 71 },
  { week: "Week 5", score: 80 },
  { week: "Week 6", score: 84 },
];
