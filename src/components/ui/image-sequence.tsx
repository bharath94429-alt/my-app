'use client'
import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useMotionValueEvent, MotionValue } from 'motion/react'
export function ImageSequence({ 
    frameCount, 
    folder, 
    prefix, 
    extension = 'png',
    progress,
    className 
}: { 
    frameCount: number, 
    folder: string, 
    prefix: string,
    extension?: string,
    progress: MotionValue<number>,
    className?: string
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
    // Preload images
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/${folder}/${prefix}${paddedIndex}.${extension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };
            images[i] = img;
        }
        imagesRef.current = images;
    }, [frameCount, folder, prefix, extension]);

    const drawFrame = (frame: number) => {
        if (!canvasRef.current || !imagesRef.current[frame]) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imagesRef.current[frame];
        
        if (canvas.width !== img.width) {
            canvas.width = img.width;
            canvas.height = img.height;
        }
        
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Draw first frame immediately if possible
    useEffect(() => {
        if (imagesLoaded) {
            drawFrame(1);
        }
    }, [imagesLoaded]);

    useMotionValueEvent(progress, "change", (latest) => {
        let frame = Math.floor(latest * frameCount) + 1;
        if (frame < 1) frame = 1;
        if (frame > frameCount) frame = frameCount;
        drawFrame(frame);
    });

    return (
        <canvas
            ref={canvasRef}
            className={cn("w-full h-full object-cover", className)}
        />
    );
}
