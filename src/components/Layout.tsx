import { navbarSections } from '@configs/NavbarSection';
import { AppShell, Burger, Group, NavLink, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Outlet, NavLink as RNavLink } from 'react-router-dom';


const Layout = () => {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 260,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
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