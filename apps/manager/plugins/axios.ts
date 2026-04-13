import axios from 'axios'

import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseApiUrl

  const axiosInstance = axios.create({
    baseURL
  })
  nuxtApp.provide('axios', axiosInstance)
})