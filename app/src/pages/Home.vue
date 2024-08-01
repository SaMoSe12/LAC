<script setup lang="ts">
  import Button from '../components/Button.vue'
  import TitleStrip from '../components/TitleStrip.vue'
  import Card from '../components/Card.vue';
</script>
<template>
  <section id="home-header" class="bg-neutral-100 dark:bg-neutral-700 w-svw h-fit">
    <div class="flex flex-col mt-4 sm:mt-0 sm:flex-row sm:justify-evenly sm:items-center sm:mx-4 overflow-hidden">
      <div id="left-header" class="size-full flex items-center justify-center flex-col gap-3">
        <figure class="h-fit">
          <img src="/img/lulu-home.jpg" class="rounded-full object-center object-cover h-28 w-28 sm:w-40 sm:h-40 shadow-md shadow-slate-700" alt="Lourdes Ayala" />
        </figure>
        <div>
          <p class="font-sans font-black select-none bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Coach</p>
          <p class="font-sans font-black select-none bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Ontologico</p>
          <p class="font-sans font-black select-none bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Profesional</p>
        </div>
        
        <Button :hasIcon="false"><template #innerButton>Contactame</template></Button>
      </div>
      <div
        id="right-header"
        class="sm:h-[450px] sm:w-[450px] w-svw h-[250px] sm:bg-fixed bg-local mt-10 sm:mt-0 sm:flex-row"
      ></div>
    </div>
  </section>
  <section id="home-que-es-coaching-ontologico" class="bg-salmon-400 dark:bg-salmon-800 text-neutral-100 h-fit mt-0 sm:mt-12">
    <div class="p-1 sm:p-3 m-1 sm:m-3 flex flex-shrink-0 sm:flex-row flex-col gap-6 justify-center">
      <div>
        <p class="font-sans font-bold text-4xl mb-5 text-neutral-100 mx-auto sm:w-3/4 w-full drop-shadow">Que es el Coaching Ontologico</p>
        <p class="font-sans font-medium text-neutral-200 sm:w-3/4 w-full text-left mx-auto mb-3">
          El coaching ontológico es un enfoque transformador que va más allá de las metas y acciones superficiales. Se adentra en el ser, explorando cómo interpretamos el mundo, nos relacionamos y actuamos. A través de conversaciones poderosas y reflexiones profundas, el coaching ontológico nos invita a cuestionar nuestras creencias limitantes y a descubrir nuevas posibilidades. No se trata solo de cambiar lo que hacemos, sino de transformarnos en quienes somos, abriéndonos a una vida más plena y auténtica.
        </p>
        <p class="font-sans font-medium text-neutral-200 sm:w-3/4 w-full  text-left mx-auto">
          En lugar de centrarse en soluciones rápidas, el coaching ontológico se sumerge en las conversaciones que nos permiten observar cómo nuestros pensamientos, emociones y lenguaje moldean nuestra realidad. Nos ayuda a identificar patrones de comportamiento recurrentes y a desafiar las interpretaciones que nos limitan. A través de este proceso de autodescubrimiento, podemos rediseñar nuestra forma de ser y relacionarnos con el mundo, generando cambios significativos y duraderos en nuestra vida personal y profesional.
        </p>
      </div>
      <div class="w-full flex items-center">
        <figure>
          <img src="/img/que-es-el-coaching-ontologico.jpg" class="rounded" alt="Que es el coaching ontologico">
        </figure>
      </div>
    </div>
  </section>
  <section id="home-about-me">
    <div class="flex flex-col sm:flex-row justify-around items-center my-4">
      <div class="bg-salmon-500 rounded-md overflow-hidden w-fit mx-2">
        <figure>
          <img src="/img/lulu-about-me-no-bg-sm.png" alt="Lourdes ">
        </figure>
      </div>
      <div class="sm:w-fit w-full mx-3 ">
        <p class=" text-3xl font-bold bg-clip-text bg-gradient-to-bl from-babyBlue-400 via-fuchsia-600 to-salmon-300 text-transparent">
          Quien soy?
        </p>
        <p>
          Con más de una década de experiencia en el campo del coaching ontológico, Lourdes Ayala se ha consolidado como una figura líder a nivel nacional. Su profundo conocimiento y enfoque transformador han impactado a innumerables profesionales en su búsqueda por alcanzar la excelencia en sus carreras. A través de múltiples conferencias y talleres, ha compartido su sabiduría y herramientas prácticas, inspirando a otros a descubrir su máximo potencial. Lourdes Ayala representa la voz y el apoyo para aquellos que aspiran a crecer y prosperar en su trayectoria laboral, guiándolos hacia el éxito personal y profesional.
        </p>
        <p class="text-salmon-400 text-3xl font-important text-right">Lourdes Ayala</p>
      </div>
    </div>
    <div>
      
    </div>
  </section>
  <section id="home-ideasStrip">
    <TitleStrip><template #titleString>Ideas</template></TitleStrip>
    <div class="grid gap-4 md:grid-cols-5 sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 p-6">
      <Card title=" ¿Listo para el despegue? Descubre el secreto detrás del éxito " description=" Aprende las estrategias probadas que te llevarán a alcanzar tus meta" img-url="/img/b1.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="Tu problema tiene solución: ¡Descúbrela aquí!" description=" ¿Cansado de luchar con tu problema? Te presentamos la solución definitiva para que puedas vivir una vida más plena y feliz." img-url="/img/b2.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="¡Atención! Esto es lo que necesitas saber sobre la Ontologia" description="Información esencial y consejos prácticos sobre la ontologia que te ayudarán a tomar mejores decisiones y alcanzar tus objetivos." img-url="/img/b3.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="Un viaje a través de tu ser" description="Sumérgete en el universo de ti y descubre los secretos, curiosidades y maravillas." img-url="/img/b4.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="Exito en la vida cotidiana: Cómo impacta en nuestras vidas y qué podemos aprende" description="Explora la presencia del exito en nuestro día a día y reflexiona sobre cómo influye en nuestras decisiones, acciones y perspectivas." img-url="/img/b5.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
    </div>
  </section>
  <section id="home-contacto">
    <div class="bg-slate-500 w-full h-full flex flex-col justify-around sm:flex-row gap-4 sm:p-14 p-5">
      <div class="bg-neutral-200 p-2 sm:p-5 sm:w-1/3 w-full rounded-md">
        <form>

        </form>
      </div>
      <div class="bg-neutral-200 p-2 sm:p-5 flex-col flex items-center justify-around sm:w-1/3 w-full rounded-md">
        <p class="text-neutral-900 font-semibold text-2xl">Información de Contacto</p>
        <a href="mailto:info@mentoringontologico.com" target="_blank" class="text-salmon-400 decoration-none font-medium flex cursor-pointer items-center justify-stretch w-full sm:w-4/5">
          <span class="mr-2">
            <v-icon name="fa-envelope" scale="2"/>
          </span>
          <span>info@mentoringontologico.com</span>
        </a>
        <p class="text-salmon-400 font-medium flex items-center justify-stretch w-full sm:w-4/5">
          <span class="mr-2">
            <v-icon name="fa-mobile" scale="2"/>
          </span>
          <span>
            +52 (322) 1235-678
          </span>
        </p>
        <hr/>
        <div class="flex flex-row gap-2 text-salmon-400">
          <v-icon name="co-facebook" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-instagram" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-twitter" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-youtube" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-linkedin" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#right-header {
  clip-path: polygon(100% 100%, 0% 50%, 100% 0%);
  background-image: url('/img/home-bg-left.jpg');
  background-size: 900px;
  background-position: center left;
}
@media screen and (max-width: 450px){
  #right-header{
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    background-size: cover;
    background-position: bottom center;
    background-attachment: fixed;

  }
}
</style>
