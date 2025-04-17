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
            <DumbbellIcon class="h-6 w-6 text-primary" />
            <span class="font-bold text-xl">FitFinder</span>
          </div>
          <p class="text-gray-400 text-sm">
            Find the perfect gym for your fitness journey. Compare prices, amenities, and reviews to make the best choice.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Gyms</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Classes</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Support</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Newsletter</h3>
          <p class="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <div class="flex">
            <input
                type="email"
                placeholder="Your email"
                class="px-3 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button class="bg-primary text-white px-3 py-2 text-sm rounded-r-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">© {{ new Date().getFullYear() }} FitFinder. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <FacebookIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <YoutubeIcon class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>