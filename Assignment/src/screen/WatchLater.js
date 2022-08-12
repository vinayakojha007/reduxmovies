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
import {removeWatchLaterMovies} from '../actions';

class watchLaterMovies extends React.Component {
  //   loadProduct = () => {
  //     this.props.dispatchLoadbMovies(this.state);
  //   };

  render() {
    const {addWatchLaterMovies} = this.props;
    const deleteWatchLater = movie => {
      console.log('In fun');
      this.props.dispatchRemoveMovies(movie);
    };

    return (
      <View style={styles.container}>
        <ScrollView style={styles.BooksContainer}>
          {addWatchLaterMovies.map((bMovies, index) => (
            <View style={styles.book} key={index}>
              <View>
                <ImageBackground
                  style={styles.MovieImage}
                  source={{
                    uri: bMovies.imageUrl,
                  }}>
                  <TouchableOpacity>
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
                </ImageBackground>
              </View>
              <View style={{padding: 5}}>
                <Text style={styles.name}>{bMovies.name}</Text>
                <Text style={styles.details}> {bMovies.genre}</Text>
                <Text style={styles.details}>{bMovies.imdbRating}</Text>
                <Text style={styles.details}>{bMovies.director}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => deleteWatchLater(bMovies)}>
                    <Text>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('MovieDetail');
                }}>
                <Image
                  source={require('../../../assets/right-arrow.png')}
                  style={{
                    color: 'green',
                    height: 25,
                    width: 25,
                    alignSelf: 'flex-end',
                  }}
                />
              </TouchableOpacity> */}
            </View>
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
  title: {
    paddingTop: 30,
    paddingBootom: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',

    flex: 1,
  },

  book: {
    padding: 20,
    flexDirection: 'row',
    borderWidth: 1,
    // backgroundColor:'mediumturquoise'
  },
  name: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  details: {
    fontSize: 14,
    color: 'white',
  },
  CarouselContainer: {},
  MovieImage: {
    borderRadius: 20,
    height: 120,
    width: 100,
  },
});
const mapDispatchToProps = {
  dispatchRemoveMovies: movie => removeWatchLaterMovies(movie),
};

const mapStateToProps = state => ({
  addWatchLaterMovies: state.BollywoodReducer.watchLater,
});

export default connect(mapStateToProps, mapDispatchToProps)(watchLaterMovies);
