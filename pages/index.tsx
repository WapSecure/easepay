import Image from 'next/image'
import NavBar from './components/NavBar'
import HeroBody from './components/Hero'
import HeroFooter from './components/HeroFooter.tsx'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroBody />
      <HeroFooter />
    </div>
  )
}
