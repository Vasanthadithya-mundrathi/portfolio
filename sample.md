# Portfolio Project Template

## Project Structure
Each project in the portfolio should follow this structure in the HTML:

```html
<div class="project-card group">
  <div class="cyber-card relative p-6 mx-4 w-80 bg-cyber-darker border border-neon-blue hover:border-neon-pink transition-colors duration-300">
    <div class="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <h3 class="text-xl font-cyber text-neon-blue mb-4">Project Name</h3>
    <p class="text-gray-400 mb-4">Project description - keep it concise but informative.</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="cyber-tag">Technology 1</span>
      <span class="cyber-tag">Technology 2</span>
      <span class="cyber-tag">Category</span>
    </div>
    <a href="#project-link" class="cyber-button-small inline-block">
      <span class="cyber-button-tag">&lt;</span>
      View_Code
      <span class="cyber-button-tag">/&gt;</span>
    </a>
  </div>
</div>
```

## Example Projects

### 1. Cybersecurity Tool
```html
<div class="project-card group">
  <div class="cyber-card relative p-6 mx-4 w-80 bg-cyber-darker border border-neon-blue hover:border-neon-pink transition-colors duration-300">
    <div class="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <h3 class="text-xl font-cyber text-neon-blue mb-4">Network Scanner</h3>
    <p class="text-gray-400 mb-4">Advanced network vulnerability scanner with real-time threat detection and automated reporting capabilities.</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="cyber-tag">Python</span>
      <span class="cyber-tag">Networking</span>
      <span class="cyber-tag">Security</span>
    </div>
    <a href="https://github.com/yourusername/network-scanner" class="cyber-button-small inline-block">
      <span class="cyber-button-tag">&lt;</span>
      View_Code
      <span class="cyber-button-tag">/&gt;</span>
    </a>
  </div>
</div>
```

### 2. AI/ML Project
```html
<div class="project-card group">
  <div class="cyber-card relative p-6 mx-4 w-80 bg-cyber-darker border border-neon-blue hover:border-neon-pink transition-colors duration-300">
    <div class="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <h3 class="text-xl font-cyber text-neon-blue mb-4">AI Threat Detector</h3>
    <p class="text-gray-400 mb-4">Machine learning model for detecting and classifying potential security threats in system logs.</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="cyber-tag">Python</span>
      <span class="cyber-tag">TensorFlow</span>
      <span class="cyber-tag">ML</span>
    </div>
    <a href="https://github.com/yourusername/ai-threat-detector" class="cyber-button-small inline-block">
      <span class="cyber-button-tag">&lt;</span>
      View_Code
      <span class="cyber-button-tag">/&gt;</span>
    </a>
  </div>
</div>
```

## Guidelines for Adding Projects

1. **Project Title**
   - Keep it concise and descriptive
   - Use technical terms when relevant
   - Match the cyberpunk theme

2. **Description**
   - 1-2 sentences maximum
   - Focus on key features and technologies
   - Highlight technical challenges solved
   - Keep it technical but understandable

3. **Tags**
   - Include 2-4 tags per project
   - Mix of:
     - Programming languages
     - Technologies/frameworks
     - Categories/domains

4. **Links**
   - Ensure all links are working
   - Preferably link to:
     - GitHub repositories
     - Live demos
     - Documentation

5. **Images (Optional)**
   - Keep images cyberpunk-themed
   - Use dark backgrounds
   - Optimize for web performance

## Important Notes

1. **Maintaining the Loop**
   - When adding new projects, remember to duplicate them in the "Duplicate Projects for Seamless Loop" section
   - Keep both sections identical for smooth scrolling

2. **Performance**
   - Optimize images and assets
   - Keep descriptions concise
   - Maintain consistent card sizes

3. **Styling**
   - Use provided CSS classes
   - Maintain cyberpunk theme
   - Test hover effects and animations

4. **Responsive Design**
   - Test on different screen sizes
   - Ensure text remains readable
   - Check scrolling behavior on mobile

## Example Tag Categories

### Programming Languages
- Python
- JavaScript
- Java
- C++
- Rust
- Go

### Technologies
- React
- Node.js
- TensorFlow
- Docker
- Kubernetes
- AWS

### Domains
- Security
- AI/ML
- Web Dev
- DevOps
- Blockchain
- Networking
