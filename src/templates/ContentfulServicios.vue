<template>
  <layout>
    <h2>{{$page.servicios.titulo}}</h2>

  </layout>
</template>

<page-query>
query Servicios ($path: String!) {
  servicios: contentfulServicios (path: $path) {
    titulo
    id
    slug
  }
  
}
</page-query>