<template>
  <div v-if="alertShow" class="alert" :class="[alertType]">
    <h4>{{ alertMessage }}</h4>
  </div>
</template>

<script setup type="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import {EnumAlertMessage} from '@/store/modules/alertModule'

const store = useStore();

const alertShow = computed(() => store.state.alert.isShow);
const alertType = computed(() => {
  let type = store.state.alert.type;

  const types = {
    [EnumAlertMessage.ALERT_DEFAULT]: 'default',
    [EnumAlertMessage.ALERT_SUCCESS]: 'success',
    [EnumAlertMessage.ALERT_ERROR]: 'error'
  }

  let classType = 'alert-type-' + types[type];

  return classType;
});
const alertMessage = computed(() => store.state.alert.message);
</script>
