import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": "/src/lib",
      "@data": "/src/data",
      "@components": "/src/components",
      "@util": "/src/util",
      "@page": "/src/page",
      "@layout": "/src/layout",
      "@hooks": "/src/hooks",
      "@constants": "/src/constants",
      "@common": "/src/common",
      "@asset": "/src/asset"
    },
  },
})
