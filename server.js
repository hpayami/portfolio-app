const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Set the views directory

app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Mock project data (replace this with real project data)
const mockProjects = [
  {
    title: 'iOS App Project 1',
    description: 'Project 1 description goes here.',
    imageUrl: 'project1.jpg',
    githubUrl: 'https://github.com/yourusername/project1',
    appStoreUrl: 'https://apps.apple.com/app/your-app-name/id123456789',
  },
  {
    title: 'iOS App Project 2',
    description: 'Project 2 description goes here.',
    imageUrl: 'project2.jpg',
    githubUrl: 'https://github.com/yourusername/project2',
    appStoreUrl: 'https://apps.apple.com/app/your-app-name/id987654321',
  },
  // Add more project objects as needed
];

// Define a route for the portfolio page
app.get('/portfolio', (req, res) => {
  res.render('portfolio', { projects: mockProjects });
});

// Define a route for the home page
app.get('/', (req, res) => {
  // Render the home page using EJS
  res.render('index');
});

// Define a route for the projects page
app.get('/projects', (req, res) => {
  // Render the projects page using EJS
  res.render('projects', { projects: mockProjects });
});

// Define a route for the contact page

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
