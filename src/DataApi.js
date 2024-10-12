const eventsData =[
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-10-01T09:00:00.000Z",
    "title": "Marketing Campaign Kickoff",
    "description": "Launch meeting for the new digital marketing campaign.",
    "tags": [
      "marketing",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#FF9800"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-10-02T13:00:00.000Z",
    "title": "Product Brainstorming Session",
    "description": "Discuss potential new product ideas.",
    "tags": [
      "brainstorming",
      "product"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#673AB7"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-10-03T15:00:00.000Z",
    "title": "Customer Success Team Sync",
    "description": "Align on goals and strategies for customer satisfaction.",
    "tags": [
      "customer",
      "team"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 480,
    "endTime": 540,
    "date": "2024-10-04T08:00:00.000Z",
    "title": "Morning Sales Brief",
    "description": "Daily check-in with the sales team.",
    "tags": [
      "sales",
      "briefing"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#FFC107"
  },
  {
    "startTime": 960,
    "endTime": 1020,
    "date": "2024-10-05T16:00:00.000Z",
    "title": "Weekly Leadership Meeting",
    "description": "Senior leadership discussion on strategic goals.",
    "tags": [
      "leadership",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#F44336"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-10-06T12:00:00.000Z",
    "title": "Product Launch Brainstorming",
    "description": "Plan for the product launch strategies.",
    "tags": [
      "product",
      "brainstorming"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#2196F3"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-10-07T09:00:00.000Z",
    "title": "Engineering Sync",
    "description": "Engineering team meeting to discuss progress.",
    "tags": [
      "engineering",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#8BC34A"
  },
  {
    "startTime": 960,
    "endTime": 1020,
    "date": "2024-10-08T16:00:00.000Z",
    "title": "Customer Feedback Review",
    "description": "Review feedback from key customers.",
    "tags": [
      "customer",
      "feedback"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#FF5722"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-10-09T12:00:00.000Z",
    "title": "Mid-Week Marketing Update",
    "description": "Update on the marketing team's performance.",
    "tags": [
      "marketing",
      "update"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#9C27B0"
  },
  {
    "startTime": 480,
    "endTime": 540,
    "date": "2024-10-10T08:00:00.000Z",
    "title": "Sales Strategy Workshop",
    "description": "Workshop to discuss next quarter's sales strategy.",
    "tags": [
      "sales",
      "strategy",
      "workshop"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-10-11T14:00:00.000Z",
    "title": "Innovation Day",
    "description": "Full day dedicated to brainstorming new ideas.",
    "tags": [
      "innovation",
      "ideas"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#3F51B5"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-10-12T10:00:00.000Z",
    "title": "Client Onboarding Session",
    "description": "Onboarding session for new clients.",
    "tags": [
      "client",
      "onboarding"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 300,
    "endTime": 360,
    "date": "2024-10-13T05:00:00.000Z",
    "title": "Daily Team Sync",
    "description": "Morning sync with all team members.",
    "tags": [
      "team",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-10-14T11:00:00.000Z",
    "title": "Customer Retention Strategy",
    "description": "Discuss ways to improve customer retention.",
    "tags": [
      "customer",
      "strategy"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#CDDC39"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-10-15T15:00:00.000Z",
    "title": "Finance Quarterly Review",
    "description": "Review financial performance for the quarter.",
    "tags": [
      "finance",
      "review"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#E91E63"
  },
  {
    "startTime": 1020,
    "endTime": 1080,
    "date": "2024-10-16T17:00:00.000Z",
    "title": "Team Building Event",
    "description": "Fun activities to foster team spirit.",
    "tags": [
      "team",
      "event"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#FFC107"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-10-17T11:00:00.000Z",
    "title": "HR Policy Review",
    "description": "Discuss updates to company HR policies.",
    "tags": [
      "HR",
      "policy",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#8BC34A"
  },
  {
    "startTime": 960,
    "endTime": 1020,
    "date": "2024-10-18T16:00:00.000Z",
    "title": "Company-Wide Town Hall",
    "description": "Discuss company-wide updates and take Q&A.",
    "tags": [
      "town hall",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#F44336"
  },
  {
    "startTime": 480,
    "endTime": 540,
    "date": "2024-10-19T08:00:00.000Z",
    "title": "New Hire Orientation",
    "description": "Introduction to new hires on company policies and teams.",
    "tags": [
      "HR",
      "onboarding"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#3F51B5"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-10-20T11:00:00.000Z",
    "title": "Project Planning",
    "description": "Outline project goals and milestones.",
    "tags": [
      "project",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Planning",
    "createdBy": "random_user_id",
    "eventColor": "#FFC107"
  },
  {
    "startTime": 1020,
    "endTime": 1080,
    "date": "2024-10-21T17:00:00.000Z",
    "title": "Tech Innovation Workshop",
    "description": "Brainstorm new technologies to implement.",
    "tags": [
      "tech",
      "innovation",
      "workshop"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#9C27B0"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-10-22T14:00:00.000Z",
    "title": "Legal Compliance Training",
    "description": "Training on new legal policies for compliance.",
    "tags": [
      "legal",
      "training"
    ],
    "status": "upcoming",
    "eventType": "Training",
    "createdBy": "random_user_id",
    "eventColor": "#8BC34A"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-10-23T13:00:00.000Z",
    "title": "Data Security Update",
    "description": "Review data security policies and protocols.",
    "tags": [
      "security",
      "data"
    ],
    "status": "upcoming",
    "eventType": "Update",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-10-24T15:00:00.000Z",
    "title": "Product Update Meeting",
    "description": "Review latest product updates and fixes.",
    "tags": [
      "product",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-10-25T11:00:00.000Z",
    "title": "Budget Planning Workshop",
    "description": "Plan the budget for the next fiscal year.",
    "tags": [
      "budget",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#E91E63"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-10-26T13:00:00.000Z",
    "title": "Annual Sales Presentation",
    "description": "Present the year's sales performance.",
    "tags": [
      "sales",
      "presentation"
    ],
    "status": "upcoming",
    "eventType": "Presentation",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-10-27T09:00:00.000Z",
    "title": "Team Collaboration Workshop",
    "description": "Improve team collaboration and workflow.",
    "tags": [
      "team",
      "collaboration"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#673AB7"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-10-28T10:00:00.000Z",
    "title": "Client Relations Meeting",
    "description": "Discuss client feedback and strengthen relationships.",
    "tags": [
      "client",
      "relations"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#FFC107"
  },
  {
    "startTime": 960,
    "endTime": 1020,
    "date": "2024-10-29T16:00:00.000Z",
    "title": "Holiday Campaign Launch",
    "description": "Kickoff meeting for the holiday season campaigns.",
    "tags": [
      "holiday",
      "campaign",
      "launch"
    ],
    "status": "upcoming",
    "eventType": "Launch",
    "createdBy": "random_user_id",
    "eventColor": "#F44336"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-10-30T12:00:00.000Z",
    "title": "IT Infrastructure Update",
    "description": "Review and plan the IT infrastructure updates.",
    "tags": [
      "IT",
      "infrastructure"
    ],
    "status": "upcoming",
    "eventType": "Update",
    "createdBy": "random_user_id",
    "eventColor": "#FF9800"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-11-01T09:00:00.000Z",
    "title": "November Planning Session",
    "description": "Set goals and objectives for November.",
    "tags": [
      "planning",
      "goals"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#673AB7"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-11-02T10:00:00.000Z",
    "title": "Product Launch Review",
    "description": "Post-launch review of the new product.",
    "tags": [
      "product",
      "review"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-11-03T15:00:00.000Z",
    "title": "Q&A Session with CEO",
    "description": "Open Q&A with the company CEO.",
    "tags": [
      "Q&A",
      "CEO"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#F44336"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-11-04T11:00:00.000Z",
    "title": "Employee Recognition Awards",
    "description": "Celebrate the achievements of outstanding employees.",
    "tags": [
      "recognition",
      "awards"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#FFC107"
  },
  {
    "startTime": 960,
    "endTime": 1020,
    "date": "2024-11-05T16:00:00.000Z",
    "title": "Budget Planning Meeting",
    "description": "Plan the annual budget for the next year.",
    "tags": [
      "budget",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#3F51B5"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-11-06T13:00:00.000Z",
    "title": "Sales Pitch Training",
    "description": "Training session for the sales team on new pitch techniques.",
    "tags": [
      "sales",
      "training"
    ],
    "status": "upcoming",
    "eventType": "Training",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-11-07T14:00:00.000Z",
    "title": "Customer Satisfaction Survey Review",
    "description": "Review results from the latest customer satisfaction survey.",
    "tags": [
      "customer",
      "review"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-11-08T10:00:00.000Z",
    "title": "Project Status Update",
    "description": "Update on the status of ongoing projects.",
    "tags": [
      "project",
      "update"
    ],
    "status": "upcoming",
    "eventType": "Update",
    "createdBy": "random_user_id",
    "eventColor": "#FF5722"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-11-09T13:00:00.000Z",
    "title": "Social Media Strategy Meeting",
    "description": "Discuss upcoming social media campaigns and engagement strategies.",
    "tags": [
      "social media",
      "strategy",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#673AB7"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-11-10T09:00:00.000Z",
    "title": "Morning Scrum",
    "description": "Daily scrum meeting for the development team.",
    "tags": [
      "scrum",
      "development"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#CDDC39"
  },
  {
    "startTime": 1020,
    "endTime": 1080,
    "date": "2024-11-11T17:00:00.000Z",
    "title": "Investor Presentation",
    "description": "Present company performance and future plans to investors.",
    "tags": [
      "investor",
      "presentation"
    ],
    "status": "upcoming",
    "eventType": "Presentation",
    "createdBy": "random_user_id",
    "eventColor": "#E91E63"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-11-12T10:00:00.000Z",
    "title": "HR Team Check-in",
    "description": "Discuss HR matters and employee well-being.",
    "tags": [
      "HR",
      "check-in"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#9C27B0"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-11-13T12:00:00.000Z",
    "title": "Client Contract Renewal Planning",
    "description": "Plan for upcoming client contract renewals.",
    "tags": [
      "client",
      "contract",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Planning",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-11-14T09:00:00.000Z",
    "title": "Morning Team Standup",
    "description": "Daily standup to review progress.",
    "tags": [
      "team",
      "standup"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-11-15T15:00:00.000Z",
    "title": "Website Redesign Review",
    "description": "Discuss the progress of the website redesign.",
    "tags": [
      "website",
      "redesign"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#3F51B5"
  },
  {
    "startTime": 1020,
    "endTime": 1080,
    "date": "2024-11-16T17:00:00.000Z",
    "title": "Company Culture Workshop",
    "description": "Discuss ways to improve and sustain company culture.",
    "tags": [
      "culture",
      "workshop"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#FF9800"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-11-17T12:00:00.000Z",
    "title": "PR Campaign Launch",
    "description": "Launch the new public relations campaign.",
    "tags": [
      "PR",
      "campaign"
    ],
    "status": "upcoming",
    "eventType": "Launch",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-11-18T14:00:00.000Z",
    "title": "Holiday Party Planning",
    "description": "Plan the company's annual holiday party.",
    "tags": [
      "holiday",
      "party",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Planning",
    "createdBy": "random_user_id",
    "eventColor": "#F44336"
  },
  {
    "startTime": 900,
    "endTime": 960,
    "date": "2024-11-19T15:00:00.000Z",
    "title": "Customer Feedback Review",
    "description": "Review feedback and implement action plans.",
    "tags": [
      "customer",
      "feedback"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  },
  {
    "startTime": 1020,
    "endTime": 1080,
    "date": "2024-11-20T17:00:00.000Z",
    "title": "Department Heads Meeting",
    "description": "Gather department heads to discuss business performance.",
    "tags": [
      "department",
      "meeting"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#9C27B0"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-11-21T14:00:00.000Z",
    "title": "Employee Wellness Session",
    "description": "Wellness session to promote mental and physical health.",
    "tags": [
      "wellness",
      "employee"
    ],
    "status": "upcoming",
    "eventType": "Event",
    "createdBy": "random_user_id",
    "eventColor": "#4CAF50"
  },
  {
    "startTime": 540,
    "endTime": 600,
    "date": "2024-11-22T09:00:00.000Z",
    "title": "Weekly Operations Review",
    "description": "Review key operations metrics for the week.",
    "tags": [
      "operations",
      "review"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-11-23T12:00:00.000Z",
    "title": "Marketing & Sales Alignment",
    "description": "Align marketing and sales strategies for the next quarter.",
    "tags": [
      "marketing",
      "sales"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#FF5722"
  },
  {
    "startTime": 660,
    "endTime": 720,
    "date": "2024-11-24T11:00:00.000Z",
    "title": "New Product Presentation",
    "description": "Present the new product to key stakeholders.",
    "tags": [
      "product",
      "presentation"
    ],
    "status": "upcoming",
    "eventType": "Presentation",
    "createdBy": "random_user_id",
    "eventColor": "#FF9800"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-11-25T10:00:00.000Z",
    "title": "Client Retention Workshop",
    "description": "Workshop on improving client retention strategies.",
    "tags": [
      "client",
      "retention"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#3F51B5"
  },
  {
    "startTime": 720,
    "endTime": 780,
    "date": "2024-11-26T12:00:00.000Z",
    "title": "End-of-Month Wrap-Up",
    "description": "Wrap up the month’s activities and set next month’s goals.",
    "tags": [
      "wrap-up",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#E91E63"
  },
  {
    "startTime": 480,
    "endTime": 540,
    "date": "2024-11-27T08:00:00.000Z",
    "title": "Pre-Holiday Check-in",
    "description": "Quick check-in before the holiday season.",
    "tags": [
      "holiday",
      "check-in"
    ],
    "status": "upcoming",
    "eventType": "Meeting",
    "createdBy": "random_user_id",
    "eventColor": "#9C27B0"
  },
  {
    "startTime": 780,
    "endTime": 840,
    "date": "2024-11-28T13:00:00.000Z",
    "title": "Marketing Performance Review",
    "description": "Review marketing campaign performance.",
    "tags": [
      "marketing",
      "review"
    ],
    "status": "upcoming",
    "eventType": "Review",
    "createdBy": "random_user_id",
    "eventColor": "#673AB7"
  },
  {
    "startTime": 840,
    "endTime": 900,
    "date": "2024-11-29T14:00:00.000Z",
    "title": "Financial Year-End Planning",
    "description": "Finalize financial plans for the year-end.",
    "tags": [
      "financial",
      "planning"
    ],
    "status": "upcoming",
    "eventType": "Planning",
    "createdBy": "random_user_id",
    "eventColor": "#009688"
  },
  {
    "startTime": 600,
    "endTime": 660,
    "date": "2024-11-30T10:00:00.000Z",
    "title": "Performance Management Workshop",
    "description": "Workshop on managing team performance effectively.",
    "tags": [
      "performance",
      "workshop"
    ],
    "status": "upcoming",
    "eventType": "Workshop",
    "createdBy": "random_user_id",
    "eventColor": "#FFEB3B"
  }
]

export default eventsData;