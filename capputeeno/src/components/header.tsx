"use client" // todo componente que usa styled components precisa ser renderizado do lado do cliente

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'

// está sendo declarada aqui pois será usada apenas para o LOGO Capputeeno
const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}

// as fontes e tudo mais foram tiradas do Figma
const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

//logo-color está no Global.css
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
               
            </div>
        </TagHeader>
    )
}