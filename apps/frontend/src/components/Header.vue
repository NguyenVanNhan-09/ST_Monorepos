<script setup>
import {
  Menu as MenuIcon,
  Dumbbell as DumbbellIcon,
} from 'lucide-vue-next';
import {ref} from "vue";

// Mobile menu state
const mobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

</script>

<template>
  <!-- Header -->
  <header class="bg-white border-b sticky top-0 z-10">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <DumbbellIcon class="h-6 w-6 text-primary" />
          <span class="font-bold text-xl">FitFinder</span>
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Trang chủ</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Phòng tập</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Lớp học</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Huấn luyện viên</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Giới thiệu</a>
        </nav>

        <div class="flex items-center space-x-4">
          <button class="hidden md:block px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors">
            Đăng nhập
          </button>
          <button class="hidden md:block px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Đăng ký
          </button>
          <MenuIcon class="h-6 w-6 md:hidden cursor-pointer" @click="toggleMobileMenu" />
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <nav class="flex flex-col space-y-3">
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Trang chủ</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Phòng tập</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Lớp học</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Huấn luyện viên</a>
          <a href="#" class="text-gray-700 hover:text-primary transition-colors">Giới thiệu</a>
        </nav>
        <div class="flex space-x-4 mt-4">
          <button class="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors">
            Đăng nhập
          </button>
          <button class="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>