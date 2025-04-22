<template>
  <div class="flex flex-col min-h-screen">

    <!-- Main content -->
    <main class="flex-grow bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <!-- Success message -->
        <div class="max-w-3xl mx-auto bg-white rounded-lg border shadow-sm overflow-hidden">
          <!-- Success header -->
          <div class="bg-green-50 p-6 border-b">
            <div class="flex flex-col items-center text-center">
              <div class="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon class="h-8 w-8 text-green-600"/>
              </div>
              <h1 class="text-2xl font-bold text-gray-900 mb-2">Thanh toán thành công!</h1>
              <p class="text-gray-600">Cảm ơn bạn đã đăng ký thành viên tại {{ infoAuthGym?.gym?.name }}</p>
            </div>
          </div>

          <!-- Order details -->
          <div class="p-6">
            <div class="mb-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-bold">Chi tiết đơn hàng</h2>
              </div>

              <div class="bg-gray-50 rounded-lg border p-4 mb-6">
                <div class="flex flex-col md:flex-row">
                  <div class="md:w-1/4 mb-4 md:mb-0">
                    <img src="https://placehold.co/300x200" alt="Elite Fitness Center"
                         class="w-full h-32 object-cover rounded-md"/>
                  </div>
                  <div class="md:w-3/4 md:pl-6">
                    <h3 class="text-lg font-bold">{{ infoAuthGym?.gym?.name }}</h3>
                    <p class="text-gray-600 text-sm mb-2">{{ infoAuthGym?.gym?.address }}</p>

                    <div class="mt-3 flex items-center">
                      <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Đang mở cửa</span>
                      <span class="text-sm text-gray-600 ml-2">{{ infoAuthGym?.gym?.hours }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Gói thành viên</span>
                  <span class="font-medium">{{ infoAuthGym?.gym?.plan?.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Thời hạn</span>
                  <span
                      class="font-medium">{{
                      infoAuthGym?.gym?.plan?.period === "Monthly" ?
                          "1 Months" :
                          infoAuthGym?.gym?.plan?.period === "Quarterly" ?
                              "3 Months" :
                              infoAuthGym?.gym?.plan?.period === "Yearly" ?
                                  "1 Year" : ""
                    }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ngày bắt đầu</span>
                  <span class="font-medium">{{ infoAuthGym?.gym?.plan?.startDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ngày kết thúc</span>
                  <span class="font-medium">{{ infoAuthGym?.gym?.plan?.endDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Phương thức thanh toán</span>
                  <span class="font-medium">{{ infoAuthGym?.info?.paymentMethod }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ngày thanh toán</span>
                  <span class="font-medium">{{ infoAuthGym?.gym?.plan?.startDate }}</span>
                </div>
              </div>

              <div class="border-t border-b py-4 my-4 space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Giá gói</span>
                  <span class="font-medium">${{ infoAuthGym?.gym?.plan?.price }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Phí đăng ký</span>
                  <span class="font-medium">$0</span>
                </div>
                <div class="flex justify-between text-green-600">
                  <span>Giảm giá (10%)</span>
                  <span>-${{ infoAuthGym?.gym?.plan?.rabais }}</span>
                </div>
              </div>

              <div class="flex justify-between font-bold text-lg">
                <span>Tổng cộng</span>
                <span>${{ infoAuthGym?.gym?.totalPrice }}</span>
              </div>
            </div>

            <!-- Membership card -->
            <div class="mb-6">
              <h2 class="text-lg font-bold mb-4">Thẻ thành viên của bạn</h2>

              <div
                  class="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-20 -mr-20"></div>
                <div class="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -mb-10 -ml-10"></div>

                <div class="flex justify-between items-start mb-8 relative z-10">
                  <div class="flex items-center">
                    <DumbbellIcon class="h-8 w-8 mr-2"/>
                    <span class="font-bold text-xl">FitFinder</span>
                  </div>
                  <div>
                    <span class="font-bold text-lg">{{ infoAuthGym?.gym?.plan?.name }}</span>
                  </div>
                </div>

                <div class="mb-6 relative z-10">
                  <div class="text-sm opacity-80 mb-1">Thành viên</div>
                  <div class="font-bold text-xl">{{ infoAuthGym?.info?.lastName }} {{ infoAuthGym?.info?.firstName }}
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 relative z-10">
                  <div>
                    <div class="text-sm opacity-80 mb-1">ID Thành viên</div>
                    <div class="font-bold">{{infoAuthGym?.membershipId}}</div>
                  </div>
                  <div>
                    <div class="text-sm opacity-80 mb-1">Ngày hết hạn</div>
                    <div class="font-bold">{{ infoAuthGym?.gym?.plan?.endDate }}</div>
                  </div>
                </div>

                <div class="absolute bottom-6 right-6 bg-white p-2 rounded-md">
                  <QrCodeIcon class="h-12 w-12 text-primary"/>
                </div>
              </div>
            </div>

            <!-- Next steps -->
            <div class="mb-6">
              <h2 class="text-lg font-bold mb-4">Các bước tiếp theo</h2>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 class="font-medium">Tải ứng dụng di động</h3>
                    <p class="text-sm text-gray-600">Tải ứng dụng FitFinder để dễ dàng quản lý thành viên và đặt lớp
                      học.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 class="font-medium">Hoàn thành hồ sơ sức khỏe</h3>
                    <p class="text-sm text-gray-600">Cập nhật thông tin sức khỏe của bạn để nhận được lịch tập luyện phù
                      hợp.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 class="font-medium">Đặt buổi tập đầu tiên</h3>
                    <p class="text-sm text-gray-600">Đặt lịch buổi tập đầu tiên với huấn luyện viên cá nhân miễn
                      phí.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                  class="flex-1 px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center">
                <DownloadIcon class="h-5 w-5 mr-2"/>
                Tải hóa đơn
              </button>
              <a href="/my-room">
                <button
                    class="flex-1 px-4 py-3 border border-primary text-primary rounded-md hover:text-white transition-colors flex items-center justify-center">
                  <CalendarIcon class="h-5 w-5 mr-2"/>
                  Xem phòng tập
                </button>
              </a>
              <a href="/">
                <button
                    class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <HomeIcon class="h-5 w-5 mr-2"/>
                  Về trang chủ
                </button>
              </a>
            </div>
          </div>
        </div>

        <!-- Additional information -->
        <div class="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg border shadow-sm">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <MailIcon class="h-5 w-5 text-blue-600"/>
              </div>
              <h3 class="font-bold">Email xác nhận</h3>
            </div>
            <p class="text-sm text-gray-600">Chúng tôi đã gửi email xác nhận đến địa chỉ email của bạn với đầy đủ thông
              tin chi tiết.</p>
          </div>

          <div class="bg-white p-6 rounded-lg border shadow-sm">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <HeadphonesIcon class="h-5 w-5 text-green-600"/>
              </div>
              <h3 class="font-bold">Hỗ trợ khách hàng</h3>
            </div>
            <p class="text-sm text-gray-600">Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với đội ngũ hỗ trợ của
              chúng tôi.</p>
            <p class="text-sm font-medium mt-2">Hotline: 1900 1234</p>
          </div>

          <div class="bg-white p-6 rounded-lg border shadow-sm">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <SmartphoneIcon class="h-5 w-5 text-purple-600"/>
              </div>
              <h3 class="font-bold">Tải ứng dụng</h3>
            </div>
            <p class="text-sm text-gray-600">Tải ứng dụng FitFinder để quản lý thành viên và đặt lịch tập dễ dàng.</p>
            <div class="flex space-x-2 mt-3">
              <button class="px-3 py-1.5 bg-black text-white text-xs rounded flex items-center">
                <AppleIcon class="h-4 w-4 mr-1"/>
                App Store
              </button>
              <button class="px-3 py-1.5 bg-black text-white text-xs rounded flex items-center">
                <SmartphoneIcon class="h-4 w-4 mr-1"/>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {
  Dumbbell as DumbbellIcon,
  Check as CheckIcon,
  QrCode as QrCodeIcon,
  Download as DownloadIcon,
  Calendar as CalendarIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Headphones as HeadphonesIcon,
  Smartphone as SmartphoneIcon,
  Apple as AppleIcon,
} from 'lucide-vue-next';
import {gymsServices} from "@/services/GymService.js";
import {useRoute} from "vue-router";
import {PaymentResponse} from "@/interfaces/IAuthGym";

const route = useRoute();

const infoAuthGym = ref<PaymentResponse>()

const fetchById = async (id: string | number) => {
  try {
    const res = await gymsServices.getAuthGymById(id);
    if (res && res.data) {
      infoAuthGym.value = res.data;
    } else {
      console.error('No data found for the given ID');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(() => {
  const id = route.params.id;
  if (id) {
    fetchById(id);
  } else {
    console.error('ID not found in local storage');
  }
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

.from-primary {
  --tw-gradient-from: var(--primary);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-primary\/80 {
  --tw-gradient-to: rgba(249, 115, 22, 0.8);
}
</style>