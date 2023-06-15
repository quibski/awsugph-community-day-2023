var morningBigRoomItems = [
  "Welcome Remarks",
  "Making data center and cloud operation teams thrive",
  "AI / ML",
  "TECH COMMUNITIES",
  "Containers on AWS",
  "Building on a Budget the AWS Well-Architected way",
  "Making Lives Better Through The Power Of Platform",
  "Community to APN Partner Journey",
  "Fusion of great people, innovative technology and a culture",
];

var afternoonBigRoomItems = [
  "LIGHTNING TALKS",
  "BUILDHERS",
  "CAREER SHIFT",
  "Solving Clients' Toughest Challenges",
  "Serverless + Generative AI: A Match Made in Heaven",
  "AWS Certification",
  "Internet of Things in the Philippines",
];

var morningSmallRoomItems = [
  "INTRO TO AWS",
  "AWS Control Tower and multiple account architecture",
  "Top 5 Cloud Security Risks in 2023: Insights and Recommendations",
  "AWS Security - Threat and Vulnerability Detection",
  "ReForge Recap",
  "Amazon VPC Lattice: Application Networking for Developers",
];

var afternoonSmallRoomItems = [
  "STUDENT CLUB LAUNCH",
  "LIGHTNING TALKS",
  "Amazon EventBridge integrations with SaaS product events",
  "Developing End-to-End Serverless Applications",
  "Building Serverless Flutter Apps with AWS Amplify",
  "Building a WordPress Site on AWS Using Composer and Terraform",
  "AWS FOR QA TESTING",
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
