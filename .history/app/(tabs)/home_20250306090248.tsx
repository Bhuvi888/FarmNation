import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import ProductCard from '@/components/ProductCard';

// Mock Data for Market Prices & Products
const marketPrices = [
  { id: "1", crop: "Wheat", price: "₹2100/quintal" },
  { id: "2", crop: "Rice", price: "₹2900/quintal" },
  { id: "3", crop: "Corn", price: "₹1750/quintal" },
];

const productListings = [
  {
    id: "101",
    name: "Organic Tomatoes",
    price: "₹35/kg",
    originalPrice: "₹40/kg",
    image: "https://via.placeholder.com/150",
    seller: "Green Fields Farms",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "102",
    name: "Fresh Potatoes",
    price: "₹28/kg",
    originalPrice: "₹32/kg",
    image: "https://via.placeholder.com/150",
    seller: "Sunrise Agro",
    rating: 4.2,
    reviews: 95,
  },
  {
    id: "103",
    name: "Organic Carrots",
    price: "₹50/kg",
    originalPrice: "₹55/kg",
    image: "https://via.placeholder.com/150",
    seller: "Farm Fresh Produce",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: "104",
    name: "Premium Onions",
    price: "₹42/kg",
    originalPrice: "₹45/kg",
    image: "https://via.placeholder.com/150",
    seller: "Golden Harvest",
    rating: 4.3,
    reviews: 110,
  },
];

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate data fetch delay
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <SafeAreaView className="bg-primary h-full px-4">
      <FlatList
        data={productListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6">
            <Text className="text-2xl font-semibold text-white">Welcome to FarmNation</Text>
            <SearchInput initialQuery="" />

            {/* Market Prices Section */}
            <View className="bg-gray-800 p-4 rounded-xl">
              <Text className="text-lg text-white font-semibold mb-2">Market Prices</Text>
              {marketPrices.map((item) => (
                <View key={item.id} className="flex-row justify-between py-1">
                  <Text className="text-white">{item.crop}</Text>
                  <Text className="text-yellow-400">{item.price}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Products Available" subtitle="Add your first listing now!" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
