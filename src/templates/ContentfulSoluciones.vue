<template>
  <layout>
    <h2>{{$page.soluciones.titulo}}</h2>
    <g-image :src="$page.soluciones.imagenPrincipal.file.url" />
    <g-image v-for="imagen in $page.soluciones.galeria" :src="imagen.file.url" :key="imagen.id"/>

  </layout>
</template>

<page-query>
query Soluciones ($path: String!) {
  soluciones: contentfulSoluciones (path: $path) {
    titulo
    id
    nombreCorto
    descripcion
    slug
    precio
    imagenPrincipal{
      file{
        url
      }
    }
    brand{
      companyName
    }
    galeria{
      id
      file{
        url
      }
    }
  }
  
}
</page-query>