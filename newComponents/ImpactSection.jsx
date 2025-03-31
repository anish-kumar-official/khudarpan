"use client";
import React, { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const impactData = [
    {
      id: 1,
      impactNumber: "10K",
      impactName: "People",
      impactDesc: "and their families are benefitted and impacted every year",
    },
    {
      id: 2,
      impactNumber: 50,
      impactName: "Villages",
      impactDesc:
        "are being reached out making significant inroads and touching communities",
    },
    {
      id: 3,
      impactNumber: 8,
      impactName: "Projects",
      impactDesc:
        "focused on education, healthcare, women empowerment and on providing basic needs",
    },
    {
      id: 4,
      impactNumber: 3,
      impactName: "States",
      impactDesc:
        "and reached including the remotest area with all our support and team",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="w-full py-12 px-4 bg-gray-200 md:py-16 lg:py-20"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8 md:mb-12">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Our Impact
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impactData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center p-4 h-full"
            >
              <div className="flex items-center justify-center mb-2 text-[#007c7c]">
                <AnimatedNumber
                  value={item.impactNumber}
                  isVisible={isVisible}
                />
                <Plus className="ml-2" size={48} strokeWidth={3} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {item.impactName}
              </h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">
                {item.impactDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const duration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    if (!isVisible) return;

    let startValue = 0;
    let endValue;

    // Handle string values like "10K"
    if (typeof value === "string") {
      if (value.endsWith("K")) {
        endValue = parseInt(value.replace("K", "")) * 1000;
      } else {
        endValue = parseInt(value);
      }
    } else {
      endValue = value;
    }

    // Cap very large numbers for smoother animation
    const animationEndValue = endValue > 1000 ? 1000 : endValue;

    const startTime = performance.now();

    const updateValue = (currentTime) => {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        // Use easeOutQuad for smoother animation
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        const nextValue = Math.floor(easedProgress * animationEndValue);
        setDisplayValue(nextValue);
        requestAnimationFrame(updateValue);
      } else {
        // At the end of animation, set the actual value
        setDisplayValue(animationEndValue);

        // If we capped the animation value, now show the real value
        if (endValue > 1000) {
          setTimeout(() => {
            setDisplayValue(endValue);
          }, 100);
        }
      }
    };

    requestAnimationFrame(updateValue);
  }, [isVisible, value]);

  // Format the display value to match the original format
  const formattedValue =
    typeof value === "string" && value.endsWith("K")
      ? displayValue >= 1000
        ? `${Math.floor(displayValue / 1000)}K`
        : displayValue
      : displayValue;

  return (
    <span className="font-bold text-5xl md:text-6xl lg:text-7xl transition-all duration-300">
      {formattedValue}
    </span>
  );
};

export default ImpactSection;
