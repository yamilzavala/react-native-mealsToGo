import React, { useState } from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const RestaurantSaferArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const RestaurantViewSearch = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;
const RestaurantViewList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantsScreen = () => (
  <RestaurantSaferArea>
    <RestaurantViewSearch>
      <Searchbar />
    </RestaurantViewSearch>
    <RestaurantViewList>
      <RestaurantInfo restaurant={{ name: "Pizzas Resto" }} />
    </RestaurantViewList>
  </RestaurantSaferArea>
);
