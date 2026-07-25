import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p" | "h1" | "h2" | "h3" | "ul";
  direction?: "up" | "down" | "left" | "right" | "none";
};

export default function Reveal({ 
  children, 
  className = "", 
  delay = 0, 
  as = "div",
  direction = "up"
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Fallback for older browsers
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;

  // Map directions to Tailwind transform classes
  const hiddenStyles = {
    up: "opacity-0 translate-y-10",
    down: "opacity-0 -translate-y-10",
    left: "opacity-0 translate-x-10",
    right: "opacity-0 -translate-x-10",
    none: "opacity-0",
  }[direction];

  return (
    <Tag
      ref={ref as any}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : hiddenStyles
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}