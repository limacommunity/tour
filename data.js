var projectData = {
    "defaultMusic": "assets/Stream-Music-Christmas-2023.mp3",
    "menu": [
        {
            "type": "group",
            "id": "street-entrances",
            "name": "Street Entrances",
            "collapsed": true,
            "scenes": [
                {
                    "id": "0-entrance-from-diller-road",
                    "name": "Entrance from Diller Road",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "infoHotspots": [
                    ],
					"hotspots": [
					  {
						"id": "to-parking-lot-west",
						"type": "link",
						"yaw": -0.16741515840723409,
						"pitch": 0.55740076511952452,
						"rotation": 1.57,
						"target": "3-parking-lot---west",
						"text": "Go to Parking Lot - West"
					  },
					  {
						"id": "to-parking-lot-west-on-road",
						"type": "link",                        
						"yaw": 1.6948440686584476,
                        "pitch": 0.40957697755964872,
                        "rotation": -.1,
                        "target": "3-parking-lot---west",
						"text": "Go to Parking Lot - West"
                      }
					]
                },
                {
                    "id": "1-entrance-on-cole-from-north",
                    "name": "Entrance on Cole from North",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "yaw": -0.10766285731732239,
                        "pitch": -0.030925047156229013,
                        "fov": 1.5091423593016802
                    },
                    "hotspots": [
                        {
							"id": "to-parking-lot-east-from-north",
							"type": "link",
                            "yaw": -0.28359336809684876,
                            "pitch": 0.027916561278299667,
                            "rotation": 1.4,
                            "target": "4-parking-lot---east",
							"text": "Go to Parking Lot - East"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "2-entrance-from-lima-on-cole-st",
                    "name": "Entrance from Lima on Cole St",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
							"id": "to-parking-lot-east-from-lima",
							"type": "link",
                            "yaw": 0.24032052521222624,
                            "pitch": 0.25324350204677337,
                            "rotation": 4.72,
                            "target": "4-parking-lot---east",
							"text": "Go to Parking Lot - East"
                        }
                    ],
                    "infoHotspots": [
                    ]
                }
            ]
        },
        {
            "type": "group",
            "id": "parking-lot",
            "name": "Parking Lot",
            "collapsed": true,
            "scenes": [
                {
                    "id": "3-parking-lot---west",
                    "name": "Parking Lot - West",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "yaw": -0.084068711036325183,
                        "pitch": -0.1482326161624119,
                        "fov": 1.5091423593016802
                    },
                    "infoHotspots": [
                    ],
					"hotspots": [
					  {
						"id": "to-lobby-from-west-parking-lot",
						"type": "link",
						"yaw": -0.24326155404453687,
						"pitch": 0.10149321406764145,
						"rotation": 0,
						"target": "5-lobby",
						"text": "Go to Lobby"
					  }
					]
                },
                {
                    "id": "4-parking-lot---east",
                    "name": "Parking Lot - East",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "infoHotspots": [
                    ],
					"hotspots": [
						{
							"id": "to-lobby-from-east-parking-lot",
							"type": "link",
                            "yaw": -0.12630851856902048,
                            "pitch": 0.073418152126320635,
                            "rotation": 0,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        },
						{
						"id": "to-lobby-from-east-parking-lot2",
						"type": "link",
						"yaw": 0.71086312039032507,
						"pitch": 0.069592534389423477,
						"rotation": -.3,
						"target": "5-lobby",
						"text": "Go to Lobby"
					  }
					]
                }
            ]
        },
        {
            "type": "scene",
            "id": "5-lobby",
            "name": "Lobby",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1472,
            "initialViewParameters": {
                "yaw": -0.35525833861734668,
                "pitch": -0.0047576995624947216,
                "fov": 1.5091423593016802
            },
            "linkHotspots": [
            ],
            "infoHotspots": [
            ],
			"hotspots": [
					  {
						"id": "to-sanctuary-center-aisle",
						"type": "link",
						"yaw": -0.064478168230250432,
						"pitch": 0.18902377382448776,
						"rotation": .2,
						"target": "6-sanctuary-center-aisle",
						"text": "Go to Sanctuary - Center Aisle"
					  },
					  {
					"id": "to-cafe",
					"type": "link",
                    "yaw": 0.651799063766461,
                    "pitch": 0.26192586120679451,
                    "rotation": 1.4,
                    "target": "10-cafe",
					"text": "Go to Cafe"
                },
                {
					"id": "to-first-time-here-for-families",
					"type": "link",
                    "yaw": 0.44945525231788963,
                    "pitch": 0.22092955133881986,
                    "rotation": 1,
                    "target": "11-first-time-families",
					"text": "Go to First Time Here for Families"
                },
				{
					"id": "to-welcome-center-in-lobby-from-lobby",
					"type": "link",
                    "yaw": -0.7,
                    "pitch": 0.4,
                    "rotation": 4.72,
                    "target": "9-welcome-center-in-lobby",
					"text": "Go to Welcome Center"
                }
					]
        },
        {
            "type": "group",
            "id": "sanctuary",
            "name": "Sanctuary",
            "collapsed": true,
            "scenes": [
                {
                    "id": "6-sanctuary-center-aisle",
                    "name": "Sanctuary-Center Aisle",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "yaw": 0,
                        "pitch": 0,
                        "fov": 1.5091423593016802
                    },
                    "hotspots": [
                        {
							"id": "to-sanctuary-east-from-center-aisle",
							"type": "link",
                            "yaw": 0.50687356034744013,
                            "pitch": .5,
                            "rotation": 1.54,
                            "target": "7-sanctuary-east-aisle",
							"text": "Go to East Aisle"
                        },
                        {
							"id": "to-sanctury-west-from-center-aisle",
							"type": "link",
                            "yaw": -0.612231584915083,
                            "pitch": 0.5,
                            "rotation": 4.72,
                            "target": "8-sanctuary-west-aisle",
							"text": "Go to West Aisle"
                        },
                        {
							"id": "to-welcome-center-in-lobby-from-center-aisle",
							"type": "link",
                            "yaw": -0.070462596767340457,
                            "pitch": 0.5,
                            "rotation": 3.14,
                            "target": "9-welcome-center-in-lobby",
							"text": "Go to Welcome Center"
                        },
						{
/*							"id": "sermons-link",
							"type": "info",
							"yaw": 0,
                            "pitch": .1,
							"rotation": 0,
                            "title": "Sermons",
                            "text": "Visit https://limacc.com/messageseries for recent messages."
*/
							"id": "sermons-santuary-center-aisle-worship",
							"type": "youtube",
							"yaw": 0,
							"pitch": 0.1,
							"text": "Sermons",
							"title": "Sermons - Press [ ] in lower corner for full screen",
								"playlist": [
								  {
									"videoId": "O9o4Rbw6syc",      // YouTube video ID
									"title": "DNA",      // Display name
									"start": 1,                     // Optional: start time (seconds)
									"end": 2772                       // Optional: end time (seconds)
								  },
								  {
									"videoId": "hkXpgGQqOSY",
									"title": "Keeping It Real - Justin",
									"start": 1,
									"end": 2237
								  },
								  {
									"videoId": "1eRJXX4-C-A",
									"title": "Keeping It Real - Chip",
									"start": 1,
									"end": 2695
								  },
								  {
									"videoId": "UwNX0uAF7uE",
									"title": "Joy FULL - Brad",
									"start": 1,
									"end": 1804
								  },
								  {
									"videoId": "TFP73tbP-fU",
									"title": "The Twelve - Elizabeth",
									"start": 1,
									"end": 1861
								  }
								]
						},
						{
							"id": "worship-songs-santuary-center-aisle-worship",
							"type": "youtube",
							"yaw": -.3,
							"pitch": 0.1,
							"text": "Worship Songs",
							"title": "Worship Songs - Press [ ] in lower corner for full screen",
								"playlist": [
								  {
									"videoId": "kfhCbhhjDIM",      // YouTube video ID
									"title": "Break Every Chain",      // Display name
									"start": 2390,                     // Optional: start time (seconds)
									"end": 2795                       // Optional: end time (seconds)
								  },
								  {
									"videoId": "FwokiOJ-QIA",      // YouTube video ID
									"title": "Holy Forever",      // Display name
									"start": 968,                     // Optional: start time (seconds)
									"end": 1259                       // Optional: end time (seconds)
								  },
								  {
									"videoId": "FwokiOJ-QIA",
									"title": "Peace Be Still",
									"start": 694,
									"end": 955
								  }
								]
						}
						
                    ],
                    "infoHotspots": [
                        {
                            "yaw": 0.24275725435109408,
                            "pitch": 0.4,
                            "title": "Sermons",
                            "text": "Sermons Link"
                        },
                        {
                            "yaw": -0.37928584185309333,
                            "pitch": 0.4,
                            "title": "Worship Set",
                            "text": "Worship Set Link"
                        }
                    ]
                },
                {
                    "id": "7-sanctuary-east-aisle",
                    "name": "Sanctuary-East Aisle",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-welcome-center-in-lobby-from-east-aisle",
							"type": "link",
							"yaw": 0.33888703125552055,
                            "pitch": 0.4,
                            "rotation": 3.14,
                            "target": "9-welcome-center-in-lobby",
							"text": "Go to Welcome Center"
                        },
                        {
                            
							"id": "to-center-aisle-from-east-aisle",
							"type": "link",
							"yaw": 0.067095103845822734,
                            "pitch": 0.4,
                            "rotation": 4.72,
                            "target": "6-sanctuary-center-aisle",
							"text": "Go to Center Aisle"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "8-sanctuary-west-aisle",
                    "name": "Sanctuary-West Aisle",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
							"id": "to-center-aisle-from-west-aisle",
							"type": "link",
                            "yaw": 0.5612981689270633,
                            "pitch": 0.4,
                            "rotation": 1.5707963267948966,
                            "target": "6-sanctuary-center-aisle",
							"text": "Go to Center Aisle"
                        },
                        {
							"id": "to-welcome-center-from-west-aisle",
							"type": "link",
                            "yaw": -0.50183028783663985,
                            "pitch": 0.4,
                            "rotation": 3.1415926535897931,
                            "target": "9-welcome-center-in-lobby",
							"text": "Go to Welcome Center"
                        }
                    ],
                    "infoHotspots": [
                    ]
                }
            ]
        },
        {
            "type": "scene",
            "id": "9-welcome-center-in-lobby",
            "name": "Welcome Center in Lobby",
			"music": "assets/welcome-center.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1472,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "hotspots": [
				{
					"id": "to-lobby-from-welcome-center",
					"type": "link",
					"yaw": -0.070462596767340457,
					"pitch": 0.5,
					"rotation": 3.5,
					"target": "5-lobby",
					"text": "Go to Lobby"
				},
				{
					"id": "to-axis-lobby-from-welcome-center",
					"type": "link",
					"yaw": -1,
					"pitch": .2,
					"rotation": 0,
					"target": "26-axis-lobby",
					"text": "Go to AXIS Building Lobby"
				},
				{
					"id": "to-journey-building-from-welcome-center",
					"type": "link",
					"yaw": -.9,
					"pitch": .2,
					"rotation": 0,
					"target": "31-journey-building-exterior",
					"text": "Go to Journey Building"
				}
			],
            "infoHotspots": [
                {
                    "yaw": -0.29638848344801438,
                    "pitch": 0.327619420624476,
                    "title": "Welcome Center",
                    "text": "Welcome Center Link"
                },
                {
                    "yaw": -1.0838860443110185,
                    "pitch": 0.35577244352582582,
                    "title": "AXIS",
                    "text": "AXIS Link"
                },
                {
                    "yaw": -1.1319906678317029,
                    "pitch": 0.49075182074692947,
                    "title": "Journey Building",
                    "text": "Journey Buildling Link"
                }
            ]
        },
        {
            "type": "scene",
            "id": "10-cafe",
            "name": "Cafe",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1472,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "hotspots": [
                {
                    "id": "to-lobby-from-cafe",
					"type": "link",
					"yaw": -0.091679241458709981,
                    "pitch": 0.67135416733235331,
                    "rotation": 2.4,
                    "target": "5-lobby",
					"text": "Go to Lobby"
                },
                {
					"id": "to-first-time-families-from-cafe",
					"type": "link",
                    "yaw": -0.85918146163502662,
                    "pitch": 0.37963719085212944,
                    "rotation": 4.71238898038469,
                    "target": "11-first-time-families",
					"text": "Go to First Time Families Counter"
                }
            ],
            "infoHotspots": [
            ]
        },
        {
            "type": "scene",
            "id": "11-first-time-families",
            "name": "First Time Families",
			"music": "assets/first-time-families-counter.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1472,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-1st-to-5th-grade-from-first-time-families",
					"type": "link",
                    "yaw": 0.73435225133849613,
                    "pitch": 0.57477341784129088,
                    "rotation": 1.54,
                    "target": "23-1st-to-5th-grade",
					"text": "Go to 1st to 5th Grade (DOWNTOWN)"
                },
                {
                    "id": "to-1st-to-5th-grade-from-checkin-counter",
					"type": "link",
					"yaw": 1.7406199057703446,
                    "pitch": 0.4,
                    "rotation": -.2,
                    "target": "23-1st-to-5th-grade",
					"text": "Go to 1st to 5th Grade (DOWNTOWN)"
                },
                {
					"id": "to-birth-to-13-months-entrance",
					"type": "link",
                    "yaw": -0.76959574484604509,
                    "pitch": -0.098996349989080912,
                    "rotation": 0,
                    "target": "12-birth-to-13-months-entrance",
					"text": "Go to Birth to 13 months (tinytown)"
                },
                {
                    "id": "to-13-24-months-entrance",
					"type": "link",
					"yaw": -0.7712869200224155,
                    "pitch": 0.024150179655606507,
                    "rotation": 0,
                    "target": "14-13-24-months-entrance",
					"text": "Go to 13 to 24 months (tinytown)"
                },
                {
					"id": "to-3-years-entrance",
					"type": "link",
                    "yaw": -0.77128627901833546,
                    "pitch": 0.27185854801551557,
                    "rotation": 0,
                    "target": "18-3-years-old-entrance",
					"text": "Go to 3 years old (tinytown)"
                },
                {
                    "id": "to-4-years-to-kindergarten-entrance",
					"type": "link",
					"yaw": -0.76998611107018355,
                    "pitch": 0.38886432317393549,
                    "rotation": 0,
                    "target": "21-4-yrs-old-kindergarten-entrance",
					"text": "Go to 4 years old to Kindergarten"
                },
                {
                    "id": "to-2-years-entrance",
					"type": "link",
					"yaw": -0.77014495733709509,
                    "pitch": 0.14944276345787877,
                    "rotation": 0,
                    "target": "16-2-years-old-entrance",
					"text": "Go to 2 years old"
                },
                {
                    "id": "to-lobby-from-first-time-families",
					"type": "link",
					"yaw": -0.024431392644640226,
                    "pitch": 0.4,
                    "rotation": 3.1415926535897931,
                    "target": "5-lobby",
					"text": "Go to Lobby"
                }
            ],
            "infoHotspots": [
            ]
        },
        {
            "type": "group",
            "id": "birth-to-48-months",
            "name": "Birth to 48 months (tinytown)",
            "collapsed": true,
            "scenes": [
                {
                    "id": "12-birth-to-13-months-entrance",
                    "name": "Birth to 13 months Entrance",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-birth-to-13-months-room",
							"type": "link",
							"yaw": 0.18602230309320866,
                            "pitch": 0.1,
                            "rotation": 0,
                            "target": "13-birth-to-13-months-room",
							"text": "Go to Birth to 13 months room"
                        },
                        {
                            "id": "to-lobby-from-birth-to-13-months-entrance",
							"type": "link",
							"yaw": 0.18167654413713308,
                            "pitch": 0.4,
                            "rotation": 9.42477796076938,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "13-birth-to-13-months-room",
                    "name": "Birth to 13 months Room",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-lobby-from-birth-to-13-months-room",
							"type": "link",
							"yaw": 0.076154437921982066,
                            "pitch": 0.4,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "14-13-24-months-entrance",
                    "name": "13-24 months Entrance",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-13-24-months-room",
							"type": "link",
							"yaw": 0.46272167232156569,
                            "pitch": 0.2,
                            "rotation": 0,
                            "target": "15-13-24-months-room",
							"text": "Go to 13-24 months room"
                        },
                        {
                            "id": "to-lobby-from-13-24-months-entrance",
							"type": "link",
							"yaw": 0.459757754910072,
                            "pitch": 0.5,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "15-13-24-months-room",
                    "name": "13-24 months Room",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-lobby-from-13-24-months-room",
							"type": "link",
							"yaw": 0.038548629469383755,
                            "pitch": 0.67518503229938176,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "16-2-years-old-entrance",
                    "name": "2 years old Entrance",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-2-years-old-room",
							"type": "link",
							"yaw": -0.046651789863325632,
                            "pitch": 0.25449819784684635,
                            "rotation": 1.5707963267948966,
                            "target": "17-2-years-old-room",
							"text": "Go to 2 years old room"
                        },
                        {
                            "id": "to-lobby-from-2-years-entrance",
							"type": "link",
							"yaw": -0.043769957784906666,
                            "pitch": 0.66654691564020929,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        },
                        {
                            "id": "to-tinytown-story-room-from-2-old-entrance",
							"type": "link",
							"yaw": -0.40817930391612833,
                            "pitch": 0.22612074977683605,
                            "rotation": 0,
                            "target": "20-tinytown-story-room",
							"text": "Go to tinytown Story Room"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "17-2-years-old-room",
                    "name": "2 years old Room",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-2-years-entrance",
							"type": "link",
							"yaw": 0.053214060698175913,
                            "pitch": 0.68042178636051709,
                            "rotation": 3.1415926535897931,
                            "target": "16-2-years-old-entrance",
							"text": "Go to 2 years old entrance"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "18-3-years-old-entrance",
                    "name": "3 years old Entrance",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-3-years-old-room",
							"type": "link",
							"yaw": 0.063234925524401575,
                            "pitch": 0.073871403828729143,
                            "rotation": 4.71238898038469,
                            "target": "19-3-years-old-room",
							"text": "Go to 3 years old room"
                        },
                        {
                            "id": "to-lobby-from-3-years-entrance",
							"type": "link",
							"yaw": 0.26637882791612988,
                            "pitch": 0.37633202687520928,
                            "rotation": 9.42477796076938,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        },
                        {
                            "id": "to-tinytown-story-room-from-3-years-entrance",
							"type": "link",
							"yaw": 0.92989336548182955,
                            "pitch": 0.16496144259158285,
                            "rotation": 1.5707963267948966,
                            "target": "20-tinytown-story-room",
							"text": "Go to tinytown Story Room"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "19-3-years-old-room",
                    "name": "3 years old Room",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-lobby-from-3-years-entrance",
							"type": "link",
							"yaw": -0.05111325267300515,
                            "pitch": 0.67440138757870294,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        },
                        {
                            "id": "to-3-years-entrance-from-3-years-old-room",
							"type": "link",
							"yaw": 0.33137662807807544,
                            "pitch": 0.67826781294395744,
                            "rotation": 3.1415926535897931,
                            "target": "18-3-years-old-entrance",
							"text": "Go to 3 years old entrance"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "20-tinytown-story-room",
                    "name": "tinytown Story Room",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-lobby from-tinytown-story-room",
							"type": "link",
							"yaw": -0.07007485794258983,
                            "pitch": 0.6926387284890243,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        },
                        {
                            "yaw": -0.84715566633149564,
                            "pitch": 0.43371522871209933,
                            "rotation": 4.71238898038469,
                            "target": "16-2-years-old-entrance"
                        },
                        {
                            "id": "to-3-years-entrance-from-tinytown-story-room",
							"type": "link",
							"yaw": 0.44165767780782872,
                            "pitch": 0.23414078765906865,
                            "rotation": 6.2831853071795862,
                            "target": "18-3-years-old-entrance",
							"text": "Go to 3 years old entrance"
                        }
                    ],
                    "infoHotspots": [
                    ]
                }
            ]
        },
        {
            "type": "group",
            "id": "4-yrs-old-kindergarten",
            "name": "4 yrs old - Kindergarten (upTOWN)",
            "collapsed": true,
            "scenes": [
                {
                    "id": "21-4-yrs-old-kindergarten-entrance",
                    "name": "4 yrs old-Kindergarten Entrance",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-4-yrs-old-kindergarten-worship",
							"type": "link",
							"yaw": 0.32274857071630514,
                            "pitch": 0.20994364180122105,
                            "rotation": 4.71238898038469,
                            "target": "22-4-yrs-old-kindergarten-worship",
							"text": "Go to 4 yrs old to Kindergarten worship (upTOWN)"
                        },
                        {
                            "id": "to-lobby-from-uptown-entrance",
							"type": "link",
							"yaw": 0.33089307956692515,
                            "pitch": 0.67598800365473011,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                },
                {
                    "id": "22-4-yrs-old-kindergarten-worship",
                    "name": "4 yrs old-Kindergarten Worship",
                    "levels": [
                        {
                            "tileSize": 256,
                            "size": 256,
                            "fallbackOnly": true
                        },
                        {
                            "tileSize": 512,
                            "size": 512
                        },
                        {
                            "tileSize": 512,
                            "size": 1024
                        },
                        {
                            "tileSize": 512,
                            "size": 2048
                        }
                    ],
                    "faceSize": 1472,
                    "initialViewParameters": {
                        "pitch": 0,
                        "yaw": 0,
                        "fov": 1.5707963267948966
                    },
                    "hotspots": [
                        {
                            "id": "to-4-yrs-old-to-kindergarten-entrance-from-worship",
							"type": "link",
							"yaw": -2.7189634387158819,
                            "pitch": 0.14408319351288057,
                            "rotation": 7.0685834705770345,
                            "target": "21-4-yrs-old-kindergarten-entrance",
							"text": "Return to entrance for 4 yrs old to Kindergarten (upTOWN)"
                        },
                        {
                            "id": "to-lobby-from-4-yrs-old-to-kindergarten-entrance",
							"type": "link",
							"yaw": 0.061420262087638733,
                            "pitch": 0.1,
                            "rotation": 3.1415926535897931,
                            "target": "5-lobby",
							"text": "Go to Lobby"
                        }
                    ],
                    "infoHotspots": [
                    ]
                }
            ]
        },
		{
		  "type": "group",
          "id": "23-1st-to-5th-grade-group",
          "name": "1st to 5th Grade (DOWNTOWN)",
          "collapsed": true,
          "scenes": [
          {
            "id": "23-1st-to-5th-grade",
            "name": "1st to 5th Grade (DOWNTOWN)",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1472,
            "initialViewParameters": {
                "yaw": -0.018471877937795256,
                "pitch": 0.015228872331249477,
                "fov": 1.5091423593016802
            },
            "hotspots": [
                {
					"id": "to-lobby-from-1st-to-5th-grade",
					"type": "link",
					"yaw": 1.4268580749166109,
                    "pitch": 0.056401947054457224,
                    "rotation": 4.71238898038469,
                    "target": "5-lobby",
					"text": "Go to Lobby"
                },
                {
                    "id": "to-lobby-from-1st-to-5th-gradeb",
					"type": "link",
					"yaw": -0.048405714760523466,
                    "pitch": 0.5796542936051452,
                    "rotation": 9.42477796076938,
                    "target": "5-lobby",
					"text": "Go to Lobby"
                },
				{
                    "id": "to-klub45-from-1st-to-5th-gradeb",
					"type": "link",
					"yaw": 2.5,
                    "pitch": 0.05,
                    "rotation": 1.54,
                    "target": "24-klub45",
					"text": "Go to klub45"
                }
            ],
            "infoHotspots": [
            ]
        },
		{
            "id": "24-klub45",
            "name": "klub45 (DOWNTOWN)",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
			  "pitch": 0,
			  "yaw": 0,
			  "fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-downtown-from-klub45",
					"type": "link",
					"yaw": -0.18814640897397616,
					"pitch": 0.5529512235877263,
					"rotation": 4.71238898038469,
                    "target": "23-1st-to-5th-grade",
					"text": "Go to DOWNTOWN"
                },
                {
                    "id": "to-lobby-from-klub45",
					"type": "link",
					"yaw": -0.048405714760523466,
                    "pitch": 0.5796542936051452,
                    "rotation": 9.42477796076938,
                    "target": "5-lobby",
					"text": "Go to Lobby"
                }
            ],
            "infoHotspots": [
            ]
		},
		  ]
		},
		{
		  "type": "group",
          "id": "25-axis-building-group",
          "name": "AXIS Building",
          "collapsed": true,
          "scenes": [
		  {
            "id": "26-axis-lobby",
            "name": "AXIS Lobby",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"yaw": 0,
				"pitch": 0,
				"fov": 1.5091423593016802
            },
            "hotspots": [
                {
					"id": "to-lobby-from-axis-lobby",
					"type": "link",
					"yaw": -0.4302371642353897,
					"pitch": 0.1974509920404266,
					"rotation": 0,
					"target": "5-lobby",
					"text": "Go to Lobby in Main Building"
				},
				{
					"id": "to-lobby-from-axis-lobby-2",
					"type": "link",
					"yaw": 0.4377334056592268,
					"pitch": 0.2538075754841458,
					"rotation": 0,
					"target": "5-lobby",
					"text": "Go to Lobby in Main Building"
				},
				{
					"id": "to-axis-game-room",
					"type": "link",
					"yaw": 0.9505944768735493,
					"pitch": 0.23223894970148962,
					"rotation": 1.5707963267948966,
					"target": "29-axis-game-room",
					"text": "Go to AXIS Game Room"
				},
				{
					"id": "to-axis-gym",
					"type": "link",
					"yaw": 2.077173622846505,
					"pitch": 0.24174488469613742,
					"rotation": 1.5707963267948966,
					"target": "28-axis-gym",
					"text": "Go to AXIS Gym"
				},
				{
					"id": "to-axis-venue",
					"type": "link",
					"yaw": -2.6546222341967187,
					"pitch": 0.3244235944064702,
					"rotation": 6.283185307179586,
					"target": "27-axis-venue",
					"text": "Go to AXIS Venue"
				}		
            ],
            "infoHotspots": [
            ]
		  },
		  {
            "id": "27-axis-venue",
            "name": "AXIS Venue",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-axis-lobby-from-axis-venue",
					"type": "link",
					"yaw": 0.02136969250052978,
					"pitch": 0.510885899113525,
					"rotation": 1.5707963267948966,
					"target": "26-axis-lobby",
					"text": "Go to AXIS Lobby"
				}	
            ],
            "infoHotspots": [
            ]
		  },
		  {
            "id": "28-axis-gym",
            "name": "AXIS Gym",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-axis-lobby-from-axis-gym",
					"type": "link",
					"yaw": -0.024518223323850563,
					"pitch": 0.5107510215417683,
					"rotation": 3.141592653589793,
					"target": "26-axis-lobby",
					"text": "Go to AXIS Lobby"
				}	
            ],
            "infoHotspots": [
            ]
		  },
		  {
            "id": "29-axis-game-room",
            "name": "AXIS Game Room",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-axis-axis-cafe-from-axis-game-room",
					"type": "link",
					"yaw": 0.1773335485484715,
					"pitch": 0.06996483346833138,
					"rotation": 0,
					"target": "30-axis-cafe",
					"text": "Go to AXIS Cafe"
				},
				{
					"id": "to-axis-axis-lobby-from-axis-game-room",
					"type": "link",
					"yaw": 0.0012266168198475924,
					"pitch": 0.5287729634017886,
					"rotation": 3.141592653589793,
					"target": "26-axis-lobby",
					"text": "Go to AXIS Lobby"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
            "id": "30-axis-cafe",
            "name": "AXIS Cafe",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-axis-lobby-from-axis-cafe",
					"type": "link",
					"yaw": -0.025050479028431383,
					"pitch": 0.5080375673542097,
					"rotation": 3.141592653589793,
					"target": "26-axis-lobby",
					"text": "Go to AXIS Lobby"
				}	
            ],
            "infoHotspots": [
            ]
		  },
		  
		  ]
		},
		{
		  "type": "group",
          "id": "31-journey-building-group",
          "name": "Journey Building",
          "collapsed": true,
          "scenes": [
		  
		  {
            "id": "31-journey-building-exterior",
            "name": "Journey Building",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"yaw": 0,
				"pitch": 0,
				"fov": 1.5091423593016802
            },
            "hotspots": [
                {
					"id": "to-jb400",
					"type": "link",
					"yaw": 0.4377334056592268,
					"pitch": 0.2538075754841458,
					"rotation": 0,
					"target": "32-jb400",
					"text": "Go inside Journey Building"
				},
				{
					"id": "to-lobby-from-journey-building",
					"type": "link",
					"yaw": 0.9505944768735493,
					"pitch": 0.23223894970148962,
					"rotation": 1.5707963267948966,
					"target": "5-lobby",
					"text": "Go to Lobby in Main Building"
				},
				{
					"id": "to-lobby-from-journey-building2",
					"type": "link",
					"yaw": 2.529601809424374,
					"pitch": 0.19556167470298824,
					"rotation": 0,
					"target": "5-lobby",
					"text": "Go to Lobby in Main Building"
				},
				{
					"id": "to-axis-lobby-from-journey-building",
					"type": "link",
					"yaw": -2.607122898505912,
					"pitch": 0.01372336364513771,
					"rotation": 0,
					"target": "26-axis-lobby"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
            "id": "32-jb400",
            "name": "Journey Building - Room JB400",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"yaw": 0,
				"pitch": 0,
				"fov": 1.5091423593016802
            },
            "hotspots": [
                {
					"id": "to-jb401",
					"type": "link",
				    "yaw": -0.14402808224487273,
					"pitch": 0.5648264260301836,
					"rotation": 4.71238898038469,
					"target": "33-jb401",
					"text": "To Journey Building Room 401"
				},
				{
					"id": "to-jb402",
					"type": "link",
					"yaw": -0.17291534954047094,
					"pitch": 0.05251114498443599,
					"rotation": 0,
					"target": "34-jb402",
					"text": "Go to Journey Building Room 402"
				},
				{
					"id": "to-jb403",
					"type": "link",
					"yaw": -0.0027037606003865733,
					"pitch": 0.053329497207959875,
					"rotation": 0,
					"target": "35-jb403",
					"text": "Go to Journey Building Room 403"
				},
				{
					"id": "to-jbkitchen",
					"type": "link",
					"yaw": -0.0027037606003865733,
					"pitch": 0.033329497207959875,
					"rotation": 1.57,
					"target": "36-jbkitchen",
					"text": "Go to Journey Building Kitchen"
				},
				{
					"id": "to-jb-exterior-from-jb400",
					"type": "link",
					"yaw": 0.5237331142367712,
					"pitch": 0.5169826091903875,
					"rotation": 3.141592653589793,
					"target": "31-journeybuildingexterior",
					"text": "Go to exterior of Journey Building"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
		  "id": "33-jb401",
            "name": "Journey Building - Room JB401",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-jb401",
					"type": "link",
				    "yaw": 0.8990443322524015,
					"pitch": 0.2976799765009126,
					"rotation": 0,
					"target": "32-jb400",
					"text": "Go to Journey Building Room 400"
				},
				{
					"id": "to-jb401b",
					"type": "link",
					"yaw": -0.5140325128159837,
					"pitch": 0.06938638398686159,
					"rotation": 0.7853981633974483,
					"target": "32-jb400",
					"text":  "Go to Journey Building Room 400"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
		  "id": "34-jb402",
            "name": "Journey Building - Room JB402",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-jb400-from-jb402",
					"type": "link",
				    "yaw": 0.8196557361180421,
					"pitch": 0.35161152777209104,
					"rotation": 2.356194490192345,
					"target": "32-jb400",
					"text": "Go to Journey Building Room 400
				},
				{
					"id": "to-jb400-from-jb402b",
					"type": "link",
					"yaw": 2.3852729988617956,
					"pitch": 0.18407070022738736,
					"rotation": 0.7853981633974483,
					"target": "32-jb400"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
		  "id": "35-jb403",
            "name": "Journey Building - Room JB403",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-jb400-from-jb403",
					"type": "link",
				    "yaw": -0.24047186044714053,
					"pitch": 0.13832538235241643,
					"rotation": 0,
					"target": "32-jb400"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  {
		  "id": "36-jbkitchen",
            "name": "Journey Building - Kitchen",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
              "faceSize": 1472,
			  "initialViewParameters": {
				"pitch": 0,
				"yaw": 0,
				"fov": 1.5707963267948966
            },
            "hotspots": [
                {
					"id": "to-jb400-from-kitchen",
					"type": "link",
					"yaw": 0.6326062986388621,
					"pitch": 0.13376521669096597,
					"rotation": 4.71238898038469,
					"target": "7-31-jb400",
					"text": "Go to Journey Building Kitchen"
				},
				{
					"id": "to-jb400-from-kitchen2",
					"type": "link",
					"yaw": -1.0265634907449055,
					"pitch": 0.27145530094650105,
					"rotation": 0,
					"target": "32-jb400",
					"text": "Go to Journey Building Kitchen"
				}
            ],
            "infoHotspots": [
            ]
		  },
		  
		  ]
		},
        {
		  type: 'link-group',
		  id: 'link-group-next-steps',
		  name: '🌐 Links for Next Steps',
		  collapsed: true,  // true to start collapsed
		  links: [
			{
			  type: 'link',
			  id: 'link-web-site',
			  name: '🌐  Visit Our Website',
			  url: 'https://limacommunitychurch.com',
			  newTab: true // true = open in new tab, false = same tab
			},
			{
			  type: 'link',
			  id: 'link-message-series',
			  name: '📖  Recent Sermons',
			  url: 'https://limacc.com/messageseries',
			  newTab: true // true = open in new tab, false = same tab
			},
			{
			  type: 'link',
			  id: 'link-youtube-channel',
			  name: '▶  Youtube Channel',
			  url: 'https://youtube.com/@lccn',
			  newTab: true // true = open in new tab, false = same tab
			},
			{
			  type: 'link',
			  id: 'link-pre-register',
			  name: '👨‍👩‍👧‍👦  Pre-Register Kiddos for Sunday',
			  url: 'https://www.limacommunitychurch.com/im-new',
			  newTab: true // true = open in new tab, false = same tab
			},
			{
			  type: 'link',
			  id: 'link-christmas2025',
			  name: '✨  Christmas Services',
			  url: 'https://www.limacommunitychurch.com/christmas25',
			  newTab: true // true = open in new tab, false = same tab
			},
		  ]
		},
		
    ],
    "name": "Lima Community Church Virtual Tour",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": true,
        "fullscreenButton": true,
        "viewControlButtons": true,
		"customMusic": true
    }
};

