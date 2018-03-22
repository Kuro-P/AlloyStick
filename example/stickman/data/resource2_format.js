/**
 * Created by iconie on 22/07/2017.
 */
const AlloyData2 = {};

AlloyData2.textureDatas = {
    "dada": {
        "head": {
            "x": 0,
            "width": 66,
            "y": 0,
            "originX": -33,
            "originY": -33,
            "height": 66
        },
        "bodyUp": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -13.65,
            "originY": -13.15,
            "height": 77
        },
        "bodyDown": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -14,
            "originY": -19.5,
            "height": 77
        },
        "armLeft": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -14,
            "originY": -18.5,
            "height": 77
        },
        "armRight": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -10.85,
            "originY": -6.05,
            "height": 77
        },
        "handLeft": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -15.35,
            "originY": -10.95,
            "height": 77
        },
        "handRight": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -16.85,
            "originY": -9.85,
            "height": 77
        },
        "legLeft": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -18.15,
            "originY": -15.7,
            "height": 77
        },
        "legRight": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -14,
            "originY": -10.5,
            "height": 77
        },
        "shankLeft": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -12.05,
            "originY": -13.2,
            "height": 77
        },
        "shankRight": {
            "x": 68,
            "width": 28,
            "y": 0,
            "originX": -14,
            "originY": -13.65,
            "height": 77
        },
        "footLeft": {
            "x": 98,
            "width": 28,
            "y": 0,
            "originX": -15.7,
            "originY": -5.7,
            "height": 46
        },
        "footRight": {
            "x": 98,
            "width": 28,
            "y": 0,
            "originX": -14,
            "originY": -8.95,
            "height": 46
        }
    }
};

AlloyData2.boneDatas = {
    "dada": {
        "head": {
            "name": "head",
            "x": -1,
            "y": -80,
            "scaleX": 1,
            "scaleY": 1
        },
        "bodyUp": {
            "name": "bodyUp",
            "x": 2.65,
            "y": -50.5,
            "scaleX": 1,
            "scaleY": 1
        },
        "bodyDown": {
            "name": "bodyDown",
            "x": 14,
            "y": 1.5,
            "scaleX": 1,
            "scaleY": 1
        },
        "armLeft": {
            "name": "armLeft",
            "x": 8.25,
            "y": -39.2,
            "scaleX": 1,
            "scaleY": 1
        },
        "handLeft": {
            "name": "handLeft",
            "x": 14,
            "y": 1.5,
            "scaleX": 1,
            "scaleY": 0.87
        },
        "armRight": {
            "name": "armRight",
            "x": -0.95,
            "y": -47,
            "scaleX": 1,
            "scaleY": 1.16
        },
        "handRight": {
            "name": "handRight",
            "x": 33,
            "y": 14.7,
            "scaleX": 1,
            "scaleY": 0.91
        },
        "legLeft": {
            "name": "legLeft",
            "x": 14,
            "y": 49,
            "scaleX": 1,
            "scaleY": 1
        },
        "shankLeft": {
            "name": "shankLeft",
            "x": 4.7,
            "y": 99.85,
            "scaleX": 1,
            "scaleY": 1
        },
        "footLeft": {
            "name": "footLeft",
            "x": 55.2,
            "y": 121.55,
            "scaleX": 1,
            "scaleY": 1
        },
        "legRight": {
            "name": "legRight",
            "x": 14,
            "y": 49,
            "scaleX": 1,
            "scaleY": 1
        },
        "shankRight": {
            "name": "shankRight",
            "x": 14,
            "y": 104.5,
            "scaleX": 1,
            "scaleY": 1
        },
        "footRight": {
            "name": "footRight",
            "x": 15.25,
            "y": 156.05,
            "scaleX": 1,
            "scaleY": 1.03
        }
    }
};

AlloyData2.animationDatas = {
    "dada": {
        "run": {
            "name": "run",
            "frame": 44,
            "footRight": {
                "nodeList": [{
                    "x": 15.25,
                    "y": 156.05,
                    "rotation": 90,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 59.95,
                        "y": 151.6,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 100.4,
                        "y": 111.65,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 93.3,
                        "y": 85.4,
                        "rotation": -60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 71.7,
                        "y": 76.8,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 19.25,
                        "y": 100.4,
                        "rotation": 15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -52.2,
                        "y": 105.4,
                        "rotation": 67.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -19.6,
                        "y": 150.55,
                        "rotation": 82.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -11.5,
                        "y": 149.2,
                        "rotation": 82.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 14,
                    "y": 104.5,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 31.85,
                        "y": 106.95,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 53.45,
                        "y": 88.2,
                        "rotation": -60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 46.15,
                        "y": 97.6,
                        "rotation": -105,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 29.4,
                        "y": 104.75,
                        "rotation": -120,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -27.65,
                        "y": 87.5,
                        "rotation": -75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -40.6,
                        "y": 61.25,
                        "rotation": 22.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -18.9,
                        "y": 98.8,
                        "rotation": 7.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -7.15,
                        "y": 99.05,
                        "rotation": 7.04,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 14,
                    "y": 49,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 14,
                        "y": 49,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14,
                        "y": 49,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14,
                        "y": 49,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14,
                        "y": 49,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8.45,
                        "y": 49.95,
                        "rotation": 45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 1.35,
                        "y": 49.05,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.83,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 7.6,
                        "y": 46.2,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8.85,
                        "y": 41.45,
                        "rotation": 15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": 55.2,
                    "y": 121.55,
                    "rotation": 45,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -10.45,
                        "y": 104.65,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -50.25,
                        "y": 101.15,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -34.75,
                        "y": 149.65,
                        "rotation": 90,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -17.75,
                        "y": 154.65,
                        "rotation": 90,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 39.7,
                        "y": 160.1,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 106.25,
                        "y": 105.25,
                        "rotation": 8.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 108.1,
                        "y": 60.3,
                        "rotation": -29.99,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 75.45,
                        "y": 63.45,
                        "rotation": -44.99,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": 4.7,
                    "y": 99.85,
                    "rotation": -60,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -35.75,
                        "y": 69.15,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 0.92,
                        "scaleY": 0.84,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -38.2,
                        "y": 54.8,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -32.45,
                        "y": 98.3,
                        "rotation": 15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -15.4,
                        "y": 98.4,
                        "rotation": 15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 13.6,
                        "y": 110.2,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 50.95,
                        "y": 94.75,
                        "rotation": -66.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 58.3,
                        "y": 86.45,
                        "rotation": -105,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 34.15,
                        "y": 101.55,
                        "rotation": -120,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": 14,
                    "y": 49,
                    "rotation": 15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 14,
                        "y": 48.95,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14.05,
                        "y": 49,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14.05,
                        "y": 49,
                        "rotation": 38.26,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14.05,
                        "y": 49,
                        "rotation": 23.26,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 14.4,
                        "y": 52.8,
                        "rotation": -6.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 15.65,
                        "y": 45.35,
                        "rotation": -43.29,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 18.4,
                        "y": 48.95,
                        "rotation": -51.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 19.75,
                        "y": 48.5,
                        "rotation": -21.74,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "handRight": {
                "delay": 0.05,
                "nodeList": [{
                    "x": 33,
                    "y": 14.7,
                    "rotation": 105,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.91,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 51.15,
                        "y": -4.2,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.82,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 62.55,
                        "y": -33.15,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 51.1,
                        "y": -26.8,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 49.05,
                        "y": -10,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 17,
                        "y": 2,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -46.85,
                        "y": -2.85,
                        "rotation": 90,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -24.1,
                        "y": -0.25,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -11.5,
                        "y": -0.95,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "armRight": {
                "delay": 0.05,
                "nodeList": [{
                    "x": -0.95,
                    "y": -47,
                    "rotation": -30,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.16,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -0.95,
                        "y": -47,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.16,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1.05,
                        "y": -47,
                        "rotation": -60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -0.45,
                        "y": -51,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -5.4,
                        "y": -58.15,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -8.6,
                        "y": -44.45,
                        "rotation": 45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.93,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -2.4,
                        "y": -47.55,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -6.65,
                        "y": -53.3,
                        "rotation": 15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 14,
                    "y": 1.5,
                    "rotation": 45,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.87,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -16.8,
                        "y": 4,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -30.35,
                        "y": -15.6,
                        "rotation": 105,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -25.4,
                        "y": -2.55,
                        "rotation": 105,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.83,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -17.4,
                        "y": 5.45,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.83,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 24.85,
                        "y": -2.55,
                        "rotation": 90,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.83,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 55.5,
                        "y": -28.65,
                        "rotation": 45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.7,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 50.15,
                        "y": -21.3,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.77,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 51.35,
                        "y": -18.5,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.83,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "armLeft": {
                "delay": 0.05,
                "nodeList": [{
                    "x": 8.25,
                    "y": -39.2,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 8.2,
                        "y": -39.15,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8.25,
                        "y": -39.2,
                        "rotation": 60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8.25,
                        "y": -39.2,
                        "rotation": 45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8.2,
                        "y": -39.2,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 10.85,
                        "y": -41.25,
                        "rotation": -75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 10.25,
                        "y": -45,
                        "rotation": -60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11.45,
                        "y": -42.25,
                        "rotation": -60,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 14,
                    "y": 1.5,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 14,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 11,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": 2.65,
                    "y": -50.5,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 2.65,
                        "y": -50.5,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1,
                        "y": -47,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -1,
                    "y": -80,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -10.75,
                        "y": -72.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -19.75,
                        "y": -81.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -10.75,
                        "y": -81.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -11.75,
                        "y": -81.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -11.75,
                        "y": -81.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -16.75,
                        "y": -78.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -18.75,
                        "y": -81.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -15.75,
                        "y": -85.7,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            }
        },
        "simpleHit": {
            "name": "simpleHit",
            "frame": 9,
            "footRight": {
                "nodeList": [{
                    "x": 82.4,
                    "y": 145.55,
                    "rotation": 82.04,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 83.9,
                        "y": 145.05,
                        "rotation": 81.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 42.9,
                    "y": 98.5,
                    "rotation": -37.95,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 39.5,
                        "y": 95.1,
                        "rotation": -38.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.14,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 13.4,
                    "y": 47.1,
                    "rotation": -30,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 10.55,
                        "y": 44.85,
                        "rotation": -30.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -57.9,
                    "y": 132.9,
                    "rotation": 90.01,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.2,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": -57.9,
                        "y": 132.9,
                        "rotation": 90.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.2,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -65.35,
                        "y": 148,
                        "rotation": 89.76,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -36.35,
                    "y": 71.7,
                    "rotation": 30,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": -36.35,
                        "y": 71.7,
                        "rotation": 30,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -41.05,
                        "y": 86.75,
                        "rotation": 29.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": 11.1,
                    "y": 59,
                    "rotation": 68.26,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.01,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": 11.1,
                        "y": 59,
                        "rotation": 68.26,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 6.2,
                        "y": 58.8,
                        "rotation": 53.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": 55.15,
                    "y": -70.75,
                    "rotation": -135,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 19.8,
                        "y": -87.25,
                        "rotation": -180,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -32.35,
                        "y": -85.25,
                        "rotation": 120,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -73.9,
                        "y": -46,
                        "rotation": 90,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.26,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": 1.25,
                    "y": -50.05,
                    "rotation": -105,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.94,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -3.65,
                        "y": -34.6,
                        "rotation": -150,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.4,
                        "y": -42.55,
                        "rotation": 150,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.35,
                        "y": -42.45,
                        "rotation": 97.76,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.25,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": -15.05,
                    "y": -8.3,
                    "rotation": 75,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.96,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 32.65,
                        "y": -19.5,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.96,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 42.35,
                        "y": -32.85,
                        "rotation": 82.94,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": -9.9,
                    "y": -39.65,
                    "rotation": 15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.73,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 2.3,
                        "y": -46.95,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 3,
                        "y": -49.2,
                        "rotation": -75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.96,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 12,
                    "y": 7.5,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.79,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 13,
                        "y": 1.5,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -3.75,
                    "y": -52.7,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -2.75,
                        "y": -51.7,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -33.25,
                    "y": -79.8,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -30.25,
                        "y": -68.8,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    }]
            }
        },
        "secondHit": {
            "name": "secondHit",
            "frame": 6,
            "footRight": {
                "nodeList": [{
                    "x": 83.9,
                    "y": 145.05,
                    "rotation": 81.79,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": 58.55,
                        "y": 153.7,
                        "rotation": -83.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 39.5,
                    "y": 95.1,
                    "rotation": -38.2,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.14,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": 55.25,
                        "y": 101.85,
                        "rotation": -8.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 10.55,
                    "y": 44.85,
                    "rotation": -30.25,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": 18.55,
                        "y": 64.85,
                        "rotation": -45.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -65.35,
                    "y": 148,
                    "rotation": 89.76,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.07,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": -65.35,
                        "y": 148,
                        "rotation": 89.76,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -41.05,
                    "y": 86.75,
                    "rotation": 29.75,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": -41.05,
                        "y": 86.75,
                        "rotation": 29.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": 6.2,
                    "y": 58.8,
                    "rotation": 53.01,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.01,
                    "alpha": 1,
                    "frame": 5
                },
                    {
                        "x": 12.2,
                        "y": 71.8,
                        "rotation": 68.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.01,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -24.35,
                    "y": -25.45,
                    "rotation": 90,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.67,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 56.05,
                        "y": -29.45,
                        "rotation": 128.49,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.67,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 51.05,
                        "y": -10.3,
                        "rotation": 173.49,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.73,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": 9.65,
                    "y": -26.65,
                    "rotation": 97.76,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.64,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 15.55,
                        "y": -15.65,
                        "rotation": -112.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.73,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 15.55,
                        "y": -15.65,
                        "rotation": -82.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.73,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 43.8,
                    "y": -13.85,
                    "rotation": 82.94,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.92,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -20.95,
                        "y": -8.1,
                        "rotation": 89.98,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.72,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -50.15,
                        "y": -9.75,
                        "rotation": 91.48,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.33,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": 9.65,
                    "y": -26.65,
                    "rotation": -75,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.77,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 0.7,
                        "y": -17.1,
                        "rotation": 75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.52,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.65,
                        "y": -17,
                        "rotation": 83.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.11,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 16,
                    "y": 20.25,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 16,
                        "y": 20.25,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 3
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": 1.25,
                    "y": -39.95,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 1.25,
                        "y": -39.95,
                        "rotation": -15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -12.25,
                    "y": -66.05,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -7.05,
                        "y": -59.55,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -0.25,
                        "y": -54,
                        "rotation": 0,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "jump_kick": {
            "name": "jump_kick",
            "frame": 12,
            "footRight": {
                "nodeList": [{
                    "x": 58.55,
                    "y": 153.65,
                    "rotation": -91.47,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 57.25,
                        "y": 148.95,
                        "rotation": -61.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 52.25,
                        "y": 113.95,
                        "rotation": -61.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 47.45,
                        "y": 105.6,
                        "rotation": -46.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 3.7,
                        "y": 91.2,
                        "rotation": -46.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -2,
                        "y": 83.65,
                        "rotation": -31.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 62.55,
                    "y": 99,
                    "rotation": -0.75,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.98,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 43.95,
                        "y": 100.65,
                        "rotation": -16.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 38.95,
                        "y": 65.65,
                        "rotation": -16.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 48.5,
                        "y": 52.5,
                        "rotation": -1.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 29.65,
                        "y": 65.95,
                        "rotation": 34.69,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.71,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 29.7,
                        "y": 65.95,
                        "rotation": 49.69,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.71,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 18.55,
                    "y": 68.45,
                    "rotation": -54.24,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.95,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 5.75,
                        "y": 56.1,
                        "rotation": -42.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.75,
                        "y": 21.1,
                        "rotation": -42.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.75,
                        "y": 21.15,
                        "rotation": -57.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.75,
                        "y": 21.15,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 0.75,
                        "y": 21.15,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -14.05,
                    "y": 155.15,
                    "rotation": 89.76,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.14,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -17.3,
                        "y": 153.85,
                        "rotation": 89.76,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.14,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -0.3,
                        "y": 105.2,
                        "rotation": 37.28,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -46.1,
                        "y": 89.2,
                        "rotation": 75.49,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -105.35,
                        "y": 53.55,
                        "rotation": 90.49,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -127.4,
                        "y": 35.65,
                        "rotation": 105.49,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -32.75,
                    "y": 103.25,
                    "rotation": -7.94,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.95,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -36,
                        "y": 94.85,
                        "rotation": -7.94,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -39.8,
                        "y": 60.5,
                        "rotation": -30.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -49.45,
                        "y": 29.65,
                        "rotation": 7.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -59.1,
                        "y": 25.75,
                        "rotation": 67.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.11,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -67.4,
                        "y": 24.8,
                        "rotation": 85.4,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": 8.05,
                    "y": 80.1,
                    "rotation": 53.01,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.89,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 4.85,
                        "y": 66.15,
                        "rotation": 45.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -0.15,
                        "y": 31.15,
                        "rotation": 45.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -0.15,
                        "y": 31.15,
                        "rotation": 83.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -0.15,
                        "y": 31.15,
                        "rotation": 89.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -2.8,
                        "y": 31.15,
                        "rotation": 89.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.15,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": 59.25,
                    "y": 6.8,
                    "rotation": 66.68,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.86,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 0.25,
                        "y": 18.05,
                        "rotation": 105.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.91,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -30.7,
                        "y": -31.05,
                        "rotation": 75.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.77,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -35.6,
                        "y": -21.95,
                        "rotation": 75.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.77,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -21.4,
                        "y": -12.6,
                        "rotation": 75.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.77,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -19.4,
                        "y": -10.6,
                        "rotation": 75.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.77,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": 7.4,
                    "y": -11.2,
                    "rotation": -67.24,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.89,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -16.7,
                        "y": -24.85,
                        "rotation": -13.69,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.73,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -20.4,
                        "y": -62.7,
                        "rotation": 31.3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.6,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -20.4,
                        "y": -62.75,
                        "rotation": 31.3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -15.1,
                        "y": -53.2,
                        "rotation": 23.11,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -15.1,
                        "y": -53.2,
                        "rotation": 8.11,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": -5.25,
                    "y": 10.15,
                    "rotation": 91.48,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.76,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 8.7,
                        "y": 17.5,
                        "rotation": 71.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.84,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 36.4,
                        "y": -49.2,
                        "rotation": -41.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.84,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 36.4,
                        "y": -49.2,
                        "rotation": -41.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.84,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 49.25,
                        "y": -55.95,
                        "rotation": -41.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.84,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 49.95,
                        "y": -52.75,
                        "rotation": -71.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": -0.75,
                    "y": -13.55,
                    "rotation": 23.47,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.57,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -11.7,
                        "y": -21.05,
                        "rotation": -26.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -3.9,
                        "y": -60.6,
                        "rotation": -71.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -3.9,
                        "y": -60.6,
                        "rotation": -71.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 4.6,
                        "y": -55.15,
                        "rotation": -86.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 4.6,
                        "y": -55.15,
                        "rotation": -86.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 14.5,
                    "y": 23.75,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 1.55,
                        "y": 11.25,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -3.45,
                        "y": -23.75,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -3.45,
                        "y": -23.75,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 5.7,
                        "y": -21.9,
                        "rotation": 8.27,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 5.7,
                        "y": -21.9,
                        "rotation": 8.27,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -0.25,
                    "y": -36.45,
                    "rotation": -15,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -19.85,
                        "y": -46.9,
                        "rotation": -21.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -24.85,
                        "y": -81.9,
                        "rotation": -21.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -26.65,
                        "y": -80.1,
                        "rotation": -21.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -23.2,
                        "y": -70.5,
                        "rotation": -35.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -23.2,
                        "y": -70.5,
                        "rotation": -35.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -1.75,
                    "y": -50.5,
                    "rotation": 0,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -22.95,
                        "y": -60.65,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -27.95,
                        "y": -95.65,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -35.15,
                        "y": -90.85,
                        "rotation": -6.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -34.15,
                        "y": -78.9,
                        "rotation": -20.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -34.15,
                        "y": -78.9,
                        "rotation": -20.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "drop": {
            "name": "drop",
            "frame": 3,
            "footRight": {
                "nodeList": [{
                    "x": 10.95,
                    "y": 97.1,
                    "rotation": -46.47,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 46.6,
                        "y": 149.9,
                        "rotation": -76.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 29.65,
                    "y": 65.95,
                    "rotation": 19.69,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.71,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 40.2,
                        "y": 91.05,
                        "rotation": -10.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 0.75,
                    "y": 21.15,
                    "rotation": -34.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 8,
                        "y": 42.3,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -96.55,
                    "y": 99.35,
                    "rotation": 56,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -56.9,
                        "y": 148.55,
                        "rotation": 80.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -65.8,
                    "y": 46.75,
                    "rotation": 35.9,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -47.1,
                        "y": 83.35,
                        "rotation": 14.92,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": -2.8,
                    "y": 31.15,
                    "rotation": 70.17,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.15,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -0.65,
                        "y": 53,
                        "rotation": 49.19,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -32.15,
                    "y": -21.1,
                    "rotation": 75.22,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.77,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -36.6,
                        "y": -17.1,
                        "rotation": 33.43,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": -9.2,
                    "y": -58.9,
                    "rotation": 38.11,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.74,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -2.95,
                        "y": -44.35,
                        "rotation": 56.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 52.1,
                    "y": -40.3,
                    "rotation": -11.16,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.92,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 58.1,
                        "y": -30.2,
                        "rotation": -11.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": 8.95,
                    "y": -54.3,
                    "rotation": -71.45,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.99,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 4.75,
                        "y": -44.9,
                        "rotation": -71.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 5.7,
                    "y": -21.9,
                    "rotation": 8.27,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": 6.8,
                        "y": 2.45,
                        "rotation": 0.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -13.9,
                    "y": -76.4,
                    "rotation": -20.73,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -4.9,
                        "y": -58.95,
                        "rotation": -11.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -14.35,
                    "y": -92.3,
                    "rotation": -5.73,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 2
                },
                    {
                        "x": -11,
                        "y": -81.4,
                        "rotation": -5.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "relax": {
            "name": "relax",
            "frame": 13,
            "footRight": {
                "nodeList": [{
                    "x": 51.6,
                    "y": 152,
                    "rotation": -84.77,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 51.6,
                        "y": 152,
                        "rotation": -91.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 51.6,
                        "y": 152,
                        "rotation": -91.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 51.6,
                        "y": 152,
                        "rotation": -91.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 40.2,
                    "y": 91.05,
                    "rotation": -10.31,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.19,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 40.2,
                        "y": 91.05,
                        "rotation": -10.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 40.2,
                        "y": 91.05,
                        "rotation": -10.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 40.2,
                        "y": 91.05,
                        "rotation": -10.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 8,
                    "y": 42.3,
                    "rotation": -34.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.97,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 8,
                        "y": 45.3,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 8,
                        "y": 42.3,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 8,
                        "y": 42.3,
                        "rotation": -34.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -56.9,
                    "y": 148.55,
                    "rotation": 80.01,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -56.9,
                        "y": 148.55,
                        "rotation": 80.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -56.9,
                        "y": 148.55,
                        "rotation": 80.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -56.9,
                        "y": 148.55,
                        "rotation": 80.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -47.1,
                    "y": 83.35,
                    "rotation": 14.92,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -47.1,
                        "y": 83.35,
                        "rotation": 14.92,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -47.1,
                        "y": 83.35,
                        "rotation": 14.92,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -47.1,
                        "y": 83.35,
                        "rotation": 14.92,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": -0.65,
                    "y": 53,
                    "rotation": 49.19,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -0.65,
                        "y": 56,
                        "rotation": 49.19,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -0.65,
                        "y": 53,
                        "rotation": 49.19,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -0.65,
                        "y": 53,
                        "rotation": 49.19,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -34,
                    "y": -12.2,
                    "rotation": 25.62,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.04,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -18.25,
                        "y": 5,
                        "rotation": -4.38,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -28.45,
                        "y": -2.25,
                        "rotation": 28.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -24.85,
                        "y": -0.5,
                        "rotation": -8.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -19.25,
                        "y": 0,
                        "rotation": 19.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": -4.25,
                    "y": -43.75,
                    "rotation": 48.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.74,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -8.3,
                        "y": -37.2,
                        "rotation": 18.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -6.15,
                        "y": -39.6,
                        "rotation": 35.95,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -7.25,
                        "y": -40.1,
                        "rotation": 29.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -11.25,
                        "y": -42.2,
                        "rotation": 18.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 50.3,
                    "y": -20.8,
                    "rotation": 3.25,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.92,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 49.05,
                        "y": -8.7,
                        "rotation": 10.28,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 48.9,
                        "y": -10.05,
                        "rotation": 10.28,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 48.05,
                        "y": -13.7,
                        "rotation": 10.28,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": 2.3,
                    "y": -48.4,
                    "rotation": -57.03,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.99,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 4.75,
                        "y": -41.95,
                        "rotation": -50.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 4.6,
                        "y": -43.3,
                        "rotation": -50.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 3.75,
                        "y": -46.95,
                        "rotation": -50.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 6.8,
                    "y": 2.45,
                    "rotation": 0.8,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 6.8,
                        "y": 5.45,
                        "rotation": 0.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 6.8,
                        "y": 2.45,
                        "rotation": 0.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 6.8,
                        "y": 2.45,
                        "rotation": 0.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -4.9,
                    "y": -58.95,
                    "rotation": -11.78,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -4.9,
                        "y": -55.95,
                        "rotation": -11.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -5.05,
                        "y": -57.3,
                        "rotation": -11.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -5.9,
                        "y": -60.95,
                        "rotation": -11.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -10,
                    "y": -83.4,
                    "rotation": -5.73,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -8.55,
                        "y": -71.9,
                        "rotation": -5.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -9.35,
                        "y": -74.05,
                        "rotation": -5.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -15.15,
                        "y": -81.45,
                        "rotation": -5.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "soap": {
            "name": "soap",
            "frame": 32,
            "footRight": {
                "nodeList": [{
                    "x": 12.7,
                    "y": 147.45,
                    "rotation": 88.53,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 1.95,
                    "y": 85.2,
                    "rotation": -6.08,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.19,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 1.95,
                        "y": 85.2,
                        "rotation": -6.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 2.45,
                    "y": 25.45,
                    "rotation": 3,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.05,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 2.45,
                        "y": 25.45,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -47.65,
                    "y": 144.9,
                    "rotation": 85.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -1.4,
                        "y": 111.25,
                        "rotation": 85.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 35.65,
                        "y": 97.75,
                        "rotation": 40.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 79.9,
                        "y": 58.45,
                        "rotation": -23.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 79.9,
                        "y": 58.45,
                        "rotation": -23.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 35.65,
                        "y": 97.75,
                        "rotation": 40.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1.4,
                        "y": 111.25,
                        "rotation": 85.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -47.65,
                        "y": 144.9,
                        "rotation": 85.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -31.65,
                    "y": 80.85,
                    "rotation": 20.4,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -31.6,
                        "y": 81,
                        "rotation": -35.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.71,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -27.9,
                        "y": 82.85,
                        "rotation": -69.82,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 24.75,
                        "y": 82.85,
                        "rotation": -103.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 24.75,
                        "y": 82.85,
                        "rotation": -103.78,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -27.9,
                        "y": 82.85,
                        "rotation": -69.82,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -31.6,
                        "y": 81,
                        "rotation": -35.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.71,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -31.65,
                        "y": 80.85,
                        "rotation": 20.4,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": -2.75,
                    "y": 36.1,
                    "rotation": 24.67,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -2.5,
                        "y": 28.45,
                        "rotation": 24.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -3.8,
                        "y": 28.45,
                        "rotation": 20.64,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 1.45,
                        "y": 23.85,
                        "rotation": -24.36,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": 1.45,
                        "y": 23.85,
                        "rotation": -24.36,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -3.8,
                        "y": 28.45,
                        "rotation": 20.64,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -2.5,
                        "y": 28.45,
                        "rotation": 24.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.98,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -2.75,
                        "y": 36.1,
                        "rotation": 24.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -30.9,
                    "y": -17.35,
                    "rotation": 41.21,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.04,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -58.35,
                        "y": 1.8,
                        "rotation": 34.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -76.65,
                        "y": 42.45,
                        "rotation": 24.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -80.15,
                        "y": 85.95,
                        "rotation": 18.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -80.15,
                        "y": 85.95,
                        "rotation": 18.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -76.65,
                        "y": 42.45,
                        "rotation": 24.23,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -58.35,
                        "y": 1.8,
                        "rotation": 34.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -30.9,
                        "y": -17.35,
                        "rotation": 41.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": -35.6,
                    "y": -61.9,
                    "rotation": 1.11,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.74,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -63.15,
                        "y": -46,
                        "rotation": 2.61,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.88,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -90.05,
                        "y": -3.7,
                        "rotation": -7.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.88,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -91.5,
                        "y": 32.75,
                        "rotation": -5.35,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -91.5,
                        "y": 32.75,
                        "rotation": -5.35,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -90.05,
                        "y": -3.7,
                        "rotation": -7.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.88,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -63.15,
                        "y": -46,
                        "rotation": 2.61,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.88,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -35.6,
                        "y": -61.9,
                        "rotation": 1.11,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.74,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 28.25,
                    "y": -51.5,
                    "rotation": 6.62,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.92,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -8.9,
                        "y": -13.85,
                        "rotation": 31.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -29.3,
                        "y": 13.35,
                        "rotation": 16.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -36.2,
                        "y": 50.4,
                        "rotation": 3.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -36.2,
                        "y": 50.4,
                        "rotation": 3.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -29.3,
                        "y": 13.35,
                        "rotation": 16.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -8.9,
                        "y": -13.85,
                        "rotation": 31.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 28.25,
                        "y": -51.5,
                        "rotation": 6.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": -26,
                    "y": -62.8,
                    "rotation": -75.12,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.99,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -53.55,
                        "y": -46.6,
                        "rotation": -50.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -80.9,
                        "y": -6.8,
                        "rotation": -65.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -87.15,
                        "y": 28.35,
                        "rotation": -63.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -87.15,
                        "y": 28.35,
                        "rotation": -63.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -80.9,
                        "y": -6.8,
                        "rotation": -65.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -53.55,
                        "y": -46.6,
                        "rotation": -50.56,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -26,
                        "y": -62.8,
                        "rotation": -75.12,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": -9.05,
                    "y": -18.9,
                    "rotation": -11.11,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -22.35,
                        "y": -11.45,
                        "rotation": -31.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -37.4,
                        "y": 5.85,
                        "rotation": -61.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -42.15,
                        "y": 22.65,
                        "rotation": -85,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -42.15,
                        "y": 22.65,
                        "rotation": -85,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -37.4,
                        "y": 5.85,
                        "rotation": -61.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -22.35,
                        "y": -11.45,
                        "rotation": -31.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -9.05,
                        "y": -18.9,
                        "rotation": -11.11,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -34.5,
                    "y": -71.55,
                    "rotation": -29.18,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -64.55,
                        "y": -51.9,
                        "rotation": -49.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -94.2,
                        "y": -8.1,
                        "rotation": -79.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -99.85,
                        "y": 32.45,
                        "rotation": -103.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -99.85,
                        "y": 32.45,
                        "rotation": -103.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -94.2,
                        "y": -8.1,
                        "rotation": -79.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -64.55,
                        "y": -51.9,
                        "rotation": -49.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -34.5,
                        "y": -71.55,
                        "rotation": -29.18,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -49.05,
                    "y": -92.85,
                    "rotation": -23.13,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -85.7,
                        "y": -68.7,
                        "rotation": -43.58,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -120.25,
                        "y": -11.4,
                        "rotation": -73.58,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -113.95,
                        "y": 43.7,
                        "rotation": -97.03,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 7
                    },
                    {
                        "x": -113.95,
                        "y": 43.7,
                        "rotation": -97.03,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -120.25,
                        "y": -11.4,
                        "rotation": -73.58,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -85.7,
                        "y": -68.7,
                        "rotation": -43.58,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -49.05,
                        "y": -92.85,
                        "rotation": -23.13,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "roll": {
            "name": "roll",
            "frame": 50,
            "footRight": {
                "nodeList": [{
                    "x": 12.7,
                    "y": 147.45,
                    "rotation": 88.53,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": 12.7,
                        "y": 147.45,
                        "rotation": 88.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 0.65,
                        "y": 123.7,
                        "rotation": -16.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": 45.65,
                        "y": 116.55,
                        "rotation": -16.47,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": 25.6,
                        "y": 105,
                        "rotation": -6,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 55.45,
                        "y": 14.85,
                        "rotation": -46.03,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -17.6,
                        "y": -17.2,
                        "rotation": -91.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -146.95,
                        "y": 64.45,
                        "rotation": 175.85,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -110.9,
                        "y": 146.2,
                        "rotation": 90.14,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -74.9,
                        "y": 128.1,
                        "rotation": 90.14,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 36.15,
                        "y": 153.75,
                        "rotation": 90.83,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 50.1,
                        "y": 158.2,
                        "rotation": 41.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 47.1,
                        "y": 157.2,
                        "rotation": 41.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 1.95,
                    "y": 85.2,
                    "rotation": -6.08,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.19,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -39.95,
                        "y": 106.95,
                        "rotation": -51.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -64.95,
                        "y": 146.95,
                        "rotation": -111.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.29,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -2.55,
                        "y": 93,
                        "rotation": -61.06,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -20.15,
                        "y": 71.6,
                        "rotation": -50.59,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -1.05,
                        "y": 18.7,
                        "rotation": -90.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -54.7,
                        "y": 25.65,
                        "rotation": -135.83,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -90.25,
                        "y": 64.4,
                        "rotation": 93.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -83.9,
                        "y": 92.9,
                        "rotation": 29.57,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -47.9,
                        "y": 74.8,
                        "rotation": 29.57,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -17.85,
                        "y": 104.05,
                        "rotation": -44.74,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.29,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -6.85,
                        "y": 134.05,
                        "rotation": -64.02,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 13.9,
                        "y": 101.9,
                        "rotation": -27.54,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 2.45,
                    "y": 25.45,
                    "rotation": 3,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.05,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -21.45,
                        "y": 43.95,
                        "rotation": 18,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -65.8,
                        "y": 80.8,
                        "rotation": 3,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.2,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -41.1,
                        "y": 52.7,
                        "rotation": -41.99,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -64.25,
                        "y": 22.7,
                        "rotation": -41.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -66.25,
                        "y": 9.6,
                        "rotation": -81.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -107.05,
                        "y": 65.5,
                        "rotation": -126.31,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -77.45,
                        "y": 128.95,
                        "rotation": 169.73,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -44.4,
                        "y": 145.5,
                        "rotation": 144.03,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -8.4,
                        "y": 127.4,
                        "rotation": 144.03,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 39.65,
                        "y": 76.95,
                        "rotation": 69.71,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 10.85,
                        "y": 68.45,
                        "rotation": 15.46,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -4.45,
                        "y": 39.75,
                        "rotation": -14.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -47.65,
                    "y": 144.9,
                    "rotation": 85.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -84.25,
                        "y": 146.95,
                        "rotation": 85.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -153.65,
                        "y": 158.25,
                        "rotation": 93.69,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -28.25,
                        "y": 144.15,
                        "rotation": 88.91,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -10.75,
                        "y": 112.9,
                        "rotation": 45.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.93,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 39.05,
                        "y": 46.4,
                        "rotation": -33.14,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.93,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -6.75,
                        "y": 16.7,
                        "rotation": -78.34,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.93,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -91.75,
                        "y": 9.8,
                        "rotation": -162.81,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -115.2,
                        "y": 68.75,
                        "rotation": 165.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -142.9,
                        "y": 109.85,
                        "rotation": 156.81,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -78.9,
                        "y": 162.95,
                        "rotation": 88.57,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -88.05,
                        "y": 174.15,
                        "rotation": 94.87,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -57.95,
                        "y": 162.85,
                        "rotation": 70.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.18,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -31.65,
                    "y": 80.85,
                    "rotation": 20.4,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -78.9,
                        "y": 78.7,
                        "rotation": 11.65,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -130.85,
                        "y": 93.7,
                        "rotation": 26.65,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -73.4,
                        "y": 90.2,
                        "rotation": -38.13,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -69,
                        "y": 74.6,
                        "rotation": -51.15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -28.2,
                        "y": 51.1,
                        "rotation": -85.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -50.85,
                        "y": 67.8,
                        "rotation": -130.38,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -40.45,
                        "y": 68.6,
                        "rotation": 145.15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -37.2,
                        "y": 72.1,
                        "rotation": 98.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -65.3,
                        "y": 101,
                        "rotation": 89.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -23.4,
                        "y": 107.9,
                        "rotation": 51.53,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.3,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -58.75,
                        "y": 98.8,
                        "rotation": 27.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.44,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -62.15,
                        "y": 87,
                        "rotation": 3.59,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.28,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": -2.75,
                    "y": 36.1,
                    "rotation": 24.67,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -27.45,
                        "y": 51.9,
                        "rotation": 54.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -71.15,
                        "y": 86.7,
                        "rotation": 79.13,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -41.1,
                        "y": 59.8,
                        "rotation": 41.61,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -66.65,
                        "y": 24.85,
                        "rotation": 0.86,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -66.75,
                        "y": 12.8,
                        "rotation": -48.17,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -105.1,
                        "y": 68.1,
                        "rotation": -93.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -73.5,
                        "y": 127.8,
                        "rotation": -153.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.35,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -41.35,
                        "y": 142.75,
                        "rotation": -178.81,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.35,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -5.35,
                        "y": 123.65,
                        "rotation": 106.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.35,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 33.75,
                        "y": 77.85,
                        "rotation": 59.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.35,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 1.05,
                        "y": 70.05,
                        "rotation": 59.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.35,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -13.85,
                        "y": 43.95,
                        "rotation": 44.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.25,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -30.9,
                    "y": -17.35,
                    "rotation": 41.21,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.04,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -85.35,
                        "y": 27.05,
                        "rotation": 41.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -160.35,
                        "y": 74.05,
                        "rotation": 14.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -138.2,
                        "y": 95.35,
                        "rotation": 41.51,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -143.8,
                        "y": 81,
                        "rotation": -3.48,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -77.85,
                        "y": 79.2,
                        "rotation": -73.7,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -48.9,
                        "y": 105.5,
                        "rotation": -138.65,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 16.25,
                        "y": 100.95,
                        "rotation": -138.42,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 21.85,
                        "y": 65.9,
                        "rotation": 170.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 2.75,
                        "y": 55.95,
                        "rotation": 114.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.94,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -30.8,
                        "y": 10.85,
                        "rotation": 99.79,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -24.7,
                        "y": 21.3,
                        "rotation": 84.91,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -37.75,
                        "y": -2,
                        "rotation": 55.66,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": -35.6,
                    "y": -61.9,
                    "rotation": 1.11,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.74,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -125.3,
                        "y": -11.4,
                        "rotation": -43.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -176.75,
                        "y": 26.8,
                        "rotation": -11.66,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -168.25,
                        "y": 55.35,
                        "rotation": -29.36,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -193.3,
                        "y": 73.95,
                        "rotation": -74.36,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -109.9,
                        "y": 119.75,
                        "rotation": -135.29,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -25.75,
                        "y": 151.7,
                        "rotation": 159.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 59.25,
                        "y": 129.55,
                        "rotation": 130,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 72.5,
                        "y": 86.1,
                        "rotation": 115.09,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 54.4,
                        "y": 38.35,
                        "rotation": 74.65,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 20.85,
                        "y": -6.75,
                        "rotation": 74.65,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -13.85,
                        "y": -39.15,
                        "rotation": 14.76,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -22.55,
                        "y": -57.75,
                        "rotation": 24.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 28.25,
                    "y": -51.5,
                    "rotation": 6.62,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.92,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -58.75,
                        "y": 0.25,
                        "rotation": 6.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -132.5,
                        "y": 73.8,
                        "rotation": 91.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -119.35,
                        "y": 92.3,
                        "rotation": 75.69,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -132.6,
                        "y": 65.55,
                        "rotation": 24.68,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -54.4,
                        "y": 96,
                        "rotation": -33.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -23.8,
                        "y": 91.4,
                        "rotation": -98.02,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 1.55,
                        "y": 111.75,
                        "rotation": 163.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.02,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 44.85,
                        "y": 140.9,
                        "rotation": 118.33,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 102.8,
                        "y": 75,
                        "rotation": 2.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 79.8,
                        "y": 23,
                        "rotation": -12.11,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 41.85,
                        "y": -8.45,
                        "rotation": -19.15,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.07,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": 40.75,
                        "y": -15.6,
                        "rotation": -0.99,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": -26,
                    "y": -62.8,
                    "rotation": -75.12,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.99,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -119.15,
                        "y": -12.75,
                        "rotation": -75.12,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -175.1,
                        "y": 23.55,
                        "rotation": -42.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -167.65,
                        "y": 51.8,
                        "rotation": -50.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -195.4,
                        "y": 70.9,
                        "rotation": -95.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -112.2,
                        "y": 121.35,
                        "rotation": -114.14,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -25.25,
                        "y": 154.5,
                        "rotation": -179.09,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 62,
                        "y": 129.8,
                        "rotation": 106.14,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 78.95,
                        "y": 88.35,
                        "rotation": 31.24,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 53.1,
                        "y": 36.9,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 30.1,
                        "y": -15.1,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -12.7,
                        "y": -35.6,
                        "rotation": -61.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -11.5,
                        "y": -52,
                        "rotation": -51.81,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.28,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": -9.05,
                    "y": -18.9,
                    "rotation": -11.11,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -59,
                        "y": 1.6,
                        "rotation": -49.38,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -108.8,
                        "y": 43.35,
                        "rotation": -49.38,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.99,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -107.55,
                        "y": 44.4,
                        "rotation": -82.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -132.55,
                        "y": 37.3,
                        "rotation": -103.29,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.21,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -124.3,
                        "y": 48.3,
                        "rotation": -128.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -96.6,
                        "y": 134.55,
                        "rotation": 166.55,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -10.85,
                        "y": 149.85,
                        "rotation": 102.59,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 24.7,
                        "y": 135.4,
                        "rotation": 76.88,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 53.1,
                        "y": 103.85,
                        "rotation": 66.44,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.04,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 38.25,
                        "y": 30.35,
                        "rotation": -3.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 6.6,
                        "y": 20.1,
                        "rotation": -3.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -9.55,
                        "y": -4.9,
                        "rotation": -3.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.89,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -34.5,
                    "y": -71.55,
                    "rotation": -29.18,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -112.4,
                        "y": -10.25,
                        "rotation": -74.18,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -162.2,
                        "y": 31.5,
                        "rotation": -74.18,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -168.25,
                        "y": 55.35,
                        "rotation": -98.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -188,
                        "y": 65.65,
                        "rotation": -115.09,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -115.3,
                        "y": 113.75,
                        "rotation": 174.7,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -33.5,
                        "y": 154.05,
                        "rotation": 109.75,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 53.65,
                        "y": 135.4,
                        "rotation": 79.98,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 70.65,
                        "y": 93.95,
                        "rotation": 50.08,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 58.15,
                        "y": 45.55,
                        "rotation": 9.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.13,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 16.7,
                        "y": -18.05,
                        "rotation": -20.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -13.05,
                        "y": -34.4,
                        "rotation": -20.37,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.06,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -18.8,
                        "y": -52.9,
                        "rotation": -10.93,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.92,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -49.05,
                    "y": -92.85,
                    "rotation": -23.13,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 4
                },
                    {
                        "x": -144.95,
                        "y": -26.45,
                        "rotation": -53.13,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -208.3,
                        "y": 18.85,
                        "rotation": -122.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -198.15,
                        "y": 65.65,
                        "rotation": -154.8,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -200.3,
                        "y": 102.4,
                        "rotation": 145.21,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -93,
                        "y": 134.55,
                        "rotation": 74.99,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 3
                    },
                    {
                        "x": -5.2,
                        "y": 142.7,
                        "rotation": 10.05,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 72.55,
                        "y": 111.45,
                        "rotation": -19.72,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 75.05,
                        "y": 63.75,
                        "rotation": -49.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 50.85,
                        "y": 15.7,
                        "rotation": -90.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": 12.65,
                        "y": -51.3,
                        "rotation": -90.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 4
                    },
                    {
                        "x": -30.35,
                        "y": -60.3,
                        "rotation": -120.07,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 2
                    },
                    {
                        "x": -25.6,
                        "y": -86.55,
                        "rotation": -95.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        },
        "comeon": {
            "name": "comeon",
            "frame": 35,
            "footRight": {
                "nodeList": [{
                    "x": 51.6,
                    "y": 152,
                    "rotation": -84.77,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.08,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 51.6,
                        "y": 152,
                        "rotation": -84.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.08,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 47.7,
                        "y": 152,
                        "rotation": -84.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.2,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": 47.7,
                        "y": 152,
                        "rotation": -84.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.2,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": 47.7,
                        "y": 152,
                        "rotation": -84.77,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.2,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankRight": {
                "nodeList": [{
                    "x": 40.2,
                    "y": 91.05,
                    "rotation": -10.31,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.19,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": 24.75,
                        "y": 96.9,
                        "rotation": -30.01,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": 5.65,
                        "y": 106.85,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": 5.65,
                        "y": 106.85,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": 5.65,
                        "y": 106.85,
                        "rotation": -45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.19,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legRight": {
                "nodeList": [{
                    "x": 8,
                    "y": 42.3,
                    "rotation": -34.5,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.97,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -22,
                        "y": 61.85,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -41.05,
                        "y": 71.8,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -41.05,
                        "y": 71.8,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -41.05,
                        "y": 71.8,
                        "rotation": -54.2,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.97,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "footLeft": {
                "nodeList": [{
                    "x": -56.9,
                    "y": 148.55,
                    "rotation": 80.01,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.03,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -110.15,
                        "y": 116.35,
                        "rotation": 104.72,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -103.8,
                        "y": 144.65,
                        "rotation": 78.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -103.8,
                        "y": 144.65,
                        "rotation": 78.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -103.8,
                        "y": 144.65,
                        "rotation": 78.25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.03,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "shankLeft": {
                "nodeList": [{
                    "x": -47.1,
                    "y": 83.35,
                    "rotation": 14.92,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.22,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -74,
                        "y": 61.2,
                        "rotation": 39.62,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.22,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -95.4,
                        "y": 93.15,
                        "rotation": 13.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -95.4,
                        "y": 93.15,
                        "rotation": 13.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -95.4,
                        "y": 93.15,
                        "rotation": 13.16,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "legLeft": {
                "nodeList": [{
                    "x": -0.65,
                    "y": 53,
                    "rotation": 49.19,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -18.9,
                        "y": 67.5,
                        "rotation": 88.89,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -48.65,
                        "y": 77.55,
                        "rotation": 66.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -48.65,
                        "y": 77.55,
                        "rotation": 66.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -48.65,
                        "y": 77.55,
                        "rotation": 66.67,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handRight": {
                "nodeList": [{
                    "x": -25.1,
                    "y": -21.65,
                    "rotation": -64.38,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.24,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -55.9,
                        "y": -4.7,
                        "rotation": 29.9,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.91,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -117.35,
                        "y": -19.3,
                        "rotation": 134.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -117.35,
                        "y": -19.3,
                        "rotation": 134.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -117.35,
                        "y": -19.3,
                        "rotation": 134.1,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.05,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armRight": {
                "nodeList": [{
                    "x": -1.7,
                    "y": -57.1,
                    "rotation": 33.04,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.8,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -46.35,
                        "y": -43.85,
                        "rotation": 22.32,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.8,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -66.5,
                        "y": -17.5,
                        "rotation": 98.27,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.9,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -66.5,
                        "y": -17.5,
                        "rotation": 98.27,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.9,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -66.5,
                        "y": -17.5,
                        "rotation": 98.27,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.9,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "handLeft": {
                "nodeList": [{
                    "x": 21.1,
                    "y": -14.15,
                    "rotation": 61.12,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1.25,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -2.2,
                        "y": -20.2,
                        "rotation": 8.43,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.88,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -2.9,
                        "y": 10.5,
                        "rotation": -86.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.38,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -2.9,
                        "y": 10.5,
                        "rotation": -86.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.38,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -2.95,
                        "y": 10.5,
                        "rotation": -101.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.38,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -2.9,
                        "y": 10.5,
                        "rotation": -86.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.38,
                        "alpha": 1,
                        "frame": 8
                    },
                    {
                        "x": -2.95,
                        "y": 10.5,
                        "rotation": -101.84,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.38,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "armLeft": {
                "nodeList": [{
                    "x": -0.1,
                    "y": -56.1,
                    "rotation": -29.17,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.87,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -43.65,
                        "y": -45.75,
                        "rotation": -59.61,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.87,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -56.9,
                        "y": -15.6,
                        "rotation": -64.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -56.9,
                        "y": -15.6,
                        "rotation": -64.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.09,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -58.2,
                        "y": -15.6,
                        "rotation": -64.63,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1.12,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyDown": {
                "nodeList": [{
                    "x": 6.8,
                    "y": 2.45,
                    "rotation": 0.8,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 0.85,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -30.15,
                        "y": 7.45,
                        "rotation": -9.91,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.85,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -57.95,
                        "y": 20.05,
                        "rotation": -19.43,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -56.9,
                        "y": 21.1,
                        "rotation": -19.43,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -57.95,
                        "y": 20.05,
                        "rotation": -19.43,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 0.95,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "bodyUp": {
                "nodeList": [{
                    "x": -4.9,
                    "y": -58.95,
                    "rotation": -11.78,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -49.8,
                        "y": -45.15,
                        "rotation": -22.5,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -67.45,
                        "y": -31.2,
                        "rotation": -11.05,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -67.45,
                        "y": -31.2,
                        "rotation": -11.05,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -67.45,
                        "y": -31.2,
                        "rotation": -11.05,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            },
            "head": {
                "nodeList": [{
                    "x": -10,
                    "y": -83.4,
                    "rotation": -5.73,
                    "offR": 0,
                    "scaleX": 1,
                    "scaleY": 1,
                    "alpha": 1,
                    "frame": 3
                },
                    {
                        "x": -59.35,
                        "y": -68.2,
                        "rotation": -16.45,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 5
                    },
                    {
                        "x": -63.75,
                        "y": -57.7,
                        "rotation": 25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 6
                    },
                    {
                        "x": -63.75,
                        "y": -57.7,
                        "rotation": 25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 20
                    },
                    {
                        "x": -63.75,
                        "y": -57.7,
                        "rotation": 25,
                        "offR": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "alpha": 1,
                        "frame": 1
                    }]
            }
        }
    }
};