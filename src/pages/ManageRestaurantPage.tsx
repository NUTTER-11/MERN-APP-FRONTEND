import {
    useCreateMyRestaurant,
    useGetMyRestaurant,
    useGetMyRestaurantOrders,
    useUpdateMyRestaurant,
  } from "@/api/MyRestaurantApi";
  import OrderItemCard from "@/components/OrderItemCard";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";
  import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Placed", value: "placed", progressValue: 0 },
  {
    label: "Awaiting Restaurant Confirmation",
    value: "paid",
    progressValue: 25,
  },
  { label: "In Progress", value: "inProgress", progressValue: 50 },
  { label: "Out for Delivery", value: "outForDelivery", progressValue: 75 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];


  const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading: isCreateLoading } =
      useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } =
      useUpdateMyRestaurant();
  
    const { orders } = useGetMyRestaurantOrders();
  
    const isEditing = !!restaurant;//if there is a resturant  then editing is true
  
    return (
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
        </TabsList>
        <TabsContent
          value="orders"
          className="space-y-5 bg-gray-50 p-10 rounded-lg"
        >
          <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
          {orders?.map((order) => (
            <OrderItemCard order={order} />
          ))}
        </TabsContent>
        <TabsContent value="manage-restaurant">
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        </TabsContent>
      </Tabs>
    );
  };
  
  export default ManageRestaurantPage;