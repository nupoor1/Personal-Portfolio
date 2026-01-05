import { Star } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-24 px-8 flex flex-col items-center">
      <div className="hidden lg:block pointer-events-none">
      <StarIcon className="hidden md:block top-50 right-75 rotate-12" />
      <StarIcon className="hidden md:block top-30 left-45 -rotate-6" />
      <StarIcon className="hidden md:block bottom-75 left-20 rotate-45" />
      <StarIcon className="hidden md:block bottom-17 right-56 rotate-90" />
      <StarIcon className="hidden md:block top-100 right-30 rotate-60" />
      <StarIcon className="hidden md:block top-75 left-90 -rotate-35" />
      <StarIcon className="hidden md:block bottom-60 right-100 rotate-100" />
      <StarIcon className="hidden md:block bottom-30 left-55 rotate-174" />
      <StarIcon className="hidden md:block bottom-0.5 left-155 -rotate-81" />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-white text-center">Contact</h1>
      <p className="text-neutral-100 text-center mb-12">
        feel free to reach out!
      </p>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {[
          {
            title: "Email",
            value: "n4patil@uwaterloo.ca",
            link: "mailto:n4patil@uwaterloo.ca",
          },
          {
            title: "GitHub",
            value: "github.com/nupoor1",
            link: "https://github.com/nupoor1",
          },
          {
            title: "LinkedIn",
            value: "linkedin.com/in/nupoor-patil",
            link: "https://linkedin.com/in/nupoor-patil-23a0142b2",
          },
        ].map((item) => (
          <a
            key={item.title}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="
              group
              border border-neutral-700
              rounded-lg
              p-6
              text-center
              bg-black
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-white
              hover:bg-neutral-900
            "
          >
            <h2 className="text-xl font-semibold text-white mb-1">
              {item.title}
            </h2>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
              {item.value}
            </p>
          </a>
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