import React from "react";
import MainLayout from "../layouts/MainLayout";

interface HomePageProps {
    title: string;
}

import {Text} from "@mantine/core";

export default function HomePage(props: HomePageProps) {
    return <MainLayout>
        <Text variant="text" size="lg">Hello there </Text>
    </MainLayout>
}
