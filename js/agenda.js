var morningBigRoomItems = [
  "Welcome Remarks",
  "Securing AI & ML Systems on AWS",
  "ML&AI Unleashed: Exploring Potential & Impact",
  "The State of Tech Communities In the Philippines",
  "Community to APN Partner Journey",
  "Cloud #CanonEvent : Supercharge your career and business with AWS!",
  "Embracing Chaos: Unleashing Resilience in Kubernetes through Engineering Practices",
  "Ephemeral Labs for Training/Onboarding in AWS-EKS",
  "Award-winning Customer Service and Workplace culture",
  "Automated to build continuously, deliver the business idea continuously"
];

var afternoonBigRoomItems = [
  "Building Bridges: Fostering Collaboration & Mentorship",
  "Career Shifting to Tech: Discover effective strategies",
  "Expanding Beyond the Company & Into the Community", 
  "Site Reliability Engineering - How we do that with AWS?",
  "Imbuing the Power of Generative AI into Your AWS Workloads",
  "AI Productivity Tools in your Startup: a walkthrough and forward-looking view of AWS services in the AI/ML space",
  "Internet of Things in the Philippines",
];

var morningSmallRoomItems = [
  "Introduction to AWS",
  "AWS Control Tower and multiple account architecture",
  "Top 5 Cloud Security Risks in 2023: Insights and Recommendations",
  "AWS Security - Threat and Vulnerability Detection",
  "AWS re:Inforce Recap",
  "Amazon VPC Lattice: Application Networking for Developers",
  "Building Permit Management Made Possible with AWS: Unveiling BUILDPASS - Streamlining the Building Permit Process for Baguio City",
  "Student Club Launch"
];

var afternoonSmallRoomItems = [
  "Amazon EventBridge integrations with SaaS product events",
  "Developing End-to-End Serverless Applications",
  "Building Serverless Flutter Apps with AWS Amplify",
  "Quick Budget-Friendly WordPress Setup in AWS yet Scale Ready",
  "AWS for QA Testing",
];

function createListWithBulletPoints(items, targetElementId) {
  var targetElement = document.getElementById(targetElementId);

  for (var i = 0; i < items.length; i++) {
    var div = document.createElement("div");

    var bullet = document.createElement("span");
    bullet.innerHTML = "&#8226; ";
    bullet.style.marginRight = "5px";

    var textNode = document.createTextNode(items[i]);

    div.appendChild(bullet);
    div.appendChild(textNode);

    var containerDiv = document.createElement("div");
    containerDiv.appendChild(div);

    targetElement.appendChild(containerDiv);
  }
}

createListWithBulletPoints(morningBigRoomItems, "morningAgendaBigRoom");
createListWithBulletPoints(morningSmallRoomItems, "morningAgendaSmallRoom");
createListWithBulletPoints(afternoonBigRoomItems, "afternoonAgendaBigRoom");
createListWithBulletPoints(afternoonSmallRoomItems, "afternoonAgendaSmallRoom");
