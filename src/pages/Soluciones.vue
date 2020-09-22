<template>
    <section>
        <div>
            hola desde soluciones
        </div>
        <div v-for="solucion in $page.allContentfulSoluciones.edges" :key="solucion.id">
            <h1>{{solucion.node.titulo}}</h1>
            <p>{{solucion.node.descripcion}}</p>
            <g-link :to="`/soluciones/${solucion.node.slug}`">  
            <g-image 
                :src="solucion.node.imagenPrincipal.file.url"
                style="width:100%; height:450px;"/> 
                <p> Marca {{solucion.node.brand.companyName}}</p>
            </g-link>
            <g-image v-for="img in solucion.node.imagen" :src="img.url" :key="img.id"/>
        </div>
    </section>
</template>

<page-query>
query{
  allContentfulSoluciones{
    edges{
      node{
        id
        titulo
        slug
        nombreCorto
        descripcion
        precio
        brand{
          companyName
        
        }
        imagenPrincipal{
          file{
            url
            details{
              image{
                width
                height
              }
            }
          } 
        }
        galeria{
          file{
            url
          }
        }
        imagen{
            url
        }
      }
    }
  }
}
</page-query>