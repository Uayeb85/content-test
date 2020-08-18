<template>
  <layout>
    <h2>{{$page.servicios.titulo}}</h2>
    <g-image :src="$page.servicios.imagenPrincipal.file.url" />
    <g-image v-for="imagen in $page.servicios.galeria" :src="imagen.file.url" :key="imagen.id"/>

  </layout>
</template>

<page-query>
query Servicios ($path: String!) {
  servicios: contentfulServicios (path: $path) {
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