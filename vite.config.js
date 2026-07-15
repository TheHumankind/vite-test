import { defineConfig } from 'vite'
import { resolve } from 'path'
import { globSync } from 'glob'

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync('**/*.html').map((file) => [
          file.replace('.html', ''),
          resolve(__dirname, file)
        ])
      )
    }
  }
})