import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, closeMenu, menuItems }) => {
    return (
        <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-4"
        >
            {/* Close Button */}
            <button 
                onClick={closeMenu} 
                className="mb-4 text-xl font-bold"
            >
                ✕
            </button>

            {/* Menu Items */}
            <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                    <button 
                        key={item.slug} 
                        className="text-lg font-medium text-gray-800"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default MobileMenu;
