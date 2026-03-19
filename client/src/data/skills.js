/**
 * Skills data. Group by category for the Skills section.
 * Each item: { name, icon }. Icon is the Skill Icons id (skillicons.dev).
 * Use icon: null for skills without a logo (shows name only).
 */

const SKILL_ICON_BASE = 'https://skillicons.dev/icons?i=';

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Sequelize ORM', icon: null },
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      { name: 'Machine Learning', icon: 'tensorflow' },
      { name: 'Deep Learning', icon: 'tensorflow' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Computer Vision', icon: null },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Cursor IDE', icon: null },
    ],
  },
];

/** Base URL for skill icons (use with id: `${SKILL_ICON_BASE}${id}`) */
export { SKILL_ICON_BASE };