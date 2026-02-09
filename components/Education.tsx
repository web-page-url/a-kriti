"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export const Education = () => {
    const education = [
        {
            degree: "B.Tech in Data Science",
            school: "Indian Institute of Technology (IIT) Mandi",
            duration: "2019 - 2023",
            // grade: "7.41 CGPA",
            details: "Specialized in advanced data structures, machine learning, and statistical modeling.",
            icon: <GraduationCap className="h-6 w-6 text-neon-pink" />,
            color: "from-neon-pink/10 to-sakura/10"
        },
        {
            degree: "Dakshana Scholar",
            school: "JNV Lucknow",
            duration: "2017 - 2018",
            // grade: "IIT-JEE Excellence",
            details: "Ranked among the top scholars globally for free IIT-JEE coaching.",
            icon: <Award className="h-6 w-6 text-neon-purple" />,
            color: "from-neon-purple/10 to-lavender-mist/10"
        },
        {
            degree: "High School",
            school: "JNV Maharajganj",
            duration: "Passed 2017",
            // grade: "10 CGPA",
            details: "Consistent academic performer with a focus on science and mathematics.",
            icon: <BookOpen className="h-6 w-6 text-sakura" />,
            color: "from-sakura/10 to-rose-blush/10"
        }
    ];

    return (
        <section id="education" className="py-32 relative overflow-hidden bg-white/20">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 space-y-4"
                >
                    <h2 className="font-serif text-5xl font-black text-berry uppercase tracking-tighter">Academic <span className="gradient-text neon-text-pink italic">Journey</span></h2>
                    <p className="text-neon-pink font-black uppercase tracking-[0.4em] text-sm">Where My Learning Journey Started!</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-gradient-to-br ${edu.color} p-10 rounded-[3.5rem] border border-white relative overflow-hidden group shadow-lg`}
                        >
                            <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <GraduationCap className="h-40 w-40" />
                            </div>

                            <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:neon-glow-pink transition-all">
                                {edu.icon}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-neon-pink mb-1">{edu.duration}</p>
                                    <h3 className="font-serif text-2xl font-black text-berry leading-tight">{edu.degree}</h3>
                                    <p className="font-bold text-berry/60 italic">{edu.school}</p>
                                </div>
                                { /* <div className="px-4 py-1.5 bg-white/60 rounded-full inline-block text-xs font-black text-neon-pink border border-neon-pink/10">
                                    {edu.grade}
                                </div> */ }
                                <p className="text-sm font-medium text-berry/70 leading-relaxed font-sans">{edu.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
