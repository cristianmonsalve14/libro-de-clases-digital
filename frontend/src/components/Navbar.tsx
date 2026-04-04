const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-blue-600">Libro de Clases</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#" className="hover:text-blue-600">Cursos</a>
          <a href="#" className="hover:text-blue-600">Perfil</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
