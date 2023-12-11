import { t } from 'i18next';

import pickAMeal from '../../assets/img/pickAMeal.png';
import sushiSushiImg from '../../assets/img/sushisushi.png';
import wernerImg from '../../assets/img/werner.png';
import SectionTitle from '../../shared/SectionTitle';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    githubSrc: 'https://github.com/barrydilan/eCommerce-Application',
    title: 'SushiSushi - Online Food Delivery App',
    text: "Proudly presenting an E-Commerce application developed as part of the RSS School Curriculum, my team's project secured a position among the top 5 final projects. This application utilizes the CommerceTools API as a Headless CMS. The feature set includes user registration, a fully functional shopping cart, and the integration of coupons and discounts. The responsive design ensures a smooth and visually appealing native-app-like interface across various devices.",
    imgSrc: sushiSushiImg,
    technologies: ['React', 'Tailwind', 'TypeScript', 'Ecommerce', 'Redux', 'React Router', 'Framer Motion'],
  },
  {
    githubSrc: 'https://nextj-recipe-website-n4z5blt4q-bohdans-projects-185f2b61.vercel.app/',
    title: 'Pick-a-Meal',
    text: 'A group project under a guidance of my RS School mentor. NextJS website that utilizes SSR and renders recipes from MD files stored in a repository.',
    imgSrc: pickAMeal,
    technologies: ['Next JS', 'Tailwind', 'TypeScript'],
  },
  {
    githubSrc: 'https://werner.vercel.app/',
    title: 'Werner Theater',
    text: 'A Website I`ve designed and created for a local theater. It utilizes Next JS, Tailwind CSS and Sanity.io for content management',
    imgSrc: wernerImg,
    technologies: ['Next JS', 'Tailwind', 'TypeScript'],
  },
];

export default function Projects() {
  return (
    <section className="mt-10 p-6 sm:p-6">
      <SectionTitle className="relative z-10 mb-0 pb-10">{t('projects.sectionTitle')}</SectionTitle>
      <ul className="mt-8 flex flex-col gap-y-4">
        {PROJECTS.map((project) => (
          <a href={project.githubSrc}>
            <ProjectCard
              title={project.title}
              text={project.text}
              imgSrc={project.imgSrc}
              technologies={project.technologies}
            />
          </a>
        ))}
      </ul>
    </section>
  );
}
