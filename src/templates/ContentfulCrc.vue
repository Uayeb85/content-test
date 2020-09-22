<template>
    <layout>
        <h2>{{$page.crc.title}}</h2>
        <g-image v-for="imagen in $page.crc.galeria" :src="imagen.file.url" :key="imagen.id" class="galeria"/>
        <div>
          <p> <span class="marca-text"> MARCA</span>  {{$page.crc.brand.companyName}}</p>
          <h3>Caracteristicas: {{$page.crc.descripcion}}</h3>
          <p>Calificacion: {{$page.crc.raiting}} / 5</p>
          <a :href="$page.crc.fichaTecnica.file.url"> <p>Ficha Tecnica</p> </a>
        </div>
    </layout>
</template>

<page-query>
query Crc ($path: String!) {
  crc: contentfulCrc (path: $path) {
    slug
    id
	title
    nombreCorto
    descripcion
    raiting
    brand{
      companyName
    }
    galeria{
      id
      file{
        url
      }
    }
    fichaTecnica{
      file{
        url
      }
    }
  }
  
}
</page-query>
