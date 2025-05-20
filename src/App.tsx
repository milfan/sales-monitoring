import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { itemsMenu, publicRoutes } from './routes'
import Layout from './components/Layout/Layout'
import { extractRoutes } from './utils/getRoutesFromMenu'

const App: React.FC = () => {

  const flatRoutes = extractRoutes(itemsMenu);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public route (no layout) */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Protected routes (with layout) */}
        <Route path="*" element={<Layout />}>
          {flatRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App