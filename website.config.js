export const personalInfo = {
  name: 'Gan Fang',
  profilePicture: '/profile.jpg', //optional
  role: 'Ph.D. Student',
  university: ' Purdue CS',
  universityWebsite: 'https://www.cs.purdue.edu/',
  socialMedia: [
    { name: 'Email', url: 'fang301@purdue.edu' },
    { name: 'ORCID', url: 'https://orcid.org/0009-0003-2337-7329' },
    { name: 'Google Scholar', url: 'https://scholar.google.com' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Computer Archict',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  // { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
