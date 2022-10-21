import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Banner from './components/Banner';
import Title from './components/Title';
import Product from './components/Product';
import {dataBot, dataTop} from './data';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner
          img={require('./assets/images/banners/banner.png')}
          title="Lorem ipsum dolor sit amet consectetur."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
        />
        <Title title="Diabetic Diet" />

        <ScrollView horizontal={true} style={styles.slider}>
          {dataTop.map((data, index) => {
            return <Product key={index} img={data.img} name={data.name} />;
          })}
        </ScrollView>

        <Title title="All products" />
        <View style={styles.product__list}>
          {dataBot.map((data, index) => {
            return (
              <Product
                key={index}
                bottom={true}
                img={data.img}
                starNumber={'⭐ ' + data.rate}
                price={'$' + data.price}
                name={data.name}
                sale={data.sale}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
