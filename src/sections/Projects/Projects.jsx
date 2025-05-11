import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Yadushree-k9898/myBlog-app"
          h3="BlogVerse"
          p="Blog App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Yadushree-k9898/PersonalFinanceTracker"
          h3="MoneyMinder."
          p="Personal Finance App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Yadushree-k9898/GoogleDocsClone"
          h3="Google Docs 2.0" 
          p="Google Docs Clone"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Yadushree-k9898/Password_Generator"
          h3="Password Generator"
          p="Password Generator App"
        />
        <ProjectCard
          src={creator-dashboard}
          link="https://github.com/Yadushree-k9898/creator-dashboard.git"
          h3="Creator Dashboard"
          p="Creator Dashboard App"
        />
        <ProjectCard
          src={voice_note}
          link="https://github.com/Yadushree-k9898/IdeaLog.git"
          h3="Voice Notes"
          p="Voice Notes App"
        />
      </div>
    </section>
  );
}

export default Projects;
