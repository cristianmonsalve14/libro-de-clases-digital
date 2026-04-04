import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
            <h1 className="text-4xl font-black text-blue-600 mb-4">
              Libro de Clases Digital
            </h1>
            <p className="text-gray-600 text-lg">
              Bienvenido
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Comenzar Proyecto
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App