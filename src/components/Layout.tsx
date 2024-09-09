import { navbarSections } from '@configs/NavbarSection';
import { AppShell, Burger, Group, NavLink, ScrollArea } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Outlet, NavLink as RNavLink } from 'react-router-dom';


const Layout = () => {

    const [burgerOpen, setBurgerOpen] = useLocalStorage<
        'open' | 'close'
    >({
        key: 'burger-open',
        defaultValue: 'open',
    });

    const toggleBurgerOpen = () => {
        setBurgerOpen(!isBurgerOpen ? 'open' : 'close');
    }

    const isBurgerOpen = burgerOpen === 'open';

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 260,
                breakpoint: 'sm',
                collapsed: { mobile: !isBurgerOpen, desktop: !isBurgerOpen },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={isBurgerOpen} onClick={toggleBurgerOpen} hiddenFrom="sm" size="sm" />
                    <Burger opened={isBurgerOpen} onClick={toggleBurgerOpen} visibleFrom="sm" size="sm" />
                    <MantineLogo size={30} />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppShell.Section grow my="md" component={ScrollArea}>
                    {navbarSections.map(({ pageUrl, icon, label }) => (
                        <RNavLink
                            key={pageUrl}
                            to={pageUrl}
                            style={{ all: 'unset' }}
                        >
                            {({ isActive }) => (
                                <NavLink
                                    active={isActive}
                                    leftSection={icon}
                                    label={label}
                                />
                            )}
                        </RNavLink>
                    ))}
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;