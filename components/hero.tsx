'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import ScrollingText from "./scrolling-text";
import { motion, useMotionValue, useSpring } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 150, damping: 12 }
    },
} as const;

export default function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 100 });
    const springY = useSpring(y, { stiffness: 100, damping: 100 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left - width / 2;
        const mouseY = event.clientY - rect.top - height / 2;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <header className="relative min-h-dvh overflow-hidden" style={{ perspective: "1500px" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Image
                src="/img/bg-mobile.jpg"
                alt="hero"
                fill
                className="md:hidden object-cover object-center"
            />

            <Image
                src="/img/bg-desk.jpg"
                alt="hero"
                fill
                priority
                className="hidden md:block object-cover object-center"
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <ScrollingText title="products" springX={springX} springY={springY} className="md:text-9xl" />
            </div>

            <div className="absolute inset-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "100px" }}
                    className="relative z-20 flex justify-between gap-x-5 py-5 px-3 md:px-14">
                    <motion.div variants={itemVariants}>
                        <Button variant="link" className="cursor-pointer p-0 flex items-center">
                            <div className="w-60 md:w-87.75 h-auto">
                                <Image
                                    src="/img/Collab-Logo.svg"
                                    alt="OWNDAYS"
                                    width={351}
                                    height={52}
                                    className="object-contain"
                                />
                            </div>
                        </Button>
                    </motion.div>

                    {/* Mobile */}
                    <div className="md:hidden flex items-center">
                        <Dialog>
                            <DialogTrigger><IoIosMenu className="w-7.5 h-7.5 text-white" /></DialogTrigger>
                            <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none w-90 bg-[#000000] [&>button]:hidden">
                                <div className="absolute right-4 top-4">
                                    <DialogClose className="text-[#FF6723] hover:opacity-80 transition-opacity">
                                        <IoIosClose className="w-15 h-15" />
                                    </DialogClose>
                                </div>
                                <DialogHeader className="flex items-start text-[#FF6723] pt-25 px-8">
                                    <Button variant="link" className="text-2xl text-[#FF6723] cursor-pointer p-0 h-auto">ABOUT</Button>
                                    <Button variant="link" className="text-2xl text-[#FF6723] cursor-pointer pt-5 px-0 pb-0 h-auto">PRODUCTS</Button>
                                    <Button variant="link" className="text-2xl text-[#FF6723] cursor-pointer pt-5 px-0 pb-0 h-auto">STORES</Button>
                                    <div className="flex flex-col items-start gap-y-5 pt-10">
                                        <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">CONTACT US</Button>
                                        <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">PRIVACY POLICY</Button>
                                        <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">TERMS OF USE</Button>
                                        <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">特定商取引法表示E</Button>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Desktop */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden md:flex gap-x-7 items-center">
                        <Button variant="link" className="text-white cursor-pointer">ABOUT</Button>
                        <Button variant="link" className="text-white cursor-pointer">PRODUCTS</Button>
                        <Button variant="link" className="text-white cursor-pointer">STORES</Button>
                    </motion.div>
                </motion.div>
            </div>
        </header >
    );
}
