"use client"

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

// Pra definir se o item esta selecionado (ele fica com uma bordinha laranja)
interface FilterItemProps {
    selected: boolean
}

// Lista de Tipos - Todos os Produtos, Camisetas, Canecas
// Gap de 40px por que existe um espaco entre os itens
// list-style none remove as bolinhas padrões de lista
const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

// (1) FilterItem por que eu tenho uma lista de items
// (2) Pegamos esse CSS do figma e removemos algumas coisas inuteis
// (3) Font-family inherit ira herdar do template.
// (4) Recebe FilterItemProps pra verificar se o item esta selecionado
// Se ele estiver selecionado - precisa ficar sublinhado de laranja (border
// bottom laranja) a fonte mais negrito (font-weight = 600)
const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''}

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 16px;
        line-height: 22px;
    }
`

export function FilterByType(){
    // setType irá chamar o useFilter
    const { type, setType } = useFilter();

    // quando clicar será chamado o handleChangeType que irá chamar o setType
    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return(
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}