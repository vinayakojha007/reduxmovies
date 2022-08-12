import * as React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import Carousel from '../component/carousel';
import {dummyData} from '../data/dummyData';
import {addWatchLater, Like_Movies} from '../actions';

class HollywoodList extends React.Component {
  hollywood = () => {
    this.props.dispatchLoadhollywood(this.state);
  };

  LikeHmovies = hollywood => {
    this.props.dispatchLikeHMovies(hollywood);
  };

  watchLaterHMovies = hollywood => {
    this.props.dispatchWatchLaterHMovies(hollywood);
  };

  render() {
    const {hollywood} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          <View>
            <Carousel data={dummyData} />
          </View>
          {hollywood.map((hollywood, index) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MovieDetail', {
                  movie: hollywood,
                });
              }}>
              <View style={styles.book} key={index}>
                <View>
                  <Image
                    style={styles.Image}
                    source={{
                      uri: hollywood.imageUrl,
                    }}></Image>
                </View>
                <View style={{padding: 5}}>
                  <View>
                    <Text style={styles.name}>{hollywood.name}</Text>
                    <TouchableOpacity
                      style={{position: 'absolute', right: 0}}
                      onPress={() => {
                        this.LikeHmovies(hollywood);
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

                  <Text style={styles.details}> {hollywood.genre}</Text>
                  <Text style={styles.details}>{hollywood.imdbRating}</Text>
                  <Text style={styles.details}>{hollywood.director}</Text>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.watchLaterHMovies(hollywood);
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     paddingTop: 30,
//     paddingBootom: 20,
//     fontSize: 20,
//     textAlign: 'center',
//   },

//   BooksContainer: {
//     borderWidth: 1,
//     borderTopColor: 'red',
//     flex: 1,

//   },

//   book: {
//     padding: 10,
//     flexDirection: 'row',
//   },
//   name: {
//     fontSize: 15,
//     color: 'black',
//     marginRight: 10,
//   },
//   details: {
//     fontSize: 14,
//     color: 'grey',
//   },
// });
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
  dispatchLoadhollywood: hollywood => hollywood(hollywood),
  dispatchLikeHMovies: hollywood => Like_Movies(hollywood),
  dispatchWatchLaterHMovies: hollywood => addWatchLater(hollywood),
};

const mapStateToProps = state => ({
  hollywood: state.BollywoodReducer.hollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(HollywoodList);
