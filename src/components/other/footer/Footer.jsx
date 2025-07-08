import Author from "./Author"
import NavigationFooter from "./NavigationFooter"
import Social from "./Social"

const Footer = () => {
  return (
    <div
    className="bg-primary w-full flex flex-col text-contrast p-4"
    >
        <NavigationFooter/>

        <Social/>

        <Author/>

    </div>
  )
}

export default Footer