import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import { useGlobalContext } from './context'
import Gallery from './Gallery'
const App = () => {
  const { isDarkTheme } = useGlobalContext()
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default App
