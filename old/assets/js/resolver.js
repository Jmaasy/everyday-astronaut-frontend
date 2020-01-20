// var getSingleLaunch = function(id) {
//     return jQuery.ajax({url: "http://127.0.0.1:8080/v1/launch/1069"})
// }

// var getLaunches = function() {
//     return jQuery.ajax({url: "http://127.0.0.1:8080/v1/launch"})
// }

const getLaunches = function() {
    return {
        "totalCount": 50,
        "launches": [
            {
                "id": 1356,
                "name": "Atlas V N22 | CST-100 Starliner Crewed Flight Test (Crewed)",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 85,
                        "name": "Space Launch Complex 41, Cape Canaveral, FL",
                        "latitude": "28.58341025",
                        "longitude": "-80.58303644"
                    }
                },
                "missions": [
                    {
                        "id": 1250,
                        "name": "CST-100 Starliner Crewed Flight Test (Crewed)",
                        "description": "This is the first crewed test flight of Starliner spacecraft. It will carry NASA astronauts Christopher Ferguson, Michael Fincke and Nicole Mann to the International Space Station.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 118,
                    "name": "Atlas V N22",
                    "family": "Atlas",
                    "configuration": "V N22",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "United Launch Alliance",
                        "short": "ULA",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1409,
                "name": "Ariane 5 ECA | Star One D2 & unknown",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1928,
                "name": "LauncherOne | Ignis & others",
                "net": "2020-02-03T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Air launch to orbit",
                    "countryCode": "UNK",
                    "pad": {
                        "id": 188,
                        "name": "Guam International Airport",
                        "latitude": "13.483889",
                        "longitude": "144.797222"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 173,
                    "name": "LauncherOne",
                    "family": "Launcher",
                    "configuration": "One",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Virgin Orbit",
                        "short": "VO",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1420,
                "name": "Long March 4C | Fengyun-3E",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Taiyuan, People's Republic of China",
                    "countryCode": "CHN",
                    "pad": {
                        "id": 116,
                        "name": "Unknown Pad, Taiyuan",
                        "latitude": "38.849",
                        "longitude": "111.608"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 70,
                    "name": "Long March 4C",
                    "family": "Long March 4",
                    "configuration": "C",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "China Aerospace Science and Technology Corporation",
                        "short": "CASC",
                        "type": 1,
                        "location": "CHN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1680,
                "name": "Soyuz 2.1b/Fregat | Glonass-K1",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Plesetsk Cosmodrome, Russian Federation",
                    "countryCode": "RUS",
                    "pad": {
                        "id": 50,
                        "name": "43/3 (43L), Plesetsk Cosmodrome, Russia",
                        "latitude": "62.9273",
                        "longitude": "40.45"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 65,
                    "name": "Soyuz 2.1b/Fregat",
                    "family": "Soyuz",
                    "configuration": "2.1b/Fregat",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Russian Space Forces",
                        "short": "VKS",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1937,
                "name": "Kuaizhou-11 | Maiden Flight",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Jiuquan, People's Republic of China",
                    "countryCode": "CHN",
                    "pad": {
                        "id": 115,
                        "name": "Unknown Pad, Jiuquan",
                        "latitude": "40.958",
                        "longitude": "100.291"
                    }
                },
                "missions": [
                    {
                        "id": 1212,
                        "name": "Maiden Flight",
                        "description": "First flight of the new solid launcher developed by ExPace, subsidiary of CASIC. It will carry 2 communication satellites on this launch.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 223,
                    "name": "Kuaizhou-11",
                    "family": "Kuaizhou",
                    "configuration": "11",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "ExPace",
                        "short": "EP",
                        "type": 3,
                        "location": "CHN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1938,
                "name": "Falcon 9 Block 5 | ANASIS-II",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 84,
                        "name": "Space Launch Complex 40, Cape Canaveral, FL",
                        "latitude": "28.56194122",
                        "longitude": "-80.57735736"
                    }
                },
                "missions": [
                    {
                        "id": 1214,
                        "name": "ANASIS-II",
                        "description": "ANASIS-II is South Korea's first dedicated military satellite.",
                        "orbit": "VLEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "",
                            "flightNo": 0,
                            "block": 5,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            null
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 1944,
                "name": "Soyuz 2.1b/Fregat-M | OneWeb",
                "net": "2020-02-15T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Baikonur Cosmodrome, Republic of Kazakhstan",
                    "countryCode": "KAZ",
                    "pad": {
                        "id": 30,
                        "name": "31/6, Baikonur Cosmodrome, Kazakhstan",
                        "latitude": "45.996034",
                        "longitude": "63.564003"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 153,
                    "name": "Soyuz 2.1b/Fregat-M",
                    "family": "Soyuz",
                    "configuration": "2.1b/Fregat-M",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Khrunichev State Research and Production Space Center",
                        "short": "KhSC",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1945,
                "name": "Soyuz 2.1b/Fregat-M | OneWeb",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Baikonur Cosmodrome, Republic of Kazakhstan",
                    "countryCode": "KAZ",
                    "pad": {
                        "id": 30,
                        "name": "31/6, Baikonur Cosmodrome, Kazakhstan",
                        "latitude": "45.996034",
                        "longitude": "63.564003"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 153,
                    "name": "Soyuz 2.1b/Fregat-M",
                    "family": "Soyuz",
                    "configuration": "2.1b/Fregat-M",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Khrunichev State Research and Production Space Center",
                        "short": "KhSC",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1308,
                "name": "Epsilon  | JV-LOTUSat-1",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Uchinoura Space Center, Japan",
                    "countryCode": "JPN",
                    "pad": {
                        "id": 171,
                        "name": "Mu Center, Uchinoura Space Center, Japan",
                        "latitude": "31.251",
                        "longitude": "131.0813"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 168,
                    "name": "Epsilon ",
                    "family": "Epsilon",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Japan Aerospace Exploration Agency",
                        "short": "JAXA",
                        "type": 1,
                        "location": "JPN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1696,
                "name": "LauncherOne | OneWeb",
                "net": "2020-02-28T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Air launch to orbit",
                    "countryCode": "UNK",
                    "pad": {
                        "id": 181,
                        "name": "Mojave Air and Space Port",
                        "latitude": "35.059444",
                        "longitude": "-118.151667"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 173,
                    "name": "LauncherOne",
                    "family": "Launcher",
                    "configuration": "One",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Virgin Orbit",
                        "short": "VO",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1824,
                "name": "PSLV  | Oceansat-3",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [
                    {
                        "id": 1193,
                        "name": "Oceansat-3",
                        "description": "Oceansat-3 is a part of ISRO's Oceansat program. Its main purpose is ocean observation, which includes gathering ocean color data, sea surface temperature measurements and wind vector data.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 14,
                    "name": "PSLV ",
                    "family": "PSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1826,
                "name": "Antares 230+ | Cygnus CRS NG-13",
                "net": "2020-02-09T22:39:00",
                "netStatus": 2,
                "location": {
                    "name": "Wallops Island, Virginia, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 109,
                        "name": "Launch Area 0 A, Wallops Island, Virginia",
                        "latitude": "37.8337",
                        "longitude": "-75.4881"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 241,
                    "name": "Antares 230+",
                    "family": "Antares",
                    "configuration": "230+",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Northrop Grumman Innovation Systems",
                        "short": "NGIS",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1827,
                "name": "Soyuz STA/Fregat | Falcon Eye 2",
                "net": "2020-03-06T01:33:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 146,
                        "name": "Soyuz Launch Complex, Kourou/Sinnamary",
                        "latitude": "5.3019",
                        "longitude": "-52.8346"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 76,
                    "name": "Soyuz STA/Fregat",
                    "family": "Soyuz",
                    "configuration": "STA/Fregat",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1828,
                "name": "Minotaur IV | NROL-129",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Wallops Island, Virginia, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 110,
                        "name": "Launch Area 0 B, Wallops Island, Virginia",
                        "latitude": "37.831",
                        "longitude": "-75.4911"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 59,
                    "name": "Minotaur IV",
                    "family": "Minotaur",
                    "configuration": "IV",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Northrop Grumman Innovation Systems",
                        "short": "NGIS",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1574,
                "name": "Ariane 5 ECA | BSAT-4b & Unknown",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1576,
                "name": "PSLV  | RISAT-2A",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [
                    {
                        "id": 739,
                        "name": "RISAT-2A",
                        "description": "RISAT-2A is the third in the series of radar imaging RISAT satellites. The satellite carries a sophisticated synthetic aperture radar that operates at 5.35 GHz in C band.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 14,
                    "name": "PSLV ",
                    "family": "PSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1197,
                "name": "Long March 3B/E | APStar-6D",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Xichang Satellite Launch Center, People's Republic of China",
                    "countryCode": "CHN",
                    "pad": {
                        "id": 142,
                        "name": "Launch Complex 2 (LC-2), Xichang Satellite Launch Center",
                        "latitude": "28.246017",
                        "longitude": "102.026556"
                    }
                },
                "missions": [
                    {
                        "id": 679,
                        "name": "APStar-6D",
                        "description": "APStar-6D is a commercial communications satellite for APT Satellite Company Ltd under an end-to-end contract signed with China Great Wall Industry Corp. (CGWIC) for satellite production and launch services. It will deliver VSAT, video distribution, Direct-to-home television and cellular backhaul to the Asia-Pacific Region.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 69,
                    "name": "Long March 3B/E",
                    "family": "Long March 3",
                    "configuration": "B/E",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "China Aerospace Science and Technology Corporation",
                        "short": "CASC",
                        "type": 1,
                        "location": "CHN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/LongMarch3BE.jpg_1024.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1965,
                "name": "Falcon 9 Block 5 | SmallSat Rideshare Mission 1",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Vandenberg AFB, CA, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 100,
                        "name": "Space Launch Complex 4E, Vandenberg AFB, CA",
                        "latitude": "34.632",
                        "longitude": "-120.611"
                    }
                },
                "missions": [
                    {
                        "id": 0,
                        "name": "GPS III SV03 (Columbus)",
                        "description": "",
                        "orbit": "MEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "B0007",
                            "flightNo": 1,
                            "block": 1,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            ""
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "B0007",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 1328,
                "name": "Ariane 5 ECA | UNKNOWN & GEO-KOMPSAT-2B",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1460,
                "name": "LauncherOne | VCLS ELaNa XX",
                "net": "2020-02-28T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Air launch to orbit",
                    "countryCode": "UNK",
                    "pad": {
                        "id": 181,
                        "name": "Mojave Air and Space Port",
                        "latitude": "35.059444",
                        "longitude": "-118.151667"
                    }
                },
                "missions": [
                    {
                        "id": 643,
                        "name": "VCLS ELaNa XX",
                        "description": "NASA's signed a Venture Class Launch Services contract with Virgin Orbit to launch 13 cubesats into polar orbit.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 173,
                    "name": "LauncherOne",
                    "family": "Launcher",
                    "configuration": "One",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Virgin Orbit",
                        "short": "VO",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1333,
                "name": "Atlas V 551 | AEHF-6",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 85,
                        "name": "Space Launch Complex 41, Cape Canaveral, FL",
                        "latitude": "28.58341025",
                        "longitude": "-80.58303644"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 37,
                    "name": "Atlas V 551",
                    "family": "Atlas",
                    "configuration": "551",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "United Launch Alliance",
                        "short": "ULA",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Atlas+V+551_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1461,
                "name": "Ariane 5 ECA | Galaxy 30 & MEV-2",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1462,
                "name": "Ariane 5 ECA | Unknown satellite for Intelsat",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1595,
                "name": "Soyuz 2.1a | Bars-M No. 3",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Plesetsk Cosmodrome, Russian Federation",
                    "countryCode": "RUS",
                    "pad": {
                        "id": 51,
                        "name": "43/4 (43R), Plesetsk Cosmodrome, Russia",
                        "latitude": "62.92883",
                        "longitude": "40.457098"
                    }
                },
                "missions": [
                    {
                        "id": 842,
                        "name": "Bars-M No. 3",
                        "description": "Bars-M is the second incarnation of the Bars project, which was started in the mid 1990ies to develop a successor for the Komtea class of area surveillance satellites. The original Bars project was halted in the early 2000s. In 2007, TsSKB-Progress was contracted for Bars-M, for which reportedly the Yantar-based service module was replaced by a new developed advanced service module.\n\nThe Bars-M satellites feature an electro-optical camera system called Karat, which is developed and built by the Leningrad Optical Mechanical Association (LOMO), and a dual laser altimeter instrument to deliver topographic imagery, stereo images, altimeter data and high-resolution images with a ground resolution around 1 meter.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 49,
                    "name": "Soyuz 2.1a",
                    "family": "Soyuz",
                    "configuration": "2.1a",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Russian Space Forces",
                        "short": "VKS",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Soyuz+2.1a_1440.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1603,
                "name": "LauncherOne | Test Flight",
                "net": "2020-02-17T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Air launch to orbit",
                    "countryCode": "UNK",
                    "pad": {
                        "id": 181,
                        "name": "Mojave Air and Space Port",
                        "latitude": "35.059444",
                        "longitude": "-118.151667"
                    }
                },
                "missions": [
                    {
                        "id": 851,
                        "name": "Test Flight",
                        "description": "Payload-free test flight of the LauncherOne vehicle.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 173,
                    "name": "LauncherOne",
                    "family": "Launcher",
                    "configuration": "One",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Virgin Orbit",
                        "short": "VO",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1093,
                "name": "Falcon 9 Block 5 | SpX-DM2 (Demonstration Mission 2)",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kennedy Space Center, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 87,
                        "name": "Launch Complex 39A, Kennedy Space Center, FL",
                        "latitude": "28.60822681",
                        "longitude": "-80.60428186"
                    }
                },
                "missions": [
                    {
                        "id": 1251,
                        "name": "SpX-DM2 (Demonstration Mission 2)",
                        "description": "This is the first crewed test flight of Crew Dragon 2. It will carry NASA astronauts Doug Harley and Bob Behnken to the International Space Station.",
                        "orbit": "VLEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "",
                            "flightNo": 0,
                            "block": 5,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            null
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 1611,
                "name": "SSLV  | Demo 1 (2 x Defense satellites)",
                "net": "2020-01-15T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [
                    {
                        "id": 855,
                        "name": "SSLV Demo 1",
                        "description": "First test flight of Indian SSLV (Small Satellite Launch Vehicle).",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 189,
                    "name": "SSLV ",
                    "family": "SSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1612,
                "name": "SSLV  | Demo 2 (4 x BlackSky Global satellites)",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [
                    {
                        "id": 856,
                        "name": "SSLV Demo 2",
                        "description": "Second test flight of Indian SSLV (Small Satellite Launch Vehicle).",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 189,
                    "name": "SSLV ",
                    "family": "SSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1356,
                "name": "Atlas V N22 | CST-100 Starliner Crewed Flight Test (Crewed)",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 85,
                        "name": "Space Launch Complex 41, Cape Canaveral, FL",
                        "latitude": "28.58341025",
                        "longitude": "-80.58303644"
                    }
                },
                "missions": [
                    {
                        "id": 1250,
                        "name": "CST-100 Starliner Crewed Flight Test (Crewed)",
                        "description": "This is the first crewed test flight of Starliner spacecraft. It will carry NASA astronauts Christopher Ferguson, Michael Fincke and Nicole Mann to the International Space Station.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 118,
                    "name": "Atlas V N22",
                    "family": "Atlas",
                    "configuration": "V N22",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "United Launch Alliance",
                        "short": "ULA",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1357,
                "name": "Long March 3B | Fengyun-4B",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Xichang Satellite Launch Center, People's Republic of China",
                    "countryCode": "CHN",
                    "pad": {
                        "id": 147,
                        "name": "Unknown, Xichang Satellite Launch Center",
                        "latitude": "28.246017",
                        "longitude": "102.026556"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 22,
                    "name": "Long March 3B",
                    "family": "Long March 3",
                    "configuration": "B",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "China Aerospace Science and Technology Corporation",
                        "short": "CASC",
                        "type": 1,
                        "location": "CHN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1359,
                "name": "Falcon 9 Block 5 | SAOCOM 1B",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 130,
                        "name": "Unknown Pad, Cape Canaveral, FL",
                        "latitude": "28.458",
                        "longitude": "-80.528"
                    }
                },
                "missions": [
                    {
                        "id": 0,
                        "name": "GPS III SV03 (Columbus)",
                        "description": "",
                        "orbit": "MEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "B0007",
                            "flightNo": 1,
                            "block": 1,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            ""
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "B0007",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 1880,
                "name": "PSLV  | RISAT-1A",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 14,
                    "name": "PSLV ",
                    "family": "PSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1881,
                "name": "GSLV | GSAT-32",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 145,
                        "name": "Satish Dhawan Space Centre Second Launch Pad",
                        "latitude": "13.7199",
                        "longitude": "80.2304"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 17,
                    "name": "GSLV",
                    "family": "GSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1883,
                "name": "Soyuz 2.1b/Fregat-M | OneWeb",
                "net": "2020-02-06T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Baikonur Cosmodrome, Republic of Kazakhstan",
                    "countryCode": "KAZ",
                    "pad": {
                        "id": 30,
                        "name": "31/6, Baikonur Cosmodrome, Kazakhstan",
                        "latitude": "45.996034",
                        "longitude": "63.564003"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 153,
                    "name": "Soyuz 2.1b/Fregat-M",
                    "family": "Soyuz",
                    "configuration": "2.1b/Fregat-M",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Khrunichev State Research and Production Space Center",
                        "short": "KhSC",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1504,
                "name": "Falcon 9 Block 5 | SpX CRS-20",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 84,
                        "name": "Space Launch Complex 40, Cape Canaveral, FL",
                        "latitude": "28.56194122",
                        "longitude": "-80.57735736"
                    }
                },
                "missions": [
                    {
                        "id": 0,
                        "name": "GPS III SV03 (Columbus)",
                        "description": "",
                        "orbit": "MEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "B0007",
                            "flightNo": 1,
                            "block": 1,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            ""
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "B0007",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 2017,
                "name": "Soyuz 2.1b/Fregat-M | Glonass-M No. 60",
                "net": "2020-02-05T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Plesetsk Cosmodrome, Russian Federation",
                    "countryCode": "RUS",
                    "pad": {
                        "id": 50,
                        "name": "43/3 (43L), Plesetsk Cosmodrome, Russia",
                        "latitude": "62.9273",
                        "longitude": "40.45"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 153,
                    "name": "Soyuz 2.1b/Fregat-M",
                    "family": "Soyuz",
                    "configuration": "2.1b/Fregat-M",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Russian Space Forces",
                        "short": "VKS",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 865,
                "name": "Atlas V 411 | Solar Orbiter",
                "net": "2020-02-06T04:15:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 85,
                        "name": "Space Launch Complex 41, Cape Canaveral, FL",
                        "latitude": "28.58341025",
                        "longitude": "-80.58303644"
                    }
                },
                "missions": [
                    {
                        "id": 744,
                        "name": "Solar Orbiter",
                        "description": "Solar Orbiter is a joint ESA/NASA mission dedicated to solar and heliospheric physics. It will be used to examine how the Sun creates and controls the heliosphere, the vast bubble of charged particles blown by the solar wind into the interstellar medium. The spacecraft will combine in situ and remote sensing observations to gain new information about the solar wind, the heliospheric magnetic field, solar energetic particles, transient interplanetary disturbances and the Sun's magnetic field.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 106,
                    "name": "Atlas V 411",
                    "family": "Atlas",
                    "configuration": "V 411",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "United Launch Alliance",
                        "short": "ULA",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/AtlasV411.jpg_1080.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1250,
                "name": "Zenit 3SLB | Lybid",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Baikonur Cosmodrome, Republic of Kazakhstan",
                    "countryCode": "KAZ",
                    "pad": {
                        "id": 32,
                        "name": "45/1, Baikonur Cosmodrome, Kazakhstan",
                        "latitude": "45.943492",
                        "longitude": "63.653014"
                    }
                },
                "missions": [
                    {
                        "id": 750,
                        "name": "Lybid",
                        "description": "Lybid is a geostationary telecommunications satellite for Ukraine. Lybid is planned be located at 48 degrees East and have a service lifetime of 15 years.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 94,
                    "name": "Zenit 3SLB",
                    "family": "Zenit",
                    "configuration": "3SLB",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Land Launch",
                        "short": "LL",
                        "type": 3,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 2018,
                "name": "Falcon 9 Block 5 | Starlink 3",
                "net": "2020-01-15T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 84,
                        "name": "Space Launch Complex 40, Cape Canaveral, FL",
                        "latitude": "28.56194122",
                        "longitude": "-80.57735736"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 2021,
                "name": "H-IIA 202 | IGS Optical 7",
                "net": "2020-01-27T01:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Tanegashima, Japan",
                    "countryCode": "JPN",
                    "pad": {
                        "id": 138,
                        "name": "Yoshinobu Launch Complex, Tanegashima, Japan",
                        "latitude": "30.402222",
                        "longitude": "130.975"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 53,
                    "name": "H-IIA 202",
                    "family": "H-II",
                    "configuration": "202",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Mitsubishi Heavy Industries",
                        "short": "MHI",
                        "type": 3,
                        "location": "JPN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/H-IIA202.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 2023,
                "name": "Falcon 9 Block 5 | Starlink 4",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 84,
                        "name": "Space Launch Complex 40, Cape Canaveral, FL",
                        "latitude": "28.56194122",
                        "longitude": "-80.57735736"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "B1032",
                            "flightNo": 2,
                            "block": 3,
                            "gridFin": true,
                            "legs": true
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            null
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "B1032",
                            "attempt": true,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": true
                        }
                    ]
                }
            },
            {
                "id": 2025,
                "name": "Soyuz 2.1a/Fregat | Meridian-M №19",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Plesetsk Cosmodrome, Russian Federation",
                    "countryCode": "RUS",
                    "pad": {
                        "id": 51,
                        "name": "43/4 (43R), Plesetsk Cosmodrome, Russia",
                        "latitude": "62.92883",
                        "longitude": "40.457098"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 235,
                    "name": "Soyuz 2.1a/Fregat",
                    "family": "Soyuz",
                    "configuration": "2.1a/Fregat",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Russian Space Forces",
                        "short": "VKS",
                        "type": 1,
                        "location": "RUS",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1131,
                "name": "GSLV Mk II | GISAT-1",
                "net": "2020-01-15T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 119,
                        "name": "Unknown Pad, Sriharikota",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [
                    {
                        "id": 458,
                        "name": "GISAT-1",
                        "description": "GISAT-1 is an Indian earth observation satellite to be launched in geostationary orbit. It is tasked with continuous observation of Indian sub-continent and quick monitoring of natural hazards and disaster. GISAT carries an imaging payload consisting of of multi-spectral, multi-resolution from 50 m to 1.5 km. It will provide pictures of the area of interest on near real time basis including border areas.",
                        "orbit": "UNKNOWN",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 60,
                    "name": "GSLV Mk II",
                    "family": "GSLV",
                    "configuration": "Mk II",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 2031,
                "name": "Long March 2D | Jilin-1 Wideband 01, Tianqi-4, ÑuSat-7 & 8",
                "net": "2020-01-15T02:53:00",
                "netStatus": 1,
                "location": {
                    "name": "Taiyuan, People's Republic of China",
                    "countryCode": "CHN",
                    "pad": {
                        "id": 13,
                        "name": "Launch Complex 9, Taiyuan",
                        "latitude": "38.849",
                        "longitude": "111.608"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 73,
                    "name": "Long March 2D",
                    "family": "Long March 2",
                    "configuration": "D",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "China Aerospace Science and Technology Corporation",
                        "short": "CASC",
                        "type": 1,
                        "location": "CHN",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1265,
                "name": "Ariane 5 ECA | JCSAT-17 & unknown",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1266,
                "name": "Ariane 5 ECA | Konnect & GSAT-30",
                "net": "2020-01-16T21:05:00",
                "netStatus": 1,
                "location": {
                    "name": "Kourou, French Guiana",
                    "countryCode": "GUF",
                    "pad": {
                        "id": 137,
                        "name": "Ariane Launch Area 3, Kourou",
                        "latitude": "5.239",
                        "longitude": "-52.768"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 27,
                    "name": "Ariane 5 ECA",
                    "family": "Ariane",
                    "configuration": "ECA",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Arianespace",
                        "short": "ASA",
                        "type": 3,
                        "location": "FRA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Ariane+5+ECA_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1523,
                "name": "Atlas V 551 | AFSPC-12",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 85,
                        "name": "Space Launch Complex 41, Cape Canaveral, FL",
                        "latitude": "28.58341025",
                        "longitude": "-80.58303644"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 37,
                    "name": "Atlas V 551",
                    "family": "Atlas",
                    "configuration": "551",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "United Launch Alliance",
                        "short": "ULA",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Atlas+V+551_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1524,
                "name": "Falcon 9 Block 5 | GPS III SV03",
                "net": "2020-03-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Cape Canaveral, FL, USA",
                    "countryCode": "USA",
                    "pad": {
                        "id": 84,
                        "name": "Space Launch Complex 40, Cape Canaveral, FL",
                        "latitude": "28.56194122",
                        "longitude": "-80.57735736"
                    }
                },
                "missions": [
                    {
                        "id": 1230,
                        "name": "GPS III SV03 \"Columbus\"",
                        "description": "GPS-IIIA (Global Positioning System) is the first evolution stage of the third generation of the GPS satellites. It consists of the first ten (known as \"tranche\") of GPS III satellites.",
                        "orbit": "MEO",
                        "company": ""
                    }
                ],
                "rocket": {
                    "id": 188,
                    "name": "Falcon 9 Block 5",
                    "family": "Falcon",
                    "configuration": "9 Block 5",
                    "country": "",
                    "cores": [
                        {
                            "serial": "B0007",
                            "flightNo": 1,
                            "block": 1,
                            "gridFin": false,
                            "legs": false
                        }
                    ],
                    "agency": {
                        "name": "SpaceX",
                        "short": "SpX",
                        "type": 3,
                        "location": "USA",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            ""
                        ],
                        "recovered": false
                    },
                    "cores": [
                        {
                            "serial": "B0007",
                            "attempt": false,
                            "onShip": false,
                            "location": [
                                null
                            ],
                            "recovered": false
                        }
                    ]
                }
            },
            {
                "id": 1660,
                "name": "GSLV Mk II | GSAT-7C",
                "net": "2020-01-31T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 145,
                        "name": "Satish Dhawan Space Centre Second Launch Pad",
                        "latitude": "13.7199",
                        "longitude": "80.2304"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 60,
                    "name": "GSLV Mk II",
                    "family": "GSLV",
                    "configuration": "Mk II",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            },
            {
                "id": 1662,
                "name": "PSLV  | Amazonia 1",
                "net": "2020-02-01T00:00:00",
                "netStatus": 2,
                "location": {
                    "name": "Sriharikota, Republic of India",
                    "countryCode": "IND",
                    "pad": {
                        "id": 144,
                        "name": "Satish Dhawan Space Centre First Launch Pad",
                        "latitude": "13.733",
                        "longitude": "80.235"
                    }
                },
                "missions": [],
                "rocket": {
                    "id": 14,
                    "name": "PSLV ",
                    "family": "PSLV",
                    "configuration": "",
                    "country": "",
                    "cores": [],
                    "agency": {
                        "name": "Indian Space Research Organization",
                        "short": "ISRO",
                        "type": 1,
                        "location": "IND",
                        "lsp": false
                    },
                    "image": {
                        "url": "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png",
                        "sizes": [
                            320,
                            480,
                            640,
                            720,
                            768,
                            800,
                            960,
                            1024,
                            1080,
                            1280,
                            1440,
                            1920
                        ]
                    }
                },
                "recovery": {
                    "fairing": {
                        "serial": "",
                        "attempt": false,
                        "onShip": false,
                        "location": [
                            "unknown"
                        ],
                        "recovered": false
                    },
                    "cores": []
                }
            }
        ]
    }
	// xml = new XMLHttpRequest();
    // xml.open("GET", "http://localhost:8080/v1/launch");
    // xml.setRequestHeader("Authorization", "Basic " + btoa("john123:password"));
	// xml.onreadystatechange = function() {
	//    if (xml.readyState != 4) { return; }
    //    if (xml.status != 200) { alert("error"); }
       
	//    alert(xml.responseText);	   
    // };
     
    // xml.send(null);
    // return JSON.parse(xml.responseText);
}