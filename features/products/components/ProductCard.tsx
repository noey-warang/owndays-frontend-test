'use client';

import Image from "next/image";
import { ProductItem } from "../types/product.types";
import React, { useState } from "react";
import ColorSwatches from "./ColorSwatches";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface ProductCardProps {
    product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [selectedSku, setSelectedSku] = useState(product.skus?.[0]);
    const currentImgUrl = process.env.NEXT_PUBLIC_BASE_IMAGE + selectedSku?.images?.[0]?.path || "";
    const currentSkuName = selectedSku?.colors?.[0]?.code || "";

    const plugin = React.useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <>
            {/* Mobile */}
            <Dialog>
                <DialogTrigger asChild>
                    <div className="md:hidden flex flex-col bg-white shadow-md p-4 hover:scale-102 hover:drop-shadow-2xl cursor-pointer transition">
                        <Image
                            src={currentImgUrl}
                            alt={`${product.product.model_name} - ${currentSkuName}`}
                            width={385.81}
                            height={293.45}
                            className="w-full h-auto object-cover"
                        />
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between">
                                <span className="text-4xl font-bold">{product.product.model_name}</span>
                                <div onClick={(e) => e.stopPropagation()} className="flex gap-2 my-auto">
                                    <ColorSwatches
                                        colors={product.skus}
                                        selectedColorId={selectedSku?.id}
                                        onSelectColor={(id: number) => {
                                            const foundSku = product.skus.find(sku => sku.id === id);
                                            if (foundSku) setSelectedSku(foundSku);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm my-auto">{product.product.code}</span>
                                <span className="text-2xl font-bold">¥{product.selling_setting.price.toLocaleString("ja-JP")}+tax</span>
                            </div>
                        </div>
                    </div>
                </DialogTrigger>

                <DialogContent className="max-w-none w-95 bg-white text-[#FF6723] p-0 overflow-visible [&>button]:hidden">
                    <div className="absolute right-4 top-2 z-50">
                        <DialogClose className="hover:opacity-80 transition-opacity cursor-pointer">
                            <IoIosClose className="w-18 h-18" />
                        </DialogClose>
                    </div>
                    <span className="text-4xl font-bold text px-2 py-5 block">{product.product.model_name}</span>

                    <div className="relative">
                        <Carousel
                            plugins={[plugin.current]}
                        >
                            <CarouselContent>
                                {selectedSku.images.map((img) => (
                                    <CarouselItem
                                        key={img.id}
                                        className="basis-2/3">
                                        <div className="relative w-full h-50 rounded-lg overflow-hidden flex items-center justify-center">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE}${img.path}`}
                                                alt={`${product.product.model_name} - ${currentSkuName}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer" />
                        </Carousel>
                    </div>

                    <div className="flex justify-center items-center gap-x-2 px-0">
                        <ColorSwatches
                            colors={product.skus}
                            selectedColorId={selectedSku?.id}
                            onSelectColor={(id: number) => {
                                const found = product.skus.find(c => c.id === id);
                                if (found) setSelectedSku(found);
                            }}
                            variant='text'
                        />
                    </div>

                    <div className="flex flex-col text-white rounded-t-none rounded-xl bg-[#000000] mt-10 py-10 px-5 md:mt-15 md:py-15 md:px-20 gap-y-5">
                        <div className="flex space-x-15">
                            <span>P/No.</span>
                            <span>{product.product.code}</span>
                        </div>

                        <div className="flex space-x-15">
                            <span>TYPE</span>
                            <span className="uppercase">{product.frame_types?.[0]?.code || ""}</span>
                        </div>

                        <div className="flex space-x-15">
                            <span>PRICE</span>
                            <span>
                                ¥{product.selling_setting.price.toLocaleString("ja-JP")} 税込
                            </span>
                        </div>

                        <span>
                            {product.localization.description}
                        </span>

                        <Button className="w-full md:w-95 h-12 bg-[#FF6723] hover:bg-[#923B14] rounded-full mx-auto cursor-pointer transition-all">
                            {product.selling_setting.in_stock === 0 ? (
                                <>
                                    <span className="group-hover:hidden">ONLINE STORE</span>
                                    <span className="hidden group-hover:flex justify-center items-center transition-opacity duration-200">
                                        OUT OF STOCK
                                    </span>
                                </>
                            ) : (
                                <span className="flex justify-center items-center transition-opacity duration-200">
                                    ONLINE STORE
                                </span>
                            )}
                        </Button>

                        <span className="text-sm mx-auto">OWNDAYSオンラインストアに移動します</span>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Desktop*/}
            <Sheet>
                <SheetTrigger asChild>
                    <div className="hidden md:flex flex-col bg-white shadow-md p-4 hover:scale-102 hover:drop-shadow-2xl cursor-pointer transition">
                        <div className="relative w-full h-85">
                            <Image
                                src={currentImgUrl}
                                alt={`${product.product.model_name} - ${currentSkuName}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between">
                                <span className="text-4xl font-bold">{product.product.model_name}</span>
                                <div onClick={(e) => e.stopPropagation()} className="flex gap-2 my-auto">
                                    <ColorSwatches
                                        colors={product.skus}
                                        selectedColorId={selectedSku?.id}
                                        onSelectColor={(id: number) => {
                                            const foundSku = product.skus.find(sku => sku.id === id);
                                            if (foundSku) setSelectedSku(foundSku);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm my-auto">{product.product.code}</span>
                                <span className="text-2xl font-bold">¥{product.selling_setting.price.toLocaleString("ja-JP")}+tax</span>
                            </div>
                        </div>
                    </div>
                </SheetTrigger>

                <SheetContent className="max-w-3xl! rounded-l-xl text-[#FF6723] p-0 overflow-hidden bg-white [&>button]:hidden">
                    <div className="absolute right-4 top-2">
                        <SheetClose className="hover:opacity-80 transition-opacity cursor-pointer">
                            <IoIosClose className="w-18 h-18" />
                        </SheetClose>
                    </div>
                    <span className="text-4xl font-bold text p-6">{product.product.model_name}</span>

                    <div className="relative">
                        <Carousel
                            plugins={[plugin.current]}
                        >
                            <CarouselContent>
                                {selectedSku.images.map((img) => (
                                    <CarouselItem
                                        key={img.id}
                                        className="basis-2/3"
                                    >
                                        <div className="relative w-full h-80 rounded-lg overflow-hidden flex items-center justify-center">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE}${img.path}`}
                                                alt={`${product.product.model_name} - ${currentSkuName}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white border-gray-300 hover:bg-gray-100 cursor-pointer" />
                        </Carousel>
                    </div>

                    <div className="flex justify-center items-center gap-3 px-0">
                        <ColorSwatches
                            colors={product.skus}
                            selectedColorId={selectedSku?.id}
                            onSelectColor={(id: number) => {
                                const found = product.skus.find(c => c.id === id);
                                if (found) setSelectedSku(found);
                            }}
                            variant='text'
                        />
                    </div>

                    <div className="flex flex-col text-white bg-[#000000] mt-15 py-15 px-20 gap-y-5">
                        <div className="flex space-x-15">
                            <span>P/No.</span>
                            <span>{product.product.code}</span>
                        </div>

                        <div className="flex space-x-15">
                            <span>TYPE</span>
                            <span className="uppercase">{product.frame_types?.[0]?.code || ""}</span>
                        </div>

                        <div className="flex space-x-15">
                            <span>PRICE</span>
                            <span>
                                ¥{product.selling_setting.price.toLocaleString("ja-JP")} 税込
                            </span>
                        </div>

                        <span>
                            {product.localization.description}
                        </span>

                        <Button className={`group w-full md:w-95 h-12 bg-[#FF6723] rounded-full mx-auto transition-all
                            ${product.selling_setting.in_stock === 0 ? "hover:bg-[#D9D9D9] hover:cursor-not-allowed" : "hover:bg-[#923B14] hover:cursor-pointer"}
                        `}>
                            {product.selling_setting.in_stock === 0 ? (
                                <>
                                    <span className="group-hover:hidden">ONLINE STORE</span>
                                    <span className="hidden group-hover:flex justify-center items-center transition-opacity duration-200">
                                        OUT OF STOCK
                                    </span>
                                </>
                            ) : (
                                <span className="flex justify-center items-center transition-opacity duration-200">
                                    ONLINE STORE
                                </span>
                            )}
                        </Button>

                        <span className="text-sm mx-auto">OWNDAYSオンラインストアに移動します</span>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}