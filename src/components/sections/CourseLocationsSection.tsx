"use client";


const CourseLocationsSection = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">London Locations.</h2>
                    <p className="text-white/60 text-xl font-light">Small groups. Calm atmosphere. Zero intimidation.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {/* Location 1 */}
                    <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300">
                        <h3 className="text-xl font-serif text-white mb-2">King’s Cross</h3>
                    </div>

                    {/* Location 2 */}
                    <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300">
                        <h3 className="text-xl font-serif text-white mb-2">Holborn</h3>
                    </div>

                    {/* Location 3 */}
                    <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300">
                        <h3 className="text-xl font-serif text-white mb-2">Shoreditch</h3>
                    </div>

                    {/* Location 4 */}
                    <div className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300">
                        <h3 className="text-xl font-serif text-white mb-2">Central London</h3>
                        <p className="text-white/40 text-sm">Hotel Venues</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-blue-400 text-xs font-mono tracking-widest uppercase">[COORDINATES_LOCKED]</p>
                </div>
            </div>
        </section>
    );
};

export default CourseLocationsSection;
