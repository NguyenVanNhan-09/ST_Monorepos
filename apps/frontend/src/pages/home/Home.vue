<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import {
  Search as SearchIcon,
} from 'lucide-vue-next';
import {gymsServices} from "@/services/GymService.js";
import {useRoute, useRouter} from "vue-router";
import { IGym } from "@/interfaces";

const router = useRouter();
const route = useRoute();

const gyms = ref<IGym[]>([]);

const fetchGyms = async () => {
  try {
    const res = await gymsServices.getAllGyms();
    gyms.value = res?.data
  }catch (error) {
    console.error("Error fetching gyms:", error);
  }
}

const filters = ref([
  "All Gyms",
  "24/7 Access",
  "Pool",
  "Personal Training",
  "Group Classes",
  "Spa",
]);

const activeFilters = ref(["All Gyms"]);

const searchQuery = ref("");

const toggleFilter = (filter: string) => {
  if (filter === "All Gyms") {
    // If "All Gyms" is clicked, make it the only active filter
    activeFilters.value = ["All Gyms"];
  } else {
    // Remove "All Gyms" if it's active
    if (activeFilters.value.includes("All Gyms")) {
      activeFilters.value = activeFilters.value.filter(f => f !== "All Gyms");
    }

    // Toggle the selected filter
    if (activeFilters.value.includes(filter)) {
      activeFilters.value = activeFilters.value.filter(f => f !== filter);

      // If no filters are active, activate "All Gyms"
      if (activeFilters.value.length === 0) {
        activeFilters.value = ["All Gyms"];
      }
    } else {
      activeFilters.value.push(filter);
    }
  }
};

const filteredGyms = computed(() => {
  let result = gyms.value;

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(gym =>
        gym.name.toLowerCase().includes(query) ||
        gym.address.toLowerCase().includes(query) ||
        gym.amenities.some(amenity => amenity.toLowerCase().includes(query))
    );
  }

  // Apply amenity filters
  if (!activeFilters.value.includes("All Gyms")) {
    result = result.filter(gym =>
        activeFilters.value.some(filter =>
            gym.amenities.includes(filter)
        )
    );
  }

  return result;
});

const handleDetailGym = (gymId) => {
  router.push({
    name: "DetailRoom",
    params: { id: gymId },
  });
};

onMounted(() => {
  fetchGyms();
});
</script>

<template>
  <main class="flex-grow">
    <div class="container mx-auto py-8 px-4">
      <h1 class="text-3xl font-bold mb-6">Find Your Perfect Gym</h1>

      <!-- Search and filter section -->
      <div class="relative mb-8">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon class="h-5 w-5 text-gray-400" />
        </div>
        <input
            v-model="searchQuery"
            type="search"
            placeholder="Search by name, location, or amenities..."
            class="pl-10 w-full md:w-1/2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <!-- Filter tags -->
      <div class="flex flex-wrap gap-2 mb-8">
          <span
              v-for="(filter, index) in filters"
              :key="index"
              @click="toggleFilter(filter)"
              :class="[
              'px-2.5 py-0.5 rounded-full text-sm font-medium cursor-pointer transition-colors',
              activeFilters.includes(filter)
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            ]"
          >
            {{ filter }}
          </span>
      </div>

      <!-- Gym list -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="gym in filteredGyms"
            :key="gym._id"
            class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            @click="handleDetailGym(gym._id)"
        >
          <div class="relative h-48 w-full">
            <img :src="gym.heroImage" :alt="gym.name" class="w-full h-full object-cover" />
          </div>
          <div class="p-4 flex flex-col justify-between">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-xl font-semibold">{{ gym.name }}</h2>
              <span class="text-sm font-medium">{{ gym.price }}</span>
            </div>
            <div>
              <p class="text-gray-500 text-sm mb-2">{{ gym.address }}</p>
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  <svg
                      class="w-4 h-4 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <span class="text-sm font-semibold">{{ gym.rating }}</span>
                </div>
                <span class="text-xs text-gray-500 ml-2">(123 reviews)</span>
              </div>
              <div class="flex flex-wrap gap-1 mb-4">
                <span
                    v-for="(amenity, index) in gym.amenities"
                    :key="index"
                    class="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {{ amenity }}
                </span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <button
                  class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
              >
                View Details
              </button>
              <button
                  class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>