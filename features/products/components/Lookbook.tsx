'use client';

import * as React from "react"
import ScrollingText from "@/components/scrolling-text";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { useMotionValue, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import { MOCK_GALLERY } from "../mock/lookbookMock";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function Lookbook() {
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

    const plugin = React.useRef(
        Autoplay({
            delay: 1800, 
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );
    return (
        <div className="relative flex flex-col w-full">
            <div className="absolute top-15 md:top-0 left-5 md:left-35 z-10 w-fit md:gap-5"
                style={{ perspective: "1500px" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            >
                <ScrollingText title="how to" springX={springX} springY={springY} />
                <div className="mt-5">
                    <ScrollingText title="style them" springX={springX} springY={springY} />
                </div>
            </div>

            <div className="w-full pt-40 md:pt-55">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                >
                    <CarouselContent
                        className="ml-0"

                    >
                        {MOCK_GALLERY.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-0 basis-[85%] sm:basis-1/2 md:basis-1/4"
                            >
                                <div className="relative h-120 md:h-165 overflow-hidden group cursor-pointer">
                                    <Image
                                        src={item.imageUrl}
                                        alt="Lookbook review"
                                        fill
                                        className="object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-102"
                                    />
                                    <Button className="absolute -bottom-1 -right-1 w-12 h-12 text-[#000000] bg-[#FF5722] hover:bg-[#FF5722 flex items-center justify-center rounded-none z-10 group-hover:cursor-pointer">
                                        <Plus className="w-6! h-6!" />
                                    </Button>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}