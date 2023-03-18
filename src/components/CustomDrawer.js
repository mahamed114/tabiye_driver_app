import {View, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, IMAGES} from '../constants';

const CustomDrawer = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: COLORS.primary,
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
              source={IMAGES.avatar}
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
                color: COLORS.secondary,
              }}>
              Dear Customer Name
            </Text>
            <TouchableOpacity onPress={() => ''}>
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: COLORS.white,
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
            onPress={() => ''}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Image source={IMAGES.person} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
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
            <Image source={IMAGES.bookmark} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
                fontWeight: '500',
                fontSize: 20,
              }}>
              Dalabaadkaaga
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Image source={IMAGES.call} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
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
            <Image source={IMAGES.share} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
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
            <Image source={IMAGES.rate} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
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
            <Image source={IMAGES.logout} resizeMode="cover" style={{}} />
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.secondary,
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
          source={IMAGES.brand}
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
