export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12 animate-fade-in">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center animate-slide-in-left">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <img
                src="/poto/cvpoto.jpg"
                alt="Your Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/256";
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 animate-slide-in-right">
            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Hello! I'm a driven Software Engineering undergraduate with hands-on experience in backend development,
              API integration, and database management. I enjoy building reliable and efficient systems using technologies like
              Java, C++, React, and MySQL, and I’m always excited to turn ideas into impactful software solutions.
            </p>

            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              My journey in software development has been shaped by curiosity and a desire to understand how systems operate
              end-to-end. Over time, I’ve gained experience in UI/UX-focused projects, secure system development, and agile
              workflows, while expanding my knowledge in cloud computing, AI/ML, and cybersecurity.
            </p>

            <p className="text-lg text-gray-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Beyond coding, I enjoy collaborating with diverse teams, analyzing problems from multiple perspectives, and
              continuously improving my skills. I’m currently seeking an internship opportunity where I can contribute to
              meaningful projects and learn from experienced engineers.
            </p>

            {/* Education Section */}
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:translate-x-2">
                  <h4 className="font-medium text-white">B.Sc.(Hons) in Software Engineering</h4>
                  <p className="text-gray-400">University of Bedfordshire - SLIIT</p>
                </div>

                {/* Add more education items if needed */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
