import React from "react";

interface HomePageProps {
    title: string;
}

export default function HomePage(props: HomePageProps) {
    return <div>
        <p className="text-2xl">Hello there </p>
    </div>
}
