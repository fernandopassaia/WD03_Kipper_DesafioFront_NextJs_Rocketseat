import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

// useFilter irá chamar o useContext do React passando o FilterContext
export function useFilter(){
    return useContext(FilterContext)
}