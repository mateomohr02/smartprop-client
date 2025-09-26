import FeaturedPostCard from "./FeaturedPostCard"

const FeaturedBlogPosts = () => {
  return (
    <div className="bg-contrast flex flex-col items-center">
      <h2 className="text-center text-secondary text-2xl whitespace-nowrap mb-10">
        Publicaciones de Nuestro Blog
      </h2>
    <div className="flex no-wrap gap-6">
      <FeaturedPostCard/>
      <FeaturedPostCard/>
      <FeaturedPostCard/>
    </div>
    </div>
  )
}

export default FeaturedBlogPosts