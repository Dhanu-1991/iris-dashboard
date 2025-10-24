// Mock data for IRIS Dashboard
export const mockData = {
  user: {
    name: "Sarah Johnson",
    email: "sarah.johnson@university.edu",
    avatar: "SJ",
    role: "Computer Science Major",
    enrollmentYear: "2023",
    studentId: "CS2023-1847"
  },
  
  courses: [
    {
      id: 1,
      code: "CS401",
      name: "Advanced Algorithms",
      instructor: "Dr. Emily Chen",
      instructorEmail: "e.chen@university.edu",
      progress: 78,
      grade: "A-",
      nextClass: "Mon, 10:00 AM",
      room: "Engineering Hall 204",
      color: "#6366f1",
      credits: 4,
      enrolled: 45,
      capacity: 50,
      syllabus: "https://example.com/syllabus",
      description: "Advanced study of algorithm design and analysis techniques including dynamic programming, greedy algorithms, and NP-completeness."
    },
    {
      id: 2,
      code: "CS350",
      name: "Database Systems",
      instructor: "Prof. Michael Roberts",
      instructorEmail: "m.roberts@university.edu",
      progress: 65,
      grade: "B+",
      nextClass: "Tue, 2:00 PM",
      room: "Computer Lab 102",
      color: "#8b5cf6",
      credits: 3,
      enrolled: 38,
      capacity: 40,
      syllabus: "https://example.com/syllabus",
      description: "Comprehensive coverage of database design, SQL, transactions, and modern database systems."
    },
    {
      id: 3,
      code: "CS425",
      name: "Machine Learning",
      instructor: "Dr. Aisha Patel",
      instructorEmail: "a.patel@university.edu",
      progress: 82,
      grade: "A",
      nextClass: "Wed, 11:00 AM",
      room: "Science Building 301",
      color: "#ec4899",
      credits: 4,
      enrolled: 52,
      capacity: 55,
      syllabus: "https://example.com/syllabus",
      description: "Introduction to machine learning concepts, supervised and unsupervised learning, neural networks."
    },
    {
      id: 4,
      code: "CS380",
      name: "Web Development",
      instructor: "Prof. David Kim",
      instructorEmail: "d.kim@university.edu",
      progress: 91,
      grade: "A",
      nextClass: "Thu, 3:00 PM",
      room: "Tech Center 105",
      color: "#14b8a6",
      credits: 3,
      enrolled: 42,
      capacity: 45,
      syllabus: "https://example.com/syllabus",
      description: "Modern web development with HTML, CSS, JavaScript, and popular frameworks like React."
    },
    {
      id: 5,
      code: "CS310",
      name: "Software Engineering",
      instructor: "Dr. Lisa Martinez",
      instructorEmail: "l.martinez@university.edu",
      progress: 73,
      grade: "B+",
      nextClass: "Fri, 1:00 PM",
      room: "Engineering Hall 108",
      color: "#f59e0b",
      credits: 4,
      enrolled: 48,
      capacity: 50,
      syllabus: "https://example.com/syllabus",
      description: "Principles and practices of software engineering including agile methodologies and testing."
    }
  ],
  
  announcements: [
    {
      id: 1,
      course: "CS401",
      courseId: 1,
      title: "Assignment 3 Due Date Extended",
      content: "The deadline for Assignment 3 has been extended to Friday, November 1st at 11:59 PM due to technical issues with the submission portal. Please ensure all work is submitted by the new deadline.",
      timestamp: "2 hours ago",
      date: "2025-10-24T14:30:00",
      isNew: true,
      priority: "high",
      author: "Dr. Emily Chen"
    },
    {
      id: 2,
      course: "CS425",
      courseId: 3,
      title: "Guest Lecture on Neural Networks",
      content: "Join us for a special session with Dr. Andrew Ng next Wednesday at 4 PM in Hall B. This is an excellent opportunity to learn about cutting-edge developments in deep learning. Attendance is optional but highly recommended.",
      timestamp: "5 hours ago",
      date: "2025-10-24T11:00:00",
      isNew: true,
      priority: "medium",
      author: "Dr. Aisha Patel"
    },
    {
      id: 3,
      course: "CS350",
      courseId: 2,
      title: "Midterm Results Posted",
      content: "Your midterm exam results are now available in the grades section. The class average was 82%. Office hours will be extended this week for anyone who wishes to review their exam.",
      timestamp: "1 day ago",
      date: "2025-10-23T09:00:00",
      isNew: false,
      priority: "medium",
      author: "Prof. Michael Roberts"
    },
    {
      id: 4,
      course: "CS380",
      courseId: 4,
      title: "Project Team Formation",
      content: "Please form your project teams by the end of this week. Maximum 4 members per team. Use the discussion forum to find team members. Submit your team composition through the course portal.",
      timestamp: "2 days ago",
      date: "2025-10-22T16:00:00",
      isNew: false,
      priority: "high",
      author: "Prof. David Kim"
    },
    {
      id: 5,
      course: "CS310",
      courseId: 5,
      title: "Sprint Planning Workshop",
      content: "Mandatory workshop on Agile sprint planning this Friday at 2 PM. We'll be working through a real-world project scenario. Please bring your laptops.",
      timestamp: "3 days ago",
      date: "2025-10-21T10:00:00",
      isNew: false,
      priority: "high",
      author: "Dr. Lisa Martinez"
    },
    {
      id: 6,
      course: "CS401",
      courseId: 1,
      title: "Study Group Session",
      content: "Peer-led study group for the upcoming algorithms quiz will meet on Sunday at 3 PM in the library. All students are welcome to attend.",
      timestamp: "4 days ago",
      date: "2025-10-20T15:00:00",
      isNew: false,
      priority: "low",
      author: "Teaching Assistant"
    }
  ],
  
  upcomingEvents: [
    {
      id: 1,
      title: "CS401 Quiz 4",
      date: "Oct 28, 2025",
      time: "10:00 AM",
      duration: "50 minutes",
      type: "quiz",
      course: "CS401",
      courseId: 1,
      location: "Engineering Hall 204",
      description: "Quiz covering dynamic programming and greedy algorithms"
    },
    {
      id: 2,
      title: "ML Project Presentation",
      date: "Oct 30, 2025",
      time: "11:00 AM",
      duration: "2 hours",
      type: "presentation",
      course: "CS425",
      courseId: 3,
      location: "Science Building 301",
      description: "Present your machine learning project to the class"
    },
    {
      id: 3,
      title: "Database Assignment Due",
      date: "Nov 1, 2025",
      time: "11:59 PM",
      duration: null,
      type: "assignment",
      course: "CS350",
      courseId: 2,
      location: "Online Submission",
      description: "SQL queries and database normalization assignment"
    },
    {
      id: 4,
      title: "Web Dev Final Project",
      date: "Nov 5, 2025",
      time: "11:59 PM",
      duration: null,
      type: "project",
      course: "CS380",
      courseId: 4,
      location: "Online Submission",
      description: "Complete full-stack web application project"
    },
    {
      id: 5,
      title: "Software Engineering Exam",
      date: "Nov 8, 2025",
      time: "1:00 PM",
      duration: "2 hours",
      type: "exam",
      course: "CS310",
      courseId: 5,
      location: "Engineering Hall 108",
      description: "Comprehensive exam on Agile methodologies and testing"
    },
    {
      id: 6,
      title: "CS425 Lab Session",
      date: "Oct 26, 2025",
      time: "2:00 PM",
      duration: "1.5 hours",
      type: "lab",
      course: "CS425",
      courseId: 3,
      location: "Computer Lab 205",
      description: "Hands-on practice with TensorFlow and Keras"
    }
  ],
  
  gradesSummary: {
    gpa: 3.72,
    totalCredits: 48,
    completedCourses: 12,
    inProgressCourses: 5,
    averageGrade: "A-",
    semesterGPA: 3.78,
    creditsThisSemester: 18,
    academicStanding: "Good Standing",
    deansListSemesters: 4
  },
  
  recentActivity: [
    {
      id: 1,
      action: "Submitted Assignment 5",
      course: "CS380",
      courseId: 4,
      timestamp: "30 minutes ago",
      date: "2025-10-24T15:30:00",
      type: "submission",
      icon: "FileText"
    },
    {
      id: 2,
      action: "Completed Quiz 3",
      course: "CS401",
      courseId: 1,
      timestamp: "3 hours ago",
      date: "2025-10-24T13:00:00",
      type: "quiz",
      icon: "CheckCircle",
      score: "92%"
    },
    {
      id: 3,
      action: "Posted in Discussion Forum",
      course: "CS425",
      courseId: 3,
      timestamp: "Yesterday",
      date: "2025-10-23T18:45:00",
      type: "discussion",
      icon: "MessageSquare"
    },
    {
      id: 4,
      action: "Viewed Lecture Recording",
      course: "CS350",
      courseId: 2,
      timestamp: "Yesterday",
      date: "2025-10-23T14:20:00",
      type: "video",
      icon: "Video"
    },
    {
      id: 5,
      action: "Downloaded Course Materials",
      course: "CS310",
      courseId: 5,
      timestamp: "2 days ago",
      date: "2025-10-22T10:15:00",
      type: "download",
      icon: "Download"
    }
  ],
  
  assignments: [
    {
      id: 1,
      title: "Algorithm Analysis Report",
      course: "CS401",
      courseId: 1,
      dueDate: "Nov 1, 2025",
      dueTime: "11:59 PM",
      status: "pending",
      points: 100,
      submitted: false,
      description: "Analyze time complexity of various sorting algorithms"
    },
    {
      id: 2,
      title: "Database Schema Design",
      course: "CS350",
      courseId: 2,
      dueDate: "Nov 1, 2025",
      dueTime: "11:59 PM",
      status: "pending",
      points: 75,
      submitted: false,
      description: "Design a normalized database schema for an e-commerce platform"
    },
    {
      id: 3,
      title: "Neural Network Implementation",
      course: "CS425",
      courseId: 3,
      dueDate: "Oct 30, 2025",
      dueTime: "11:59 PM",
      status: "in_progress",
      points: 150,
      submitted: false,
      description: "Implement a neural network from scratch using NumPy"
    },
    {
      id: 4,
      title: "React Portfolio Website",
      course: "CS380",
      courseId: 4,
      dueDate: "Nov 5, 2025",
      dueTime: "11:59 PM",
      status: "submitted",
      points: 120,
      submitted: true,
      submittedDate: "2025-10-24T15:30:00",
      grade: "95",
      description: "Build a responsive portfolio website using React"
    }
  ],
  
  grades: [
    {
      courseId: 1,
      course: "CS401",
      assignments: [
        { name: "Assignment 1", score: 95, total: 100, weight: 10 },
        { name: "Assignment 2", score: 88, total: 100, weight: 10 },
        { name: "Quiz 1", score: 92, total: 100, weight: 5 },
        { name: "Quiz 2", score: 87, total: 100, weight: 5 },
        { name: "Quiz 3", score: 92, total: 100, weight: 5 },
        { name: "Midterm", score: 85, total: 100, weight: 25 }
      ],
      currentGrade: "A-",
      percentage: 89.5
    },
    {
      courseId: 2,
      course: "CS350",
      assignments: [
        { name: "Lab 1", score: 90, total: 100, weight: 5 },
        { name: "Lab 2", score: 85, total: 100, weight: 5 },
        { name: "Project 1", score: 88, total: 100, weight: 15 },
        { name: "Midterm", score: 82, total: 100, weight: 30 }
      ],
      currentGrade: "B+",
      percentage: 85.2
    },
    {
      courseId: 3,
      course: "CS425",
      assignments: [
        { name: "Problem Set 1", score: 95, total: 100, weight: 10 },
        { name: "Problem Set 2", score: 92, total: 100, weight: 10 },
        { name: "Lab Assignment 1", score: 98, total: 100, weight: 10 },
        { name: "Midterm Project", score: 90, total: 100, weight: 20 }
      ],
      currentGrade: "A",
      percentage: 93.5
    },
    {
      courseId: 4,
      course: "CS380",
      assignments: [
        { name: "HTML/CSS Project", score: 98, total: 100, weight: 15 },
        { name: "JavaScript Quiz", score: 95, total: 100, weight: 10 },
        { name: "React Assignment", score: 95, total: 100, weight: 15 },
        { name: "Midterm Project", score: 92, total: 100, weight: 20 }
      ],
      currentGrade: "A",
      percentage: 94.5
    }
  ],
  
  messages: [
    {
      id: 1,
      from: "Dr. Emily Chen",
      fromEmail: "e.chen@university.edu",
      subject: "Re: Assignment 3 Question",
      preview: "Thanks for your question. The time complexity analysis should focus on...",
      timestamp: "1 hour ago",
      unread: true,
      course: "CS401"
    },
    {
      id: 2,
      from: "Teaching Assistant",
      fromEmail: "ta.cs425@university.edu",
      subject: "Study Group This Weekend",
      preview: "Hi everyone, we're organizing a study group for the upcoming ML quiz...",
      timestamp: "3 hours ago",
      unread: true,
      course: "CS425"
    },
    {
      id: 3,
      from: "Prof. Michael Roberts",
      fromEmail: "m.roberts@university.edu",
      subject: "Midterm Review Session",
      preview: "I'll be holding a review session on Thursday at 4 PM...",
      timestamp: "Yesterday",
      unread: false,
      course: "CS350"
    }
  ]
};

export default mockData;