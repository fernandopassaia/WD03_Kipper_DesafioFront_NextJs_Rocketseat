"use client"

import { styled } from "styled-components"

// o espaçamento lateral de todas as páginas é igual, centralizando tudo,
// o background também é sempre igual - por isso criamos esse componente
export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: 100vh;
    background-color: var(--bg-primary);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 160px;
    }
`