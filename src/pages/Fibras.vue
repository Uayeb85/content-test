<template>
<layout>
    <h3 class="titulo-seccion">Fibras Opticas</h3>
    <div v-for="fibras in $page.allContentfulFibra.edges" :key="fibras.id">
        <h2>{{fibras.node.title}}</h2>
        <g-image :src="fibras.node.imagen.file.url" class="imagen" />
        <p>{{fibras.node.nombreCorto}}</p>
        <p> <span class="marca-text"> MARCA </span> {{fibras.node.brand.companyName}}</p>
       <g-link :to="`/fibras/${fibras.node.slug}`"> <button class="boton">más información</button> </g-link>
    </div>
</layout>
</template>

<page-query>
query{
  allContentfulFibra{
    edges{
      node{
        id  
        title
        slug
        brand{
          companyName
        }
        imagen{
          file{
            url
          }
        }
        nombreCorto
      }
    }
  }
}
</page-query>

<style scoped>

.titulo-seccion{
    font-size: 52px;
    text-align: center;
}

.imagen{
    height: 450px;
    width: auto;
}

.marca-text{
    font-style: italic;
    font-weight: bold;
    font-size: 22px;
}

.boton{
    background:blue;
    color: white;
    border-radius: 10%;
}
</style>