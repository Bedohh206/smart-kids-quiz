import React from "react";
import { motion } from "framer-motion";

export default function AnimatedIcon({ src, size = 60, alt = "icon", delay = 0 }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.15,
        rotate: 4,
        transition: { duration: 0.2 },
      }}
    />
  );
}
