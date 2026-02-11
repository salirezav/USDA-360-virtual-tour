var APP_DATA = {
  "scenes": [
    {
      "id": "0-sheller",
      "name": "Sheller",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.113951136486456,
        "pitch": 0.36059432545447834,
        "fov": 1.4355510137497252
      },
      "linkHotspots": [
        {
          "yaw": 2.570233154060106,
          "pitch": 0.3446296485472775,
          "rotation": 5.497787143782138,
          "target": "1-separator"
        },
        {
          "yaw": -2.4247261221506307,
          "pitch": 0.2847066541929628,
          "rotation": 0.7853981633974483,
          "target": "1-separator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-separator",
      "name": "Separator",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.119289142803673,
        "pitch": 0.28484278023520204,
        "fov": 1.4355510137497252
      },
      "linkHotspots": [
        {
          "yaw": -0.18429673904149269,
          "pitch": 0.02536807649203965,
          "rotation": 0.7853981633974483,
          "target": "0-sheller"
        },
        {
          "yaw": -1.4242113742700386,
          "pitch": 0.09586286060392446,
          "rotation": 5.497787143782138,
          "target": "2-jc--meyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-jc--meyer",
      "name": "JC & Meyer",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.59107800991071,
        "pitch": 0.5696855604703899,
        "fov": 1.4355510137497252
      },
      "linkHotspots": [
        {
          "yaw": 2.661986968329816,
          "pitch": 0.2488178027814527,
          "rotation": 5.497787143782138,
          "target": "0-sheller"
        },
        {
          "yaw": -2.5763863052383726,
          "pitch": 0.20460554754303573,
          "rotation": 6.283185307179586,
          "target": "1-separator"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
