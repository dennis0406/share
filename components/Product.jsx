import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../styles';

const Product = props => {
  const saleStyle = typeof props.sale == 'number' ? styles.product__sale__number: styles.product__sale;
  return (
    <View style={ props.bottom ? styles.productBot: styles.product}>
      <Image source={props.img} style={styles.product__img} />
      <View style={props.bottom ? styles.product__contentBottom : styles.product__content}>
        <Text
          style={(styles.product__name, styles.black)}
          numberOfLines={2}
          ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text style={props.price ? styles.product__price : styles.none}>
          {props.price || ''}
        </Text>
        <Text style={props.starNumber ? styles.star : styles.none}>
          {props.starNumber || ''}
        </Text>
      </View>
      <Text style={props.sale ? saleStyle : styles.none}>
        {typeof props.sale == 'number' ? props.sale + '% off' : 'sale'}
      </Text>
    </View>
  );
};

export default Product;
