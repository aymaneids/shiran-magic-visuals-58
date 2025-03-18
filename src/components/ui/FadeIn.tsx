
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  once?: boolean;
};

const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 500,
  direction = "up",
  threshold = 0.1,
  once = true,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    const translate = isVisible ? "translate(0, 0)" : "";
    const initialTransform = {
      up: "translate(0, 20px)",
      down: "translate(0, -20px)",
      left: "translate(20px, 0)",
      right: "translate(-20px, 0)",
      none: "translate(0, 0)",
    };

    return {
      transform: isVisible ? translate : initialTransform[direction],
    };
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        ...getDirectionStyles(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
