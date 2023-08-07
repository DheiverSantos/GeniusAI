/* // Importando a biblioteca axios
import axios from 'axios'

import { client } from '@gradio/client'
import { log } from 'console'

async function run() {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png',
      { responseType: 'blob' },
    )
    const exampleImage = response.data
    log(exampleImage)

    const app = await client(
      'https://dheiver-segmento-de-angio-coronariana-v2.hf.space/',
    )
    const result = await app.predict('/predict', [
      exampleImage, // blob in 'Angiograma:' Image component
      'SE-RegUNet 4GF', // string (Option from: ['SE-RegUNet 4GF', 'SE-RegUNet 16GF', 'AngioNet', 'EffUNet++ B5', 'Reg-SA-UNet++', 'UNet3+']) in 'Modelo' Dropdown component
    ])

    log(result)
  } catch (error) {
    console.error('Erro ao executar a função run:', error)
  }
}

run()
 */

import axios from 'axios'
import { client } from '@gradio/client'

async function run() {
  const response = await axios.get(
    'https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png',
    { responseType: 'blob' },
  )
  const exampleImage = response.data
  const app = await client(
    'https://dheiver-segmento-de-angio-coronariana-v2.hf.space/',
  )
  const result = await app.predict('/predict', [
    exampleImage, // blob in 'Angiograma:' Image component
    'SE-RegUNet 4GF', // string (Option from: ['SE-RegUNet 4GF', 'SE-RegUNet 16GF', 'AngioNet', 'EffUNet++ B5', 'Reg-SA-UNet++', 'UNet3+']) in 'Modelo' Dropdown component
  ])

  console.log(result?.data)
}

run()
