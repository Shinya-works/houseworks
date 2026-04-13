<template>
  <div>
    <h1>Tasks</h1>
    <div>
      <p>{{ tasks }}</p>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useTaskStore } from "@/store/task";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
// Stateをリアクティブに抽出
const { tasks } = storeToRefs(taskStore);
</script>