"use client";

// import { motion } from 'framer-motion';

const CourseIncludedSection = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-serif font-bold text-white mb-4">What’s included</h2>
                        <p className="text-white/60 font-light">Everything you need to start building.</p>
                    </div>

                    <div className="md:w-2/3 w-full">
                        <ul className="space-y-4 font-mono text-sm text-blue-300/80">
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> A full day of hands-on training
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> Simple workbook + templates
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> Your first small AI-built project
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> Guidance from someone patient and practical
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> Lunch + coffee
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> A short PDF you can send to your boss
                            </li>
                            <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                                <span className="text-blue-500">+</span> A certificate of completion
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">+</span> 30-day follow-up tips by email
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseIncludedSection;
