import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,ScrollView,Button} from 'react-native';


class MovieDetail extends React.Component {
  render() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={{
                uri: this.props.route.params.movie.imageUrl,
              }} style={{height: 250, width: 250}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {this.props.route.params.movie.name}
            </Text>
            {/* <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View> */}
          </View>
          <Text style={style.detailsText}>
          {this.props.route.params.movie.overview}
          </Text>
          {/* <View style={{marginTop: 40, marginBottom: 40}}>
            <Button title="Add To Cart" />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
          }
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'grey',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
  },
});

export default MovieDetail;

