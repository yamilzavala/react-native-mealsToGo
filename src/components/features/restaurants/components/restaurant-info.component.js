import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../spacer/spacer.component";
import {v4 as uuidv4} from 'uuid'

const Title = styled.Text`
  padding: 10px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;

const Addess = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-left: ${(props) => props.theme.sizes[0]};
`;

const Star = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]};
`;

const Open = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some name",
    address = "Some address",
    closeTemporarily = true,
    isOpen = true,
    rating = 4,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://d500.epimg.net/cincodias/imagenes/2021/01/07/lifestyle/1610013278_270303_1610013536_noticia_normal.jpg",
    ],
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Container>
            <Star>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Star>
            <Open>
              {closeTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSE TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large" key={uuidv4()}>              
                {isOpen ? <SvgXml xml={open} width={20} height={20} /> : null}
              </Spacer>
              <Spacer position="left" size="large" key={uuidv4()}>
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </Open>
          </Container>
          <Addess>{address}</Addess>
        </Info>
      </RestaurantCard>
    </View>
  );
};
