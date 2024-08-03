<script scoped setup lang="ts">
import TitleStrip from '../components/TitleStrip.vue';
import Card from '../components/Card.vue';
/**
      title="" description=""
 */
const blogs = [
    {
        title: '¿Listo para el despegue? Descubre el secreto detrás del éxito', 
        imgUrl:'/img/b1_Pequeño.jpg', 
        author:'Lourdes Ayala',
        releaseDate: '25/06/2024',
        description: 'Aprende las estrategias probadas que te llevarán a alcanzar tus meta',
    },
    {
        title: 'Tu problema tiene solución: ¡Descúbrela aquí!', 
        imgUrl:'/img/b2_Pequeño.jpg', 
        author:'Lourdes Ayala',
        releaseDate: '23/06/2024',
        description: '¿Cansado de luchar con tu problema? Te presentamos la solución definitiva para que puedas vivir una vida más plena y feliz.',
    },
    {
        title: '¡Atención! Esto es lo que necesitas saber sobre la Ontologia', 
        imgUrl:'/img/b3_Pequeño.jpg', 
        author:'Lourdes Ayala',
        releaseDate: '23/06/2024',
        description: 'Información esencial y consejos prácticos sobre la ontologia que te ayudarán a tomar mejores decisiones y alcanzar tus objetivos.',
    },
    {
        title: 'Exito en la vida cotidiana: Cómo impacta en nuestras vidas y qué podemos aprende', 
        imgUrl:'/img/b5_Pequeño.jpg', 
        author:'Lourdes Ayala',
        releaseDate: '25/06/2024',
        description: 'Explora la presencia del exito en nuestro día a día y reflexiona sobre cómo influye en nuestras decisiones, acciones y perspectivas.',
    },
    {
        title: "Coaching Ontológico: Tu Transformación Personal",
        releaseDate: "17/01/2024",
        description: "Descubre el poder del ser para alcanzar tus metas",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b6_Pequeño.jpg'
    },
    {
        title: "Superación Personal con Coaching Ontológico",
        releaseDate: "22/03/2024",
        description: "Despierta tu potencial y crea la vida que deseas",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b7_Pequeño.jpg'
    },
    {
        title: "Coaching Ontológico para el Éxito Profesional",
        releaseDate: "05/04/2024",
        description: "Liderazgo, comunicación y resultados extraordinarios",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b8_Pequeño.jpg'
    },
    {
        title: "Transforma tu Vida con Coaching Ontológico",
        releaseDate: "12/06/2024",
        description: "Herramientas para el bienestar y la plenitud",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b9_Pequeño.jpg'
    },
    {
        title: "El Arte del Coaching Ontológico",
        releaseDate: "28/02/2024",
        description: "Conversaciones poderosas para el cambio",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b10_Pequeño.jpg'
    },
    {
        title: "Coaching Ontológico: Más Allá del Hacer",
        releaseDate: "15/05/2024",
        description: "El poder del ser para lograr resultados",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b11_Pequeño.jpg'
    },
    {
        title: "Superación Personal y Profesional",
        releaseDate: "08/08/2024",
        description: "Coaching ontológico para alcanzar tus metas",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b12_Pequeño.jpg'
    },
    {
        title: "Despierta tu Potencial con Coaching",
        releaseDate: "03/09/2024",
        description: "Ontología para el crecimiento personal",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b13_Pequeño.jpg'
    },
    {
        title: "Coaching Ontológico para Líderes",
        releaseDate: "19/11/2024",
        description: "Inspira, transforma y logra resultados",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b14_Pequeño.jpg'
    },
    {
        title: "El Camino del Coaching Ontológico",
        releaseDate: "07/10/2024",
        description: "Autoconocimiento, transformación y empoderamiento",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b15_Pequeño.jpg'
    },
    {
        title: "Conversaciones que Transforman",
        releaseDate: "24/12/2024",
        description: "Coaching ontológico para el cambio",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b16_Pequeño.jpg'
    },
    {
        title: "Coaching Ontológico: El Arte de Ser",
        releaseDate: "01/02/2024",
        description: "Descubre tu esencia y crea tu realidad",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b17_Pequeño.jpg'
    },
    {
        title: "Superación Personal: Un Viaje Interior",
        releaseDate: "27/07/2024",
        description: "Coaching ontológico para el autodescubrimiento",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b18_Pequeño.jpg'
    },
    {
        title: "Coaching Ontológico para Emprendedores",
        releaseDate: "10/04/2024",
        description: "Visión, acción y resultados extraordinarios",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b19_Pequeño.jpg'
    },
    {
        title: "Transforma tu Comunicación",
        releaseDate: "30/05/2024",
        description: "Coaching ontológico para relaciones auténticas",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b20_Pequeño.jpg'
    },
    {
        title: "Liderazgo Ontológico",
        releaseDate: "13/09/2024",
        description: "Inspira, motiva y crea equipos de alto rendimiento",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b21_Pequeño.jpg'
    },
    {
        title: "Bienestar y Plenitud",
        releaseDate: "06/11/2024",
        description: "Coaching ontológico para una vida plena",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b22_Pequeño.jpg'
    },
    {
        title: "El Poder de la Conversación",
        releaseDate: "02/01/2024",
        description: "Coaching ontológico para el cambio",
        author: 'Lourdes Ayala',
        imgUrl: '/img/b23_Pequeño.jpg'
    },
]
</script>
<template class="p-2 m-2">
    <TitleStrip><template #titleString>Ideas</template></TitleStrip>
    <div class="grid sm:grid-cols-5 grid-cols-1 gap-2 my-4 ms-1 justify-center">
        <div v-for="(blog) in blogs">
            <Card :title="blog.title" :img-url="blog.imgUrl" author-name="Lourdes Ayala" :published-date="blog.releaseDate" />
        </div>
    </div>
</template>
<style scoped></style>