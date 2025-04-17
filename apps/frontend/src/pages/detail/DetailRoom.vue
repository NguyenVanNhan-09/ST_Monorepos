<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main content -->
    <main class="flex-grow">
      <!-- Breadcrumb navigation -->
      <div class="bg-gray-50 py-3 border-b">
        <div class="container mx-auto px-4">
          <div class="flex items-center text-sm text-gray-600">
            <a href="/" class="hover:text-primary transition-colors">Home</a>
            <ChevronRightIcon class="h-4 w-4 mx-2"/>
            <a href="#" class="hover:text-primary transition-colors">Gyms</a>
            <ChevronRightIcon class="h-4 w-4 mx-2"/>
            <span class="text-gray-900 font-medium">{{ gym.name }}</span>
          </div>
        </div>
      </div>

      <!-- Hero section with main image -->
      <div class="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <img :src="gym.heroImage" :alt="gym.name" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div class="container mx-auto px-4 py-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between text-white">
              <div>
                <div class="flex items-center mb-2">
                  <span class="px-2 py-1 bg-primary text-white text-xs font-bold rounded">{{ gym.price }}</span>
                  <div class="flex items-center ml-3">
                    <StarIcon class="h-5 w-5 text-yellow-400"/>
                    <span class="ml-1 font-semibold">{{ gym.rating }}</span>
                    <span class="ml-1 text-sm opacity-80">({{ gym?.reviews?.length }} reviews)</span>
                  </div>
                </div>
                <h1 class="text-3xl md:text-4xl font-bold">{{ gym.name }}</h1>
                <div class="flex items-center mt-2">
                  <MapPinIcon class="h-5 w-5 mr-1"/>
                  <span>{{ gym.address }}</span>
                </div>
              </div>
              <div class="mt-4 md:mt-0 flex space-x-3">
                <button
                    class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center">
                  <CalendarIcon class="h-4 w-4 mr-2"/>
                  Book Now
                </button>
                <button
                    class="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors flex items-center">
                  <PhoneIcon class="h-4 w-4 mr-2"/>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left column - Main info -->
          <div class="lg:col-span-2 space-y-8">
            <!-- About section -->
            <section>
              <h2 class="text-2xl font-bold mb-4">About {{ gym.name }}</h2>
              <p class="text-gray-700 mb-4">{{ gym.description }}</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div class="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <ClockIcon class="h-6 w-6 text-primary mb-2"/>
                  <span class="text-sm font-medium">Open Hours</span>
                  <span class="text-xs text-gray-500">{{ gym.hours }}</span>
                </div>
                <div class="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <SquareFeetIcon class="h-6 w-6 text-primary mb-2"/>
                  <span class="text-sm font-medium">Facility Size</span>
                  <span class="text-xs text-gray-500">{{ gym.size }}</span>
                </div>
                <div class="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <UsersIcon class="h-6 w-6 text-primary mb-2"/>
                  <span class="text-sm font-medium">Members</span>
                  <span class="text-xs text-gray-500">{{ gym.members }}+</span>
                </div>
                <div class="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <CalendarIcon class="h-6 w-6 text-primary mb-2"/>
                  <span class="text-sm font-medium">Established</span>
                  <span class="text-xs text-gray-500">{{ gym.established }}</span>
                </div>
              </div>
            </section>

            <!-- Amenities section -->
            <section>
              <h2 class="text-2xl font-bold mb-4">Amenities</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(amenity, index) in gym.amenities" :key="index"
                     class="flex items-center p-3 border rounded-md">
                  <CheckCircleIcon class="h-5 w-5 text-primary mr-2"/>
                  <span>{{ amenity }}</span>
                </div>
              </div>
            </section>

            <!-- Class schedule section -->
            <section>
              <h2 class="text-2xl font-bold mb-4">Class Schedule</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse">
                  <thead>
                  <tr class="bg-gray-50">
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Time
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Monday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">
                      Tuesday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">
                      Wednesday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">
                      Thursday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Friday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">
                      Saturday
                    </th>
                    <th class="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-b">Sunday
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(schedule, index) in gym.schedule" :key="index" class="border-b">
                    <td class="py-3 px-4 font-medium">{{ schedule.time }}</td>
                    <td class="py-3 px-4">{{ schedule.monday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.tuesday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.wednesday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.thursday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.friday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.saturday || '-' }}</td>
                    <td class="py-3 px-4">{{ schedule.sunday || '-' }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Trainers section -->
            <section>
              <h2 class="text-2xl font-bold mb-4">Our Trainers</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(trainer, index) in gym.trainers" :key="index" class="border rounded-lg overflow-hidden">
                  <img :src="trainer.image" :alt="trainer.name" class="w-full h-48 object-cover"/>
                  <div class="p-4">
                    <h3 class="font-bold text-lg">{{ trainer.name }}</h3>
                    <p class="text-primary text-sm mb-2">{{ trainer.specialty }}</p>
                    <p class="text-gray-600 text-sm">{{ trainer.bio }}</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Photo gallery -->
            <section>
              <h2 class="text-2xl font-bold mb-4">Photo Gallery</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(photo, index) in gym.gallery" :key="index"
                     class="relative h-40 cursor-pointer overflow-hidden rounded-lg">
                  <img :src="photo" alt="Gym photo"
                       class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                </div>
              </div>
            </section>

            <!-- Reviews section -->
            <section>
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-2xl font-bold">Reviews</h2>
                <button
                    class="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Write a Review
                </button>
              </div>

              <div class="space-y-6">
                <div v-for="(review, index) in gym?.reviews?.slice(0, 3)" :key="index" class="border-b pb-6">
                  <div class="flex items-start">
                    <img :src="review.userImage" :alt="review.userName" class="w-10 h-10 rounded-full mr-4"/>
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <h4 class="font-medium">{{ review.userName }}</h4>
                        <span class="text-gray-500 text-sm">{{ review.date }}</span>
                      </div>
                      <div class="flex items-center my-1">
                        <div class="flex">
                          <StarIcon v-for="i in 5" :key="i" :class="[
                            'h-4 w-4',
                            i <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                          ]"/>
                        </div>
                      </div>
                      <p class="text-gray-700 text-sm">{{ review.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mt-6" v-if="gym?.reviews?.length > 3">
                <button
                    class="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                  View All {{ gym.reviews.length }} Reviews
                </button>
              </div>
            </section>
          </div>

          <!-- Right column - Sidebar -->
          <div class="space-y-6">
            <!-- Membership options -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-50 p-4 border-b">
                <h3 class="font-bold text-lg">Membership Options</h3>
              </div>
              <div class="p-4 space-y-4">
                <div v-for="(plan, index) in gym.membershipPlans" :key="index"
                     class="pb-4 border-b last:border-0 last:pb-0">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-medium">{{ plan.name }}</h4>
                    <span class="font-bold text-primary">{{ plan.price }}/{{ plan.period }}</span>
                  </div>
                  <p class="text-gray-600 text-sm mb-3">{{ plan.description }}</p>
                  <button
                      @click="handlePayment(gym, plan)"
                      class="w-full py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    Select Plan
                  </button>
                </div>
              </div>
            </div>

            <!-- Contact information -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-50 p-4 border-b">
                <h3 class="font-bold text-lg">Contact Information</h3>
              </div>
              <div class="p-4 space-y-3">
                <div class="flex items-start">
                  <MapPinIcon class="h-5 w-5 text-primary mr-3 mt-0.5"/>
                  <div>
                    <p class="text-gray-800">{{ gym.address }}</p>
                    <button class="text-primary text-sm hover:underline mt-1 flex items-center">
                      <MapIcon class="h-4 w-4 mr-1"/>
                      View on map
                    </button>
                  </div>
                </div>
                <div class="flex items-center">
                  <PhoneIcon class="h-5 w-5 text-primary mr-3"/>
                  <p class="text-gray-800">{{ gym.phone }}</p>
                </div>
                <div class="flex items-center">
                  <MailIcon class="h-5 w-5 text-primary mr-3"/>
                  <p class="text-gray-800">{{ gym.email }}</p>
                </div>
                <div class="flex items-center">
                  <GlobeIcon class="h-5 w-5 text-primary mr-3"/>
                  <a href="#" class="text-primary hover:underline">Visit website</a>
                </div>
              </div>
            </div>

            <!-- Business hours -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-50 p-4 border-b">
                <h3 class="font-bold text-lg">Business Hours</h3>
              </div>
              <div class="p-4">
                <div class="space-y-2">
                  <div v-for="(day, index) in gym.businessHours" :key="index" class="flex justify-between">
                    <span class="font-medium">{{ day.day }}</span>
                    <span>{{ day.hours }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon,
  Phone as PhoneIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  CheckCircle as CheckCircleIcon,
  Map as MapIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
} from 'lucide-vue-next';
import {useRoute, useRouter} from "vue-router";
import {gymsServices} from "@/services/GymService.js";
import formatDate from "@/utils/formatDate.js";

const route = useRoute();
const router = useRouter();

// Custom icon for square feet
const SquareFeetIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  `
};

const gym = ref({});

const fetchGymDetails = async (id) => {
  try {
    const res = await gymsServices.getGymById(id)
    gym.value = res?.data
  } catch (error) {
    console.error("Error fetching gym details:", error);
  }
};

const handlePayment = (gym, selsectMembershipPlans) => {
  const now = new Date();
  const startDate = formatDate(now);

  let endDate = new Date(now);
  switch (selsectMembershipPlans?.period) {
    case 'Monthly':
      endDate.setMonth(endDate.getMonth() + 1);
      break;
    case 'Quarterly':
      endDate.setMonth(endDate.getMonth() + 3);
      break;
    case 'Yearly':
      endDate.setFullYear(endDate.getFullYear() + 1);
      break;
    default:
      console.error("Invalid membership period");
      return;
  }
  endDate = formatDate(endDate);

  const newPayment = {
    name: gym.name,
    address: gym.address,
    heroImage: gym.heroImage,
    rating: gym.rating,
    hours: gym.hours,
    reviews: gym.reviews,
    plan: {
      ...selsectMembershipPlans,
      startDate: startDate,
      endDate: endDate
    },
  }
  localStorage.setItem('payment', JSON.stringify(newPayment))
  router.push({name: 'Payment',})
}


onMounted(() => {
  const gymId = route.params.id;
  fetchGymDetails(gymId);
});
</script>

<style>
:root {
  --primary: #f97316;
  --primary-foreground: #ffffff;
}

.bg-primary {
  background-color: var(--primary);
}

.text-primary {
  color: var(--primary);
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

.border-primary {
  border-color: var(--primary);
}

.hover\:bg-primary:hover {
  background-color: var(--primary);
}
</style>