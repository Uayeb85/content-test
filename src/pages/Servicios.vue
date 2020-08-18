<template>
    <Layout>
        <h2>soluciones pagina</h2>
        <div
        v-for="servicios in $page.allContentfulServicios.edges"
        :key="servicios.node.id">
        <h3>{{servicios.node.titulo}}</h3>
        <p>{{servicios.node.nombreCorto}}</p>
       <g-link :to="`/servicios/${servicios.node.slug}`">  
       <g-image 
        :src="servicios.node.imagenPrincipal.file.url"
        style="width:100%; height:450px;"/> 
        <p> Marca {{servicios.node.brand.companyName}}</p>
      </g-link>
        <g-image v-for="imagen in servicios.node.galeria" :src="imagen.file.url" :key="imagen.id"/>
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
        nombreCorto
        brand{
          companyName
        
        }
        imagenPrincipal{
          file{
            url
          } 
        }
        galeria{
          id
          file{
            url
          }
        }
      }
    }
  }
}
</page-query>