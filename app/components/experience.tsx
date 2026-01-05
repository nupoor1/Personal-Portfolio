import { Star} from "lucide-react";

type ExperienceProps = {
  role: string;
  company: string;
  date: string;
  imageUrl: string;
  description: string;
};

export default function Experiences() {
  const skills = ['Python', 'Flask', 'MongoDB', 'OpenCV', 'TensorFlow', 'Keras', 'pandas', 'NumPy', 
    'Matplotlib', 'scikit-learn', 'SQL', 'SQLAlchemy', 'HTML/CSS', 'Tailwind', 'JavaScript', 'React', 
    'Next.js', 'Node.js', 'TypeScript', 'C', 'C++', 'Bash', 'Git', 'GitHub', 
    'Arduino', 'Figma', 'Notion', 'Excel', 'PowerPoint', 'Jira', 'Confluence', 'Tableau', 'Power BI', 'Windows', 'Linux', 'macOS'];

  const experiences: ExperienceProps[] = [
    {
      role: 'STEM Instructor',
      company: 'City of Brampton',
      date: 'Sep 2024 - Present',
      imageUrl: '/images/cityofbrampton.jpg',
      description: 'Educated 120+ students in Python, web development, robotics, and additional STEM topics.'
    },
    {
      role: 'Hackathon Chair',
      company: 'TurnerHacks',
      date: 'Feb 2024 - Jun 2025',
      imageUrl: '/images/turnerhacks.png',
      description: 'Managed 20-person executive team and organized 130+ person hackathon with $11,000 in sponsor funding, venue at Brampton City Hall, and partnership with Peel District School Board.'
    },
    {
      role: 'Contest Competitor',
      company: 'University of Waterloo CEMC',
      date: 'Nov 2021 - Apr 2025',
      imageUrl: '/images/cemc.png',
      description: 'Competed in all CEMC contests for all 4 years of high school, achieving Honour Roll on Galois 2023 (Group V) and Hypatia 2024 (Group IV), 1st place at TFSS 3 times (Galois 2023, Hypatia 2024, CSMC 2024), and consistently scoring amongst top 25% of competitors.'
    },
    {
      role: 'Chapter President',
      company: 'TFSS HOSA',
      date: 'Nov 2021 - Jun 2025',
      imageUrl: '/images/hosa.png',
      description: 'Joined club in Grade 9 as general member and worked up to President, managing logistics of 150+ person club, organizing first overnight field trip in 5+ years, content/testing, and club merchandise.'
    },
    {
      role: 'QSYS Fellow',
      company: 'University of Waterloo Institute for Quantum Computing',
      date: 'Aug 2024 - Aug 2024',
      imageUrl: '/images/iqc.jpg',
      description: 'Participated in research program focused on quantum computing and machine learning.'
    },
    {
      role: 'Vice-President of Finance',
      company: 'TFSS Math and Computing Club',
      date: 'Jun 2023 - Jun 2024',
      imageUrl: '/images/mcc.png',
      description: 'Organized club budgets and secured $750 in sponsorship. Promoted to club president before having to leave 48 hours later.'
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-24 px-8">
      <div className="hidden lg:block pointer-events-none">
      <StarIcon className="hidden md:block top-[12%] right-[18%] rotate-12" />
      <StarIcon className="hidden md:block top-[22%] left-[28%] -rotate-6" />
      <StarIcon className="hidden md:block top-[40%] left-[10%] rotate-45" />
      <StarIcon className="hidden md:block top-[48%] right-[12%] rotate-90" />
      <StarIcon className="hidden md:block top-240 right-[4%] -rotate-12" />
      <StarIcon className="hidden md:block top-260 left-[11%] rotate-6" />
      <StarIcon className="hidden md:block top-[78%] left-[5%] rotate-45" />
      <StarIcon className="hidden md:block top-[88%] right-[10%] -rotate-6" />
      <StarIcon className="hidden md:block top-305 right-[12%] -rotate-45" />
      <StarIcon className="hidden md:block top-320 left-[4%] rotate-12" />
      <StarIcon className="hidden md:block top-375 right-[7%] rotate-78" />
      <StarIcon className="hidden md:block top-395 left-[8%] rotate-48" />
      </div>
      <h1 className="text-5xl mb-4 font-bold text-white text-center">Experience</h1>
      <p className="text-neutral-100 text-center mt-2 mb-12">my skills and past experience</p>

      
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mb-12">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-neutral-950 text-neutral-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
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

function ExperienceCard({ role, company, date, imageUrl, description }: ExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row bg-black border border-gray-850 rounded-lg shadow-md overflow-hidden
                    hover:shadow-xl hover:scale-101 transition-transform duration-300">
      
      <div className="shrink-0 w-full sm:w-32 h-24 sm:h-32 bg-black flex items-center justify-center">
        <img src={imageUrl} alt={company} className="w-full h-full object-contain" />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">{role}</h2>
          <p className="text-gray-300 text-sm mb-1">{company} | {date}</p>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}