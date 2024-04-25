<template>
    <div class="about">
        <h2>
            This command shell allowed you to use the following commands:
        </h2>
        <ul>
            <li>ls</li>
            <li>cd</li>
            <li>whoami</li>
            <li>cat</li>
            <li>curl</li>
            <li>which</li>
            <li>echo</li>
            <li>grep</li>
        </ul>
    </div>
</template>

<style>
    .about {
        animation: slideInFromRight .5s ease;
    }

    @keyframes slideInFromRight {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>