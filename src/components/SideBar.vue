<script setup
        lang="ts">
defineProps({routes : {required : true}});
</script>

<template>
    <div class="container-side-bar">
        <div class="container-side-bar__icon">
            <router-link to="/">
                <icon :icon="['fas','church']"/>
            </router-link>
        </div>
        <div class="container-side-bar-container">
            <div v-for="(route, key) in routes"
                 :key="key"
                 class="container-side-bar-container__paths">
                <router-link :to="route.path">
                    <div class="container-side-bar-container__paths-icon">
                        <icon :icon="['fas', route.icon]"/>
                    </div>
                    <div class="container-side-bar-container__paths-name">
                        {{ route.name }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-side-bar {
    height: 100%;
    background: var(--color-sidebar-back);
}

.container-side-bar__icon, svg {
    height: 3rem;
}

.container-side-bar__icon {
    height: 4rem;
    width: 4rem;
    min-height: 4rem;
    min-width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 4rem;
    margin-bottom: 2rem;
}

.container-side-bar__icon a.router-link-exact-active:hover {
    transition: .3s all;
    transform: rotate(720deg) scale(1.3);
    opacity: .8;
}

.container-side-bar-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: .5rem;

    .container-side-bar-container__paths {
        padding-left: .5rem;

        .container-side-bar-container__paths-icon svg {
            width: 1.9rem;
            height: 1.9rem;
        }

        .container-side-bar-container__paths-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .container-side-bar-container__paths-name {
        overflow: hidden;
        width: 50%;
    }

    .container-side-bar-container__paths a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        outline: none;
    }

    .container-side-bar-container__paths:hover {
        opacity: .9;
        border-radius: 1rem;
        transform: scale(1.01);
    }

    .container-side-bar-container__paths .router-link-exact-active {
        border-radius: 1rem;
        border: 1px solid var(--color-border);
    }
}
</style>