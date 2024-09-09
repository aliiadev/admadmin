import React from "react"
import { IconNotebook, IconDashboard, IconLogin2 } from '@tabler/icons-react';

export type NavbarSectionType = {
    icon?: React.ReactNode,
    pageUrl: string
    label: string,
    children?: NavbarSectionType[]
}

export const navbarSections: NavbarSectionType[] = [
    {
        icon: <IconDashboard />,
        pageUrl: '/',
        label: 'Dashboard'
    },
    {
        icon: <IconNotebook />,
        pageUrl: '/products',
        label: 'Products'
    },
    {
        icon: <IconLogin2 />,
        pageUrl: '/authentication/login',
        label: 'Login'
    }
]