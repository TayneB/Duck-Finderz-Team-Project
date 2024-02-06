import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
   
Auth0Provider is a component that has a hook that provides
all authentication operations*
TODO: replace the empty strings below with your own domain, clientId, and audience
*/
    <Auth0Provider
      domain="manaia-2023-mike.au.auth0.com"
      clientId="ax4o2Rw6mLhnMriZa3dwwHGsnf7tEknY"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'http://duck-finderz/api',
      }}
    >
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </Auth0Provider>
  )
})

// const root = createRoot(document.getElementById('app') as HTMLElement)
// root.render(
//   /**

// Auth0Provider is a component that has a hook that provides
// all authentication operations*
// TODO: replace the empty strings below with your own domain, clientId, and audience
// */
//   <Auth0Provider
//     domain="manaia-2023-mike.au.auth0.com"
//     clientId="ax4o2Rw6mLhnMriZa3dwwHGsnf7tEknY"
//     authorizationParams={{
//       redirect_uri: window.location.origin,
//       audience: 'http://duck-finderz/api',
//     }}
//   >
//     <ChakraProvider>
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={router} />
//         <ReactQueryDevtools />
//       </QueryClientProvider>
//     </ChakraProvider>
//   </Auth0Provider>
// )
