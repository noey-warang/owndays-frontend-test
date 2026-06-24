import { FaInstagram, FaRegClone } from "react-icons/fa";
import { Button } from "./ui/button";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    const menu = [
        { name: "ABOUT", href: "#" },
        { name: "PRODUCTS", href: "#" },
        { name: "STORES", href: "#" },
    ]
    return (
        <footer className="relative bg-[#000000]">
            <div className="border-t border-[#FF6723]" />
            
            {/* Mobile */}
            <div className="md:hidden flex flex-col">
                <div className="w-full flex flex-col">
                    {menu.map((item) => (
                        <div key={item.name} className="border-b border-[#FF6723]">
                            <Button
                                variant="link"
                                className="w-full justify-between text-[#FF6723] cursor-pointer py-5 px-5 h-auto"
                                asChild
                            >
                                <Link
                                    href={item.href}>
                                    {item.name}
                                    <MdKeyboardArrowRight className="w-7! h-7!" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between py-8 px-5 border-b border-[#FF6723]">
                    <Button variant="link" className="flex gap-x-2 text-[#FF6723] cursor-pointer p-0 h-auto">
                        <LiaShoppingCartSolid className="w-8! h-8!" />
                        <span className="text-lg my-auto">ONLINE STORE</span>
                    </Button>
                    <Button variant="link" className="flex gap-x-2 text-[#FF6723] cursor-pointer p-0 h-auto">
                        <span className="text-xs">OWNDAYS.COM</span>
                        <FaRegClone />
                    </Button>
                </div>
                <div className="flex flex-col items-start py-5 px-5 gap-y-3 border-b border-[#FF6723]">
                    <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">CONTACT US</Button>
                    <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">PRIVACY POLICY</Button>
                    <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">TERMS OF USE</Button>
                    <Button variant="link" className="text-xs text-[#FF6723] cursor-pointer p-0 h-auto">特定商取引法表示</Button>

                    <Button variant="link" className="w-fit justify-start text-[#FF6723] cursor-pointer pt-5 px-0 pb-0 h-auto">
                        <FaInstagram className="w-5! h-5!" />
                    </Button>
                </div>
                <span className="text-xs text-[#FF6723] text-center py-5">COPYRIGHT (C) OWNDAYS CO., LTD. ALL RIGHTS RESERVED.</span>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <div className="flex py-20 px-14">
                    <div className="w-2/3 flex flex-col gap-y-5 border-[#FF6723]">
                        {menu.map((item) => (
                            <Button
                                key={item.name}
                                variant="link"
                                className="w-fit justify-start text-[#FF6723] cursor-pointer p-0 h-auto"
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Button variant="link" className="w-fit justify-start text-[#FF6723] cursor-pointer p-0 h-auto">
                            <FaInstagram />
                        </Button>
                    </div>
                    <div className="absolute right-163 top-0 bottom-16.5 border-l border-[#FF6723]" />
                    <div className="w-1/3 flex flex-col items-center justify-center text-[#FF6723] gap-y-2">
                        <Button variant="link" className="flex gap-x-2 text-[#FF6723] cursor-pointer">
                            <LiaShoppingCartSolid className="w-12.5! h-12.5!" />
                            <span className="text-xl my-auto">ONLINE STORE</span>
                        </Button>
                        <Button variant="link" className="flex gap-x-2 text-[#FF6723] cursor-pointer">
                            <span className="text-xs">OWNDAYS.COM</span>
                            <FaRegClone />
                        </Button>
                    </div>
                </div>
                <div className="border-t border-[#FF6723]" />
                <div className="flex justify-between py-5 px-14">
                    <div className="flex gap-x-5 ">
                        <Button variant="link" className="text-[#FF6723] cursor-pointer p-0 h-auto">CONTACT US</Button>
                        <Button variant="link" className="text-[#FF6723] cursor-pointer p-0 h-auto">PRIVACY POLICY</Button>
                        <Button variant="link" className="text-[#FF6723] cursor-pointer p-0 h-auto">TERMS OF USE</Button>
                        <Button variant="link" className="text-[#FF6723] cursor-pointer p-0 h-auto">特定商取引法表示</Button>
                    </div>
                    <span className="text-[#FF6723]">COPYRIGHT (C) OWNDAYS CO., LTD. ALL RIGHTS RESERVED.</span>
                </div>
                <div className="border-b border-[#FF6723]" />
            </div>
        </footer>
    )
}