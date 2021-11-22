import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, Alert } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import * as OpenAnything from 'react-native-openanything';


const Report = (props) => {
    const { _id, name, phone, email, address, age, gender, housedust, cottondust, aspergilus, pollen, parthenium, cockroach, catdander, dosfur, roaddust, olddust, psdust, milkp, milkc, curd, coffee, tea, beef, chicken, mutton, egg, fisha, fishb, crabs, prawns, shark, avaraikai, banana, beans, beetroot, brinjal, cabbage, capsicum, chillie, cauliflower, carrot, chowchow, corn, cucumber, drumstick, greens, gourds, kovaikai, kothavarai, lfinger, malli, mango, mushroom, nuckol, onion, peas, potroot, paneer, potato, pumkin, pudina, radish, tomato, tondaikai, vazpoo, yams, gram, channa, dhaal, maida, oats, ragi, rice, wheat, coconut, oil, garlic, ginger, pepper, tamarind, aginomoto, spices, coco, horlicks, boost, nuts, runningnose, sneeze, cough, wheeze, headache, itch, swell, redrashes, familyhistory,

    } = props.route.params.item

    const details = {
        name,
        phone,
        email,
        address,
        age,
        gender,
    }

    const externals = {
        housedust,
        cottondust,
        aspergilus,
        pollen,
        parthenium,
        cockroach,
        catdander,
        dosfur,
        roaddust,
        olddust,
        psdust,
    }

    const animal = {
        milkp,
        milkc,
        curd,
        coffee,
        tea,
        beef,
        chicken,
        mutton,
        egg,
        fisha,
        fishb,
        crabs,
        prawns,
        shark,
    }

    const vegitables = {
        avaraikai,
        banana,
        beans,
        beetroot,
        brinjal,
        cabbage,
        capsicum,
        chillie,
        cauliflower,
        carrot,
        chowchow,
        corn,
        cucumber,
        drumstick,
        greens,
        gourds,
        kovaikai,
        kothavarai,
        lfinger,
        malli,
        mango,
        mushroom,
        nuckol,
        onion,
        peas,
        potroot,
        paneer,
        potato,
        pumkin,
        pudina,
        radish,
        tomato,
        tondaikai,
        vazpoo,
        yams,

    }

    const others = {
        gram,
        channa,
        dhaal,
        maida,
        oats,
        ragi,
        rice,
        wheat,
        coconut,
        oil,
        garlic,
        ginger,
        pepper,
        tamarind,
        aginomoto,
        spices,
        coco,
        horlicks,
        boost,
        nuts,
    }

    const symptoms = {
        runningnose,
        sneeze,
        cough,
        wheeze,
        headache,
        itch,
        swell,
        redrashes,
        familyhistory,
    }

    function restrictExternals(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "MR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function restrictE() {
        const rf = restrictExternals(externals);
        return (
            <View>
                {rf.map((f) => (
                    <Text>{f}</Text>
                ))}
            </View>
        );
    }

    function restrictVegitables(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "MR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function restrictV() {
        const rv = restrictVegitables(vegitables);
        return (
            <View>
                {rv.map((v) => (
                    <Text>{v}</Text>
                ))}
            </View>
        );
    }

    function restrictOthers(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "MR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function restrictO() {
        const rf = restrictOthers(others);
        return (
            <View>
                {rf.map((f) => (
                    <Text>{f}</Text>
                ))}
            </View>
        );
    }


    function avoidExternals(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "HR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function avoidE() {
        const af = avoidExternals(externals);
        return (
            <View>
                {af.map((f) => (
                    <Text>{f}</Text>
                ))}
            </View>
        );
    }

    function avoidVegitables(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "HR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function avoidV() {
        const av = avoidVegitables(vegitables);
        return (
            <View>
                {av.map((v) => (
                    <Text>{v}</Text>
                ))}
            </View>
        );
    }

    function avoidOthers(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === "HR") {
                ret.push(key);
            }
        }
        return ret;
    }

    function avoidO() {
        const af = avoidOthers(others);
        return (
            <View>
                {af.map((f) => (
                    <Text>{f}</Text>
                ))}
            </View>
        );
    }


    const resultPatient = () => {
        fetch("http://bb09-2409-4070-450e-68b2-f52d-c066-1b10-47da.ngrok.io/flask", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(user => {
                Alert.alert(`${downloadingUser.name}, Output report generated`, "OK")
                props.navigation.navigate("Home")
            })


    }


    const downloadPatient = () => {
        fetch("http://bb09-2409-4070-450e-68b2-f52d-c066-1b10-47da.ngrok.io/download", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(downloadingUser => {
                Alert.alert(`${downloadingUser.name}, Input report generated`, "OK")
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Input PDF not generating")
            })
    }



    const deletePatient = () => {
        fetch("http://bb09-2409-4070-450e-68b2-f52d-c066-1b10-47da.ngrok.io/delete", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletePat => {
                Alert.alert(`${deletePat.name} deleted`)
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }
    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        }
        else {
            Linking.openURL(`telprompt:${phone}`)
        }

    }

    return (
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <Title >
                    Report
                </Title>
            </View>
            <View>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Name: {name}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => openDial()}>
                    <View style={styles.cardContent}>
                        <Text>
                            Phone: {phone}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => { Linking.openURL(`mailto:${email}`) }}>
                    <View style={styles.cardContent}>
                        <Text>
                            Email: {email}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Address: {address}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Age: {age}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Gender: {gender}
                        </Text>
                    </View>
                </Card>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Restrict Externals:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {restrictE()}
                    </View>
                </View>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Avoid Externals:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {avoidE()}
                    </View>
                </View>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Restrict Vegitables:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {restrictV()}
                    </View>
                </View>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Avoid Vegitables:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {avoidV()}
                    </View>
                </View>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Restrict Others:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {restrictO()}
                    </View>
                </View>
                <View>
                    <View style={styles.cardContent}>
                        <View>
                            <Text>
                                Avoid Others:
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
                        {avoidO()}
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Button style={{ backgroundColor: "orange", margin: 10 }} onPress={() => downloadPatient()}>
                    Generate and Mail PDF
                </Button>
                <Button style={{ backgroundColor: "cyan", margin: 10 }} onPress={() => {
                    props.navigation.navigate("AddPatient", {
                        _id, name, phone, email, address, age, gender, housedust, cottondust, aspergilus, pollen, parthenium, cockroach, catdander, dosfur, roaddust, olddust, psdust, milkp, milkc, curd, coffee, tea, beef, chicken, mutton, egg, fisha, fishb, crabs, prawns, shark, avaraikai, banana, beans, beetroot, brinjal, cabbage, capsicum, chillie, cauliflower, carrot, chowchow, corn, cucumber, drumstick, greens, gourds, kovaikai, kothavarai, lfinger, malli, mango, mushroom, nuckol, onion, peas, potroot, paneer, potato, pumkin, pudina, radish, tomato, tondaikai, vazpoo, yams, gram, channa, dhaal, maida, oats, ragi, rice, wheat, coconut, oil, garlic, ginger, pepper, tamarind, aginomoto, spices, coco, horlicks, boost, nuts, runningnose, sneeze, cough, wheeze, headache, itch, swell, redrashes, familyhistory,
                    })
                }}>
                    Edit
                </Button>
            </View>
            <View>
                <Button style={{ backgroundColor: "cyan", margin: 10 }} onPress={() => resultPatient()}>
                    Predict
                </Button>
            </View>
            <View>
                <Button style={{ backgroundColor: "red", margin: 10 }} onPress={() => deletePatient()}>
                    Delete
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 3,
    },
    cardContent: {
        flexDirection: "row",
        padding: 10
    }
})

export default Report;