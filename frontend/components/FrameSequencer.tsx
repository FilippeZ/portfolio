"use client";

import React, { useEffect, useState, useRef } from "react";

interface FrameSequencerProps {
    totalFrames: number;
    fps?: number;
}

export default function FrameSequencer({ totalFrames, fps = 12 }: FrameSequencerProps) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [loadedFrames, setLoadedFrames] = useState<boolean[]>(new Array(totalFrames).fill(false));
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        // Preload images
        const frames = [];
        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/resources/login_frames/Implement_zoom_out_1080p_202602222339_${frameNumber}.jpg`;
            img.onload = () => {
                setLoadedFrames(prev => {
                    const newState = [...prev];
                    newState[i] = true;
                    return newState;
                });
            };
            frames.push(img);
        }
        imagesRef.current = frames;
    }, [totalFrames]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame(prev => (prev + 1) % totalFrames);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [totalFrames, fps]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[currentFrame];
        if (img && img.complete) {
            // Adjust canvas size to parent container
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    }, [currentFrame]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
                imageRendering: "auto",
                filter: "none"
            }}
        />
    );
}
