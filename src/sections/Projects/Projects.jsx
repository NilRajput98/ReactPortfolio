import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import vegetables from '../../assets/vegetables.png'
import construction from '../../assets/constuction.png'
import elements from '../../assets/elements.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
<h1 className='sectionTitle'>Projects</h1>
<div className={styles.projectsContainer}>
 <ProjectCard 
 src={viberr} 
 link={'https://nilrajput98.github.io/Shoes-Company-Site/'}
 h3="Nex Rouge"
 p="Shoe Company"
 />
 <ProjectCard 
 src={vegetables} 
 link={'https://nilrajput98.github.io/Greenleaf-Website/'}
 h3="GreenLeaf Grocieries"
 p="Farmers Market"
 />
 <ProjectCard 
 src={construction} 
 link={'https://nilrajput98.github.io/Eva-Traders-Bootstrap-1/'}
 h3="Eva Traders"
 p="Building Material Company"
 />
 <ProjectCard 
 src={elements} 
 link={'https://nilrajput98.github.io/Elements-/'}
 h3="Elements"
 p="Constuction Consultancy"
 />
</div>

    </section>
  );
}

export default Projects ;
