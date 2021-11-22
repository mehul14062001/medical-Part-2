import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TextInput, RadioButton, Button, List, Checkbox } from 'react-native-paper';

import CollapsibleList from "react-native-collapsible-list";


const AddPatient = ({ navigation, route }) => {

    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "name": return route.params.name
                case "phone": return route.params.phone
                case "email": return route.params.email
                case "address": return route.params.address
                case "age": return route.params.age
                case "gender": return route.params.gender

                case "housedust": return route.params.housedust
                case "cottondust": return route.params.cottondust
                case "aspergilus": return route.params.aspergilus
                case "pollen": return route.params.pollen
                case "parthenium": return route.params.parthenium
                case "cockroach": return route.params.cockroach
                case "catdander": return route.params.catdander
                case "dosfur": return route.params.dosfur
                case "roaddust": return route.params.roaddust
                case "olddust": return route.params.olddust
                case "psdust": return route.params.psdust

                case "milkp": return route.params.milkp
                case "milkc": return route.params.milkc
                case "curd": return route.params.curd
                case "coffee": return route.params.coffee
                case "tea": return route.params.tea
                case "beef": return route.params.beef
                case "chicken": return route.params.chicken
                case "mutton": return route.params.mutton
                case "egg": return route.params.egg
                case "fisha": return route.params.fisha
                case "fishb": return route.params.fishb
                case "crabs": return route.params.crabs
                case "prawns": return route.params.prawns
                case "shark": return route.params.shark

                case "avaraikai": return route.params.avaraikai
                case "banana": return route.params.banana
                case "beans": return route.params.beans
                case "beetroot": return route.params.beetroot
                case "brinjal": return route.params.brinjal
                case "cabbage": return route.params.cabbage
                case "capsicum": return route.params.capsicum
                case "chillie": return route.params.chillie
                case "cauliflower": return route.params.cauliflower
                case "carrot": return route.params.carrot
                case "chowchow": return route.params.chowchow
                case "corn": return route.params.corn
                case "cucumber": return route.params.cucumber
                case "drumstick": return route.params.drumstick
                case "greens": return route.params.greens
                case "gourds": return route.params.gourds
                case "kovaikai": return route.params.kovaikai
                case "kothavarai": return route.params.kothavarai
                case "lfinger": return route.params.lfinger
                case "malli": return route.params.malli
                case "mango": return route.params.mango
                case "mushroom": return route.params.mushroom
                case "nuckol": return route.params.nuckol
                case "onion": return route.params.onion
                case "peas": return route.params.peas
                case "potroot": return route.params.potroot
                case "paneer": return route.params.paneer
                case "potato": return route.params.potato
                case "pumkin": return route.params.pumkin
                case "pudina": return route.params.pudina
                case "radish": return route.params.radish
                case "tomato": return route.params.tomato
                case "tondaikai": return route.params.tondaikai
                case "vazpoo": return route.params.vazpoo
                case "yams": return route.params.yams

                case "gram": return route.params.gram
                case "channa": return route.params.channa
                case "dhaal": return route.params.dhaal
                case "maida": return route.params.maida
                case "oats": return route.params.oats
                case "ragi": return route.params.ragi
                case "rice": return route.params.rice
                case "wheat": return route.params.wheat
                case "coconut": return route.params.coconut
                case "oil": return route.params.oil
                case "garlic": return route.params.garlic
                case "ginger": return route.params.ginger
                case "pepper": return route.params.pepper
                case "tamarind": return route.params.tamarind
                case "aginomoto": return route.params.aginomoto
                case "spices": return route.params.spices
                case "coco": return route.params.coco
                case "horlicks": return route.params.horlicks
                case "boost": return route.params.boost
                case "nuts": return route.params.nuts

                case "runningnose": return route.params.runningnose
                case "sneeze": return route.params.sneeze
                case "cough": return route.params.cough
                case "wheeze": return route.params.wheeze
                case "headache": return route.params.headache
                case "itch": return route.params.itch
                case "swell": return route.params.swell
                case "redrashes": return route.params.redrashes
                case "familyhistory": return route.params.familyhistory

            }
        }
        else {
            return ""
        }
    }

    const [Name, setName] = useState(getDetails("name"))
    const [Phone, setPhone] = useState(getDetails("phone"))
    const [Email, setEmail] = useState(getDetails("email"))
    const [Address, setAddress] = useState(getDetails("address"))
    const [Age, setAge] = useState(getDetails("age"))
    const [Gender, setGender] = useState(getDetails("gender"))

    const [selectedHouseDust, setSelectedHouseDust] = useState(getDetails("housedust"));
    const [selectedCottonDust, setSelectedCottonDust] = useState(getDetails("cottondust"));
    const [selectedAspergilus, setSelectedAspergilus] = useState(getDetails("aspergilus"));
    const [selectedPollen, setSelectedPollen] = useState(getDetails("pollen"));
    const [selectedParthenium, setSelectedParthenium] = useState(getDetails("parthenium"));
    const [selectedCockroach, setSelectedCockroach] = useState(getDetails("cockroach"));
    const [selectedCatdander, setSelectedCatdander] = useState(getDetails("catdander"));
    const [selectedDosfur, setSelectedDosfur] = useState(getDetails("dosfur"));
    const [selectedRoadDust, setSelectedRoadDust] = useState(getDetails("roaddust"));
    const [selectedOldDust, setSelectedOldDust] = useState(getDetails("olddust"));
    const [selectedPSDust, setSelectedPSDust] = useState(getDetails("psdust"));

    const [selectedMilkP, setSelectedMilkP] = useState(getDetails("milkp"));
    const [selectedMilkC, setSelectedMilkC] = useState(getDetails("milkc"));
    const [selectedCurd, setSelectedCurd] = useState(getDetails("curd"));
    const [selectedCoffee, setSelectedCoffee] = useState(getDetails("coffee"));
    const [selectedTea, setSelectedTea] = useState(getDetails("tea"));
    const [selectedBeef, setSelectedBeef] = useState(getDetails("beef"));
    const [selectedChicken, setSelectedChicken] = useState(getDetails("chicken"));
    const [selectedMutton, setSelectedMutton] = useState(getDetails("mutton"));
    const [selectedEgg, setSelectedEgg] = useState(getDetails("egg"));
    const [selectedFishA, setSelectedFishA] = useState(getDetails("fisha"));
    const [selectedFishB, setSelectedFishB] = useState(getDetails("fishb"));
    const [selectedCrabs, setSelectedCrabs] = useState(getDetails("crabs"));
    const [selectedPrawns, setSelectedPrawns] = useState(getDetails("prawns"));
    const [selectedShark, setSelectedShark] = useState(getDetails("shark"));

    const [selectedAvaraikai, setSelectedAvaraikai] = useState(getDetails("avaraikai"))
    const [selectedBanana, setSelectedBanana] = useState(getDetails("banana"))
    const [selectedBeans, setSelectedBeans] = useState(getDetails("beans"))
    const [selectedBeetroot, setSelectedBeetroot] = useState(getDetails("beetroot"))
    const [selectedBrinjal, setSelectedBrinjal] = useState(getDetails("brinjal"))
    const [selectedCabbage, setSelectedCabbage] = useState(getDetails("cabbage"))
    const [selectedCapsicum, setSelectedCapsicum] = useState(getDetails("capsicum"))
    const [selectedChillie, setSelectedChillie] = useState(getDetails("chillie"))
    const [selectedCauliflower, setSelectedCauliflower] = useState(getDetails("cauliflower"))
    const [selectedCarrot, setSelectedCarrot] = useState(getDetails("carrot"))
    const [selectedChowchow, setSelectedChowchow] = useState(getDetails("chowchow"))
    const [selectedCorn, setSelectedCorn] = useState(getDetails("corn"))
    const [selectedCucumber, setSelectedCucumber] = useState(getDetails("cucumber"))
    const [selectedDrumstick, setSelectedDrumstick] = useState(getDetails("drumstick"))
    const [selectedGreens, setSelectedGreens] = useState(getDetails("greens"))
    const [selectedGourds, setSelectedGourds] = useState(getDetails("gourds"))
    const [selectedKovaikai, setSelectedKovaikai] = useState(getDetails("kovaikai"))
    const [selectedKothavarai, setSelectedKothavarai] = useState(getDetails("kothavarai"))
    const [selectedLfinger, setSelectedLfinger] = useState(getDetails("lfinger"))
    const [selectedMalli, setSelectedMalli] = useState(getDetails("malli"))
    const [selectedMango, setSelectedMango] = useState(getDetails("mango"))
    const [selectedMushroom, setSelectedMushroom] = useState(getDetails("mushroom"))
    const [selectedNuckol, setSelectedNuckol] = useState(getDetails("nuckol"))
    const [selectedOnion, setSelectedOnion] = useState(getDetails("onion"))
    const [selectedPeas, setSelectedPeas] = useState(getDetails("peas"))
    const [selectedPotroot, setSelectedPotroot] = useState(getDetails("potroot"))
    const [selectedPaneer, setSelectedPaneer] = useState(getDetails("paneer"))
    const [selectedPotato, setSelectedPotato] = useState(getDetails("potato"))
    const [selectedPumkin, setSelectedPumkin] = useState(getDetails("pumkin"))
    const [selectedPudina, setSelectedPudina] = useState(getDetails("pudina"))
    const [selectedRadish, setSelectedRadish] = useState(getDetails("radish"))
    const [selectedTomato, setSelectedTomato] = useState(getDetails("tomato"))
    const [selectedTondaikai, setSelectedTondaikai] = useState(getDetails("tondaikai"))
    const [selectedVazpoo, setSelectedVazpoo] = useState(getDetails("vazpoo"))
    const [selectedYams, setSelectedYams] = useState(getDetails("yams"))

    const [selectedGram, setSelectedGram] = useState(getDetails("gram"))
    const [selectedChanna, setSelectedChanna] = useState(getDetails("channa"))
    const [selectedDhaal, setSelectedDhaal] = useState(getDetails("dhaal"))
    const [selectedMaida, setSelectedMaida] = useState(getDetails("maida"))
    const [selectedOats, setSelectedOats] = useState(getDetails("oats"))
    const [selectedRagi, setSelectedRagi] = useState(getDetails("ragi"))
    const [selectedRice, setSelectedRice] = useState(getDetails("rice"))
    const [selectedWheat, setSelectedWheat] = useState(getDetails("wheat"))
    const [selectedCoconut, setSelectedCoconut] = useState(getDetails("coconut"))
    const [selectedOil, setSelectedOil] = useState(getDetails("oil"))
    const [selectedGarlic, setSelectedGarlic] = useState(getDetails("garlic"))
    const [selectedGinger, setSelectedGinger] = useState(getDetails("ginger"))
    const [selectedPepper, setSelectedPepper] = useState(getDetails("pepper"))
    const [selectedTamarind, setSelectedTamarind] = useState(getDetails("tamarind"))
    const [selectedAginomoto, setSelectedAginomoto] = useState(getDetails("aginomoto"))
    const [selectedSpices, setSelectedSpices] = useState(getDetails("spices"))
    const [selectedCoco, setSelectedCoco] = useState(getDetails("coco"))
    const [selectedHorlicks, setSelectedHorlicks] = useState(getDetails("horlicks"))
    const [selectedBoost, setSelectedBoost] = useState(getDetails("boost"))
    const [selectedNuts, setSelectedNuts] = useState(getDetails("nuts"))

    const [selectedRunningNose, setSelectedRunningNose] = useState(getDetails("runningnose"));
    const [selectedSneeze, setSelectedSneeze] = useState(getDetails("sneeze"));
    const [selectedCough, setSelectedCough] = useState(getDetails("cough"));
    const [selectedWheeze, setSelectedWheeze] = useState(getDetails("wheeze"));
    const [selectedHeadache, setSelectedHeadache] = useState(getDetails("headache"));
    const [selectedItch, setSelectedItch] = useState(getDetails("itch"));
    const [selectedSwell, setSelectedSwell] = useState(getDetails("swell"));
    const [selectedRedRashes, setSelectedRedRashes] = useState(getDetails("redrashes"));
    const [selectedFamilyHistory, setSelectedFamilyHistory] = useState(getDetails("familyhistory"))


    const submitData = () => {
        fetch("http://bb09-2409-4070-450e-68b2-f52d-c066-1b10-47da.ngrok.io/create", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,

                housedust: selectedHouseDust,
                cottondust: selectedCottonDust,
                aspergilus: selectedAspergilus,
                pollen: selectedPollen,
                parthenium: selectedParthenium,
                cockroach: selectedCockroach,
                catdander: selectedCatdander,
                dosfur: selectedDosfur,
                roaddust: selectedRoadDust,
                olddust: selectedOldDust,
                psdust: selectedPSDust,

                milkp: selectedMilkP,
                milkc: selectedMilkC,
                curd: selectedCurd,
                coffee: selectedCoffee,
                tea: selectedTea,
                beef: selectedBeef,
                chicken: selectedChicken,
                mutton: selectedMutton,
                egg: selectedEgg,
                fisha: selectedFishA,
                fishb: selectedFishB,
                crabs: selectedCrabs,
                prawns: selectedPrawns,
                shark: selectedShark,

                avaraikai: selectedAvaraikai,
                banana: selectedBanana,
                beans: selectedBeans,
                beetroot: selectedBeetroot,
                brinjal: selectedBrinjal,
                cabbage: selectedCabbage,
                capsicum: selectedCapsicum,
                chillie: selectedChillie,
                cauliflower: selectedCauliflower,
                carrot: selectedCarrot,
                chowchow: selectedChowchow,
                corn: selectedCorn,
                cucumber: selectedCucumber,
                drumstick: selectedDrumstick,
                greens: selectedGreens,
                gourds: selectedGourds,
                kovaikai: selectedKovaikai,
                kothavarai: selectedKothavarai,
                lfinger: selectedLfinger,
                malli: selectedMalli,
                mango: selectedMango,
                mushroom: selectedMushroom,
                nuckol: selectedNuckol,
                onion: selectedOnion,
                peas: selectedPeas,
                potroot: selectedPotroot,
                paneer: selectedPaneer,
                potato: selectedPotato,
                pumkin: selectedPumkin,
                pudina: selectedPudina,
                radish: selectedRadish,
                tomato: selectedTomato,
                tondaikai: selectedTondaikai,
                vazpoo: selectedVazpoo,
                yams: selectedYams,

                gram: selectedGram,
                channa: selectedChanna,
                dhaal: selectedDhaal,
                maida: selectedMaida,
                oats: selectedOats,
                ragi: selectedRagi,
                rice: selectedRice,
                wheat: selectedWheat,
                coconut: selectedCoconut,
                oil: selectedOil,
                garlic: selectedGarlic,
                ginger: selectedGinger,
                pepper: selectedPepper,
                tamarind: selectedTamarind,
                aginomoto: selectedAginomoto,
                spices: selectedSpices,
                coco: selectedCoco,
                horlicks: selectedHorlicks,
                boost: selectedBoost,
                nuts: selectedNuts,

                runningnose: selectedRunningNose,
                sneeze: selectedSneeze,
                cough: selectedCough,
                wheeze: selectedWheeze,
                headache: selectedHeadache,
                itch: selectedItch,
                swell: selectedSwell,
                redrashes: selectedRedRashes,
                familyhistory: selectedFamilyHistory,

            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is saved`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    const updateData = () => {
        fetch("http://bb09-2409-4070-450e-68b2-f52d-c066-1b10-47da.ngrok.io/update", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params._id,
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,

                housedust: selectedHouseDust,
                cottondust: selectedCottonDust,
                aspergilus: selectedAspergilus,
                pollen: selectedPollen,
                parthenium: selectedParthenium,
                cockroach: selectedCockroach,
                catdander: selectedCatdander,
                dosfur: selectedDosfur,
                roaddust: selectedRoadDust,
                olddust: selectedOldDust,
                psdust: selectedPSDust,

                milkp: selectedMilkP,
                milkc: selectedMilkC,
                curd: selectedCurd,
                coffee: selectedCoffee,
                tea: selectedTea,
                beef: selectedBeef,
                chicken: selectedChicken,
                mutton: selectedMutton,
                egg: selectedEgg,
                fisha: selectedFishA,
                fishb: selectedFishB,
                crabs: selectedCrabs,
                prawns: selectedPrawns,
                shark: selectedShark,

                avaraikai: selectedAvaraikai,
                banana: selectedBanana,
                beans: selectedBeans,
                beetroot: selectedBeetroot,
                brinjal: selectedBrinjal,
                cabbage: selectedCabbage,
                capsicum: selectedCapsicum,
                chillie: selectedChillie,
                cauliflower: selectedCauliflower,
                carrot: selectedCarrot,
                chowchow: selectedChowchow,
                corn: selectedCorn,
                cucumber: selectedCucumber,
                drumstick: selectedDrumstick,
                greens: selectedGreens,
                gourds: selectedGourds,
                kovaikai: selectedKovaikai,
                kothavarai: selectedKothavarai,
                lfinger: selectedLfinger,
                malli: selectedMalli,
                mango: selectedMango,
                mushroom: selectedMushroom,
                nuckol: selectedNuckol,
                onion: selectedOnion,
                peas: selectedPeas,
                potroot: selectedPotroot,
                paneer: selectedPaneer,
                potato: selectedPotato,
                pumkin: selectedPumkin,
                pudina: selectedPudina,
                radish: selectedRadish,
                tomato: selectedTomato,
                tondaikai: selectedTondaikai,
                vazpoo: selectedVazpoo,
                yams: selectedYams,

                gram: selectedGram,
                channa: selectedChanna,
                dhaal: selectedDhaal,
                maida: selectedMaida,
                oats: selectedOats,
                ragi: selectedRagi,
                rice: selectedRice,
                wheat: selectedWheat,
                coconut: selectedCoconut,
                oil: selectedOil,
                garlic: selectedGarlic,
                ginger: selectedGinger,
                pepper: selectedPepper,
                tamarind: selectedTamarind,
                aginomoto: selectedAginomoto,
                spices: selectedSpices,
                coco: selectedCoco,
                horlicks: selectedHorlicks,
                boost: selectedBoost,
                nuts: selectedNuts,

                runningnose: selectedRunningNose,
                sneeze: selectedSneeze,
                cough: selectedCough,
                wheeze: selectedWheeze,
                headache: selectedHeadache,
                itch: selectedItch,
                swell: selectedSwell,
                redrashes: selectedRedRashes,
                familyhistory: selectedFamilyHistory,

            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is updated`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.details}>
                    <Text style={{ textAlign: "center", fontSize: 30, }}>
                        Details
                    </Text>
                    <TextInput
                        label='Name'
                        style={styles.inputStyle}
                        value={Name}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        label='Phone'
                        style={styles.inputStyle}
                        value={Phone}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setPhone(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label='Email'
                        style={styles.inputStyle}
                        value={Email}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label='Address'
                        style={styles.inputStyle}
                        value={Address}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAddress(text)}
                    />
                    <TextInput
                        label='Age'
                        style={styles.inputStyle}
                        value={Age}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAge(text)}
                        keyboardType="number-pad"
                    />
                    <View style={styles.gender}>
                        <Text style={{ fontSize: 17.5 }}>
                            Gender
                        </Text>
                        <RadioButton.Group
                            onValueChange={Gender => setGender(Gender)}
                            value={Gender}>
                            <RadioButton.Item
                                label="Male"
                                value="Male" />
                            <RadioButton.Item
                                label="Female"
                                value="Female" />
                        </RadioButton.Group>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        External
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>House Dust</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedHouseDust(itemValue)
                                }
                                value={selectedHouseDust}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cotton Dust</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCottonDust(itemValue)
                                }
                                value={selectedCottonDust}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Aspergilus</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedAspergilus(itemValue)
                                }
                                value={selectedAspergilus}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pollen</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPollen(itemValue)
                                }
                                value={selectedPollen}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Parthenium</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedParthenium(itemValue)
                                }
                                value={selectedParthenium}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cockroach</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCockroach(itemValue)
                                }
                                value={selectedCockroach}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Catdander</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCatdander(itemValue)
                                }
                                value={selectedCatdander}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Dosfur</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedDosfur(itemValue)
                                }
                                value={selectedDosfur}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Road Dust</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRoadDust(itemValue)
                                }
                                value={selectedRoadDust}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Old Dust</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedOldDust(itemValue)
                                }
                                value={selectedOldDust}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>PS Dust</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPSDust(itemValue)
                                }
                                value={selectedPSDust}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Animal Products
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>MilkP</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMilkP(itemValue)
                                }
                                value={selectedMilkP}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>MilkC</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMilkC(itemValue)
                                }
                                value={selectedMilkC}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Curd</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCurd(itemValue)
                                }
                                value={selectedCurd}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Coffee</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCoffee(itemValue)
                                }
                                value={selectedCoffee}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tea</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTea(itemValue)
                                }
                                value={selectedTea}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Beef</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBeef(itemValue)
                                }
                                value={selectedBeef}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Chicken</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedChicken(itemValue)
                                }
                                value={selectedChicken}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mutton</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMutton(itemValue)
                                }
                                value={selectedMutton}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Egg</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedEgg(itemValue)
                                }
                                value={selectedEgg}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>FishA</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFishA(itemValue)
                                }
                                value={selectedFishA}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>FishB</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFishB(itemValue)
                                }
                                value={selectedFishB}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Crabs</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCrabs(itemValue)
                                }
                                value={selectedCrabs}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Prawns</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPrawns(itemValue)
                                }
                                value={selectedPrawns}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Shark</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedShark(itemValue)
                                }
                                value={selectedShark}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Vegitables and Fruits
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Avaraikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedAvaraikai(itemValue)
                                }
                                value={selectedAvaraikai}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Banana</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBanana(itemValue)
                                }
                                value={selectedBanana}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Beans</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBeans(itemValue)
                                }
                                value={selectedBeans}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Beetroot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBeetroot(itemValue)
                                }
                                value={selectedBeetroot}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Brinjal</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBrinjal(itemValue)
                                }
                                value={selectedBrinjal}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cabbage</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCabbage(itemValue)
                                }
                                value={selectedCabbage}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Capsicum</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCapsicum(itemValue)
                                }
                                value={selectedCapsicum}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Chillie</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedChillie(itemValue)
                                }
                                value={selectedChillie}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cauliflower</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCauliflower(itemValue)
                                }
                                value={selectedCauliflower}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Carrot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCarrot(itemValue)
                                }
                                value={selectedCarrot}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Chow Chow</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedChowchow(itemValue)
                                }
                                value={selectedChowchow}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Corn</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCorn(itemValue)
                                }
                                value={selectedCorn}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cucumber</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCucumber(itemValue)
                                }
                                value={selectedCucumber}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Drumstick</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedDrumstick(itemValue)
                                }
                                value={selectedDrumstick}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Greens</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGreens(itemValue)
                                }
                                value={selectedGreens}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Gourds</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGourds(itemValue)
                                }
                                value={selectedGourds}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Kovaikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedKovaikai(itemValue)
                                }
                                value={selectedKovaikai}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Kothavarai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedKothavarai(itemValue)
                                }
                                value={selectedKothavarai}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Ladies Finger</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedLfinger(itemValue)
                                }
                                value={selectedLfinger}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Malli</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMalli(itemValue)
                                }
                                value={selectedMalli}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mango</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMango(itemValue)
                                }
                                value={selectedMango}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mushroom</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMushroom(itemValue)
                                }
                                value={selectedMushroom}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Nuckol</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedNuckol(itemValue)
                                }
                                value={selectedNuckol}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Onion</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedOnion(itemValue)
                                }
                                value={selectedOnion}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Peas</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPeas(itemValue)
                                }
                                value={selectedPeas}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Potroot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPotroot(itemValue)
                                }
                                value={selectedPotroot}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Paneer</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPaneer(itemValue)
                                }
                                value={selectedPaneer}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Potato</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPotato(itemValue)
                                }
                                value={selectedPotato}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pumkin</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPumkin(itemValue)
                                }
                                value={selectedPumkin}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pudina</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPudina(itemValue)
                                }
                                value={selectedPudina}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Radish</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRadish(itemValue)
                                }
                                value={selectedRadish}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tomato</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTomato(itemValue)
                                }
                                value={selectedTomato}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tondaikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTondaikai(itemValue)
                                }
                                value={selectedTondaikai}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Vazpoo/Thandu</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedVazpoo(itemValue)
                                }
                                value={selectedVazpoo}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Yams</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedYams(itemValue)
                                }
                                value={selectedYams}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Nuts, Spices and Pulses
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Gram</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGram(itemValue)
                                }
                                value={selectedGram}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Channa</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedChanna(itemValue)
                                }
                                value={selectedChanna}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Dhaal</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedDhaal(itemValue)
                                }
                                value={selectedDhaal}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Maida</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMaida(itemValue)
                                }
                                value={selectedMaida}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Oats</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedOats(itemValue)
                                }
                                value={selectedOats}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Ragi</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRagi(itemValue)
                                }
                                value={selectedRagi}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Rice</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRice(itemValue)
                                }
                                value={selectedRice}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Wheat</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedWheat(itemValue)
                                }
                                value={selectedWheat}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Coconut</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCoconut(itemValue)
                                }
                                value={selectedCoconut}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Oil</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedOil(itemValue)
                                }
                                value={selectedOil}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Garlic</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGarlic(itemValue)
                                }
                                value={selectedGarlic}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Ginger</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGinger(itemValue)
                                }
                                value={selectedGinger}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pepper</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPepper(itemValue)
                                }
                                value={selectedPepper}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tamarind</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTamarind(itemValue)
                                }
                                value={selectedTamarind}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Aginomoto</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedAginomoto(itemValue)
                                }
                                value={selectedAginomoto}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Spices</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedSpices(itemValue)
                                }
                                value={selectedSpices}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Coco</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCoco(itemValue)
                                }
                                value={selectedCoco}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Horlicks</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedHorlicks(itemValue)
                                }
                                value={selectedHorlicks}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Boost</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBoost(itemValue)
                                }
                                value={selectedBoost}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Nuts</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedNuts(itemValue)
                                }
                                value={selectedNuts}
                            >

                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Symptoms
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Running Nose</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRunningNose(itemValue)
                                }
                                value={selectedRunningNose}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Sneeze</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedSneeze(itemValue)
                                }
                                value={selectedSneeze}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cough</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCough(itemValue)
                                }
                                value={selectedCough}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Wheeze</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedWheeze(itemValue)
                                }
                                value={selectedWheeze}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Headache</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedHeadache(itemValue)
                                }
                                value={selectedHeadache}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Itch</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedItch(itemValue)
                                }
                                value={selectedItch}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Swell</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedSwell(itemValue)
                                }
                                value={selectedSwell}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Red Rashes</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRedRashes(itemValue)
                                }
                                value={selectedRedRashes}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Family History</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFamilyHistory(itemValue)
                                }
                                value={selectedFamilyHistory}
                            >
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                {route.params ?
                    <Button style={styles.save} onPress={() => updateData()}>
                        Update
                    </Button> :
                    <Button style={styles.save} onPress={() => submitData()}>
                        Save
                    </Button>
                }
                <Button style={styles.cancel} onPress={() => {
                    navigation.navigate("Home")
                }}>
                    Cancel
                </Button>
            </View>
        </ScrollView>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    gender: {
        margin: 10,
        padding: 10,

    },
    buttons: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ffcc",
    },
    button: {
        margin: 20,
        padding: 20,
        backgroundColor: "#ff6600",
    },
    save: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ff00",
    },
    cancel: {
        margin: 20,
        padding: 20,
        backgroundColor: "#f0204f",
    },
    details: {
        margin: 5,
        backgroundColor: "#ccff33",
    }
})

export default AddPatient;