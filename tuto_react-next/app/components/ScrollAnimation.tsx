import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ children, direction = "left" }: { 
    children: React.ReactNode; 
    direction: "left" | "right" | "bottom";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect(); 
    }, []);

    const animations = {
        left: "animate-from-left",
        right: "animate-from-right",
        bottom: "animate-from-bottom",
    };
    const startPositions = {
        left: "-translate-x-20 opacity-0",
        right: "translate-x-20 opacity-0",
        bottom: "translate-y-20 opacity-0",
    };

    return (
        <div ref={ref} className={visible ? animations[direction] : startPositions[direction]}>
            {children}
        </div>
    );
}