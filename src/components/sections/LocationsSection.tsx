"use client";

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
    "King’s Cross",
    "Holborn",
    "Shoreditch",
    "Central London hotel venues"
];

const LocationsSection = () => {
    return (
        <section className="section py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-lg mb-8 text-white">
                            📍 London Locations
                        </h2>
                        <p className="heading-md text-brand-green mb-8">
                            Small groups. Calm atmosphere. Zero intimidation.
                        </p>

                        <div className="space-y-6">
                            {locations.map((location, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4"
                                >
                                    <MapPin className="w-6 h-6 text-brand-fuchsia" />
                                    <span className="text-2xl text-white/80 font-light">{location}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-2xl overflow-hidden glass-card border-brand-green/20"
                    >
                        {/* Placeholder for map or location image - using a gradient for now as per "Outlaw" style abstractness */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-black to-brand-fuchsia/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white/40 text-lg italic">Premium Hotel Venues</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
