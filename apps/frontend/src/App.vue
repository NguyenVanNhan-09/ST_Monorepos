<template>
  <router-view/>
</template>

<script setup>

</script>

<style>

:root {
  --primary: #f97316;
  --primary-foreground: #ffffff;
}

.bg-primary {
  background-color: var(--primary);
}

.text-primary-foreground {
  color: var(--primary-foreground);
}

.hover\:bg-primary\/90:hover {
  background-color: rgba(249, 115, 22, 0.9);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--primary);
}
</style>