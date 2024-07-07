import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { server } from './src/main'

// https://vitejs.dev/config/
export default defineConfig({
//   server : {
//     proxy : {
//       '/api' : 'http://localhost:8000'
//     }
// },

  plugins: [react()],
})

