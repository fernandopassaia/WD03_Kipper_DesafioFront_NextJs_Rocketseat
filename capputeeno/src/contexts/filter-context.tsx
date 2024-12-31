"use client"

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

// Contexto de pesquisa - os 4 últimos métodos vão permitir fazer atualização
// nesse contexto, setPage por exemplo recebe um número
// nota: função está sendo exportada e será consumida por hooks>useFilter
export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, type, 
                setSearch, 
                setType, 
                setPage,
                priority,
                setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
}