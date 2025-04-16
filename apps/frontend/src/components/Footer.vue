<script setup>
import {
  Dumbbell as DumbbellIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon
} from 'lucide-vue-next';
</script>

<template>
  <!-- Footer -->
  <footer class="bg-gray-800 text-white mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <DumbbellIcon class="h-6 w-6 text-primary"/>
            <span class="font-bold text-xl">FitFinder</span>
          </div>
          <p class="text-gray-400 text-sm">
            Tìm phòng tập phù hợp nhất cho hành trình rèn luyện sức khỏe của bạn. So sánh giá cả, tiện ích và đánh giá
            để đưa ra lựa chọn tốt nhất.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Liên kết nhanh</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Trang chủ</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Phòng tập</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Lớp học</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Huấn luyện viên</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Hỗ trợ</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Bản tin</h3>
          <p class="text-gray-400 text-sm mb-4">Đăng ký nhận bản tin của chúng tôi để cập nhật thông tin và ưu đãi mới
            nhất.</p>
          <div class="flex">
            <input
                type="email"
                placeholder="Email của bạn"
                class="px-3 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button class="bg-primary text-white px-3 py-2 text-sm rounded-r-md hover:bg-primary/90 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">© {{ new Date().getFullYear() }} FitFinder. Tất cả quyền được bảo lưu.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <FacebookIcon class="h-5 w-5"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon class="h-5 w-5"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon class="h-5 w-5"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <YoutubeIcon class="h-5 w-5"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>