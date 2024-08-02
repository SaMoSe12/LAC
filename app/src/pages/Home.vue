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
        <RouterLink to="/contacto">
          <Button :hasIcon="false"><template #innerButton>Contactame</template></Button>
        </RouterLink>
      </div>
      <div
        id="right-header"
        class="sm:h-[450px] sm:w-[450px] w-svw h-[250px] bg-fixed mt-10 sm:mt-0 sm:flex-row"
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
      <div class="bg-salmon-500 rounded-md overflow-hidden w-full mx-2">
        <figure>
          <img src="/img/lulu-about-me-no-bg.png" class="w-full" alt="Lourdes Ayala" sizes="(min-width: 700px) 720px, 100svw" srcset="/img/lulu-about-me-no-bg-sm.png 300w">
        </figure>
      </div>
      <div class="sm:w-fit w-1/2 mx-3 ">
        <p class=" text-3xl font-bold bg-clip-text bg-gradient-to-r from-salmon-400 via-fuchsia-600 to-salmon-300 text-transparent">
          Quien soy?
        </p>
        <p>
          Con más de una década de experiencia en el campo del coaching ontológico, Lourdes Ayala se ha consolidado como una figura líder a nivel nacional. Su profundo conocimiento y enfoque transformador han impactado a innumerables profesionales en su búsqueda por alcanzar la excelencia en sus carreras. A través de múltiples conferencias y talleres, ha compartido su sabiduría y herramientas prácticas, inspirando a otros a descubrir su máximo potencial. Lourdes Ayala representa la voz y el apoyo para aquellos que aspiran a crecer y prosperar en su trayectoria laboral, guiándolos hacia el éxito personal y profesional.
        </p>
        <p class="text-salmon-400 text-3xl font-important text-right">Lourdes Ayala</p>
        <div class="grid sm:grid-cols-2 grid-cols-1 w-full my-4">
          <div class="flex flex-col justify-start items-center">
            <span>
              <v-icon label="personal-path" class="drop-shadow-md">
                <v-icon name="bi-square-fill" scale="1.75" class="text-salmon-400"/>
                <v-icon name="gi-diamond-trophy" class="text-neutral-100"/>
              </v-icon>
            </span>
            <p class="text-lg font-medium">Filosofia y enfoque</p>
            <p>Mi filosofía como coach ontológica se basa en la premisa de que cada individuo posee un potencial ilimitado para crear la vida que desea. Mi enfoque se centra en generar un espacio de confianza y reflexión profunda, donde se puedan explorar sus creencias, emociones y patrones de comportamiento. A través de preguntas poderosas y escucha activa, los acompaño en un viaje de autodescubrimiento, empoderándolos para diseñar una vida más auténtica y alineada con sus valores.</p>
          </div>
          <div class="flex flex-col justify-start items-center">
            <span>
              <v-icon label="profesional-path" class="drop-shadow-md">
                <v-icon name="bi-square-fill" scale="1.75" class="text-salmon-400"/>
                <v-icon name="gi-book-aura" class="text-neutral-100"/>
              </v-icon>
            </span>
            <p class="text-lg font-medium">Pasión y compromiso</p>
            <p>Mi pasión por el coaching ontológico nace de la profunda convicción de que el cambio personal es la llave para una vida plena y significativa. Me comprometo a acompañar a mis clientes con empatía, respeto y profesionalismo en su camino de transformación. </p>
          </div>
        </div>
        <div class="w-fit mx-auto">
          <RouterLink to="/about">
            <Button :has-icon="false" inner-class="bg-salmon-400 hover:bg-salmon-600"><template #innerButton>Leer Más</template></Button>
          </RouterLink>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </section>
  <section id="home-ideasStrip">
    <TitleStrip><template #titleString>Ideas</template></TitleStrip>
    <div class="grid gap-3 sm:gap-4 sm:grid-cols-4 sm:grid-rows-1 grid-cols-1 p-6">
      <Card title=" ¿Listo para el despegue? Descubre el secreto detrás del éxito " description=" Aprende las estrategias probadas que te llevarán a alcanzar tus meta" img-url="/img/b1_Pequeño.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="Tu problema tiene solución: ¡Descúbrela aquí!" description=" ¿Cansado de luchar con tu problema? Te presentamos la solución definitiva para que puedas vivir una vida más plena y feliz." img-url="/img/b2_Pequeño.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="¡Atención! Esto es lo que necesitas saber sobre la Ontologia" description="Información esencial y consejos prácticos sobre la ontologia que te ayudarán a tomar mejores decisiones y alcanzar tus objetivos." img-url="/img/b3_Pequeño.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />
      <Card title="Exito en la vida cotidiana: Cómo impacta en nuestras vidas y qué podemos aprende" description="Explora la presencia del exito en nuestro día a día y reflexiona sobre cómo influye en nuestras decisiones, acciones y perspectivas." img-url="/img/b5_Pequeño.jpg" author-name="Lourdes Ayala" published-date="25/06/2024" />

    </div>
    <div class="flex items-center justify-center mb-6 sm:mb-10">
      <RouterLink to="/ideas">
        <Button :has-icon="false" inner-class="bg-salmon-400 hover:bg-salmon-600"><template #innerButton>Leer Más</template></Button>
      </RouterLink>
    </div>
  </section>
  <section id="home-contacto">
    <div class="bg-neutral-700 w-full h-full flex flex-col justify-around sm:flex-row gap-4 sm:p-14 p-5">
      <div class="bg-neutral-200 p-2 sm:p-5 sm:w-1/3 w-full h-full rounded-md m-6">
        <p class="text-neutral-900 font-semibold text-2xl text-center mb-5">Mandáme un mensaje</p>
        <form class="mb-4">
          <div class="mb-6">
            <!-- Nombre -->
             <label for="contact_nombre" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Nombre</label>
            <input type="text" name="nombre" id="contact_nombre" placeholder="Tu Nombre" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300">
          </div>
          <div class="mb-6">
            <!-- Correo -->
            <label for="contact_email" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Email</label>
            <input type="email" name="email" placeholder="Tu Email" id="contact_email" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300">
          </div>
          <div class="mb-3">
            <!-- Mensaje -->
            <label for="contact_message" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Mensaje</label>
            <textarea name="message" id="contact_message" placeholder="Tu Mensaje" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300"></textarea>
          </div>
          <div class="my-3 flex justify-center w-full">
            <Button :has-icon="true" icon="fa-envelope">
              <template #innerButton>Enviar</template>
            </Button>
          </div>
        </form>
      </div>
      <div class="bg-neutral-200 p-2 sm:p-5 flex-col flex items-center justify-around sm:w-1/3 w-full h-full rounded-md">
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
          <v-icon name="co-facebook"  class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-instagram" class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-twitter"   class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-youtube"   class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
          <v-icon name="co-linkedin"  class="hover:text-babyBlue-300 cursor-pointer" scale="1.7"/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#right-header {
  clip-path: polygon(100% 100%, 0% 50%, 100% 0%);
  background-image: url('/img/home-bg-left.jpg');
  background-size: 768px;
  background-position: center left;
}
@media screen and (max-width: 450px){
  #right-header{
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    background-size: cover;
    background-position: bottom center;

  }
}
</style>
