import { defineStore, useNuxtApp } from '#imports'
import { ref, onMounted } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  // 取得した値を格納する変数（今回はIPアドレスが文字列で入る）
  const tasks = ref<string | null>(null);

  // APIを呼び出す関数
  const fetchTasks = async () => {
    const { $axios } = useNuxtApp()
    try {
      // icanhazip.com はプレーンテキストを返すため、response.data に文字列が入ります
      const response = await $axios.get("v1/tasks");
    //   // 取得した値を tasks に代入（改行コードが含まれる場合があるため trim() しています）
      tasks.value = response.data;
    } catch (error) {
      console.error("データ取得に失敗しました:", error);
      tasks.value = "Error fetching data";
    }
  };

  // ストアが初期化された時に実行したい場合は onMounted などを使用
  // またはコンポーネント側から明示的に呼び出す形でもOKです
  onMounted(() => {
    fetchTasks();
  });

  return { 
    tasks,
    fetchTasks // 関数も返しておくと再取得が可能になります
  };
});