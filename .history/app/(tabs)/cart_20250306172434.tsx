import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function OrdersScreen() {
  const { orders, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#4CAF50" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 px-4">
      <Text className="text-2xl font-bold text-center my-4">Orders</Text>

      {orders.length === 0 ? (
        <Text className="text-center text-gray-500 mt-10">No orders found.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <View className="border p-4 my-2 rounded-lg bg-gray-100">
              <Text className="font-bold text-lg">Order ID: {item.$id}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Total: ₹{item.totalAmount}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
