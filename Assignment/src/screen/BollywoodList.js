import * as React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Carousel from '../component/carousel';
import {dummyData} from '../data/dummyData';
import {loadProduct, addData, Like_Movies, addWatchLater} from '../actions';

class HollywoodList extends React.Component {
  addData = bMovies => {
        this.props.dispatchLikeMovies(bMovies);
      };
    
      watchLaterMovies = bMovies => {
        this.props.dispatchWatchLaterMovies(bMovies);
      };

  render() {
    const {bMovies} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          <View>
            <Carousel data={dummyData} />
          </View>
          {bMovies.map((bMovies, index) =>(
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MovieDetail', {
                  movie: bMovies,
                });
              }}>
              <View style={styles.book} key={index}>
                <View>
                  <Image
                    style={styles.Image}
                    source={{
                      uri: bMovies.imageUrl,
                    }}></Image>
                </View>
                <View style={{padding: 5}}>
                  <View>
                    <Text style={styles.name}>{bMovies.name}</Text>
                    <TouchableOpacity
                      style={{position: 'absolute', right: 0}}
                      onPress={() => {
                        this.addData(bMovies);
                      }}>
                      <Image
                        source={require('../../../assets/heart.png')}
                        style={{
                          color: 'green',
                          height: 25,
                          width: 25,
                          alignSelf: 'flex-end',
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.details}> {bMovies.genre}</Text>
                  <Text style={styles.details}>{bMovies.imdbRating}</Text>
                  <Text style={styles.details}>{bMovies.director}</Text>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.watchLaterMovies(bMovies);
                      }}>
                      <Text>Watch Later</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  btnIcon: {height: 20, width: 20},
  Image: {
    flex: 1,
    width: 110,
    height: 122,
    marginLeft: 2,
    marginTop: 2,
    borderRadius:20
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
  },
  icon: {
    color: 'white',
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },

  book: {
    width: '90%',
    height: 130,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 10,
    // borderWidth: 0.2,
    borderColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'grey',
  },
});

const mapDispatchToProps = {
    dispatchLoadbMovies: bollywood => loadProduct(bollywood),
    dispatchLikeMovies: bollywood => Like_Movies(bollywood),
    dispatchWatchLaterMovies: bollywood => addWatchLater(bollywood),
  };
const mapStateToProps = state => ({
  bMovies: state.BollywoodReducer.bollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(HollywoodList);
