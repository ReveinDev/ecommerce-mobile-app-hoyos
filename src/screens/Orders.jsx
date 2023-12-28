import { FlatList } from "react-native";
import React from "react";
import { OrdersItem } from "../components/OrdersItem";
import orders from "../data/orders.json";

export const Orders = () => {
  const renderOrderItem = ({ item }) => {
    const total = item.items.reduce(
      (acc, item) => (acc += item.precio * item.cantidad),
      0
    );
    return <OrdersItem order={item} total={total} />;
  };

  return (
    <FlatList
      data={orders}
      renderItem={renderOrderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
