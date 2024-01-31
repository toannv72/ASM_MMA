import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import Swiper from 'react-native-swiper';
import { SelectList } from 'react-native-dropdown-select-list'
import { Slider, Icon } from '@rneui/themed';
export const Survey = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [option, setOption] = useState('');
  const [inputDate, setInputDate] = React.useState(undefined)
  const handleDone = () => {
    navigation.navigate('Homes');
    // Handle done logic
  };

  const SliderComponent = () => {
    const [selected, setSelected] = React.useState("");
    const [value, setValue] = useState(0);
    const selectData = [
      { key: '1', value: 'Mobiles' },
      { key: '2', value: 'Appliances' },
      { key: '3', value: 'Cameras' },
      { key: '4', value: 'Computers' },
      { key: '5', value: 'Vegetables' },
      { key: '6', value: 'Diary Products' },
      { key: '7', value: 'Drinks' },
    ]


    return (
      <View style={styles.wrapper}>
        <Swiper
          ref={swiperRef}
          showsButtons={true}
          showsPagination={true}
          loop={false}
          nextButton={<Text style={styles.swiperButton}>Next</Text>}
          prevButton={<Text style={styles.swiperButton}>Prev</Text>}
          buttonWrapperStyle={{ alignItems: 'flex-end', paddingBottom: 30 }}
          paginationStyle={{ bottom: 40 }}
          activeDotStyle={{ backgroundColor: 'grey', width: 30 }}
        >
          {/* .............................................................................................................. */}

          <View style={styles.slide}>
            <ScrollView
              contentContainerStyle={{ marginTop: 50 }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View>
                <Text style={{ fontSize: 32 }}>Help us understand you by answering few question</Text>
              </View>
              <View>
                <Text style={styles.quizText}>Do you have and experience with pet ?</Text>
                <View style={{ flexDirection: 'row', gap: 50, alignItems: "center", marginLeft: 50 }}>
                  <Button
                    style={option === 'Yes' ? styles.optionhightlight : styles.option}
                    onPress={() => setOption('Yes')}
                  >
                    <Text style={{ color: option === 'Yes' ? '#F6F6F6' : 'black' }}>Yes</Text>
                  </Button>
                  <Button
                    style={option === 'No' ? styles.optionhightlight : styles.option}
                    onPress={() => setOption('No')}
                  >
                    <Text style={{ color: option === 'No' ? '#F6F6F6' : 'black' }}>No</Text>
                  </Button>
                </View>
              </View>
              <View>
                <Text style={styles.quizText}>Give some photo of your pet</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/ImgInput.jpg')}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.quizText}>What your pet's name</Text>
                <TextInput
                  placeholder='Dongo'
                  style={styles.textInputStyle}
                  underlineColor="transparent"
                ></TextInput>
              </View>
              <View>
                <Text style={styles.quizText}>What your pet's date of birth</Text>
                <DatePickerInput
                  onChange={(d) => setInputDate(d)}
                  value={inputDate}>
                </DatePickerInput>
              </View>

              <View style={{ height: 100 }}></View>
            </ScrollView>

          </View>


          {/* .............................................................................................................. */}
          <View style={styles.slide}>
            <ScrollView contentContainerStyle={{ marginTop: 50 }}>
              <View>
                <Text style={{ fontSize: 32 }}>Help us understand you by answering few question</Text>
              </View>
              <View>
                <Text style={styles.quizText}>Select your pet breed</Text>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={selectData}
                  save="value" />
              </View>
              <View>
                <Text style={styles.quizText}>Choose gender of your pet</Text>
                <View style={{ flexDirection: 'row', gap: 50, alignItems: "center" }}>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Slider
                  value={value}
                  onValueChange={setValue}
                  maximumValue={2}
                  minimumValue={0}
                  step={1}
                  allowTouchTrack
                  trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                  thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="paw"
                        type="font-awesome"
                        size={15}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color="gray"
                      />
                    ),
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', gap: 40, justifyContent: 'center', padding: 20 }}>
                <Text style={styles.buttonText}>Up to 4 moth</Text>
                <Text style={styles.buttonText}>Up to a year</Text>
                <Text style={styles.buttonText}>More than a year</Text>
              </View>
              <View>
                <Text style={styles.quizText}>What your pet's weight</Text>
                <TextInput
                  style={styles.textInputStyle}
                  underlineColor="transparent"
                ></TextInput>
              </View>
              <View style={{ height: 150 }}></View>

            </ScrollView>
          </View>
          {/* .............................................................................................................. */}
          <View style={styles.slide}>
            <ScrollView contentContainerStyle={{ marginTop: 50 }}>
              <View>
                <Text style={{ fontSize: 32 }}>Help us understand you by answering few question</Text>
              </View>
              <View>
                <Text style={styles.quizText}>What kind of your pet chracter ?</Text>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Active</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Friendly</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Playful</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Calm</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.quizText}>Vaccinated your pet </Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.quizText}>Pedigree of your pet</Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
                <Text style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>Done</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>


        </Swiper>

      </View>

    );
  };

  return (
    <View style={styles.container}>
      <SliderComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: "10%",
    padding: 5,
  },
  wrapper: {
    position: 'relative',
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',

    padding: 15,
    flexDirection: 'column',
    gap: 30
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  doneButton: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 30,
    right: 10,
    padding: 5,
  },
  swiperButton: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 0,
    padding: 5,
  },
  customButton: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    width: 90,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
  quizText: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
  },
  textInputStyle: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 10
  },
  optionhightlight: {
    borderWidth: 2,
    borderColor: '#8C8EA3',
    backgroundColor: '#8C8EA3',

  },
  option: {
    borderWidth: 2,
    borderColor: '#8C8EA3',

  },
});
