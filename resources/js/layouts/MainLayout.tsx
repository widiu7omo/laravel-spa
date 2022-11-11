import React, {useState} from "react";
import {
    AppShell,
    Header,
    Footer,
    Box,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    MantineProvider,
} from '@mantine/core';
import {MainNavbar} from "../components/MainNavbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return <MantineProvider withNormalizeCSS withGlobalStyles theme={{colorScheme: 'dark'}}>
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<MainNavbar/>}
            aside={
                <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={{base: 50, md: 70}} p="md">
                    <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                        <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >
            <Box>
                {children}
            </Box>
        </AppShell>
        );
    </MantineProvider>
}
