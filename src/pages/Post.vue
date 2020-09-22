<template>
    <section>
        <div>
            <h1>
                Hola desde Post
            </h1>
            <div v-for="post in $page.allContentfulPost.edges" :key="post.id">
                <h1>{{post.node.title}}</h1>
                <p>{{post.node.descripcion}}</p>
                <g-link :to="`/post/${post.node.slug}`"> <button class="boton">más información</button> </g-link>

            </div>
        </div>
    </section>
</template>

<page-query>
query{
  allContentfulPost{
    edges{
      node{
        title
        slug
        descripcion
        imagenPortada{
          url
        }
      }
    }
  }
}

</page-query>
