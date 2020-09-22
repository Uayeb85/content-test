<template>
    <div>
        <div>
            <h2>desde componente</h2>
        </div>
        <div v-for="{node : post} in posts" :key="post.id">
        <h1>{{post.title}}</h1>
        <p>{{post.descripcion}}</p>
        <g-link :to="`/post/${post.slug}`"> <button class="boton">más información</button> </g-link>
        </div>


    </div>
</template>

<script>
export default {
    name: 'PostCard',
    props: {
        posts:{}
    }
}
</script>