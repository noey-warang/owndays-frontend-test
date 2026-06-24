'use client';
import { motion } from 'framer-motion';
import { ProductItem } from "../types/product.types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
    products: ProductItem[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}as const;

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 150, damping: 12 }
    },
}as const;

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-200px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 p-5 md:p-35"
        >
            {products.map((item) => (
                <motion.div variants={itemVariants} key={item.product.id}>
                    <ProductCard product={item} />
                </motion.div>
            ))}
        </motion.div>
    )
}