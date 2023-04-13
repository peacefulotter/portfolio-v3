
import { FiExternalLink, FiGithub, FiGitlab } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer';


import styles from './Projects.module.css'
import Title from '../Title';
import Emoji from '../Emoji';

interface IProject {
    repo: string;
    desc: string;
    tags: string[];
    links: string[];
    branch?: string;
}

const projects: IProject[] = [
    { 
        repo: 'SelfDrivingCar', 
        desc: '2D car simulation that learns to drive around a track using a neural network and genetic algorithm. This project has been built from scratch using the least libraries possible (JavaFX).', 
        tags: ['machine-learning', 'neural-network', 'genetic-algorithm'], 
        links: [] 
    },
    { 
        repo: '3DGameEngine', 
        desc: '3D Game Engine built from scratch using LWJGL (OpenGL) in Java. It is capable of loading and rendering 3D objects with textures, normals and height maps. The engine also supports multiple shaders as well as ambient, directional, point and spot lights.', 
        tags: ['game-engine', 'LWJGL', 'OpenGL', 'GLSL'], 
        links: [] 
    },
    { 
        repo: 'ForceFeedback', 
        desc: 'A force feedback controller sending inputs to a steering wheel through a web interface. The frontend requests a Java backend made with Spring and connected to a controller.', 
        tags: ['force-feedback', 'steering-wheel', 'react', 'java-spring'], 
        links: [] 
    },
    { 
        repo: 'Mintel', 
        desc: 'A 5-stage pipelined RISC microprocessor written in Scala using Chisel. Data dependencies are resolved using data forwarding and stalling occurs on a branch / jump. Mintel can be programmed on any FPGA and supports IOs', 
        tags: ['RISC', 'MIPS', 'Chisel', 'pipeline', 'microprocessor', 'FPGA'], 
        links: [] 
    },
    { 
        repo: 'LiRA-Map', 
        desc: 'LiRA Road Condition Visualization Tool. Frontend in React + Leaflet and backend in NestJS + Knex', 
        tags: ['car-data', 'road-condition', 'React', 'Leaflet', 'NestJS', 'Knex'], 
        links: ['liramap.compute.dtu.dk:3000/'],
        branch: 'ml'
    },
    { 
        repo: 'Weaver', 
        desc: 'A spotify like app with an improved UI / UX, made in NextJS', 
        tags: ['spotify-api', 'NextJS', 'UI-UX'], 
        links: [] 
    },
]

const img = (repo: string, branch?: string) => 
    `https://raw.githubusercontent.com/peacefulotter/${repo}/${branch ? branch : 'main'}/showcase.png`

const href = (repo: string, branch?: string) => 
    `https://www.github.com/peacefulotter/${repo}/${branch ? 'tree/ml' : 'tree/main'}`

const Project = ( { repo, desc, tags, links, branch }: IProject ) => {
    return (
        <div className={styles.project}>
            <a href={href(repo, branch)} target="_blank" className={styles.img} style={{backgroundImage: `url(${img(repo, branch)})`}}></a>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.title}>{repo}</div>
                    <div className={styles.desc}>{desc}</div>
                    <div className={styles.tags}>
                        { tags.map( (tag, i) => 
                            <div key={`tag${i}`} className={styles.tag}>{tag}</div>
                        ) }
                    </div>
                </div>
                <div className={styles.links}>
                    <a className={styles.link} href={href(repo, branch)} target="_blank"><FiGithub /></a>
                    { links.map( (link, i) => 
                        <a key={`link${i}`} href={link} className={styles.link} target="_blank"><FiExternalLink/></a>
                    ) }
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [ref, inView] = useInView();

    return (
        <>
            <div ref={ref} className={styles.header}>
                <Emoji Icon={FiGitlab} inView={inView} />
                <Title title='Projects' />
            </div>
            <div className={styles.container}>
                { projects.map( ( project, i )  =>
                    <Project {...project} key={`project${i}`} />
                ) }
            </div>
        </>
    )
}

export default Projects;