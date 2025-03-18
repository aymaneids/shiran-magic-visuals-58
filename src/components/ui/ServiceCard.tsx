
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-lg bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-sm font-medium"
      >
        Learn more 
        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
