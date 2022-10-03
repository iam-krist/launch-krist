import { useState } from "react";
import styles from '../styles/Skills.module.css'


const Skills = () => {
    

    const [skills, setSkills] = useState([
        {  
            'topic': 'Graphics',
            'active': true,
            'percentage': '77%',
            'id': '#001'
        },
        {  
            'topic': 'Coding',
            'active': true,
            'percentage': '48%',
            'id': '#002'
        },
        {  
            'topic': 'User Psychology',
            'active': true,
            'percentage': '60%',
            'id': '#003'
        },
        {  
            'topic': 'Visuals',
            'active': true,
            'percentage': '90%',
            'id': '#004'
        },
        {
            'topic': 'React',
            'active': false,
            'percentage': '40%',
            'id': '#005'
        }
    ])
    
    return (  
        <div>

            <h4 className="skills-heading underline"> Skills </h4>

            {skills.filter(skill => skill.active).map(skill => (
                <div className={styles.skillbar} data-percent={skill.percentage} key={skill.id}>
                    <div className={styles.skillbarBar} style={{width: skill.percentage}}></div>
                    <div className={styles.skillbarTitle}>{skill.topic}</div>
                    <div className={styles.skillBarPercent}>{skill.percentage}</div>
                </div>
            ))}
        </div>
    );
}
 
export default Skills;