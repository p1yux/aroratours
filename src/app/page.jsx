import HomePage from "@/components/custom/HomePage/HomePage";
import NavBar from "@/components/custom/navbars/mainNav/NavBar";
export default function Home() {
  return(
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mt-16">
        <HomePage />
      </main>
    </div>
  ) 
}
