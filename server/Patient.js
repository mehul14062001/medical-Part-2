const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    age: String,
    gender: String,

    housedust: String,
    cottondust: String,
    aspergilus: String,
    pollen: String,
    parthenium: String,
    cockroach: String,
    catdander: String,
    dosfur: String,
    roaddust: String,
    olddust: String,
    psdust: String,

    milkp: String,
    milkc: String,
    curd: String,
    coffee: String,
    tea: String,
    beef: String,
    chicken: String,
    mutton: String,
    egg: String,
    fisha: String,
    fishb: String,
    crabs: String,
    prawns: String,
    shark: String,

    avaraikai: String,
    banana: String,
    beans: String,
    beetroot: String,
    brinjal: String,
    cabbage: String,
    capsicum: String,
    chillie: String,
    cauliflower: String,
    carrot: String,
    chowchow: String,
    corn: String,
    cucumber: String,
    drumstick: String,
    greens: String,
    gourds: String,
    kovaikai: String,
    kothavarai: String,
    lfinger: String,
    malli: String,
    mango: String,
    mushroom: String,
    nuckol: String,
    onion: String,
    peas: String,
    potroot: String,
    paneer: String,
    potato: String,
    pumkin: String,
    pudina: String,
    radish: String,
    tomato: String,
    tondaikai: String,
    vazpoo: String,
    yams: String,

    gram: String,
    channa: String,
    dhaal: String,
    maida: String,
    oats: String,
    ragi: String,
    rice: String,
    wheat: String,
    coconut: String,
    oil: String,
    garlic: String,
    ginger: String,
    pepper: String,
    tamarind: String,
    aginomoto: String,
    spices: String,
    coco: String,
    horlicks: String,
    boost: String,
    nuts: String,

    runningnose: String,
    sneeze: String,
    cough: String,
    wheeze: String,
    headache: String,
    itch: String,
    swell: String,
    redrashes: String,
    familyhistory: String,

})

mongoose.model("patient", PatientSchema)