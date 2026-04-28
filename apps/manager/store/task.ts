import { defineStore, useNuxtApp } from '#imports'
import snakecaseKeys from 'snakecase-keys'
import camelcaseKeys from 'camelcase-keys'

export const useTaskStore = defineStore("tasks", {
  // 取得した値を格納する変数（今回はIPアドレスが文字列で入る）
  state: () => {
    return{
      task: { id: '' },
      tasks: [
        {
          id: '',
          title: '',
          created_at: '',
        },
      ]
    }
  },

  actions: {
    async fetchTasks() {
      const { $axios } = useNuxtApp();
      const response = await $axios.get(
        "v1/tasks",
      );
      const data = camelcaseKeys(response.data?.data, { deep: true })
      this.tasks = data
    }
  }
}); 