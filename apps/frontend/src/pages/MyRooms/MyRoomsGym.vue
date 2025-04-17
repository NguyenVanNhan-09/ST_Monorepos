<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main content -->
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 class="text-3xl font-bold">Phòng tập của tôi</h1>
            <p class="text-gray-600 mt-1">Quản lý các phòng tập bạn đã đăng ký thành viên</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button
                class="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center">
              <PlusIcon class="h-4 w-4 mr-2"/>
              Tìm phòng tập mới
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="registeredGyms.length === 0" class="bg-white border rounded-lg p-8 text-center">
          <BuildingIcon class="h-16 w-16 mx-auto text-gray-300 mb-4"/>
          <h2 class="text-xl font-semibold mb-2">Chưa đăng ký phòng tập nào</h2>
          <p class="text-gray-600 mb-6">Bạn chưa đăng ký thành viên tại bất kỳ phòng tập nào.</p>
          <button class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Khám phá phòng tập
          </button>
        </div>

        <!-- Registered gyms -->
        <div v-else>
          <!-- Filters -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button
                @click="activeFilter = 'all'"
                :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              ]"
            >
              Tất cả
            </button>
            <button
                @click="activeFilter = 'active'"
                :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                activeFilter === 'active'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              ]"
            >
              Đang hoạt động
            </button>
            <button
                @click="activeFilter = 'expiring'"
                :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                activeFilter === 'expiring'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              ]"
            >
              Sắp hết hạn
            </button>
            <button
                @click="activeFilter = 'expired'"
                :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                activeFilter === 'expired'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              ]"
            >
              Đã hết hạn
            </button>
          </div>

          <!-- Gym cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="gym in filteredGyms" :key="gym.id"
                 class="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <!-- Status badge -->
              <div class="relative">
                <img :src="gym.image" :alt="gym.name" class="w-full h-48 object-cover"/>
                <div class="absolute top-3 right-3">
                  <span
                      :class="[
                      'px-2 py-1 text-xs font-bold rounded-full',
                      gym.status === 'active' ? 'bg-green-500 text-white' :
                      gym.status === 'expiring' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    ]"
                  >
                    {{
                      gym.status === 'active' ? 'Đang hoạt động' :
                          gym.status === 'expiring' ? 'Sắp hết hạn' :
                              'Đã hết hạn'
                    }}
                  </span>
                </div>
              </div>

              <div class="p-4">
                <h3 class="font-bold text-lg mb-1">{{ gym.name }}</h3>
                <p class="text-gray-600 text-sm mb-3">{{ gym.address }}</p>

                <div class="space-y-3 mb-4">
                  <div class="flex items-start">
                    <CreditCardIcon class="h-5 w-5 text-primary mr-2 mt-0.5"/>
                    <div>
                      <p class="font-medium">{{ gym.membershipType }}</p>
                      <p class="text-sm text-gray-600">
                        {{
                          gym.status !== 'expired' ? `Hết hạn: ${gym.endDate}` : `Đã hết hạn từ: ${gym.endDate}`
                        }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <ClockIcon class="h-5 w-5 text-primary mr-2 mt-0.5"/>
                    <div>
                      <p class="font-medium">Giờ mở cửa</p>
                      <p class="text-sm text-gray-600">{{ gym.hours }}</p>
                    </div>
                  </div>
                </div>

                <!-- Membership card/QR code -->
                <div v-if="gym.status !== 'expired'" class="bg-gray-50 p-3 rounded-lg mb-4 border">
                  <div class="flex justify-between items-center mb-2">
                    <h4 class="font-medium text-sm">Thẻ thành viên</h4>
                    <button class="text-primary text-sm hover:underline">Xem</button>
                  </div>
                  <div class="flex items-center">
                    <div class="bg-white p-2 rounded-md border mr-3">
                      <QrCodeIcon class="h-10 w-10 text-gray-800"/>
                    </div>
                    <div>
                      <p class="text-xs text-gray-600">ID Thành viên</p>
                      <p class="font-medium">{{ gym.membershipId }}</p>
                    </div>
                  </div>
                </div>

                <!-- Action buttons -->
                <div class="flex flex-col space-y-2">
                  <button
                      v-if="gym.status !== 'expired'"
                      class="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                      @click="viewGym(gym.id)"
                  >
                    Xem chi tiết phòng tập
                  </button>
                  <button
                      v-if="gym.status === 'expired'"
                      class="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                      @click="renewMembership(gym.id)"
                  >
                    Gia hạn thành viên
                  </button>
                  <button
                      v-if="gym.status === 'expiring'"
                      class="w-full px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                      @click="renewMembership(gym.id)"
                  >
                    Gia hạn thành viên
                  </button>
                  <button
                      v-if="gym.status === 'active'"
                      class="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                      @click="bookClass(gym.id)"
                  >
                    Đặt lớp học
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Membership benefits -->
        <div class="mt-12 bg-gray-50 rounded-lg p-6 border">
          <h2 class="text-2xl font-bold mb-6">Quyền lợi thành viên</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-5 rounded-lg border">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <BuildingIcon class="h-5 w-5 text-primary"/>
                </div>
                <h3 class="font-bold">Truy cập đa phòng tập</h3>
              </div>
              <p class="text-gray-600 text-sm">Sử dụng thẻ thành viên của bạn để truy cập tất cả các phòng tập trong
                mạng lưới của chúng tôi.</p>
            </div>

            <div class="bg-white p-5 rounded-lg border">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <UsersIcon class="h-5 w-5 text-primary"/>
                </div>
                <h3 class="font-bold">Huấn luyện viên chuyên nghiệp</h3>
              </div>
              <p class="text-gray-600 text-sm">Được hướng dẫn bởi các huấn luyện viên chuyên nghiệp với nhiều năm kinh
                nghiệm.</p>
            </div>

            <div class="bg-white p-5 rounded-lg border">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <PercentIcon class="h-5 w-5 text-primary"/>
                </div>
                <h3 class="font-bold">Ưu đãi đặc biệt</h3>
              </div>
              <p class="text-gray-600 text-sm">Nhận các ưu đãi đặc biệt và giảm giá cho các dịch vụ bổ sung như spa,
                massage và dinh dưỡng.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {
  Menu as MenuIcon,
  Dumbbell as DumbbellIcon,
  Plus as PlusIcon,
  Building as BuildingIcon,
  Clock as ClockIcon,
  CreditCard as CreditCardIcon,
  QrCode as QrCodeIcon,
  Users as UsersIcon,
  Percent as PercentIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon
} from 'lucide-vue-next';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Active filter
const activeFilter = ref('all');

// Mock data for registered gyms
const registeredGyms = ref([
  {
    id: 1,
    name: 'Elite Fitness Center',
    address: '789 Broadway, New York, NY 10003',
    image: 'https://placehold.co/600x400',
    status: 'active',
    membershipType: 'Premium Membership',
    endDate: '31/12/2023',
    membershipId: 'EFC-10045872',
    hours: '5:00 AM - 11:00 PM',
    startDate: '01/01/2023'
  },
  {
    id: 2,
    name: 'PowerLift Gym',
    address: '456 Park Ave, New York, NY 10022',
    image: 'https://placehold.co/600x400',
    status: 'expiring',
    membershipType: 'Basic Membership',
    endDate: '15/11/2023',
    membershipId: 'PLG-20087654',
    hours: '6:00 AM - 10:00 PM',
    startDate: '15/05/2023'
  },
  {
    id: 3,
    name: 'CrossFit Zone',
    address: '101 5th Ave, New York, NY 10003',
    image: 'https://placehold.co/600x400',
    status: 'expired',
    membershipType: 'Elite Membership',
    endDate: '30/09/2023',
    membershipId: 'CFZ-30012345',
    hours: '5:30 AM - 9:30 PM',
    startDate: '30/03/2023'
  },
  {
    id: 4,
    name: 'Urban Fitness',
    address: '202 Madison Ave, New York, NY 10016',
    image: 'https://placehold.co/600x400',
    status: 'active',
    membershipType: 'Annual Membership',
    endDate: '15/08/2024',
    membershipId: 'UF-40056789',
    hours: '24/7 Access',
    startDate: '15/08/2023'
  },
  {
    id: 5,
    name: 'Strength & Conditioning',
    address: '303 Lexington Ave, New York, NY 10016',
    image: 'https://placehold.co/600x400',
    status: 'active',
    membershipType: 'Premium Membership',
    endDate: '01/03/2024',
    membershipId: 'SC-50034567',
    hours: '6:00 AM - 11:00 PM',
    startDate: '01/03/2023'
  }
]);

// Computed properties for filtered gyms
const filteredGyms = computed(() => {
  if (activeFilter.value === 'active') {
    return registeredGyms.value.filter(gym => gym.status === 'active');
  } else if (activeFilter.value === 'expiring') {
    return registeredGyms.value.filter(gym => gym.status === 'expiring');
  } else if (activeFilter.value === 'expired') {
    return registeredGyms.value.filter(gym => gym.status === 'expired');
  }

  return registeredGyms.value;
});

// Function to view gym details
const viewGym = (gymId) => {
  alert(`Xem chi tiết phòng tập ${gymId}`);
};

// Function to renew membership
const renewMembership = (gymId) => {
  alert(`Gia hạn thành viên cho phòng tập ${gymId}`);
};

// Function to book a class
const bookClass = (gymId) => {
  alert(`Đặt lớp học tại phòng tập ${gymId}`);
};
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