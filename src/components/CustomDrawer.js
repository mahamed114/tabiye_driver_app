import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: '#15E4B8',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: 92,
              width: 92,
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/avatar.png')}
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{flex: 1, marginLeft: 7}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#08265A',
              }}>
              Dear Customer Name
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: 'white',
                  marginTop: 10,
                  fontWeight: '500',
                }}>
                Akoonka
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{padding: 20, display: 'flex', justifyContent: 'space-between'}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <MaterialIcons name="person" size={36} color="#A9A9A9" />
            <Text
              style={{
                marginLeft: 10,
                color: '#08265A',
                fontWeight: '500',
                fontSize: 20,
              }}>
              Akoonkaaga
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <MaterialIcons name="call" size={36} color="#A9A9A9" />
            <Text
              style={{
                marginLeft: 10,
                color: '#08265A',
                fontWeight: '500',
                fontSize: 20,
              }}>
              Laxidhiidh Tabiye
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <MaterialIcons name="share" size={36} color="#A9A9A9" />
            <Text
              style={{
                marginLeft: 10,
                color: '#08265A',
                fontWeight: '500',
                fontSize: 20,
              }}>
              Lawadaag
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <MaterialIcons name="star" size={36} color="#A9A9A9" />
            <Text
              style={{
                marginLeft: 10,
                color: '#08265A',
                fontWeight: '500',
                fontSize: 20,
              }}>
              Faalo Kabixi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <MaterialIcons name="logout" size={36} color="#A9A9A9" />
            <Text
              style={{
                marginLeft: 10,
                color: '#08265A',
                fontWeight: '500',
                fontSize: 20,
              }}>
              Iskaga Bax
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 120,
          width: 120,
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}>
        <Image
          source={require('../assets/brand.png')}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;
