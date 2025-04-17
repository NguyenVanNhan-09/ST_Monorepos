<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main content -->
    <main class="flex-grow bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <!-- Breadcrumb -->
        <div class="flex items-center text-sm text-gray-600 mb-6">
          <a href="#" class="hover:text-primary transition-colors">Trang chủ</a>
          <ChevronRightIcon class="h-4 w-4 mx-2"/>
          <a href="#" class="hover:text-primary transition-colors">Phòng tập</a>
          <ChevronRightIcon class="h-4 w-4 mx-2"/>
          <a href="#" class="hover:text-primary transition-colors">Elite Fitness Center</a>
          <ChevronRightIcon class="h-4 w-4 mx-2"/>
          <span class="text-gray-900 font-medium">Thanh toán</span>
        </div>

        <h1 class="text-3xl font-bold mb-8">Thanh toán thành viên</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left column - Payment form -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Selected gym info -->
            <div class="bg-white rounded-lg border p-6">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/4 mb-4 md:mb-0">
                  <img :src="gym?.heroImage" alt="Elite Fitness Center"
                       class="w-full h-32 object-cover rounded-md"/>
                </div>
                <div class="md:w-3/4 md:pl-6">
                  <h2 class="text-xl font-bold">{{ gym?.name }}</h2>
                  <p class="text-gray-600 text-sm mb-2">{{ gym?.address }}</p>

                  <div class="flex items-center mt-3">
                    <div class="flex">
                      <StarIcon v-for="i in 5" :key="i" :class="[
                        'h-4 w-4',
                        i <= 4 ? 'text-yellow-400' : 'text-gray-300'
                      ]"/>
                    </div>
                    <span class="text-sm text-gray-600 ml-2">({{ gym?.reviews?.length }} đánh giá)</span>
                  </div>

                  <div class="mt-3 flex items-center">
                    <span
                        class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Đang mở cửa</span>
                    <span class="text-sm text-gray-600 ml-2">{{ gym?.hours }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personal information -->
            <div class="bg-white rounded-lg border p-6">
              <h2 class="text-lg font-bold mb-4">Thông tin cá nhân</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Họ</label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="formData.firstName"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nhập họ của bạn"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="formData.lastName"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nhập tên của bạn"
                  />
                </div>
              </div>

              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                />
              </div>

              <div class="mb-4">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập số điện thoại của bạn"
                />
              </div>

              <div>
                <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                <input
                    type="text"
                    id="address"
                    v-model="formData.address"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập địa chỉ của bạn"
                />
              </div>
            </div>

            <!-- Payment method -->
            <div class="bg-white rounded-lg border p-6">
              <h2 class="text-lg font-bold mb-4">Phương thức thanh toán</h2>

              <div class="space-y-4 mb-6">
                <div class="flex items-center">
                  <input
                      type="radio"
                      id="creditCard"
                      value="creditCard"
                      v-model="formData.paymentMethod"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label for="creditCard" class="ml-2 flex items-center">
                    <span class="font-medium mr-2">Thẻ tín dụng/ghi nợ</span>
                    <div class="flex space-x-1">
                      <img src="https://placehold.co/40x25" alt="Visa" class="h-6"/>
                      <img src="https://placehold.co/40x25" alt="Mastercard" class="h-6"/>
                      <img src="https://placehold.co/40x25" alt="Amex" class="h-6"/>
                    </div>
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                      type="radio"
                      id="bankTransfer"
                      value="bankTransfer"
                      v-model="formData.paymentMethod"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label for="bankTransfer" class="ml-2 flex items-center">
                    <span class="font-medium">Chuyển khoản ngân hàng</span>
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                      type="radio"
                      id="momo"
                      value="momo"
                      v-model="formData.paymentMethod"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label for="momo" class="ml-2 flex items-center">
                    <span class="font-medium mr-2">Ví MoMo</span>
                    <img src="https://placehold.co/40x25" alt="MoMo" class="h-6"/>
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                      type="radio"
                      id="vnpay"
                      value="vnpay"
                      v-model="formData.paymentMethod"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label for="vnpay" class="ml-2 flex items-center">
                    <span class="font-medium mr-2">VNPay</span>
                    <img src="https://placehold.co/40x25" alt="VNPay" class="h-6"/>
                  </label>
                </div>
              </div>

              <!-- Credit card form -->
              <div v-if="formData.paymentMethod === 'creditCard'" class="border-t pt-4">
                <div class="mb-4">
                  <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Số thẻ</label>
                  <div class="relative">
                    <input
                        type="text"
                        id="cardNumber"
                        v-model="formData.cardNumber"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                        placeholder="1234 5678 9012 3456"
                    />
                    <CreditCardIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-400"/>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="expiryDate" class="block text-sm font-medium text-gray-700 mb-1">Ngày hết hạn</label>
                    <input
                        type="text"
                        id="expiryDate"
                        v-model="formData.expiryDate"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label for="cvv" class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <div class="relative">
                      <input
                          type="text"
                          id="cvv"
                          v-model="formData.cvv"
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="123"
                      />
                      <HelpCircleIcon class="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-help"
                                      @mouseenter="showCvvTooltip = true" @mouseleave="showCvvTooltip = false"/>
                      <div v-if="showCvvTooltip"
                           class="absolute right-0 bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg w-48">
                        Mã bảo mật 3 chữ số ở mặt sau thẻ của bạn
                        <div
                            class="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="cardholderName" class="block text-sm font-medium text-gray-700 mb-1">Tên chủ thẻ</label>
                  <input
                      type="text"
                      id="cardholderName"
                      v-model="formData.cardholderName"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nhập tên chủ thẻ"
                  />
                </div>
              </div>

              <!-- Bank transfer instructions -->
              <div v-if="formData.paymentMethod === 'bankTransfer'" class="border-t pt-4">
                <div class="bg-blue-50 p-4 rounded-md">
                  <h3 class="font-medium text-blue-800 mb-2">Hướng dẫn chuyển khoản</h3>
                  <ul class="text-sm text-blue-700 space-y-1">
                    <li>Ngân hàng: Vietcombank</li>
                    <li>Số tài khoản: 1234567890</li>
                    <li>Chủ tài khoản: CÔNG TY TNHH FITFINDER</li>
                    <li>Nội dung: [Họ tên] thanh toán Elite Fitness</li>
                  </ul>
                  <p class="text-sm text-blue-700 mt-2">Sau khi chuyển khoản, vui lòng chụp màn hình giao dịch và gửi
                    qua email: support@fitfinder.com</p>
                </div>
              </div>

              <!-- E-wallet instructions -->
              <div v-if="formData.paymentMethod === 'momo' || formData.paymentMethod === 'vnpay'" class="border-t pt-4">
                <p class="text-sm text-gray-600 mb-4">
                  Bạn sẽ được chuyển đến trang thanh toán {{ formData.paymentMethod === 'momo' ? 'MoMo' : 'VNPay' }} sau
                  khi xác nhận đơn hàng.
                </p>
              </div>
            </div>

            <!-- Terms and conditions -->
            <div class="bg-white rounded-lg border p-6">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                      type="checkbox"
                      id="terms"
                      v-model="formData.termsAccepted"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-medium text-gray-700">Tôi đồng ý với <a href="#"
                                                                                         class="text-primary hover:underline">Điều
                    khoản sử dụng</a> và <a href="#" class="text-primary hover:underline">Chính sách bảo mật</a></label>
                  <p class="text-gray-500 mt-1">Bằng cách đánh dấu vào ô này, bạn đồng ý với các điều khoản và điều kiện
                    của chúng tôi, bao gồm cả chính sách hoàn tiền và hủy thành viên.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right column - Order summary -->
          <div class="space-y-6">
            <div class="bg-white rounded-lg border p-6 sticky top-24">
              <h2 class="text-lg font-bold mb-4">Tóm tắt đơn hàng</h2>

              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Gói thành viên</span>
                  <span class="font-medium">{{ gym?.plan?.name }} / {{ gym?.plan?.period }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Thời hạn</span>
                  <span class="font-medium">
                    {{
                      gym?.plan?.period === "Monthly" ?
                          '1 tháng' :
                          gym?.plan?.period === "Quarterly" ?
                              '3 tháng' :
                              gym?.plan?.period === "Yearly" ?
                                  '1 năm' : ""
                    }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ngày bắt đầu</span>
                  <span class="font-medium">{{ gym?.plan?.startDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ngày kết thúc</span>
                  <span class="font-medium">{{ gym?.plan?.endDate }}</span>
                </div>
              </div>

              <div class="border-t border-b py-4 my-4 space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Giá gói</span>
                  <span class="font-medium">{{ gym?.plan?.price }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Phí đăng ký</span>
                  <span class="font-medium">$0</span>
                </div>
                <div class="flex justify-between text-green-600">
                  <span>Giảm giá</span>
                  <span>${{ gym?.plan?.rabais }}</span>
                </div>
              </div>

              <div class="flex justify-between font-bold text-lg mb-6">
                <span>Tổng cộng</span>
                <span>${{ gym?.plan?.price - gym?.plan?.rabais }}</span>
              </div>

              <div class="space-y-4">
                <button
                    @click="submitPayment"
                    :disabled="!formData.termsAccepted"
                    :class="[
                    'w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center',
                    formData.termsAccepted
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  ]"
                >
                  <LockIcon class="h-4 w-4 mr-2"/>
                  Thanh toán an toàn
                </button>

                <div class="text-center text-sm text-gray-500">
                  <p>Thanh toán an toàn & bảo mật</p>
                  <div class="flex justify-center items-center mt-2 space-x-2">
                    <LockIcon class="h-4 w-4 text-gray-400"/>
                    <ShieldIcon class="h-4 w-4 text-gray-400"/>
                  </div>
                </div>
              </div>

              <div class="mt-6 border-t pt-4">
                <h3 class="font-medium mb-2">Cần hỗ trợ?</h3>
                <div class="flex items-center text-sm text-gray-600">
                  <PhoneIcon class="h-4 w-4 mr-2 text-primary"/>
                  <span>Hotline: 1900 1234</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 mt-1">
                  <MailIcon class="h-4 w-4 mr-2 text-primary"/>
                  <span>Email: support@fitfinder.com</span>
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
import {markRaw, ref} from 'vue';
import {
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  CreditCard as CreditCardIcon,
  HelpCircle as HelpCircleIcon,
  Lock as LockIcon,
  Shield as ShieldIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from 'lucide-vue-next';
import {gymsServices} from "@/services/GymService.js";
import {useRouter} from "vue-router";

// CVV tooltip state
const router = useRouter()
const showCvvTooltip = ref(false);
const gym = ref(
    localStorage.getItem('payment')
        ? JSON.parse(localStorage.getItem('payment'))
        : null
)

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  paymentMethod: 'creditCard',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardholderName: '',
});

// Submit payment function
const submitPayment = async () => {
  try {
    if (!formData.value.termsAccepted) {
      alert('Vui lòng đồng ý với điều khoản và điều kiện để tiếp tục.');
      return;
    }
    const newPaymentData = {
      info: {
        ...formData.value,
      },
      gym: {
        address: gym.value?.address,
        heroImage: gym.value?.heroImage,
        hours: gym.value?.hours,
        name: gym.value?.name,
        rating: gym.value?.rating,
        totalPrice: gym.value?.plan?.price - gym.value?.plan?.rabais,
        plan: gym.value?.plan,
      }
    };
    const res = await gymsServices.ceateAuthGym(newPaymentData);
    alert('Thanh toán thành công!');
    router.push({name: 'PaymentSuccess', params: {id: res.data._id}});
  } catch (error) {
    console.error('Error submitting payment:', error);
  }
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