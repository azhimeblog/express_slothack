var express = require('express');
var router = express.Router();
const fs = require('fs');
// var cron = require('node-cron');

function WINRATE() {
    let winrate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
    return winrate
}

var gamefc = [{
        "ID": 1,
        "GAME_CAMPS": "FC",
        "GAMENAME": "DA LE MEN",
        "IMG_PATH": "./FC/1 DA LE MEN.png",
        "GAME_IMG": "1 DA LE MEN.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 2,
        "GAME_CAMPS": "FC",
        "GAMENAME": "HAPPY DOU BAO",
        "IMG_PATH": "./FC/2 HAPPY DOU BAO.png",
        "GAME_IMG": "2 HAPPY DOU BAO.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 3,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Golden Panther",
        "IMG_PATH": "./FC/3 Golden Panther.png",
        "GAME_IMG": "3 Golden Panther.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 4,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Chinese New Year",
        "IMG_PATH": "./FC/4 Chinese New Year.png",
        "GAME_IMG": "4 Chinese New Year.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 5,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Pong Pong Hu",
        "IMG_PATH": "./FC/5 Pong Pong Hu.png",
        "GAME_IMG": "5 Pong Pong Hu.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 6,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Fortune Koi",
        "IMG_PATH": "./FC/6 Fortune Koi.png",
        "GAME_IMG": "6 Fortune Koi.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 7,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Night Market",
        "IMG_PATH": "./FC/7 Night Market.png",
        "GAME_IMG": "7 Night Market.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 8,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Three Little Pigs",
        "IMG_PATH": "./FC/8 Three Little Pigs.png",
        "GAME_IMG": "8 Three Little Pigs.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 9,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Hot Pot Party",
        "IMG_PATH": "./FC/9 Hot Pot Party.png",
        "GAME_IMG": "9 Hot Pot Party.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 10,
        "GAME_CAMPS": "FC",
        "GAMENAME": "Panda Dragon Boat",
        "IMG_PATH": "./FC/10 Panda Dragon Boat.png",
        "GAME_IMG": "10 Panda Dragon Boat.png",
        "WINRATE": WINRATE()
    }
]

var gamepg = [{
        "ID": "1",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Dragon Hatch",
        "IMG_PATH": "./PG/1 Dragon Hatch.png",
        "GAME_IMG": "1 Dragon Hatch.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "2",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Restaurant Craze",
        "IMG_PATH": "./PG/2 Restaurant Craze.png",
        "GAME_IMG": "2 Restaurant Craze.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "3",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Fortune Gods",
        "IMG_PATH": "./PG/3 Fortune Gods.png",
        "GAME_IMG": "3 Fortune Gods.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "4",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Dim Sum Mania",
        "IMG_PATH": "./PG/4 Dim Sum Mania.png",
        "GAME_IMG": "4 Dim Sum Mania.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "5",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Santa's Gift Rush",
        "IMG_PATH": "./PG/5 Santa's Gift Rush.png",
        "GAME_IMG": "5 Santa's Gift Rush.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "6",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Piggy Gold",
        "IMG_PATH": "./PG/6 Piggy Gold.png",
        "GAME_IMG": "6 Piggy Gold.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "7",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Fortune Mouse",
        "IMG_PATH": "./PG/7 Fortune Mouse.png",
        "GAME_IMG": "7 Fortune Mouse.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "8",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Muay Thai Champion",
        "IMG_PATH": "./PG/8 Muay Thai Champion.png",
        "GAME_IMG": "8 Muay Thai Champion.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "9",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Prosperity Lion",
        "IMG_PATH": "./PG/9 Prosperity Lion.png",
        "GAME_IMG": "9 Prosperity Lion.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "10",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Hood vs Wolf",
        "IMG_PATH": "./PG/10 Hood vs Wolf.png",
        "GAME_IMG": "10 Hood vs Wolf.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "11",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Emperor's Favour",
        "IMG_PATH": "./PG/11 Emperor's Favour.png",
        "GAME_IMG": "11 Emperor's Favour.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "12",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Mr. Hallow-Win",
        "IMG_PATH": "./PG/12 Mr. Hallow-Win.png",
        "GAME_IMG": "12 Mr. Hallow-Win.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "13",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Hotpot",
        "IMG_PATH": "./PG/13 Hotpot.png",
        "GAME_IMG": "13 Hotpot.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "14",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Journey to the Wealth",
        "IMG_PATH": "./PG/14 Journey to the Wealth.png",
        "GAME_IMG": "14 Journey to the Wealth.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "15",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Dragon Legend",
        "IMG_PATH": "./PG/15 Dragon Legend.png",
        "GAME_IMG": "15 Dragon Legend.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "16",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Captain's Bounty",
        "IMG_PATH": "./PG/16 Captain's Bounty.png",
        "GAME_IMG": "16 Captain's Bounty.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "17",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Symbols of Egypt",
        "IMG_PATH": "./PG/17 Symbols of Egypt.png",
        "GAME_IMG": "17 Symbols of Egypt.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "18",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Wild Inferno",
        "IMG_PATH": "./PG/18 Wild Inferno.png",
        "GAME_IMG": "18 Wild Inferno.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "19",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Ninja vs Samurai",
        "IMG_PATH": "./PG/19 Ninja vs Samurai.png",
        "GAME_IMG": "19 Ninja vs Samurai.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "20",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Legend of Hou Yi",
        "IMG_PATH": "./PG/20 Legend of Hou Yi.png",
        "GAME_IMG": "20 Legend of Hou Yi.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "21",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Wizdom Wonders",
        "IMG_PATH": "./PG/21 Wizdom Wonders.png",
        "GAME_IMG": "21 Wizdom Wonders.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "22",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Tree of Fortune",
        "IMG_PATH": "./PG/22 Tree of Fortune.png",
        "GAME_IMG": "22 Tree of Fortune.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "23",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Win Win Won",
        "IMG_PATH": "./PG/23 Win Win Won.png",
        "GAME_IMG": "23 Win Win Won.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "24",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Mahjong Ways",
        "IMG_PATH": "./PG/24 Mahjong Ways.png",
        "GAME_IMG": "24 Mahjong Ways.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "25",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Leprechaun Riches",
        "IMG_PATH": "./PG/25 Leprechaun Riches.png",
        "GAME_IMG": "25 Leprechaun Riches.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "26",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Peas Fairy",
        "IMG_PATH": "./PG/26 Peas Fairy.png",
        "GAME_IMG": "26 Peas Fairy.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "27",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Mahjong Way2",
        "IMG_PATH": "./PG/27 Mahjong Way2.png",
        "GAME_IMG": "27 Mahjong Way2.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "28",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Bikini paradise",
        "IMG_PATH": "./PG/28 Bikini paradise.png",
        "GAME_IMG": "28 Bikini paradise.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "29",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Tiki Go",
        "IMG_PATH": "./PG/29 Tiki Go.png",
        "GAME_IMG": "29 Tiki Go.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "30",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Medusa II",
        "IMG_PATH": "./PG/30 Medusa II.png",
        "GAME_IMG": "30 Medusa II.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "31",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Medusa",
        "IMG_PATH": "./PG/31 Medusa.png",
        "GAME_IMG": "31 Medusa.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "32",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Jungle Delight",
        "IMG_PATH": "./PG/32 Jungle Delight.png",
        "GAME_IMG": "32 Jungle Delight.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "33",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Honey Trap of Diao Chan",
        "IMG_PATH": "./PG/33 Honey Trap of Diao Chan.png",
        "GAME_IMG": "33 Honey Trap of Diao Chan.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "34",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Tomb of Treasure",
        "IMG_PATH": "./PG/34 Tomb of Treasure.png",
        "GAME_IMG": "34 Tomb of Treasure.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "35",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Three Monkeys",
        "IMG_PATH": "./PG/35 Three Monkeys.png",
        "GAME_IMG": "35 Three Monkeys.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "36",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Gem Saviour Sword",
        "IMG_PATH": "./PG/36 Gem Saviour Sword.png",
        "GAME_IMG": "36 Gem Saviour Sword.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "37",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Gem Saviour",
        "IMG_PATH": "./PG/37 Gem Saviour.png",
        "GAME_IMG": "37 Gem Saviour.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "38",
        "GAME_CAMPS": "PG",
        "GAMENAME": "The Great Icescape",
        "IMG_PATH": "./PG/38 The Great Icescape.png",
        "GAME_IMG": "38 The Great Icescape.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "39",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Genie's 3 Wishes",
        "IMG_PATH": "./PG/39 Genie's 3 Wishes.png",
        "GAME_IMG": "39 Genie's 3 Wishes.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "40",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Candy Burst",
        "IMG_PATH": "./PG/40 Candy Burst.png",
        "GAME_IMG": "40 Candy Burst.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "41",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Dragon Tiger Luck",
        "IMG_PATH": "./PG/41 Dragon Tiger Luck.png",
        "GAME_IMG": "41 Dragon Tiger Luck.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "42",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Wild Fireworks",
        "IMG_PATH": "./PG/42 Wild Fireworks.png",
        "GAME_IMG": "42 Wild Fireworks.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "43",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Gem Saviour Conquest",
        "IMG_PATH": "./PG/43 Gem Saviour Conquest.png",
        "GAME_IMG": "43 Gem Saviour Conquest.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "44",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Egypt's Book of Mystery",
        "IMG_PATH": "./PG/44 Egypt's Book of Mystery.png",
        "GAME_IMG": "44 Egypt's Book of Mystery.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "45",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Caishen Wins",
        "IMG_PATH": "./PG/45 Caishen Wins.png",
        "GAME_IMG": "45 Caishen Wins.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "46",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Ganesha Gold",
        "IMG_PATH": "./PG/46 Ganesha Gold.png",
        "GAME_IMG": "46 Ganesha Gold.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "47",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Ganesha Fortune",
        "IMG_PATH": "./PG/47 Ganesha Fortune.png",
        "GAME_IMG": "47 Ganesha Fortune.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "48",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Shaolin Soccer",
        "IMG_PATH": "./PG/48 Shaolin Soccer.png",
        "GAME_IMG": "48 Shaolin Soccer.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "49",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Steampunk Wheel of Destiny",
        "IMG_PATH": "./PG/49 Steampunk Wheel of Destiny.png",
        "GAME_IMG": "49 Steampunk Wheel of Destiny.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": WINRATE(),
        "GAME_CAMPS": "PG",
        "GAMENAME": "Phoenix Rises",
        "IMG_PATH": "./PG/WINRATE() Phoenix Rises.png",
        "GAME_IMG": "WINRATE() Phoenix Rises.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "51",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Hip Hop Panda",
        "IMG_PATH": "./PG/51 Hip Hop Panda.png",
        "GAME_IMG": "51 Hip Hop Panda.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "52",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Summon & Conquer",
        "IMG_PATH": "./PG/52 Summon & Conquer.png",
        "GAME_IMG": "52 Summon & Conquer.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "53",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Flirting Scholar",
        "IMG_PATH": "./PG/53 Flirting Scholar.png",
        "GAME_IMG": "53 Flirting Scholar.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "54",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Plushie Frenzy",
        "IMG_PATH": "./PG/54 Plushie Frenzy.png",
        "GAME_IMG": "54 Plushie Frenzy.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "55",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Double Fortune",
        "IMG_PATH": "./PG/55 Double Fortune.png",
        "GAME_IMG": "55 Double Fortune.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": "56",
        "GAME_CAMPS": "PG",
        "GAMENAME": "Dreams of Macau",
        "IMG_PATH": "./PG/56 Dreams of Macau.png",
        "GAME_IMG": "56 Dreams of Macau.png",
        "WINRATE": WINRATE()
    }
]
var gamejoker = [{
        "ID": 1,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Madness",
        "IMG_PATH": "./JOKER/1 Madness.png",
        "GAME_IMG": "1 Madness.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 2,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Legacy",
        "IMG_PATH": "./JOKER/2 Legacy.png",
        "GAME_IMG": "2 Legacy.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 3,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Inventions",
        "IMG_PATH": "./JOKER/3 Inventions.png",
        "GAME_IMG": "3 Inventions.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 4,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Sand",
        "IMG_PATH": "./JOKER/4 Sand.png",
        "GAME_IMG": "4 Sand.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 5,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Mania",
        "IMG_PATH": "./JOKER/5 Mania.png",
        "GAME_IMG": "5 Mania.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 6,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Sea",
        "IMG_PATH": "./JOKER/6 Sea.png",
        "GAME_IMG": "6 Sea.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 7,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "West",
        "IMG_PATH": "./JOKER/7 West.png",
        "GAME_IMG": "7 West.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 8,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Fairies",
        "IMG_PATH": "./JOKER/8 Fairies.png",
        "GAME_IMG": "8 Fairies.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 9,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Octagon Gem 2",
        "IMG_PATH": "./JOKER/9 Octagon Gem 2.png",
        "GAME_IMG": "9 Octagon Gem 2.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 10,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Bagua",
        "IMG_PATH": "./JOKER/10 Bagua.png",
        "GAME_IMG": "10 Bagua.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 11,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Bagua 2",
        "IMG_PATH": "./JOKER/11 Bagua 2.png",
        "GAME_IMG": "11 Bagua 2.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 12,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Hawk",
        "IMG_PATH": "./JOKER/12 Hawk.png",
        "GAME_IMG": "12 Hawk.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 13,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Bingo",
        "IMG_PATH": "./JOKER/13 Bingo.png",
        "GAME_IMG": "13 Bingo.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 14,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Bingo",
        "IMG_PATH": "./JOKER/14 Bingo.png",
        "GAME_IMG": "14 Bingo.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 15,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Bingo",
        "IMG_PATH": "./JOKER/15 Bingo.png",
        "GAME_IMG": "15 Bingo.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 16,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Hunter",
        "IMG_PATH": "./JOKER/16 Hunter.png",
        "GAME_IMG": "16 Hunter.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 17,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Eye",
        "IMG_PATH": "./JOKER/17 Eye.png",
        "GAME_IMG": "17 Eye.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 18,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Gem",
        "IMG_PATH": "./JOKER/18 Gem.png",
        "GAME_IMG": "18 Gem.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 19,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Hunters",
        "IMG_PATH": "./JOKER/19 Hunters.png",
        "GAME_IMG": "19 Hunters.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 20,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Yggdrasil",
        "IMG_PATH": "./JOKER/20 Yggdrasil.png",
        "GAME_IMG": "20 Yggdrasil.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 21,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Brew",
        "IMG_PATH": "./JOKER/21 Brew.png",
        "GAME_IMG": "21 Brew.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 22,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Vault",
        "IMG_PATH": "./JOKER/22 Vault.png",
        "GAME_IMG": "22 Vault.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 23,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Rooster",
        "IMG_PATH": "./JOKER/23 Rooster.png",
        "GAME_IMG": "23 Rooster.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 24,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Cryptomania",
        "IMG_PATH": "./JOKER/24 Cryptomania.png",
        "GAME_IMG": "24 Cryptomania.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 25,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Fruits",
        "IMG_PATH": "./JOKER/25 Fruits.png",
        "GAME_IMG": "25 Fruits.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 26,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Treasure",
        "IMG_PATH": "./JOKER/26 Treasure.png",
        "GAME_IMG": "26 Treasure.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 27,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Jackpot",
        "IMG_PATH": "./JOKER/27 Jackpot.png",
        "GAME_IMG": "27 Jackpot.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 28,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Pearl",
        "IMG_PATH": "./JOKER/28 Pearl.png",
        "GAME_IMG": "28 Pearl.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 29,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Journey",
        "IMG_PATH": "./JOKER/29 Journey.png",
        "GAME_IMG": "29 Journey.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 30,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Banquet",
        "IMG_PATH": "./JOKER/30 Banquet.png",
        "GAME_IMG": "30 Banquet.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 31,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Jun",
        "IMG_PATH": "./JOKER/31 Jun.png",
        "GAME_IMG": "31 Jun.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 32,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Reels",
        "IMG_PATH": "./JOKER/32 Reels.png",
        "GAME_IMG": "32 Reels.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 33,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Blade",
        "IMG_PATH": "./JOKER/33 Blade.png",
        "GAME_IMG": "33 Blade.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 34,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Regnant",
        "IMG_PATH": "./JOKER/34 Regnant.png",
        "GAME_IMG": "34 Regnant.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 35,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Boss",
        "IMG_PATH": "./JOKER/35 Boss.png",
        "GAME_IMG": "35 Boss.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 36,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Dance",
        "IMG_PATH": "./JOKER/36 Dance.png",
        "GAME_IMG": "36 Dance.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 37,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Powerflame",
        "IMG_PATH": "./JOKER/37 Powerflame.png",
        "GAME_IMG": "37 Powerflame.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 38,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Phoenix888",
        "IMG_PATH": "./JOKER/38 Phoenix888.png",
        "GAME_IMG": "38 Phoenix888.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 39,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Riches",
        "IMG_PATH": "./JOKER/39 Riches.png",
        "GAME_IMG": "39 Riches.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 40,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Artifacts",
        "IMG_PATH": "./JOKER/40 Artifacts.png",
        "GAME_IMG": "40 Artifacts.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 41,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Tigers",
        "IMG_PATH": "./JOKER/41 Tigers.png",
        "GAME_IMG": "41 Tigers.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 42,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Dragons",
        "IMG_PATH": "./JOKER/42 Dragons.png",
        "GAME_IMG": "42 Dragons.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 43,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "KTV",
        "IMG_PATH": "./JOKER/43 KTV.png",
        "GAME_IMG": "43 KTV.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 44,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "God",
        "IMG_PATH": "./JOKER/44 God.png",
        "GAME_IMG": "44 God.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 45,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "China",
        "IMG_PATH": "./JOKER/45 China.png",
        "GAME_IMG": "45 China.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 46,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Panda",
        "IMG_PATH": "./JOKER/46 Panda.png",
        "GAME_IMG": "46 Panda.png",
        "WINRATE": WINRATE()
    },
    {
        "ID": 47,
        "GAME_CAMPS": "Joker",
        "GAMENAME": "Haiba",
        "IMG_PATH": "./JOKER/47 Haiba.png",
        "GAME_IMG": "47 Haiba.png",
        "WINRATE": WINRATE()
    }
]
var gamesg = [{
            "ID": 1,
            "GAME_CAMPS": "SG",
            "GAMENAME": "FISHING GOD",
            "IMG_PATH": "./SG/1 FISHING GOD.png",
            "GAME_IMG": "1 FISHING GOD.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 2,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DOUBLE FLAME",
            "IMG_PATH": "./SG/2 DOUBLE FLAME.png",
            "GAME_IMG": "2 DOUBLE FLAME.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 3,
            "GAME_CAMPS": "SG",
            "GAMENAME": "BOOK OF MYTH",
            "IMG_PATH": "./SG/3 BOOK OF MYTH.png",
            "GAME_IMG": "3 BOOK MYTH.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 4,
            "GAME_CAMPS": "SG",
            "GAMENAME": "MONEY MOUSE",
            "IMG_PATH": "./SG/4 MONEY MOUSE.png",
            "GAME_IMG": "4 MONEY MOUSE.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 5,
            "GAME_CAMPS": "SG",
            "GAMENAME": "888",
            "IMG_PATH": "./SG/5 888.png",
            "GAME_IMG": "5 888 888.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 6,
            "GAME_CAMPS": "SG",
            "GAMENAME": "THREE LUCKY STARS",
            "IMG_PATH": "./SG/6 THREE LUCKY STARS.png",
            "GAME_IMG": "6 THREE STARS.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 7,
            "GAME_CAMPS": "SG",
            "GAMENAME": "HEROES",
            "IMG_PATH": "./SG/7 HEROES.png",
            "GAME_IMG": "7 HEROES HEROES.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 8,
            "GAME_CAMPS": "SG",
            "GAMENAME": "SWEET BAKERY",
            "IMG_PATH": "./SG/8 SWEET BAKERY.png",
            "GAME_IMG": "8 SWEET BAKERY.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 9,
            "GAME_CAMPS": "SG",
            "GAMENAME": "MAGICAL LAMP",
            "IMG_PATH": "./SG/9 MAGICAL LAMP.png",
            "GAME_IMG": "9 MAGICAL LAMP.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 10,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DANCING FEVER",
            "IMG_PATH": "./SG/10 DANCING FEVER.png",
            "GAME_IMG": "10 DANCING FEVER.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 11,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLD PANTHER",
            "IMG_PATH": "./SG/11 GOLD PANTHER.png",
            "GAME_IMG": "11 GOLD PANTHER.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 12,
            "GAME_CAMPS": "SG",
            "GAMENAME": "TRIPLE PANDA",
            "IMG_PATH": "./SG/12 TRIPLE PANDA.png",
            "GAME_IMG": "12 TRIPLE PANDA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 13,
            "GAME_CAMPS": "SG",
            "GAMENAME": "FAFAFA",
            "IMG_PATH": "./SG/13 FAFAFA FAFAFA.png",
            "GAME_IMG": "13 FAFAFA FAFAFA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 14,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLDEN WHALE",
            "IMG_PATH": "./SG/14 GOLDEN WHALE.png",
            "GAME_IMG": "14 GOLDEN WHALE.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 15,
            "GAME_CAMPS": "SG",
            "GAMENAME": "BABY CAI SHEN",
            "IMG_PATH": "./SG/15 BABY SHEN.png",
            "GAME_IMG": "15 BABY SHEN.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 16,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DOUBLE FORTUNES",
            "IMG_PATH": "./SG/16 DOUBLE FORTUNES.png",
            "GAME_IMG": "16 DOUBLE FORTUNES.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 17,
            "GAME_CAMPS": "SG",
            "GAMENAME": "LUCKY CAI SHEN",
            "IMG_PATH": "./SG/17 LUCKY SHEN.png",
            "GAME_IMG": "17 LUCKY SHEN.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 18,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DRAGON GOLD SA",
            "IMG_PATH": "./SG/18 DRAGON SA.png",
            "GAME_IMG": "18 DRAGON SA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 19,
            "GAME_CAMPS": "SG",
            "GAMENAME": "LUCKY KOI",
            "IMG_PATH": "./SG/19 LUCKY KOI.png",
            "GAME_IMG": "19 LUCKY KOI.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 20,
            "GAME_CAMPS": "SG",
            "GAMENAME": "BIG PROSPERITY SA",
            "IMG_PATH": "./SG/20 BIG SA.png",
            "GAME_IMG": "20 BIG SA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 21,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DA FU XIAO FU",
            "IMG_PATH": "./SG/21 DA FU.png",
            "GAME_IMG": "21 DA FU.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 22,
            "GAME_CAMPS": "SG",
            "GAMENAME": "CAI YUAN GUANG JIN",
            "IMG_PATH": "./SG/22 CAI JIN.png",
            "GAME_IMG": "22 CAI JIN.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 23,
            "GAME_CAMPS": "SG",
            "GAMENAME": "PROSPERITY GODS",
            "IMG_PATH": "./SG/23 PROSPERITY GODS.png",
            "GAME_IMG": "23 PROSPERITY GODS.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 24,
            "GAME_CAMPS": "SG",
            "GAMENAME": "ZEUS",
            "IMG_PATH": "./SG/24 ZEUS ZEUS.png",
            "GAME_IMG": "24 ZEUS ZEUS.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 25,
            "GAME_CAMPS": "SG",
            "GAMENAME": "5 FORTUNE DRAGONS",
            "IMG_PATH": "./SG/25 5 FORTUNE DRAGONS.png",
            "GAME_IMG": "25 5 FORTUNE DRAGONS.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 26,
            "GAME_CAMPS": "SG",
            "GAMENAME": "BROTHERS KINGDOM",
            "IMG_PATH": "./SG/26 BROTHERS KINGDOM.png",
            "GAME_IMG": "26 BROTHERS KINGDOM.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 27,
            "GAME_CAMPS": "SG",
            "GAMENAME": "PRINCESS WANG",
            "IMG_PATH": "./SG/27 PRINCESS WANG.png",
            "GAME_IMG": "27 PRINCESS WANG.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 28,
            "GAME_CAMPS": "SG",
            "GAMENAME": "HOYEAH! MONKEY",
            "IMG_PATH": "./SG/28 HOYEAH MONKEY.png",
            "GAME_IMG": "28 HOYEAH MONKEY.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 29,
            "GAME_CAMPS": "SG",
            "GAMENAME": "WONG CHOY SA",
            "IMG_PATH": "./SG/29 WONG SA.png",
            "GAME_IMG": "29 WONG SA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 30,
            "GAME_CAMPS": "SG",
            "GAMENAME": "FAFAFA 2",
            "IMG_PATH": "./SG/30 FAFAFA FAFAFA 2.png",
            "GAME_IMG": "30 FAFAFA FAFAFA 2.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 31,
            "GAME_CAMPS": "SG",
            "GAMENAME": "MR CHU TYCOON",
            "IMG_PATH": "./SG/31 MR TYCOON.png",
            "GAME_IMG": "31 MR TYCOON.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 32,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLF CHAMPION",
            "IMG_PATH": "./SG/32 GOLF CHAMPION.png",
            "GAME_IMG": "32 GOLF CHAMPION.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 33,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLDEN CHICKEN",
            "IMG_PATH": "./SG/33 GOLDEN CHICKEN.png",
            "GAME_IMG": "33 GOLDEN CHICKEN.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 34,
            "GAME_CAMPS": "SG",
            "GAMENAME": "ALIBABA",
            "IMG_PATH": "./SG/34 ALIBABA ALIBABA.png",
            "GAME_IMG": "34 ALIBABA ALIBABA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 35,
            "GAME_CAMPS": "SG",
            "GAMENAME": "HIGHWAY FORTUNE",
            "IMG_PATH": "./SG/35 HIGHWAY FORTUNE.png",
            "GAME_IMG": "35 HIGHWAY FORTUNE.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 36,
            "GAME_CAMPS": "SG",
            "GAMENAME": "SANTA GIFTS",
            "IMG_PATH": "./SG/36 SANTA GIFTS.png",
            "GAME_IMG": "36 SANTA GIFTS.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 37,
            "GAME_CAMPS": "SG",
            "GAMENAME": "SEA EMPEROR",
            "IMG_PATH": "./SG/37 SEA EMPEROR.png",
            "GAME_IMG": "37 SEA EMPEROR.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 38,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DADDY VACATION",
            "IMG_PATH": "./SG/38 DADDY VACATION.png",
            "GAME_IMG": "38 DADDY VACATION.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 39,
            "GAME_CAMPS": "SG",
            "GAMENAME": "FESTIVE LION",
            "IMG_PATH": "./SG/39 FESTIVE LION.png",
            "GAME_IMG": "39 FESTIVE LION.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 40,
            "GAME_CAMPS": "SG",
            "GAMENAME": "MERMAID",
            "IMG_PATH": "./SG/40 MERMAID MERMAID.png",
            "GAME_IMG": "40 MERMAID MERMAID.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 41,
            "GAME_CAMPS": "SG",
            "GAMENAME": "PIRATE KING",
            "IMG_PATH": "./SG/41 PIRATE KING.png",
            "GAME_IMG": "41 PIRATE KING.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 42,
            "GAME_CAMPS": "SG",
            "GAMENAME": "DRUNKEN JUNGLE",
            "IMG_PATH": "./SG/42 DRUNKEN JUNGLE.png",
            "GAME_IMG": "42 DRUNKEN JUNGLE.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 43,
            "GAME_CAMPS": "SG",
            "GAMENAME": "EMPEROR GATE SA",
            "IMG_PATH": "./SG/43 EMPEROR SA.png",
            "GAME_IMG": "43 EMPEROR SA.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 44,
            "GAME_CAMPS": "SG",
            "GAMENAME": "CAI SHEN 888",
            "IMG_PATH": "./SG/44 CAI SHEN 888.png",
            "GAME_IMG": "44 CAI SHEN 888.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 45,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLDEN FIST",
            "IMG_PATH": "./SG/45 GOLDEN FIST.png",
            "GAME_IMG": "45 GOLDEN FIST.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 46,
            "GAME_CAMPS": "SG",
            "GAMENAME": "WOW PROSPERITY",
            "IMG_PATH": "./SG/46 WOW PROSPERITY.png",
            "GAME_IMG": "46 WOW PROSPERITY.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 47,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GANGSTER AXE",
            "IMG_PATH": "./SG/47 GANGSTER AXE.png",
            "GAME_IMG": "47 GANGSTER AXE.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 48,
            "GAME_CAMPS": "SG",
            "GAMENAME": "PAN FAIRY",
            "IMG_PATH": "./SG/48 PAN FAIRY.png",
            "GAME_IMG": "48 PAN FAIRY.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 49,
            "GAME_CAMPS": "SG",
            "GAMENAME": "GOLDEN MONKEY",
            "IMG_PATH": "./SG/49 GOLDEN MONKEY.png",
            "GAME_IMG": "49 GOLDEN MONKEY.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": WINRATE(),
            "GAME_CAMPS": "SG",
            "GAMENAME": "SHANGHAI 008",
            "IMG_PATH": "./SG/WINRATE() SHANGHAI SHANGHAI 008.png",
            "GAME_IMG": "WINRATE() SHANGHAI SHANGHAI 008.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 51,
            "GAME_CAMPS": "SG",
            "GAMENAME": "JUNGLE KING",
            "IMG_PATH": "./SG/51 JUNGLE KING.png",
            "GAME_IMG": "51 JUNGLE KING.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 52,
            "GAME_CAMPS": "SG",
            "GAMENAME": "FIST OF GOLD",
            "IMG_PATH": "./SG/52 FIST GOLD.png",
            "GAME_IMG": "52 FIST GOLD.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 53,
            "GAME_CAMPS": "SG",
            "GAMENAME": "TIGER WARRIOR",
            "IMG_PATH": "./SG/53 TIGER WARRIOR.png",
            "GAME_IMG": "53 TIGER WARRIOR.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 54,
            "GAME_CAMPS": "SG",
            "GAMENAME": "KING PHARAOH",
            "IMG_PATH": "./SG/54 KING PHARAOH.png",
            "GAME_IMG": "54 KING PHARAOH.png",
            "WINRATE": WINRATE()
        },
        {
            "ID": 55,
            "GAME_CAMPS": "SG",
            "GAMENAME": "HONEY HUNTER",
            "IMG_PATH": "./SG/55 HONEY HUNTER.png",
            "GAME_IMG": "55 HONEY HUNTER.png",
            "WINRATE": WINRATE()
        }
    ]
    // convert JSON object to string
var gamefcdata = JSON.stringify(gamefc);
var gamepgdata = JSON.stringify(gamepg);
var gamejokerdata = JSON.stringify(gamejoker);
var gamesgdata = JSON.stringify(gamesg);


function deloldgame() {
    fs.unlink('./public/json/gamefc.json', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    fs.unlink('./public/json/gamepg.json', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    fs.unlink('./public/json/gamejoker.json', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    fs.unlink('./public/json/gamesg.json', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}


function updategame() {
    fs.writeFile('./public/json/gamefc.json', gamefcdata, (err) => {
        if (err) {
            throw err;
        }
        console.log("GAMEFC HACKING data is done.");
    });

    fs.writeFile('./public/json/gamepg.json', gamepgdata, (err) => {
        if (err) {
            throw err;
        }
        console.log("GAMEPG HACKING data is done.");
    });

    fs.writeFile('./public/json/gamejoker.json', gamejokerdata, (err) => {
        if (err) {
            throw err;
        }
        console.log("GAMEJOKER HACKING data is done.");
    });

    fs.writeFile('./public/json/gamesg.json', gamesgdata, (err) => {
        if (err) {
            throw err;
        }
        console.log("GAMESG HACKING data is done.");
    });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    deloldgame()
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    updategame()
    res.send('API HAS BEEN UPDATE');
});

module.exports = router;