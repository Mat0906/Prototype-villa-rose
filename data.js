var APP_DATA = {
  "scenes": [
    {
      "id": "0-chambre-couloir-gauche",
      "name": "chambre couloir gauche",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.049644173754194,
          "pitch": 0.1535502550127923,
          "rotation": 0,
          "target": "8-salon"
        },
        {
          "yaw": -3.0930822704457377,
          "pitch": 0.06848819866500477,
          "rotation": 0,
          "target": "5-exterieur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-chambre-fond-couloir",
      "name": "chambre fond couloir",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02094209418236659,
          "pitch": 0.03677327168083622,
          "rotation": 0,
          "target": "5-exterieur"
        },
        {
          "yaw": -2.5277337491111194,
          "pitch": 0.14863355559788616,
          "rotation": 0,
          "target": "8-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chambre-mariee",
      "name": "Chambre mariée",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1565374720869652,
          "pitch": 0.08333675075598102,
          "rotation": 0,
          "target": "9-vestibule-mariee"
        },
        {
          "yaw": -1.6782254480557484,
          "pitch": 0.11005763539790259,
          "rotation": 0,
          "target": "7-salle-de-bain-marie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chambre-salon-haut",
      "name": "chambre salon haut",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2009178556272389,
          "pitch": 0.145546557414848,
          "rotation": 0,
          "target": "6-salle-de-bain-chambre-salon-haut"
        },
        {
          "yaw": -2.9043048864818566,
          "pitch": 0.2089503955166876,
          "rotation": 0,
          "target": "8-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entree",
      "name": "entrée",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4220162106097014,
          "pitch": 0.12984590331363854,
          "rotation": 0,
          "target": "8-salon"
        },
        {
          "yaw": 3.01764150815477,
          "pitch": 0.16213428342136638,
          "rotation": 0,
          "target": "5-exterieur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-exterieur",
      "name": "exterieur",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11071680223837532,
          "pitch": 0.008103645011656724,
          "rotation": 0,
          "target": "1-chambre-fond-couloir"
        },
        {
          "yaw": 0.16030958271728757,
          "pitch": -0.01319334774407821,
          "rotation": 0,
          "target": "0-chambre-couloir-gauche"
        },
        {
          "yaw": 0.3179169670666706,
          "pitch": 0.015483657108454452,
          "rotation": 0,
          "target": "4-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle-de-bain-chambre-salon-haut",
      "name": "salle de bain chambre salon haut",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1405359942925237,
          "pitch": 0.28770383892615214,
          "rotation": 0,
          "target": "3-chambre-salon-haut"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-salle-de-bain-marie",
      "name": "salle de bain marié",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.666478936241914,
          "pitch": 0.16149647263666012,
          "rotation": 0,
          "target": "2-chambre-mariee"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-salon",
      "name": "salon",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06963876371642108,
          "pitch": 0.21686095497576474,
          "rotation": 0,
          "target": "3-chambre-salon-haut"
        },
        {
          "yaw": -2.0686298557336134,
          "pitch": 0.1530615904251409,
          "rotation": 0,
          "target": "4-entree"
        },
        {
          "yaw": -1.2096695040748457,
          "pitch": 0.10123930106949963,
          "rotation": 0,
          "target": "1-chambre-fond-couloir"
        },
        {
          "yaw": -1.3865527286086188,
          "pitch": 0.13148999650568172,
          "rotation": 0,
          "target": "0-chambre-couloir-gauche"
        },
        {
          "yaw": 1.4403468537310102,
          "pitch": 0.16521066218287395,
          "rotation": 0,
          "target": "9-vestibule-mariee"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-vestibule-mariee",
      "name": "vestibule mariée",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4043041148216773,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.048175649052799585,
          "pitch": 0.18458310547737256,
          "rotation": 0,
          "target": "8-salon"
        },
        {
          "yaw": -3.0353223621452354,
          "pitch": 0.19040332923985304,
          "rotation": 0,
          "target": "2-chambre-mariee"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
