<template>
    <section>
        <div>
            <div v-for="crc in $page.allContentfulCrc.edges" :key="crc.id">
                hola desde CRC
                <h1>{{crc.node.title}}</h1>
                <p>{{crc.node.descripcion}}</p>
                <g-link :to="`/crc/${crc.node.slug}`"> <button class="boton">más información</button> </g-link>

            </div>
        </div>
    </section>
</template>


<page-query>
query{
  allContentfulCrc{
    edges{
      node{
        title
        slug
        descripcion
        
      }
    }
  }
}
</page-query>