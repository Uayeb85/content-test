<template> 
    <Layout>
        <h2>soluciones pagina</h2>
        <div
        v-for="servicios in $page.allContentfulServicios.edges"
        :key="servicios.node.id">
        <h3>{{servicios.node.titulo}}</h3>
       <g-link :to="`/servicios/${servicios.node.slug}`">  
       <g-image 
        style="width:100%; height:450px;"/> 
      </g-link>
      </div>
    </Layout>
</template>

<page-query>
query{
  allContentfulServicios{
    edges{
      node{
        id
        titulo
        slug
      }
    }
  }
}
</page-query>