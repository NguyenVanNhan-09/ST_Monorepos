import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/home/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DetailRoom from "@/pages/detail/DetailRoom.vue";
import MyRoomsGym from "@/pages/MyRooms/MyRoomsGym.vue";
import GymPayment from "@/pages/payment/GymPayment.vue";
import PaymentSuccess from "@/pages/PaymentSuccess/PaymentSuccess.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "default",
            component: DefaultLayout,
            children: [
                {
                    path: "",
                    name: "home",
                    component: Home,
                },
                {
                    path: 'detai/:id',
                    name: "DetailRoom",
                    component: DetailRoom
                },
                {
                    path: 'my-room',
                    name: "MyRooms",
                    component: MyRoomsGym
                },
                {
                    path: "payment",
                    name: "Payment",
                    component: GymPayment
                },
                {
                    path: "payment-success",
                    name: "PaymentSuccess",
                    component: PaymentSuccess
                }
            ]
        }
    ]
})

export default router