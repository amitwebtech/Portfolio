import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, ChevronDown } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const App = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Model Accuracy (%)',
        data: [78, 82, 85, 89, 92, 95],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Python', 'SQL', 'React', 'Excel', 'Power BI'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [12, 19, 8, 15, 10],
        backgroundColor: '#818cf8',
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#e2e8f0' } },
    },
    scales: {
      y: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } },
      x: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } },
    },
  };

  const projects = [
    {
      title: "Predictive Sales Engine",
      type: "Data",
      desc: "Built a machine learning pipeline to forecast Q4 sales with 92% accuracy using historical CRM data.",
      tech: ["Python", "Scikit-Learn", "SQL", "Tableau"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevMetrics Dashboard",
      type: "Software",
      desc: "A full-stack React dashboard tracking developer productivity metrics across multiple GitHub repositories.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Customer Churn Analysis",
      type: "Data",
      desc: "Analyzed 100k+ rows of telecom data to identify churn indicators, resulting in actionable retention strategies.",
      tech: ["Python", "Pandas", "Power BI"],
      github: "#",
      demo: "#"
    },
    {
      title: "TaskFlow Manager",
      type: "Software",
      desc: "Real-time task management web app featuring drag-and-drop Kanban boards and socket.io syncing.",
      tech: ["React", "Redux", "Express", "Framer Motion"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    Development: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Tailwind CSS"],
    Data: ["Python", "SQL (PostgreSQL, MySQL)", "Excel (Advanced)", "Power BI", "Pandas", "Scikit-Learn"],
    Tools: ["Git & GitHub", "VS Code", "Jupyter Notebooks", "Figma", "Docker", "AWS (Basic)"]
  };

  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white relative">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <nav className="fixed w-full top-0 z-50 bg-dark/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AS.
          </span>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#data" className="hover:text-primary transition-colors">Data</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-start pt-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-primary font-mono mb-4 text-lg">
              Hello, I am
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Amit Sharma.
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
              Software Engineer & Data Analyst.
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
              Engineering scalable systems and extracting actionable insights from complex data. 
              I bridge the gap between building robust applications and analyzing the data they generate.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <a href="#projects" className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-transform">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 font-semibold transition-colors glass">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, y: [0, 10, 0] }} 
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-slate-500" />
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-400 space-y-4 leading-relaxed">
              <p>
                My journey sits at the intersection of creation and analysis. As a Software Engineer, I enjoy building pixel-perfect, performant web applications. As a Data Analyst, I dive deep into datasets to find patterns that drive business decisions.
              </p>
              <p>
                Currently a student, I am constantly learning and adapting. I believe that understanding both how to build a system and how to interpret its data makes me a unique asset to any technical team.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-primary font-semibold">B.Tech in Computer Science</h5>
                  <p className="text-sm text-slate-400">XYZ University • 2022 - 2026</p>
                </div>
                <div>
                  <h5 className="text-secondary font-semibold">Data Analytics Certification</h5>
                  <p className="text-sm text-slate-400">Google • 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span> Technical Arsenal
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-primary/50 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  {category === "Development" ? <Code2 className="text-primary"/> : category === "Data" ? <Database className="text-secondary"/> : <ExternalLink className="text-emerald-400"/>}
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span> Featured Projects
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md relative group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${project.type === 'Data' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                    {project.type}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.demo} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500 mt-auto">
                  {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="data" className="py-20">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span> Data Insights Showcase
            <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-lg font-bold mb-4 text-center">Model Training Accuracy</h4>
              <Line data={lineChartData} options={chartOptions} />
              <p className="text-xs text-center mt-4 text-slate-400">Demonstrating iterative improvement in predictive modeling.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-lg font-bold mb-4 text-center">Tech Stack Utilization</h4>
              <Bar data={barChartData} options={chartOptions} />
              <p className="text-xs text-center mt-4 text-slate-400">Distribution of tools across deployed projects.</p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-primary font-mono mb-4 text-lg">
            05. What's Next?
          </motion.h3>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-400 mb-10">
            Whether you have a question, a project proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </motion.p>
          <motion.a 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            href="mailto:hello@itsamit.dev" 
            className="inline-block px-8 py-4 rounded-lg bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </motion.a>
        </section>

      </main>

      <footer className="text-center py-8 border-t border-white/10 mt-20">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Github size={24} /></a>
          <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:hello@itsamit.dev" className="text-slate-500 hover:text-primary transition-colors"><Mail size={24} /></a>
        </div>
        <p className="text-slate-500 font-mono text-sm">
          Built with React & Tailwind <br/>
          Designed by Amit Sharma © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
