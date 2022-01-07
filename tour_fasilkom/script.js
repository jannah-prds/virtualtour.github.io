(function(){
    var script = {
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "borderSize": 0,
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
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Player",
 "scrollBarWidth": 10,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "minHeight": 20,
 "downloadEnabled": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "id": "panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3CF827AE_3074_2DEB_41A0_FC3080C83C25",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.75,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C2FE6EA_3074_2F6B_41C7_AD91587D551E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.29,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "camera": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3CE507DB_3074_2DA9_41B5_36C9583F9307",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.84,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "media": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "media": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "media": "this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "media": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "media": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "media": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 0)",
   "media": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_camera"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist"
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C4F865E_3074_2EAB_41A1_EAA0C35EEC54",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.3,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_Left R lab 608",
 "id": "panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "class": "AdjacentPanorama",
   "yaw": -179.7,
   "distance": 1,
   "backwardYaw": 1.16
  },
  {
   "panorama": "this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
   "class": "AdjacentPanorama",
   "yaw": -3.26,
   "distance": 1,
   "backwardYaw": 151.54
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_E5EDCB06_F5C3_7BDB_41E2_366467A38A19",
  "this.overlay_E509CA7B_F5DD_1A29_41E2_8180CC0995FB"
 ]
},
{
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C3A968F_3074_2FA9_41B9_BFE8BFECAB1E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.74,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_ 604 (Lab Bahasa)",
 "id": "panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "AdjacentPanorama",
   "yaw": 129.77,
   "distance": 1,
   "backwardYaw": -59.16
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_FAAA1217_F5C3_25F8_41E5_75786A5AC7B1"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C5A0601_3074_2E99_41C5_2334D386DE08",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.84,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_ Left R konsultasi",
 "id": "panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "AdjacentPanorama",
   "yaw": 94.78,
   "distance": 1,
   "backwardYaw": -88.75
  },
  {
   "panorama": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "class": "AdjacentPanorama",
   "yaw": 1.16,
   "distance": 1,
   "backwardYaw": -179.7
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_FA55E2B5_F5C5_6A39_41E5_21661A5D4CEC",
  "this.overlay_FA344F2A_F5C5_1A2B_41ED_88B020F41FE1"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_3CD67808_3074_2297_41C5_5E3E330005C5",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.46,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_605 (Lab Multimedia)",
 "id": "panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "AdjacentPanorama",
   "yaw": -133.46,
   "distance": 1,
   "backwardYaw": -116.25
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_FA9257BE_F5CD_2A2B_41A4_604651E44BB0"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C00C754_3074_2EB8_41C2_FC6DFAA1D567",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.22,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_608 (Lab Komputer)",
 "id": "panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93",
   "class": "AdjacentPanorama",
   "yaw": 151.54,
   "distance": 1,
   "backwardYaw": -3.26
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_E5F1F484_F5DD_2EDF_41E0_E079CD4EBAA9"
 ]
},
{
 "hfov": 360,
 "label": "C_Lt 6_ 602 R jaringan",
 "id": "panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
   "class": "AdjacentPanorama",
   "yaw": -163.71,
   "distance": 1,
   "backwardYaw": 65.17
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_FA748BE4_F5C3_1A5F_41E7_1F78E5501821"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C14571B_3074_2EA9_41C5_43291DAAE4DC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -50.23,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C430630_3074_2EF7_41C1_DFEC3B128C44",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.25,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C0FD781_3074_2D99_41B6_4214FCE7F0B9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.54,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_3C20A6BD_3074_2FE9_419C_D600C8E45696",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.83,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 6_Front",
 "id": "panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C",
   "class": "AdjacentPanorama",
   "yaw": 65.17,
   "distance": 1,
   "backwardYaw": -163.71
  },
  {
   "panorama": "this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2",
   "class": "AdjacentPanorama",
   "yaw": -59.16,
   "distance": 1,
   "backwardYaw": 129.77
  },
  {
   "panorama": "this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E",
   "class": "AdjacentPanorama",
   "yaw": -88.75,
   "distance": 1,
   "backwardYaw": 94.78
  },
  {
   "panorama": "this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327",
   "class": "AdjacentPanorama",
   "yaw": -116.25,
   "distance": 1,
   "backwardYaw": -133.46
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_t.jpg",
 "hfovMax": 130,
 "hfovMin": "135%",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_F831F3B1_F5C5_EA39_41D7_82015C364CDD",
  "this.overlay_FA041055_F5CD_E678_41EA_DAC5503907B2",
  "this.overlay_FADD2AC8_F5CF_1A57_4166_A23604E413FE",
  "this.overlay_FAF4389A_F5C3_26EB_41D8_A8E266978CBB"
 ]
},
{
 "paddingBottom": 0,
 "toolTipOpacity": 0.5,
 "id": "MainViewer",
 "left": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "shadow": false,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minHeight": 50,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "minWidth": 100,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "borderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "borderSize": 0,
 "right": "0%",
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "12.832%",
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--- MENU"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "borderSize": 0,
 "width": 115.05,
 "right": "0%",
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 641,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
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
 "borderSize": 0,
 "width": 573,
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": 25,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 116,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--STICKER"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--FLOORPLAN"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "borderSize": 0,
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "verticalAlign": "top",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--CONTACT"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.54,
   "yaw": -179.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E, this.camera_3CE507DB_3074_2DA9_41B5_36C9583F9307); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F704FAE3_FAAE_4273_41C4_3B827F0E2B36",
   "pitch": -16.99,
   "yaw": -179.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.54
  }
 ],
 "id": "overlay_E5EDCB06_F5C3_7BDB_41E2_366467A38A19",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.05,
   "yaw": -3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B, this.camera_3CD67808_3074_2297_41C5_5E3E330005C5); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F704AAE3_FAAE_4273_41E2_E0823D589675",
   "pitch": -5.86,
   "yaw": -3.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.05
  }
 ],
 "id": "overlay_E509CA7B_F5DD_1A29_41E2_8180CC0995FB",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "borderSize": 0,
 "width": 49,
 "maxHeight": 37,
 "horizontalAlign": "center",
 "shadow": false,
 "right": 30,
 "class": "IconButton",
 "minHeight": 1,
 "bottom": 8,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 37,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.83,
   "yaw": 129.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_3C5A0601_3074_2E99_41C5_2334D386DE08); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7056ADD_FAAE_4256_41C9_A87470C5592A",
   "pitch": -6.07,
   "yaw": 129.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.83
  }
 ],
 "id": "overlay_FAAA1217_F5C3_25F8_41E5_75786A5AC7B1",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.26,
   "yaw": 94.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_3C430630_3074_2EF7_41C1_DFEC3B128C44); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7052ADE_FAAE_4252_41DE_36A9BEB26D75",
   "pitch": -8.04,
   "yaw": 94.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.26
  }
 ],
 "id": "overlay_FA55E2B5_F5C5_6A39_41E5_21661A5D4CEC",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.13,
   "yaw": 1.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -15.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93, this.camera_3C4F865E_3074_2EAB_41A1_EAA0C35EEC54); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F705FAE0_FAAE_426D_41EA_3F7191A26367",
   "pitch": -15.28,
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.13
  }
 ],
 "id": "overlay_FA344F2A_F5C5_1A2B_41ED_88B020F41FE1",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.79,
   "yaw": -133.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_3CF827AE_3074_2DEB_41A0_FC3080C83C25); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7058AE1_FAAE_426F_41BB_30A523EE4466",
   "pitch": -8.25,
   "yaw": -133.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.79
  }
 ],
 "id": "overlay_FA9257BE_F5CD_2A2B_41A4_604651E44BB0",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.08,
   "yaw": 151.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93, this.camera_3C3A968F_3074_2FA9_41B9_BFE8BFECAB1E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7045AE2_FAAE_426D_41CC_9C21F7C3F1BD",
   "pitch": -3.54,
   "yaw": 151.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.08
  }
 ],
 "id": "overlay_E5F1F484_F5DD_2EDF_41E0_E079CD4EBAA9",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.83,
   "yaw": -163.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07, this.camera_3C20A6BD_3074_2FE9_419C_D600C8E45696); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F706CADC_FAAE_4256_41E1_53957172B05F",
   "pitch": -5.89,
   "yaw": -163.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.83
  }
 ],
 "id": "overlay_FA748BE4_F5C3_1A5F_41E7_1F78E5501821",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.03,
   "yaw": 65.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C, this.camera_3C2FE6EA_3074_2F6B_41C7_AD91587D551E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7075ACD_FAAE_42B7_41E5_1A657FFFB6B9",
   "pitch": -2.73,
   "yaw": 65.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.03
  }
 ],
 "id": "overlay_F831F3B1_F5C5_EA39_41D7_82015C364CDD",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.02,
   "yaw": -59.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2, this.camera_3C14571B_3074_2EA9_41C5_43291DAAE4DC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F707CAD3_FAAE_4253_41DC_B9E22861679E",
   "pitch": -4.08,
   "yaw": -59.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.02
  }
 ],
 "id": "overlay_FA041055_F5CD_E678_41EA_DAC5503907B2",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.02,
   "yaw": -116.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327, this.camera_3C0FD781_3074_2D99_41B6_4214FCE7F0B9); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7067AD5_FAAE_4257_41E7_8FE0E0DBB106",
   "pitch": -4,
   "yaw": -116.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.02
  }
 ],
 "id": "overlay_FADD2AC8_F5CF_1A57_4166_A23604E413FE",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.26,
   "yaw": -88.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E, this.camera_3C00C754_3074_2EB8_41C2_FC6DFAA1D567); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F7063AD6_FAAE_4255_41E0_D9A7F5ECDB44",
   "pitch": -8.49,
   "yaw": -88.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.26
  }
 ],
 "id": "overlay_FAF4389A_F5C3_26EB_41D8_A8E266978CBB",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "borderSize": 0,
 "maxHeight": 2,
 "horizontalAlign": "center",
 "shadow": false,
 "right": "0%",
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "bottom": 53,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 2,
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "paddingBottom": 0
},
{
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "borderSize": 0,
 "width": 1199,
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 30,
 "height": 51,
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "gap": 3,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "borderSize": 0,
 "width": 110,
 "right": "0%",
 "horizontalAlign": "center",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 110,
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
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
 "scrollBarMargin": 2,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "borderSize": 0,
 "width": "91.304%",
 "right": "0%",
 "horizontalAlign": "center",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "85.959%",
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "gap": 3,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 0,
 "borderSize": 0,
 "width": 188,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "red block"
 },
 "height": 44,
 "backgroundColorRatios": [
  0.01
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "borderSize": 0,
 "width": 286,
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": 48,
 "shadowBlurRadius": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "shadowOpacity": 0.5,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "white block"
 },
 "height": 68,
 "backgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "textShadowHorizontalLength": 0,
 "fontColor": "#FFFFFF",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 12,
 "borderSize": 0,
 "width": 240,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "shadow": false,
 "textShadowColor": "#000000",
 "class": "Label",
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "top": 2,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 44,
 "textShadowBlurRadius": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "fontStyle": "normal",
 "propagateClick": false,
 "fontSize": 29,
 "paddingTop": 0,
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "textDecoration": "none",
 "visible": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "paddingBottom": 0
},
{
 "fontColor": "#000000",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "borderSize": 0,
 "width": 336,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "shadow": false,
 "class": "Label",
 "text": "DOLOR SIT",
 "minHeight": 1,
 "top": 40,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 69,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "fontStyle": "italic",
 "propagateClick": false,
 "fontSize": 61,
 "paddingTop": 0,
 "textDecoration": "none",
 "visible": false,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "bold",
 "paddingBottom": 0
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "borderSize": 0,
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "5%",
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "borderSize": 0,
 "right": "10%",
 "horizontalAlign": "right",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "borderSize": 0,
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "7%",
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "borderSize": 0,
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "7%",
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 4,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "borderSize": 0,
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "7%",
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 4,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "borderSize": 0,
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "7%",
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 6,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "borderSize": 0,
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "shadowSpread": 1,
 "top": "5%",
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "borderSize": 0,
 "right": "10%",
 "horizontalAlign": "right",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "vertical"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F704FAE3_FAAE_4273_41C4_3B827F0E2B36"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8CECAC_F5BD_FE2F_41E9_126F93384C93_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F704AAE3_FAAE_4273_41E2_E0823D589675"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE932AF3_F5BD_7A39_41EC_88618C0A46A2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7056ADD_FAAE_4256_41C9_A87470C5592A"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7052ADE_FAAE_4252_41DE_36A9BEB26D75"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8DD841_F5BD_6658_41D2_AA84A9141D6E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F705FAE0_FAAE_426D_41EA_3F7191A26367"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8B5510_F5BD_2FF7_41AD_0B8B35D93327_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7058AE1_FAAE_426F_41BB_30A523EE4466"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8E91B8_F5BD_2628_41EB_FE029673375B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7045AE2_FAAE_426D_41CC_9C21F7C3F1BD"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE527D00_F5BD_3FD7_41C4_4F2116423F1C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F706CADC_FAAE_4256_41E1_53957172B05F"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7075ACD_FAAE_42B7_41E5_1A657FFFB6B9"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F707CAD3_FAAE_4253_41DC_B9E22861679E"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7067AD5_FAAE_4257_41E7_8FE0E0DBB106"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8B1F0D_F5BD_1BE8_41CF_7EAF4E09BC07_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 720
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_F7063AD6_FAAE_4255_41E0_D9A7F5ECDB44"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "borderSize": 0,
 "width": 120,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "minHeight": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 40,
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "label": "BERANDA",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.openLink('https://jannah-prds.github.io/virtualtour.github.io/', '_blank')",
 "data": {
  "name": "Button house info"
 },
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 18,
 "cursor": "hand",
 "paddingBottom": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundOpacity": 1,
 "iconWidth": 0
},
{
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "borderSize": 0,
 "width": 60,
 "maxHeight": 60,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 60,
 "minWidth": 1,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "borderSize": 0,
 "width": 58,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 58,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "borderSize": 0,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "borderSize": 0,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 0,
 "overflow": "visible",
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 20,
 "layout": "vertical"
},
{
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "borderSize": 0,
 "width": "25%",
 "maxHeight": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 40,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "75%",
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "borderSize": 0,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "height": 80,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "itemMaxWidth": 1000,
 "paddingBottom": 70,
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemOpacity": 1,
 "width": "100%",
 "itemThumbnailShadow": false,
 "horizontalAlign": "center",
 "shadow": false,
 "itemLabelFontFamily": "Oswald Regular",
 "itemHorizontalAlign": "center",
 "minHeight": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemLabelPosition": "bottom",
 "paddingRight": 70,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingLeft": 3,
 "backgroundOpacity": 0,
 "height": "100%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "propagateClick": false,
 "itemMinHeight": 50,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemVerticalAlign": "top",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontSize": 16,
 "rollOverItemLabelFontColor": "#C1280E",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontColor": "#C1280E",
 "itemHeight": 160,
 "class": "ThumbnailGrid",
 "scrollBarWidth": 10,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailOpacity": 1,
 "itemLabelFontColor": "#666666",
 "itemMinWidth": 50,
 "paddingLeft": 70,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "scrollBarColor": "#FF361B",
 "gap": 26,
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontSize": 16,
 "itemLabelGap": 7,
 "paddingTop": 30,
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "ThumbnailList5161"
 },
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "selectedItemLabelFontWeight": "bold",
 "itemMode": "normal"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "borderSize": 0,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "height": 80,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "insetBorder": false,
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "borderSize": 0,
 "width": "100%",
 "shadow": false,
 "class": "WebFrame",
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "paddingRight": 0,
 "scrollEnabled": true,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame52781"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "borderSize": 0,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "height": 80,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "id": "MapViewer",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "shadow": false,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "minWidth": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "borderSize": 0,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "height": 80,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "borderSize": 0,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "visible",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-photoalbum"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "borderSize": 0,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "borderSize": 0,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 0,
 "overflow": "visible",
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 20,
 "layout": "vertical"
},
{
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "borderSize": 0,
 "width": "25%",
 "maxHeight": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 40,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "75%",
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "right": 0,
 "playbackBarRight": 0,
 "shadow": false,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "bottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer info 1"
 },
 "progressBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "scrollBarMargin": 2,
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "borderSize": 0,
 "width": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "100%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container arrows"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "borderSize": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 0,
 "overflow": "scroll",
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "height": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "borderSize": 0,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 30,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "borderSize": 0,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.43vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "borderSize": 0,
 "width": "77.115%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "height": 80,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 17,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0
},
{
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "borderSize": 0,
 "width": 50,
 "maxHeight": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "right": 15,
 "class": "IconButton",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 50,
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "mode": "push",
 "verticalAlign": "top",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.43vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "borderSize": 0,
 "width": "77.115%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "height": 80,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 17,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0
},
{
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "borderSize": 0,
 "width": 70,
 "maxHeight": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "right": 15,
 "class": "IconButton",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 70,
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "mode": "push",
 "verticalAlign": "top",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.43vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "borderSize": 0,
 "width": "77.115%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "height": 80,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 17,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0
},
{
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "borderSize": 0,
 "width": 70,
 "maxHeight": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "right": 15,
 "class": "IconButton",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 70,
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "mode": "push",
 "verticalAlign": "top",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.43vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "borderSize": 0,
 "width": "77.115%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "height": 80,
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 17,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0
},
{
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "borderSize": 0,
 "width": 50,
 "maxHeight": 50,
 "horizontalAlign": "right",
 "shadow": false,
 "right": 15,
 "class": "IconButton",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": 50,
 "minWidth": 40,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "mode": "push",
 "verticalAlign": "top",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "pressedRollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed_rollover.jpg",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "right": 0,
 "playbackBarRight": 0,
 "shadow": false,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "transitionDuration": 500,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "bottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum"
 },
 "progressBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "scrollBarMargin": 2,
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "borderSize": 0,
 "width": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "100%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container arrows"
 },
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "borderSize": 0,
 "width": "100%",
 "maxHeight": 894,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "top": "0%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "100%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image5820"
 },
 "paddingBottom": 0
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "borderSize": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 0,
 "overflow": "scroll",
 "paddingTop": 20,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "height": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "borderSize": 0,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 25,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "-Container text"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 30,
 "layout": "vertical"
},
{
 "backgroundColorDirection": "vertical",
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "borderSize": 0,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "horizontal"
},
{
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "borderSize": 0,
 "width": "8%",
 "maxHeight": 130,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 70,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "8%",
 "minWidth": 70,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "data": {
  "name": "IconButton left arrow"
 },
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "borderSize": 0,
 "width": "84%",
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "30%",
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "borderSize": 0,
 "width": "8%",
 "maxHeight": 130,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 70,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "8%",
 "minWidth": 70,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "data": {
  "name": "IconButton right arrow"
 },
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.57vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.57vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "borderSize": 0,
 "width": "100%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#FF361B",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingBottom": 20
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "borderSize": 0,
 "width": 207,
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "gap": 5,
 "propagateClick": false,
 "fontSize": "3.7vh",
 "paddingTop": 0,
 "data": {
  "name": "Button31015"
 },
 "height": 59,
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverBackgroundOpacity": 1,
 "cursor": "hand",
 "paddingBottom": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32
},
{
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "borderSize": 0,
 "width": "10%",
 "maxHeight": 150,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 70,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "10%",
 "minWidth": 70,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "data": {
  "name": "IconButton left arrow"
 },
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "borderSize": 0,
 "width": "80%",
 "horizontalAlign": "left",
 "shadow": false,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "30%",
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "overflow": "scroll",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute"
},
{
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "borderSize": 0,
 "width": "10%",
 "maxHeight": 150,
 "horizontalAlign": "center",
 "shadow": false,
 "class": "IconButton",
 "minHeight": 70,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "10%",
 "minWidth": 70,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "data": {
  "name": "IconButton right arrow"
 },
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "pressedRollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed_rollover.png",
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.8vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.57vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.57vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "borderSize": 0,
 "width": "100%",
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "height": "62.894%",
 "minWidth": 1,
 "borderRadius": 0,
 "scrollBarColor": "#FF361B",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingBottom": 3
},
{
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "borderSize": 0,
 "width": "70%",
 "maxHeight": 120,
 "horizontalAlign": "left",
 "shadow": false,
 "class": "Image",
 "minHeight": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "height": "30%",
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image logo"
 },
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "borderSize": 0,
 "width": 140,
 "fontFamily": "Oswald Regular",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "backgroundColor": [
  "#FF361B"
 ],
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "label": "CONTACT",
 "fontStyle": "normal",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "data": {
  "name": "Button Contact"
 },
 "fontSize": "2.83vh",
 "height": 59,
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverBackgroundOpacity": 1,
 "cursor": "hand",
 "paddingBottom": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32
}],
 "layout": "absolute"
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
