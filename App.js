
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
const products = require("./products.json");



import left_arrow from "./icons/left-arrow.png";
import right_arrow from "./icons/right-arrow.png";


const TopTitle = () => {
  return (
    <Text style={styles.TopText}>
      lets's plan your <Text style={styles.TopTexttip}>loan</Text>
    </Text>
  );
};

class Containner extends React.Component {
  state = {
    month: 1,

    por: {
      per_1: "blue",
      per_2: "white",
      per_3: "white",
    },
    select: 1,
    tergetdate: {
      month: "January",
      year: 2021,
    },
    amounttextinnput: {
      text: products[0].min_amount,
    },
    amountinputstate: "#CBD5DC",
  };
  updatemoth(e, c) {
    e.preventDefault();
    console.log(
      products[this.state.select - 1].max_tenure,
      products[this.state.select - 1].min_tenure
    );
    if (
      this.state.month + c <= products[this.state.select - 1].max_tenure &&
      this.state.month + c >= products[this.state.select - 1].min_tenure
    ) {
      this.setState({
        month: this.state.month + c,
      });
    }
    const monthsNum = {
      [1]: "January",
      [2]: "February",
      [3]: "March",
      [4]: "April",
      [5]: "May",
      [6]: "June",
      [7]: "July",
      [8]: "August",
      [9]: "September",
      [10]: "October",
      [11]: "November",
      [12]: "December",
    };
    let d = new Date();
    var n = d.getMonth() + this.state.month;
    let targetYear = d.getFullYear() + parseInt(n / 12, 10);
    let tergetMonth = monthsNum[parseInt(n % 12, 10) + 1];
    this.setState({
      tergetdate: {
        month: tergetMonth,
        year: targetYear,
      },
    });
  }
  chosepro = (e, c) => {
    e.preventDefault();
    switch (c) {
      case 1:
        this.setState({
          por: {
            per_1: "blue",
            per_2: "white",
            per_3: "white",
          },
          month: 1,
          select: 1,
        });

        break;
      case 2:
        this.setState({
          por: {
            per_1: "white",
            per_2: "blue",
            per_3: "white",
          },
          month: 1,
          select: 2,
        });
        break;
      case 3:
        this.setState({
          por: {
            per_1: "white",
            per_2: "white",
            per_3: "blue",
          },
          month: 1,
          select: 3,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Container_item}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              backgroundColor: this.state.por.per_1,
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              cursor: "pointer",
            }}
          >
            <Image
              onClick={(e) => {
                this.chosepro(e, 1);
              }}
              source={products[1].image}
              style={styles.icon}
            />
          </View>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              backgroundColor: this.state.por.per_2,
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              cursor: "pointer",
            }}
          >
            <Image
              onClick={(e) => {
                this.chosepro(e, 2);
              }}
              source={products[0].image}
              style={styles.icon}
            />
          </View>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              backgroundColor: this.state.por.per_3,
              margin: "10px",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#171717",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              cursor: "pointer",
            }}
          >
            <Image
              onClick={(e) => {
                this.chosepro(e, 3);
              }}
              source={products[2].image}
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.Container_item}>
          <View style={styles.Container_item_left}>
            <Text style={styles.Container_item_left_title}>laon amount</Text>
            <View
              style={{
                width: "90%",
                maxHeight: "60%",
                borderRadius: "5px",
                borderWidth: "1px",
                borderColor: this.state.amountinputstate,
                fontSize: "20px",
                fontWeight: "bold",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.Container_item_left_insider_dollarisign}>
                $
              </Text>
              <TextInput
                value={this.state.amounttextinnput.text}
                maxLength={7}
                keyboardType={"numeric"}
                
                onChangeText={(text) => {
                  console.log(
                    parseInt(text, 10),
                    products[this.state.select - 1].max_amount
                  );

                  this.setState({
                    amounttextinnput: {
                      text: text
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    },
                  });
                  this.setState({
                    amounttextinnput: { text: text.replace(/[^0-9.,]/g, "") },
                  });

                  if (
                    parseInt(text, 10) <
                      products[this.state.select - 1].min_amount ||
                    parseInt(text, 10) >
                      products[this.state.select - 1].max_amount
                  ) {
                    this.setState({
                      amountinputstate: "red",
                    });
                  } else {
                    this.setState({
                      amountinputstate: "#CBD5DC",
                    });
                  }
                
                  this.setState({
                    amounttextinnput: {
                      text : parseInt(text, 10) || 0}
                  });
                }}
                placeholder="1200"
                keyboardType="numeric"
                style={styles.Container_item_left_textinput}
              ></TextInput>
            </View>
          </View>
          <View style={styles.Container_item_right}>
            <Text style={styles.Container_item_right_title}>
              number of months
            </Text>
            <View style={styles.Container_item_right_insider}>
              <View style={styles.Container_item_right_insider_arrow}>
                <Image
                  onClick={(e) => {
                    this.updatemoth(e, -1);
                  }}
                  source={left_arrow}
                  style={styles.Container_item_right_insider_arrow_icon}
                />
              </View>
              <TextInput
              value = {this.state.month}
              editable={true}
                keyboardType="numeric"
                style={styles.Container_item_right_textinput}
                onChangeText={(text) => {
                  this.setState({ month: parseInt(text, 10) || 0 });
                }}
                onKeyPress={(e)=>{
                  switch (e.keyCode) {
      
                    case 38:
                       
                      this.updatemoth(e, 1);
                        break;
                    
                    case 40:
                      this.updatemoth(e, -1);
                        break;
                }
                }

                }
              >
                
              </TextInput>
              <View style={styles.Container_item_right_insider_arrow}>
                <Image
                  onClick={(e) => {
                    this.updatemoth(e, 1);
                  }}
                  source={right_arrow}
                  style={styles.Container_item_right_insider_arrow_icon}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Container_item2}>
          <View style={styles.Container_item2_insider}>
            <View style={styles.Container_item2_insider_top}>
              <Text style={styles.Container_item2_insider_top_title}>
                monthly amount
              </Text>
              <Text style={styles.Container_item2_insider_top_value}>
                {(
                  parseInt(this.state.amounttextinnput.text, 10) /
                  this.state.month
                ).toFixed(3)}
                $
              </Text>
            </View>
            <View style={styles.Container_item2_insider_bottom}>
              <Text style={styles.Container_item2_insider_bottom_text}>
                You’re planning {this.state.month} monthly deposits to reach
                your goal by {this.state.tergetdate.month} ,{" "}
                {this.state.tergetdate.year} . The total amount loaned will be $
                {this.state.amounttextinnput.text +
                  this.state.amounttextinnput.text *
                    products[this.state.select - 1].interest}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Container_item3}>
          <Text style={styles.Container_item3_text}>Applay Now</Text>
        </View>
      </View>
    );
  }
}
export default function App() {
  return (
    <View style={styles.app}>
      <TopTitle></TopTitle>
      <Containner></Containner>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  TopText: {
    color: "#1B31A8",
    fontSize: "20px",
    margin : "50px" ,
  },
  TopTexttip: {
    color: "#ac3de3",
    fontSize: "20px",
    fontWeight: "bold",
  },
  Container: {
    maxWidth: "560px",
    width : "100%" ,
    height: "511px",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: "8px",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
  },
  Container_item: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between",
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  Container_item2: {
    height: "45%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Container_item3: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: "50%",
    height: "50%",
  },
  Container_item_left: {
    width: "50%",
    height: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "left",
    textAlign: "left",
    marginLeft: "10%",
  },
  Container_item_right: {
    width: "50%",
    height: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "left",
    textAlign: "left",
  },

  Container_item_left_textinput: {
    width: "90%",
    height: "40%",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4D6475",
  },
  Container_item_left_insider: {
    width: "100%",
    maxHeight: "60%",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "#CBD5DC",
    fontSize: "20px",
    fontWeight: "bold",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Container_item_left_insider_dollarisign: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#CBD5DC",
    width: "5%",
    paddingRight: "20px",
  },
  Container_item_left_title: {
    textAlign: "left",
  },

  Container_item_right_textinput: {
    width: "80%",
    height: "40%",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#4D6475",
    textAlign: "center",
  },
  Container_item_right_insider: {
    width: "80%",
    maxHeight: "60%",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "#CBD5DC",
    fontSize: "20px",
    fontWeight: "bold",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Container_item_right_insider_arrow: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Container_item_right_title: {
    textAlign: "left",
  },
  Container_item_right_insider_arrow_icon: {
    width: "50%",
    height: "30%",
    cursor: "pointer",
  },

  Container_item2_insider: {
    width: "90%",
    minHeight: "60%",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "#CBD5DC",
    fontSize: "20px",
    fontWeight: "bold",
  },
  Container_item2_insider_top: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  Container_item2_insider_bottom: {
    width: "100%",
    height: "50%",
    backgroundColor: "#F4F8FA",
    borderBottomEndRadius: "8px",
  },
  Container_item2_insider_top_title: {
    width: "50%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    Top: "50%",
    transform: "translate(0% , 0%)",
    fontSize: "20px",
    transform: "translate(0% , 30% )",
  },
  Container_item2_insider_top_value: {
    width: "50%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E9FE3",
    fontSize: "40px",
    fontWeight: "bold",
    position: "relative",
    marginTop: "10px",
  },
  Container_item2_insider_bottom_text: {
    padding: "20px",
    fontSize: "12px",
  },
  Container_item3_text: {
    padding: "20px",
    backgroundColor: "#1B31A8",
    borderRadius: "20px",
    color: "white",
    width: "320px",
    height: "56px",
    textAlign: "center",
    fontSize: "16px",
    transform: "translate(0% , -50%)",
    fontWeight: "bold",
    cursor: "pointer",
  },
});
