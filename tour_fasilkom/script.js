(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "paddingBottom": 0,
 "shadow": false,
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F05B8106_E145_51D1_41D8_E3292C0C58B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F0787177_E145_503F_41C3_E64ED0BDB533",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_Left R lab 608",
 "id": "panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "backwardYaw": 1.16,
   "class": "AdjacentPanorama",
   "yaw": -179.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "backwardYaw": 151.54,
   "class": "AdjacentPanorama",
   "yaw": -3.26,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E5EDCB06_F5C3_7BDB_41E2_366467A38A19",
  "this.overlay_E509CA7B_F5DD_1A29_41E2_8180CC0995FB",
  "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_605 (Lab Multimedia)",
 "id": "panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "backwardYaw": -116.25,
   "class": "AdjacentPanorama",
   "yaw": -133.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FA9257BE_F5CD_2A2B_41A4_604651E44BB0",
  "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_tcap0",
  "this.overlay_A7816C09_A972_5F68_41E4_D8770B8A0006"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F069B132_E145_5031_41C8_479F723AF448",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F00831B8_E145_5031_41D3_793D333854AF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F01E71F5_E145_5033_41E3_EF46AD1FCDCC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F0C262EE_E145_5051_41E6_315C56AC56AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F02E3232_E145_5031_41E8_5F2052025993",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_608 (Lab Komputer)",
 "id": "panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "backwardYaw": -3.26,
   "class": "AdjacentPanorama",
   "yaw": 151.54,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E5F1F484_F5DD_2EDF_41E0_E079CD4EBAA9",
  "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_tcap0"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F0CC32B1_E145_5033_41EA_01DFE17EB76C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_ Left R konsultasi",
 "id": "panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "backwardYaw": -179.7,
   "class": "AdjacentPanorama",
   "yaw": 1.16,
   "distance": 1
  },
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "backwardYaw": -88.75,
   "class": "AdjacentPanorama",
   "yaw": 94.78,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FA55E2B5_F5C5_6A39_41E5_21661A5D4CEC",
  "this.overlay_FA344F2A_F5C5_1A2B_41ED_88B020F41FE1",
  "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_tcap0",
  "this.overlay_A6B8AA89_A976_3B6B_41DD_906851DDDAF9"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_ 602 R jaringan",
 "id": "panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "backwardYaw": 65.17,
   "class": "AdjacentPanorama",
   "yaw": -163.31,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FA748BE4_F5C3_1A5F_41E7_1F78E5501821",
  "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_tcap0",
  "this.overlay_A67703B5_A972_48B8_41E0_4D9110B601E1"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F0D2732B_E145_51D7_41D4_163AC8DC3086",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_t.jpg",
 "class": "Panorama",
 "label": "C_Lt 6_Front",
 "id": "panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "backwardYaw": -163.31,
   "class": "AdjacentPanorama",
   "yaw": 65.17,
   "distance": 1
  },
  {
   "panorama": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "backwardYaw": 94.78,
   "class": "AdjacentPanorama",
   "yaw": -88.75,
   "distance": 1
  },
  {
   "panorama": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "backwardYaw": -133.72,
   "class": "AdjacentPanorama",
   "yaw": -116.25,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F831F3B1_F5C5_EA39_41D7_82015C364CDD",
  "this.overlay_FADD2AC8_F5CF_1A57_4166_A23604E413FE",
  "this.overlay_FAF4389A_F5C3_26EB_41D8_A8E266978CBB",
  "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0",
  "this.overlay_A47F402C_A952_47A8_41DA_88936A8AC6ED",
  "this.overlay_A713DB1A_A952_5968_41E1_54F41B2FF7AA"
 ],
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F03C726E_E145_5051_41E1_0D7FE66DB7A0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "media": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "items": [
  {
   "camera": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "media": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "media": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "media": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "media": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "media": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 0)",
   "media": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 50,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 10,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minWidth": 100,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "0%",
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "height": "12.832%",
 "data": {
  "name": "--- MENU"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "0%",
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "top": "0%",
 "class": "Container",
 "height": 641,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "backgroundOpacity": 0,
 "width": 573,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "top": 25,
 "class": "Container",
 "height": 116,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--STICKER"
 }
},
{
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--CONTACT"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F704FAE3_FAAE_4273_41C4_3B827F0E2B36",
   "pitch": -16.99,
   "yaw": -179.7,
   "hfov": 6.54,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E, this.camera_F00831B8_E145_5031_41D3_793D333854AF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5EDCB06_F5C3_7BDB_41E2_366467A38A19",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99,
   "hfov": 6.54
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F704AAE3_FAAE_4273_41E2_E0823D589675",
   "pitch": -5.86,
   "yaw": -3.26,
   "hfov": 8.05,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B, this.camera_F01E71F5_E145_5033_41E3_EF46AD1FCDCC); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E509CA7B_F5DD_1A29_41E2_8180CC0995FB",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.86,
   "hfov": 8.05
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D3ADE239_C33F_169E_41C0_BF241717698A",
   "pitch": -6.43,
   "yaw": -133.72,
   "hfov": 10.44,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_F0787177_E145_503F_41C3_E64ED0BDB533); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FA9257BE_F5CD_2A2B_41A4_604651E44BB0",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.43,
   "hfov": 10.44
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0_HS_1_0.png",
      "width": 273,
      "class": "ImageResourceLevel",
      "height": 251
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.07,
   "yaw": -131.26,
   "hfov": 13.33,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A7816C09_A972_5F68_41E4_D8770B8A0006",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0_HS_1_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.07,
   "hfov": 13.33
  }
 ],
 "rollOverDisplay": false
},
{
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "width": 49,
 "right": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 37,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "class": "IconButton",
 "height": 37,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "bottom": 8,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "height": 58,
 "borderSize": 0,
 "mode": "push",
 "paddingLeft": 0,
 "paddingRight": 0,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F7045AE2_FAAE_426D_41CC_9C21F7C3F1BD",
   "pitch": -3.54,
   "yaw": 151.54,
   "hfov": 8.08,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93, this.camera_F0D2732B_E145_51D7_41D4_163AC8DC3086); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5F1F484_F5DD_2EDF_41E0_E079CD4EBAA9",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.54,
   "hfov": 8.08
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F7052ADE_FAAE_4252_41DE_36A9BEB26D75",
   "pitch": -8.04,
   "yaw": 94.78,
   "hfov": 5.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_F069B132_E145_5031_41C8_479F723AF448); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FA55E2B5_F5C5_6A39_41E5_21661A5D4CEC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.04,
   "hfov": 5.26
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F705FAE0_FAAE_426D_41EA_3F7191A26367",
   "pitch": -15.28,
   "yaw": 1.16,
   "hfov": 5.13,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93, this.camera_F05B8106_E145_51D1_41D8_E3292C0C58B0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FA344F2A_F5C5_1A2B_41ED_88B020F41FE1",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.28,
   "hfov": 5.13
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0_HS_2_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.22,
   "yaw": 2.27,
   "hfov": 10.95,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A6B8AA89_A976_3B6B_41DD_906851DDDAF9",
 "data": {
  "label": "lab Jaringan"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0_HS_2_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.22,
   "hfov": 10.95
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D3931232_C33F_1692_41E5_E24AF37A2BF2",
   "pitch": -4.94,
   "yaw": -163.31,
   "hfov": 8.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_F0C262EE_E145_5051_41E6_315C56AC56AB); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FA748BE4_F5C3_1A5F_41E7_1F78E5501821",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94,
   "hfov": 8.24
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0_HS_1_0.png",
      "width": 208,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.82,
   "yaw": -162.66,
   "hfov": 10.3,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A67703B5_A972_48B8_41E0_4D9110B601E1",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0_HS_1_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.82,
   "hfov": 10.3
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F7075ACD_FAAE_42B7_41E5_1A657FFFB6B9",
   "pitch": -2.73,
   "yaw": 65.17,
   "hfov": 5.03,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C, this.camera_F02E3232_E145_5031_41E8_5F2052025993); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F831F3B1_F5C5_EA39_41D7_82015C364CDD",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73,
   "hfov": 5.03
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F7067AD5_FAAE_4257_41E7_8FE0E0DBB106",
   "pitch": -4,
   "yaw": -116.25,
   "hfov": 5.02,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327, this.camera_F0CC32B1_E145_5033_41EA_01DFE17EB76C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FADD2AC8_F5CF_1A57_4166_A23604E413FE",
 "data": {
  "label": "Circle Door 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4,
   "hfov": 5.02
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F7063AD6_FAAE_4255_41E0_D9A7F5ECDB44",
   "pitch": -8.49,
   "yaw": -88.75,
   "hfov": 5.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E, this.camera_F03C726E_E145_5051_41E1_0D7FE66DB7A0); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FAF4389A_F5C3_26EB_41D8_A8E266978CBB",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.49,
   "hfov": 5.26
  }
 ],
 "rollOverDisplay": false
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_tcap0.png",
    "width": 1324,
    "class": "ImageResourceLevel",
    "height": 1324
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0_HS_4_0.png",
      "width": 339,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.37,
   "yaw": -111.94,
   "hfov": 16.7,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A47F402C_A952_47A8_41DA_88936A8AC6ED",
 "data": {
  "label": "Lab Multimedia"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0_HS_4_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.37,
   "hfov": 16.7
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0_HS_5_0.png",
      "width": 248,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.41,
   "yaw": 62.86,
   "hfov": 12.26,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_A713DB1A_A952_5968_41E1_54F41B2FF7AA",
 "data": {
  "label": "Lab Komputer"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0_HS_5_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.41,
   "hfov": 12.26
  }
 ],
 "rollOverDisplay": false
},
{
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 2,
 "class": "Image",
 "height": 2,
 "borderSize": 0,
 "bottom": 53,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 }
},
{
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 1199,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "class": "Container",
 "height": 51,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 3,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 }
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "0%",
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "visible",
 "top": "0%",
 "class": "Container",
 "height": 110,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "button menu sup"
 }
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "layout": "vertical",
 "right": "0%",
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 3,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "height": "85.959%",
 "data": {
  "name": "-button set"
 }
},
{
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 188,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0.01
 ],
 "top": 0,
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 44,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "red block"
 }
},
{
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 286,
 "layout": "absolute",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": true,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 48,
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "height": 68,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "visible": false,
 "shadowBlurRadius": 10,
 "data": {
  "name": "white block"
 },
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "textShadowColor": "#000000",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 12,
 "backgroundOpacity": 0,
 "width": 240,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "shadow": false,
 "text": "LOREM IPSUM",
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 2,
 "class": "Label",
 "height": 44,
 "borderSize": 0,
 "fontSize": 29,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowOpacity": 1,
 "textShadowHorizontalLength": 0,
 "visible": false,
 "horizontalAlign": "left",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 336,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "text": "DOLOR SIT",
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 40,
 "class": "Label",
 "height": 69,
 "borderSize": 0,
 "fontSize": 61,
 "fontColor": "#000000",
 "fontStyle": "italic",
 "paddingLeft": 0,
 "paddingRight": 0,
 "visible": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "fontWeight": "bold"
},
{
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "10%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "bottom": "5%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "top": "5%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "minWidth": 1,
 "data": {
  "name": "Container X global"
 }
},
{
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 4,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 4,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "15%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 6,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "10%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "bottom": "5%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "right": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "top": "5%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "minWidth": 1,
 "data": {
  "name": "Container X global"
 }
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F704FAE3_FAAE_4273_41C4_3B827F0E2B36",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F704AAE3_FAAE_4273_41E2_E0823D589675",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D3ADE239_C33F_169E_41C0_BF241717698A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F7045AE2_FAAE_426D_41CC_9C21F7C3F1BD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F7052ADE_FAAE_4252_41DE_36A9BEB26D75",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F705FAE0_FAAE_426D_41EA_3F7191A26367",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D3931232_C33F_1692_41E5_E24AF37A2BF2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F7075ACD_FAAE_42B7_41E5_1A657FFFB6B9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F7067AD5_FAAE_4257_41E7_8FE0E0DBB106",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F7063AD6_FAAE_4255_41E0_D9A7F5ECDB44",
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "fontFamily": "Baloo 2 ExtraBold",
 "rollOverShadow": false,
 "data": {
  "name": "Button house info"
 },
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 1,
 "width": 120,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "layout": "horizontal",
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 0,
 "pressedBackgroundColor": [
  "#FFFFFF"
 ],
 "class": "Button",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 18,
 "label": "Beranda",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.openLink('http://vtuigm.great-site.net/info.php?hasil=1b14097a5f71d45644bd8a3545e10bfd', '_blank')",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "fontColor": "#000033",
 "minWidth": 1,
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 60,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "height": 60,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "image button menu"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "height": 58,
 "borderSize": 0,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "paddingLeft": 0,
 "paddingRight": 0,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "height": 58,
 "borderSize": 0,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "paddingLeft": 0,
 "paddingRight": 0,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "cursor": "hand",
 "data": {
  "name": "IconButton FB"
 }
},
{
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "absolute",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 }
},
{
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 20,
 "shadow": false,
 "layout": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "contentOpaque": false,
 "minWidth": 460,
 "horizontalAlign": "left",
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 }
},
{
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "paddingLeft": 0,
 "height": "75%",
 "pressedRollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed_rollover.jpg",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "backgroundOpacity": 1,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "minWidth": 1,
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "scrollBarWidth": 10,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontSize": 16,
 "borderRadius": 5,
 "minHeight": 1,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#C1280E",
 "itemPaddingBottom": 3,
 "itemBackgroundColorDirection": "vertical",
 "scrollBarColor": "#FF361B",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontStyle": "normal",
 "paddingRight": 70,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Oswald Regular",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "height": "100%",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 30,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#C1280E",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "class": "ThumbnailGrid",
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "selectedItemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "backgroundOpacity": 1,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "insetBorder": false,
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "shadow": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollEnabled": true,
 "paddingRight": 0,
 "minWidth": 1,
 "data": {
  "name": "WebFrame52781"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "backgroundOpacity": 1,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "backgroundOpacity": 1,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 80,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "absolute",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-photoalbum"
 }
},
{
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "absolute",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 }
},
{
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 20,
 "shadow": false,
 "layout": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "contentOpaque": false,
 "minWidth": 460,
 "horizontalAlign": "left",
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 }
},
{
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "paddingLeft": 0,
 "height": "75%",
 "pressedRollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed_rollover.jpg",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "data": {
  "name": "Container arrows"
 }
},
{
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 60,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 520,
 "paddingBottom": 30,
 "shadow": false,
 "layout": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 }
},
{
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "backgroundOpacity": 0.3,
 "width": 370,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": 80,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.26vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minWidth": 1,
 "scrollBarOpacity": 0.5
},
{
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "width": 50,
 "right": 15,
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "maxHeight": 50,
 "top": 15,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "class": "IconButton",
 "height": 50,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed_rollover.jpg",
 "horizontalAlign": "right",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": 80,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.26vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minWidth": 1,
 "scrollBarOpacity": 0.5
},
{
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "width": 70,
 "right": 15,
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "maxHeight": 50,
 "top": 15,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "class": "IconButton",
 "height": 70,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed_rollover.jpg",
 "horizontalAlign": "right",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": 80,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.26vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minWidth": 1,
 "scrollBarOpacity": 0.5
},
{
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "backgroundOpacity": 0,
 "width": 70,
 "right": 15,
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "maxHeight": 50,
 "top": 15,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "class": "IconButton",
 "height": 70,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed_rollover.jpg",
 "horizontalAlign": "right",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": 80,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.26vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minWidth": 1,
 "scrollBarOpacity": 0.5
},
{
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "backgroundOpacity": 0,
 "width": 50,
 "right": 15,
 "borderRadius": 0,
 "minHeight": 40,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "maxHeight": 50,
 "top": 15,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "class": "IconButton",
 "height": 50,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed_rollover.jpg",
 "horizontalAlign": "right",
 "paddingTop": 0,
 "minWidth": 40,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minWidth": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "top": "0%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "data": {
  "name": "Container arrows"
 }
},
{
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 894,
 "top": "0%",
 "class": "Image",
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image5820"
 }
},
{
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 50,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 520,
 "paddingBottom": 30,
 "shadow": false,
 "layout": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 25,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "minWidth": 100,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "-Container text"
 }
},
{
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "backgroundOpacity": 0.3,
 "width": 370,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "backgroundOpacity": 0,
 "width": "8%",
 "borderRadius": 0,
 "minHeight": 70,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 130,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "paddingLeft": 0,
 "height": "8%",
 "pressedRollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 70,
 "cursor": "hand",
 "data": {
  "name": "IconButton left arrow"
 }
},
{
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "backgroundOpacity": 0,
 "width": "84%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "30%",
 "data": {
  "name": "Container separator"
 }
},
{
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "backgroundOpacity": 0,
 "width": "8%",
 "borderRadius": 0,
 "minHeight": 70,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 130,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "paddingLeft": 0,
 "height": "8%",
 "pressedRollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 70,
 "cursor": "hand",
 "data": {
  "name": "IconButton right arrow"
 }
},
{
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 20,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#FF361B",
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:7.72vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.49vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.23vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.23vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "minWidth": 1,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "Button31015"
 },
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundOpacity": 1,
 "width": 207,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "layout": "horizontal",
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 59,
 "fontSize": "3.7vh",
 "label": "lorem ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "minHeight": 70,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "paddingLeft": 0,
 "height": "10%",
 "pressedRollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 70,
 "cursor": "hand",
 "data": {
  "name": "IconButton left arrow"
 }
},
{
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "backgroundOpacity": 0,
 "width": "80%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "30%",
 "data": {
  "name": "Container separator"
 }
},
{
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "minHeight": 70,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "class": "IconButton",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "paddingLeft": 0,
 "height": "10%",
 "pressedRollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed_rollover.png",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minWidth": 70,
 "cursor": "hand",
 "data": {
  "name": "IconButton right arrow"
 }
},
{
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 3,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#FF361B",
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.46vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.49vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.23vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.23vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "minWidth": 1,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "height": "62.894%"
},
{
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "backgroundOpacity": 0,
 "width": "70%",
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "maxHeight": 120,
 "class": "Image",
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "30%",
 "horizontalAlign": "left",
 "data": {
  "name": "Image logo"
 },
 "paddingTop": 0,
 "minWidth": 1,
 "scaleMode": "fit_inside"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald Regular",
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "backgroundOpacity": 1,
 "width": 140,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "layout": "horizontal",
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "height": 59,
 "fontSize": "2.83vh",
 "label": "CONTACT",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "paddingLeft": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
}],
 "class": "Player",
 "layout": "absolute",
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "minWidth": 20,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
