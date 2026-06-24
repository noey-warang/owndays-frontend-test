'use client';

import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollingTextProps {
    title: string;
    springX: MotionValue<number>;
    springY: MotionValue<number>;
    className?: string;
}

export default function ScrollingText({ title, springX, springY, className }: ScrollingTextProps) {
    const rotateX = useTransform(springY, [-300, 300], [25, -25]);
    const rotateY = useTransform(springX, [-300, 300], [-25, 25]);

    return (
        <motion.div
            initial={{ scale: 1, opacity: 1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="w-fit bg-black flex overflow-hidden text-center"
        >
            <h1 className={cn(
                `text-7xl md:text-[170px] font-black uppercase tracking-tighter text-[#FF5722] m-0 p-0 leading-[0.75]`,
                className
            )}>
                {title}
            </h1>
        </motion.div>
    );
}