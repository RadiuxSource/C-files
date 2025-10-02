# 📚 Indus Institute of Technology – Study Hub# React + Vite



A modern, responsive educational web application designed for B.Tech CSE 1st Semester students at Indus Institute of Technology, Ahmedabad.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



**Developed by Aditya & Aman**Currently, two official plugins are available:



## 🎯 Project Overview- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This is a comprehensive academic dashboard that provides students with:

- **Subject Planners** - Detailed syllabus for all 7 subjects## React Compiler

- **Progress Tracking** - Interactive checklist to monitor learning progress

- **Integrated Resources** - PDFs, videos, and external linksThe React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Quick Links** - Easy access to library, calendar, timetable, and notices

- **Future Features** - Placeholders for upcoming tools like attendance tracker, assignment manager, and more## Expanding the ESLint configuration



## 🌟 FeaturesIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### ✅ Current Features
- **Landing Page** with hero section and feature highlights
- **7 Complete Subject Planners:**
  - Engineering Chemistry
  - Engineering Graphics
  - Basics of Energy
  - Technical Communication
  - Multivariable Calculus
  - Environmental Science
  - Indian Knowledge System
- **Progress Tracker** with localStorage persistence
- **Resource Library** for each subject
- **Assignment Management** section
- **Quick Links** to academic resources
- **Responsive Design** - Mobile, tablet, and desktop friendly
- **Modern UI** with Tailwind CSS and Framer Motion animations

### 🚀 Coming Soon
- Attendance Tracker
- Assignment Manager with file uploads
- Exam Preparation Planner
- College News & Updates
- Study Groups & Collaboration
- GPA Calculator

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Data Storage:** JSON files + localStorage
- **Deployment:** Netlify

## 📁 Project Structure

```
study-hub/
├── public/
│   ├── _redirects              # Netlify SPA redirects
│   └── vite.svg
├── src/
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SubjectCard.jsx
│   │   ├── ProgressTracker.jsx
│   │   └── FeatureCard.jsx
│   ├── data/                   # JSON data files
│   │   ├── subjects.json
│   │   ├── engineering-chemistry.json
│   │   ├── engineering-graphics.json
│   │   ├── basics-of-energy.json
│   │   ├── technical-communication.json
│   │   ├── multivariable-calculus.json
│   │   ├── environmental-science.json
│   │   └── indian-knowledge-system.json
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── Subjects.jsx
│   │   ├── SubjectDetail.jsx
│   │   ├── QuickLinks.jsx
│   │   └── FutureFeatures.jsx
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles with Tailwind
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml                # Netlify configuration
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd study-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment on Netlify

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings (auto-detected):
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Method 2: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

### Environment Variables (if needed in future)
- Go to Site settings → Build & deploy → Environment variables
- Add any required environment variables

## 📊 Data Management

### Adding New Subjects

1. Create a new JSON file in `src/data/`:
   ```json
   {
     "id": "subject-id",
     "name": "Subject Name",
     "code": "SUB101",
     "units": [...],
     "resources": [...],
     "assignments": [...]
   }
   ```

2. Add subject info to `src/data/subjects.json`

3. The subject will automatically appear in the app

### Updating Syllabus

Simply edit the respective JSON file in `src/data/`. Changes will reflect immediately after page refresh.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Fonts
Update Google Fonts import in `src/index.css`

### Content
All content is stored in JSON files for easy editing without touching code.

## 📱 Responsive Design

The app is fully responsive and tested on:
- ✅ Mobile devices (320px and up)
- ✅ Tablets (768px and up)
- ✅ Desktops (1024px and up)
- ✅ Large screens (1920px and up)

## 🔒 Future Backend Integration

The app is structured to easily integrate with a backend:

### Recommended Stack:
- **Backend:** Node.js + Express or Firebase
- **Database:** MongoDB or Firebase Firestore
- **Authentication:** Firebase Auth or JWT
- **File Storage:** Firebase Storage or AWS S3

### API Endpoints Structure (Example):
```
/api/subjects          - GET all subjects
/api/subjects/:id      - GET subject details
/api/progress/:userId  - GET/POST user progress
/api/assignments/:id   - GET/POST assignment data
```

## 📝 Code Comments

All components include detailed JSDoc comments explaining:
- Component purpose
- Props and their types
- Key functionality
- Usage examples

## 🤝 Contributing

This project is maintained by Aditya & Aman for Indus Institute of Technology.

### To add features:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📄 License

This project is created for educational purposes for Indus Institute of Technology, Ahmedabad.

## 👥 Developers

**Aditya & Aman**  
B.Tech CSE Students  
Indus Institute of Technology, Ahmedabad

---

## 📞 Support

For technical issues or feature requests:
- Email: [your-email@example.com]
- GitHub Issues: [repository-url/issues]

---

**Made with ❤️ for IIT Students**

*Personalized Academic Dashboard for B.Tech CSE Students*
