// import * as React from 'react';
// import {connect} from 'react-redux';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from 'react-native';

// class MovieDetail extends React.Component {
//   render() {
//     //console.log(this.props.route.params);
//     return (
//       <View style={styles.container}>
//         <View>
//           <ImageBackground
//             style={styles.MovieImage}
//             source={{
//               uri: this.props.route.params.movie.imageUrl,
//             }}></ImageBackground>
//         </View>

//         <View style={{padding: 5}}>
//           <Text style={styles.name}>
//             {this.props.route.params.movie.overview}
//           </Text>
//           <Text style={styles.name}>{this.props.route.params.movie.name}</Text>
//           <Text style={styles.details}>
//             {this.props.route.params.movie.genre}
//           </Text>
//           <Text style={styles.details}>
//             {this.props.route.params.movie.imdbRating}
//           </Text>
//           <Text style={styles.details}>
//             {this.props.route.params.movie.director}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }
// export default MovieDetail;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'teal',
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
//     padding: 20,
//     borderWidth: 1,
//   },
//   name: {
//     fontSize: 15,
//     color: 'black',
//     marginRight: 10,
//   },
//   details: {
//     fontSize: 14,
//     color: 'white',
//   },
//   CarouselContainer: {},
//   MovieImage: {
//     borderRadius: 20,
//     height: '90%',
//     width: '100%',
//   },
// });
// -------------------------------------------
// import React from 'react';
// import {View, SafeAreaView, Image, Text, StyleSheet,ImageBackground} from 'react-native';

// class MovieDetail extends React.Component {
//   render(){

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor:'white',
//       }}>
//       <View style={style.header}>
//       </View>
//       <View style={style.imageContainer}>
//       <ImageBackground

//               source={{
//                 uri: this.props.route.params.movie.imageUrl,
//               }}></ImageBackground>
//       </View>
//       <View style={style.detailsContainer}>
//         <View
//           style={{
//             marginLeft: 20,
//             flexDirection: 'row',
//             alignItems: 'flex-end',
//           }}>
//           <View style={style.line} />
//           <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
//         </View>
//         <View
//           style={{
//             marginLeft: 20,
//             marginTop: 20,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <Text style={{fontSize: 22, fontWeight: 'bold'}}>{this.props.route.params.movie.name}</Text>
//           <View style={style.priceTag}>
//             <Text
//               style={{
//                 marginLeft: 15,
//                 color: 'white',
//                 fontWeight: 'bold',
//                 fontSize: 16,
//               }}>
//               ${this.props.route.params.movie.director}
//             </Text>
//           </View>
//         </View>
//         <View style={{paddingHorizontal: 20, marginTop: 10}}>
//           <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
//           <Text
//             style={{
//               color: 'grey',
//               fontSize: 16,
//               lineHeight: 22,
//               marginTop: 10,
//             }}>
//             {this.props.route.params.movie.overview}
//           </Text>
//           <View
//             style={{
//               marginTop: 20,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View style={style.borderBtn}>
//                 <Text style={style.borderBtnText}>-</Text>
//               </View>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   marginHorizontal: 10,
//                   fontWeight: 'bold',
//                 }}>
//                 1
//               </Text>
//               <View style={style.borderBtn}>
//                 <Text style={style.borderBtnText}>+</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
//               }
// };

// const style = StyleSheet.create({
//   header: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   imageContainer: {
//     flex: 0.45,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   detailsContainer: {
//     flex: 0.55,
//     backgroundColor: 'green',
//     marginHorizontal: 7,
//     marginBottom: 7,
//     borderRadius: 20,
//     marginTop: 30,
//     paddingTop: 30,
//   },
//   line: {
//     width: 25,
//     height: 2,
//     backgroundColor: 'grey',
//     marginBottom: 5,
//     marginRight: 3,
//   },
//   borderBtn: {
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 60,
//     height: 40,
//   },
//   borderBtnText: {fontWeight: 'bold', fontSize: 28},
//   buyBtn: {
//     width: 130,
//     height: 50,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   priceTag: {
//     backgroundColor: 'green',
//     width: 80,
//     height: 40,
//     justifyContent: 'center',
//     borderTopLeftRadius: 25,
//     borderBottomLeftRadius: 25,
//   },
// });

// export default MovieDetail;
// ------------------------------------


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

