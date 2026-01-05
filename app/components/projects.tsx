import { ExternalLink, Star} from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  year: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
};

export default function Projects() {

  const projects: ProjectProps[] = [
    {
      title: "Thermosight",
      description: "HVAC energy saving consultancy site that that allows users to upload system data, analyze efficiency scores, and track historical performance over time",
      year: "2025",
      imageUrl: "/images/thermosight.png",
      technologies: ["flask", "pandas", "sql", "jinja2", "chart.js", "tailwind"],
      githubUrl: "https://github.com/nupoor1/Thermosight",
    },
    {
      title: "Personal Portfolio",
      description: "this site right here!",
      year: "2025",
      imageUrl: "/images/portfolio.png",
      technologies: ["next.js", "react", "typescript", "lucide-react", "tailwind", "vercel"],
      githubUrl: "https://github.com/nupoor1/Personal-Portfolio",
    },
    {
      title: "Sudoku Solver",
      description: "solves sudoku puzzles using backtracking DFS algorithm",
      year: "2025",
      imageUrl: "/images/sudoku.png",
      technologies: ["racket", "dfs algorithm"],
      githubUrl: "https://github.com/nupoor1/Sudoku-Solver",
    },
    {
      title: "dermazone",
      description: "skin type classification site that identifies user's skin type and recommends suitable skincare products",
      year: "2024",
      imageUrl: "/images/dermazone.png",
      technologies: ["tensorflow", "keras", "flask", "pandas", "numpy", "sql", "mongodb", "tailwind"],
      githubUrl: "https://github.com/nupoor1/dermazone",
    },
    {
      title: "Math Flashcards Game",
      description: "Spider-Man themed math flashcards game with customizeable question number, type, difficulty, and dynamic progress + stats tracking",
      year: "2024",
      imageUrl: "/images/flashcards.png",
      technologies: ["tkinter"],
      githubUrl: "https://github.com/nupoor1/Spider-Man-Math-Flashcards",
    },
    {
      title: "Sushi Blobs",
      description: "2D puzzle video game with 30 levels",
      year: "2023",
      imageUrl: "/images/sushiblobs.png",
      technologies: ["gamemaker language (gml)", "gamemaker studio 2"],
      githubUrl: "https://github.com/nupoor1/Sushi-Blobs",
    }
  ];

  return (
    <main className="relative min-h-screen bg-black pt-24 px-8">
      <div className="hidden lg:block pointer-events-none">
      <StarIcon className="hidden md:block top-39 right-105 rotate-12" />
      <StarIcon className="hidden md:block top-42 left-105 -rotate-15" />
      <StarIcon className="hidden md:block top-20 left-60 -rotate-6" />
      <StarIcon className="hidden md:block top-50 left-20 rotate-6" />
      <StarIcon className="hidden md:block top-16 right-46 -rotate-12" />
      <StarIcon className="hidden md:block top-60 right-25 rotate-12" />
      <StarIcon className="hidden md:block top-120 left-10 rotate-3" />
      <StarIcon className="hidden md:block top-140 right-10 -rotate-6" />
      <StarIcon className="hidden md:block top-196 left-25 rotate-12" />
      <StarIcon className="hidden md:block top-230 right-20 -rotate-12" />
      <StarIcon className="hidden md:block top-260 left-12 rotate-45" />
      <StarIcon className="hidden md:block top-304 right-10 rotate-6" />
      <StarIcon className="hidden md:block top-336 left-6 -rotate-6" />
      <StarIcon className="hidden md:block bottom-15 left-26 rotate-45" />
      <StarIcon className="hidden md:block bottom-35 right-25 rotate-90" />
      </div>
      <h1 className="text-4xl md:text-5xl mb-4 font-bold text-white text-center">Projects</h1>
      <p className="text-neutral-100 text-center mt-2 mb-12">some of my past work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </main>
  );
}
function StarIcon({ className }: { className: string }) {
  return (
    <Star
      className={`absolute ${className} w-6 h-6 text-white opacity-40
        transition-all duration-300`}
    />
  );
}

function ProjectCard({ title, description, year, imageUrl, technologies, githubUrl }: ProjectProps) {
  return (
    <div className="bg-black border border-gray-850 rounded-lg shadow-md overflow-hidden flex flex-col w-full
                hover:shadow-xl hover:scale-102 transition-transform duration-300">
      
      <img src={imageUrl} alt={title} className="w-full h-48 sm:h-52 object-cover" />

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-gray-300 text-sm mb-3">{year}</p>
          <p className="text-gray-300 mb-4">{description}</p>

          
          <div className="flex flex-wrap gap-2 mb-1">
            {technologies.map((tech, idx) => (
              <span key={idx} className="bg-neutral-900 text-neutral-200 text-xs px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-gray-200 hover:text-white"
          title="Launch"
        >
          <ExternalLink className="w-5 h-5 inline-block" />
        </a>
      </div>
    </div>
  );
}