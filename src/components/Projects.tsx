'use client';

import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
   {
    title: 'RDM Admin Inventory & Payroll System',
    description: 'A full-stack business management platform built with React, Node.js, Express, Prisma, and PostgreSQL. The system manages inventory, suppliers, materials, products, purchases, shop orders, stock movements, employee payments, and operational reports. Key features include JWT authentication, automated stock tracking, monthly employee payment management, employee-wise payroll summaries, interactive analytics, and Excel/PDF report generation. The application was deployed using Vercel and Render.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Prisma', 'Express', 'Visual Studio Code', 'Git'],
    image: '/poto/w1.png',
    gallery: ['/poto/w1.png', '/poto/w2.png', '/poto/w3.png', '/poto/w4.png'],
    demo: '#',
  },

  {
    title: 'Weather Analytics Dashboard',
    description: 'A full-stack web application that retrieves current weather for multiple cities, calculates a comfort score from temperature, humidity, and wind, and presents the results in an interactive dashboard.',
    tags: ['React', 'Node.js', 'Auth0','Jest', 'Express', 'Visual Studio Code', 'Git'],
    image: '/poto/rdm1.png',
    gallery: ['/poto/rdm1.png', '/poto/rdm2.png', '/poto/rdm3.png', '/poto/rdm4.png', '/poto/rdm5.png'],
    demo: '#',
  },

  {
  title: 'Cinnamon Skin Care',
  description: 'A PHP and MySQL skincare storefront where customers can browse products, create an account, manage a shopping cart, and place orders. Includes an admin area for managing products and users, plus a customer contact form.',
  tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'E-commerce'],
  image: '/poto/c1.png',
  gallery: [
    '/poto/c1.png',
    '/poto/c2.png',
    '/poto/c3.png',
  ],
  demo: '#',
},

  {
    title: 'Cinnamon Skin Care',
    description: ' Secure & adaptable payment solutions (COD, PayPal, Stripe, etc.) , Mobile optimization & PWA functionality for seamless shopping , Potential for multi-vendor marketplace setup , AI-powered recommendations & personalized user experiences',
    tags: ['HTML', 'MySQL', 'PHP', 'JavaScript','Ajax', 'WampServer'],
    image: '/poto/skin.avif',
    github: 'https://github.com/Thara1225/skincare-website.git',
  },
  {
    title: 'Medicare Hospital Management System',
    description: 'Medicare Plus is a Java-based healthcare management system developed using Spring Boot. The application is designed to manage patient records, doctor information, appointments, and medical services efficiently. It follows a layered architecture using RESTful APIs and integrates with a MySQL database for secure data storage. The project demonstrates backend development skills, database integration, and deployment of a scalable web application using modern Java technologies.',
    tags: ['Eclipse', 'Java', 'CSS', 'Maven','Apache','Postman','Git','Spring Boot','Rest API',],
    image: '/poto/medicare.webp',
    github: 'https://github.com/Thara1225/medicare_plus.git',
    demo: '#',
  },
  {
    title: 'PawGuess – Dog Breed Guessing Game',
    description: 'PawGuess is an Android mobile game where users identify dog breeds by analyzing randomly loaded dog images. The app uses a REST API to fetch real-time dog images, calculates scores based on user guesses, and maintains a history of gameplay attempts. It features user login, a dynamic game engine, score tracking with a leaderboard, breed exploration, and a creative surprise feature — all built with clean UI and efficient API integration.',
    tags: ['Java', 'XML', 'Android Studio', 'REST API'],
    image: '/poto/dog.jpeg',
    github: 'https://github.com/Thara1225/DogBreed.git',
    demo: '#',
  },
   {
    title: 'Simple Calculator App',
    description: 'Designed and developed a user-friendly Calculator Application supporting basic arithmetic operations with clean UI and error handling. Implemented efficient logic, responsive design, and optimized performance following Android development best practices.',
    tags: ['Java', 'XML', 'Android Studio', 'Git','Android Emulator','Gradle'],
    image: '/poto/cal.avif',
    github: 'https://github.com/Thara1225/Calculator-App.git',
    demo: '#',
  },
  {
    title: 'Bake House Management System',
    description: 'Desserts Paradise is a full-stack web application designed to showcase and manage a dessert catalog with user authentication and role-based access. The system allows users to browse desserts, view details, and interact with the platform, while providing an admin interface to manage content securely. This project demonstrates my ability to build a structured web application using frontend and backend technologies, database integration, and basic authentication concepts.',
    tags: ['HTML5', 'JavaScript', 'CSS3', 'MySQL','XAMPP','Visual Studio Code','Git',],
    image: '/poto/food.png',
    github: 'https://github.com/Thara1225/bake_House.git',
    demo: '#',
  },
];

export default function Projects() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-4 animate-fade-in">My Projects</h2>
        <p className="text-xl text-center text-gray-300 mb-12 animate-fade-in-up">Some of my recent work</p>
        
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainer}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 mx-12 snap-x snap-mandatory"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(59, 130, 246, 0.5) rgba(15, 23, 42, 0.1)',
            }}
          >
            {projects.map((project, index) => (
              <article
                key={index} 
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                className="flex-shrink-0 w-96 bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-500 transform hover:-translate-y-2 snap-center animate-fade-in-up cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-48 bg-slate-700 flex items-center justify-center text-gray-400 overflow-hidden">
                  {project.image.endsWith('.jpg') || project.image.endsWith('.avif') || project.image.endsWith('.png') || project.image.endsWith('.jpeg')|| project.image.endsWith('.webp') ? (
                    <img
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  ) : (
                    <span>Project Image</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs font-medium rounded">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && <a
                      href={project.github} 
                      className="text-blue-400 hover:underline flex items-center text-sm hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 text-white shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-800 p-2 text-gray-200 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 id="project-dialog-title" className="mb-4 pr-12 text-2xl font-bold sm:text-3xl">
              {selectedProject.title}
            </h3>
            <p className="mb-6 whitespace-pre-line leading-7 text-gray-300">{selectedProject.description}</p>

            <h4 className="mb-3 text-lg font-semibold">Technologies</h4>
            <div className="mb-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="rounded bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject.gallery && (
              <div>
                <h4 className="mb-3 text-lg font-semibold">Project screenshots</h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {selectedProject.gallery.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${imageIndex + 1}`}
                      className="w-full rounded-lg border border-slate-700 object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300 hover:underline"
              >
                View source code
              </a>
            )}
          </section>
        </div>
      )}
    </section>
  );
}
