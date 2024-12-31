export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 4,
        name: 'Projects',
        href: '/project',
    },
];

export const myProjects = [
    {
        title: 'ECommerce - Clothing Store',
        desc: 'Niche & Knit, an eCommerce platform built with ReactJS for an enhanced shopping experience. This repository contains the frontend code for the clothing website, designed with modular components and a clean, responsive UI.',
        subdesc:
            'Built as a Website app with React.js Niche & Knit is designed for optimal performance and scalability.',
        href: 'https://github.com/nguyeenphan/Ecommerce-Website.git',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'TodoList',
        desc: 'A simple TodoList app built with ReactJS and TailwindCSS. This website allows users to create and delete tasks, with a clean and intuitive interface. The app is designed to be user-friendly and responsive, providing a seamless task management experience.',
        subdesc:
            'The tasks are stored in the local storage. You will not lost your tasks when you refresh the page.',
        href: 'https://github.com/nguyeenphan/Todo-List.git',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [-1, 0, 0] : [0.25, -3, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};