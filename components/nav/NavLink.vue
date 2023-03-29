<template>
    <li>
        <nuxt-link :to="item.link?.post_name || '/'">
            {{ item.link.post_title }}
        </nuxt-link>
        <!-- If post has children, render child list -->
        <ul v-if="item.children">
            <li v-for="child in item.children" :key="child.nav_item?.ID">
                <nuxt-link :to="child.nav_item.post_name || '/'">
                    {{ child.nav_item.post_title }}
                </nuxt-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['item']
}
</script>