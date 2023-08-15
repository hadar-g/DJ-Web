
import Link from "next/link"

export default function Home() {
    return (
    <div className="flex min-h-screen flex-col  ">
          <title>Home Page</title>
     <div className = "justify-center ">
      <h1 className=" justify-center flex text-5xl mt-10">Welcome to the Song Request Website</h1>
      <h2 className = " text-3xl my-10 justify-center flex pt-12"> here is information about some stuff </h2>

      <p className="px-5 text-xl pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus erat justo, egestas facilisis erat bibendum nec. Praesent quis malesuada purus. Fusce fermentum justo in nisi porttitor, ac lacinia ipsum tincidunt. Fusce mattis, enim ut pretium varius, magna urna consectetur purus, ut facilisis enim nulla vitae leo. Phasellus elit libero, iaculis a pellentesque et, molestie eu mi. Morbi scelerisque libero sed nulla consequat, eget placerat risus sodales. Vestibulum maximus suscipit dolor eu tristique. Phasellus quis orci pretium, cursus massa at, imperdiet est. Suspendisse scelerisque vestibulum mi, sit amet mollis felis scelerisque id. Duis a suscipit turpis. Vivamus non mi et tellus convallis ullamcorper nec eu eros</p>

      <div className="flex justify-center">
      <Link className = "home-screen-button mr-10 ml-auto" href="/user">User</Link>
     <Link className = "home-screen-button ml-10 mr-auto" href="/dj">DJ</Link>
      </div>

     </div>
    </div>
  )
}
