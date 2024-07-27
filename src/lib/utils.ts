import { ClassValue,clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs : ClassValue[]){
    //takes any amount of inputs as of type classvalue array
    //installed two dependencies 
    //one for allow to use conditional class names->clsx
    //second to automatically merge tailwind classes together that are redundant for cleaner code ->tailwind-merge
    return twMerge(clsx(inputs))
}