const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 px-4 py-6">
      <div className="text-sm uppercase tracking-wide text-gray-500 mb-6">Menú</div>
      <ul className="space-y-2 text-gray-700">
        <li>
          <a href="#" className="block rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600">
            Mis clases
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600">
            Asignaturas
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600">
            Configuración
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
