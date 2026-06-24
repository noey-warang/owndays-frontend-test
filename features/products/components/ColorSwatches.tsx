import { Button } from "@/components/ui/button";
import { Sku } from "../types/product.types";

interface ColorSwatchesProps {
    colors: Sku[];
    selectedColorId: number;
    onSelectColor: (id: number) => void;
    variant?: 'circle' | 'text';
}

export default function ColorSwatches({ colors, selectedColorId, onSelectColor, variant = 'circle' }: ColorSwatchesProps) {
    return (
        <>
            {colors.map(color => {
                const hasImage = !!color.colors?.[0]?.path;
                const isMultiColor = color.colors && color.colors.length > 1;
                const currentImgUrl = hasImage ? `url(${process.env.NEXT_PUBLIC_BASE_IMAGE}${color.colors[0].path})` : 'none';
                let backgroundStyle = '';
                if (!hasImage) {
                    backgroundStyle = isMultiColor
                        ? `linear-gradient(135deg, ${color.colors[0]?.hex_code} 50%, ${color.colors[1]?.hex_code} 50%)`
                        : color.colors?.[0]?.hex_code || "#000000";
                }

                if (variant === 'text') {
                    return (
                        <Button
                            key={color.id}
                            className={`rounded-full flex items-center justify-center border transition-all text-[#000000] bg-white cursor-pointer ${color.id === selectedColorId
                                ? 'bg-[#000000] text-white hover:bg-[#000000] hover:text-white hover:border-[#000000]/70'
                                : 'border-[#000000] hover:bg-white hover:border-[#000000]/70 hover:scale-105'
                                }`}
                            onClick={() => onSelectColor(color.id)}
                        >
                            <span className="text-xs uppercase">{isMultiColor ? `${color.colors[0]?.code} / ${color.colors[1]?.code}` : `${color.colors[0]?.code}`}</span>
                        </Button>
                    )
                }
                return (
                    <Button
                        key={color.id}
                        className={`w-8 h-8 rounded-full flex items-center justify-center p-0.5 border transition-all bg-white hover:bg-white cursor-pointer ${color.id === selectedColorId
                            ? 'border-[#FF6723] scale-105 ring-1 ring-[#FF6723]'
                            : 'border-gray-300 hover:scale-105'
                            }`}
                        onClick={() => onSelectColor(color.id)}
                    >
                        <span
                            className="w-full h-full rounded-full block bg-cover bg-center"
                            style={{
                                backgroundImage: hasImage ? currentImgUrl : undefined,
                                background: !hasImage ? backgroundStyle : undefined,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                    </Button>
                )
            })}
        </>
    )
}