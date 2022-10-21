import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Banner from './components/Banner';
import Title from './components/Title';
import Product from './components/Product';

const App = () => {
  return (
    <View style={styles.container}>
      <Banner 
        img={require('./assets/images/banners/banner.png')}
        title="Lorem ipsum dolor sit amet consectetur."
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
        />
      <Title title="Diabetic Diet" />
      <ScrollView horizontal={true} style={styles.slider}>
        <Product img={require('./assets/images/products/image1.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
        <Product img={require('./assets/images/products/image2.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
        <Product img={require('./assets/images/products/image3.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
        <Product img={require('./assets/images/products/image4.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
      </ScrollView>
    </View>
  );
};

export default App;
