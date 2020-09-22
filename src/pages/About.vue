<template>
  <Layout>
    <h1>About us</h1>
    <div>
      <div>
        <BlogC :posts="$page.blog.edges" />
      </div>
    </div>
  </Layout>
</template>


<page-query>
query{
 blog: allContentfulPost{
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


<script>
import BlogC from '~/components/BlogC.vue'


export default {
  metaInfo: {
    title: 'About us'
  },
  components:{
    BlogC
  }
}
</script>
