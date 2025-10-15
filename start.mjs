#!/usr/bin/env node

/**
 * Script pour lancer automatiquement l'application React et ouvrir le navigateur
 */

import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('🚀 Lancement de Magnifique React App...')
console.log('🌟 Application construite avec React, TypeScript et Tailwind CSS')
console.log('')

// Lancer le serveur de développement
const devServer = spawn('npm', ['run', 'dev'], {
  cwd: join(__dirname),
  stdio: 'inherit',
  shell: true
})

devServer.on('error', (error) => {
  console.error('❌ Erreur lors du lancement:', error)
})

devServer.on('exit', (code) => {
  console.log(`\n👋 Serveur fermé avec le code ${code}`)
})

// Gérer la fermeture propre
process.on('SIGINT', () => {
  console.log('\n🛑 Arrêt du serveur...')
  devServer.kill('SIGINT')
})