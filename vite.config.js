import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // define: {
  //   'process.env.OPENWEATHERMAP_API_URL': JSON.stringify(process.env.OPENWEATHERMAP_API_URL),
  //   'process.env.OPENWEATHERMAP_API_KEY': JSON.stringify(process.env.OPENWEATHERMAP_API_KEY)
  // }
})








// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   // const env = loadEnv(mode, process.cwd(), '');
//   return {
//     // define: {
//       // 'process.env.OPENWEATHERMAP_API_URL': JSON.stringify(env.OPENWEATHERMAP_API_URL),
//     //   'process.env.OPENWEATHERMAP_API_KEY': JSON.stringify(env.OPENWEATHERMAP_API_KEY),
//     // },
//     plugins: [react()],
//   }
// })
