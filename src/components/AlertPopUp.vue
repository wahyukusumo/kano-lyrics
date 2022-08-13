<template>
  <div v-if="alertOpen" class="container mx-auto top-20 sticky z-40 px-4">
    <div class="bg-teal-200/90 text-teal-700 border-1 border-teal-500 px-6 py-4 rounded mb-4 animate-sliding">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"></i>
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="capitalize">teal!</b> This is a teal alert
      </span>
      <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
        <span>×</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertOpen: false
    };
  },
};
</script>