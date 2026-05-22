import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { About } from "@/components/about"
import { Specialties } from "@/components/specialties"
import { Differentials } from "@/components/differentials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Cta } from "@/components/cta"

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Specialties />
      <Differentials />
      <Contact />
      <Cta />
      <Footer />
    </main>
  )
}
