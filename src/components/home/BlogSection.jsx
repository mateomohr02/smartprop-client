import FeaturedBlogPosts from "./FeaturedBlogPosts"

const BlogSection = () => {
  return (
    <div className="bg-contrast flex flex-col items-center pb-10" >
        <div className="w-full bg-primary py-10">
        <h2 className="text-center text-contrast text-2xl">¿Tenés dudas sobre el mercado inmobiliario?</h2>
        </div>
        <p className="text-center w-1/2 my-6">En nuestro blog te mantenemos al día con oportunidades del mercado y novedades del sector inmobiliario. Además, compartimos guías prácticas para acompañarte en cada paso de tus operaciones.</p>
        <FeaturedBlogPosts/>
    
    </div>
  )
}

export default BlogSection