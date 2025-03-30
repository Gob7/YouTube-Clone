# YouTube Clone Architecture

## 1. Frontend Structure

# Component Hierarchy

graph TD
A[App] --> B[Header]
A --> C[Sidebar]
A --> D[Pages]
D --> E[Home]
D --> F[VideoDetails]
D --> G[SearchResults]
B --> H[SearchBar]
B --> I[ThemeToggle]
F --> J[VideoPlayer]
F --> K[CommentSection]

# Core Components

Component: Responsibility Key Props/State
ThemeProvider: Manages dark/light theme dark, toggleTheme
VideoCard: Displays video thumbnails video, horizontal
VideoDetails: Handles video playback+interactions likes, comments, subscribe
SearchBar: Manages search queries query, navigate

# Data Flow

1. Theme System
   sequenceDiagram
   ThemeToggle->>ThemeContext: toggleTheme()
   ThemeContext->>LocalStorage: Save preference
   ThemeContext->>All Components: Update CSS vars

2. Video Interactions
   Likes/dislikes: Local state in VideoDetails.jsx
   Comments: State lifted to parent component

# Styling System

CSS Variables: --bg-color, --text-primary

Responsive Rules:

```css
/* Video grid */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

/* Mobile sidebar */
@media (max-width: 1200px) {
  flex-direction: column;
}
```

## 2. Key Technical Decisions

# 1. Lazy Loading Images

```javascript
<LazyLoadImage
  src={thumbnail}
  effect="blur"
  width={horizontal ? "168px" : "100%"}
/>
```

# 2. Router Configuration

```javascript
<Route path="/video/:id" element={<VideoDetails />} />
```

# 3. Dummy Data Structure

```javascript
{
id: "dQw4w9WgXcQ",
title: "Never Gonna Give You Up",
views: "1.2B",
likes: 15000000
}
```

## 3. Configuration

No API keys required (uses dummy data).

Optional: Theming Defaults
Modify initial theme in:

```javascript
// ThemeContext.jsx
const [dark, setDark] = useState(localStorage.getItem("darkMode") || false);
```

## 4. Project Structure

src/
├── assets/ # Mock data
├── components/ # Reusable UI
├── context/ # Theme management
├── pages/ # Route components
└── App.jsx # Root component

## 5. Development Notes

**Data Source:** src/assets/dummyData.js

**Key Dependencies:**
react-router-dom@6
react-lazy-load-image-component
react-icons

## 6. Common Issues

**Problem:** Blank screen after install
**Solution:** Ensure correct path to client folder:

```bash
cd client && npm install
```

**Problem:** Theme not persisting
**Solution:** Clear browser cache or check localStorage permissions
