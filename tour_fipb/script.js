(function(){
    var script = {
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "borderSize": 0,
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"
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
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
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
 "id": "camera_2217DA03_306C_2699_41C4_F61EE180CBE5",
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
  "yaw": -155.14,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "media": "this.panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C",
   "camera": "this.panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "hfov": 360,
 "label": "C_Lt 7_Lab",
 "id": "panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010",
   "class": "AdjacentPanorama",
   "yaw": -138.74,
   "distance": 1,
   "backwardYaw": 47.84
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_t.jpg",
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
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_ED6E0A85_F6E0_6D5A_41E7_44861A338E8E"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_camera",
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
 "id": "camera_224CF8CD_306C_23A9_41A4_7A01A1A0A367",
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
  "yaw": 37.7,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_226F783B_306C_22E9_41BD_3A3D22F7805B",
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
  "yaw": 100.92,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "B_Lt 7_Front",
 "id": "panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C",
   "class": "AdjacentPanorama",
   "yaw": -82.45,
   "distance": 1,
   "backwardYaw": 45.78
  },
  {
   "panorama": "this.panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4",
   "class": "AdjacentPanorama",
   "yaw": -8.01,
   "distance": 1,
   "backwardYaw": 117.36
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_t.jpg",
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
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EC3E37C3_F6E0_A2DE_41A0_5DF3B4CDC189",
  "this.overlay_EDA09FD0_F6E0_A2FB_41D8_3F706B120DC0"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_camera",
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
 "label": "B_Lt 5_501 (Studio Lukis DKV)",
 "id": "panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61",
   "class": "AdjacentPanorama",
   "yaw": -142.3,
   "distance": 1,
   "backwardYaw": 51.18
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_t.jpg",
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
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EC64EDAE_F6E0_66A7_41E1_DCED8A152856"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_camera",
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
 "id": "camera_21A5B722_306C_2E9B_41BC_F62929B3623E",
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
  "yaw": -24,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_camera",
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
 "label": "B_Lt 7_P3k",
 "id": "panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6",
   "class": "AdjacentPanorama",
   "yaw": 45.78,
   "distance": 1,
   "backwardYaw": -82.45
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_t.jpg",
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
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_ED97F06A_F6E7_BDAE_41EE_A3C7AB1C3232"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_camera",
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
 "label": "B_Lt 5_Robotik",
 "id": "panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D",
   "class": "AdjacentPanorama",
   "yaw": -124.79,
   "distance": 1,
   "backwardYaw": -4.25
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_t.jpg",
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
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_ECE98EF6_F6E0_A2A6_41E2_35AA94FF1444"
 ]
},
{
 "hfov": 360,
 "label": "B_Lt 5_Front ",
 "id": "panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D",
   "class": "AdjacentPanorama",
   "yaw": 51.18,
   "distance": 1,
   "backwardYaw": -142.3
  },
  {
   "panorama": "this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D",
   "class": "AdjacentPanorama",
   "yaw": -79.08,
   "distance": 1,
   "backwardYaw": 111.88
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_t.jpg",
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
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_ECCBC925_F6E0_6F5A_41D1_7B98420C3327",
  "this.overlay_EC6D5F34_F6E0_E3BB_41E2_1C96D8656457"
 ]
},
{
 "hfov": 360,
 "label": "C_Lt7_R Fotografi",
 "id": "panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010",
   "class": "AdjacentPanorama",
   "yaw": 143.97,
   "distance": 1,
   "backwardYaw": 24.86
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_t.jpg",
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
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EA1D1A3D_F6E1_EDA5_41B0_D2985D3E0222"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_218C0794_306C_2DBF_41C7_55BABA88A280",
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
  "yaw": -62.64,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_camera",
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
 "id": "camera_21B226D7_306C_2FB9_4170_E5D791B589F6",
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
  "yaw": -36.03,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "B_Lt 7_702 (teknik)",
 "id": "panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6",
   "class": "AdjacentPanorama",
   "yaw": 117.36,
   "distance": 1,
   "backwardYaw": -8.01
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_t.jpg",
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
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EC225053_F6E1_9DFD_41A3_D77220B8C2B0"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_camera",
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
 "id": "camera_21B94640_306C_2E97_41AA_976D8AD4B51D",
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
  "yaw": 41.26,
  "pitch": 0
 }
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
 "id": "camera_22319968_306C_2297_41C2_7E9F4D680C4F",
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
  "yaw": -128.82,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "camera_227447F4_306C_2D7F_41BD_6B25A3009771",
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
  "yaw": 55.21,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_camera",
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
 "id": "camera_225C8882_306C_239B_41C3_FB3F85274252",
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
  "yaw": 171.99,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "B_Lt 4_Left",
 "id": "panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6",
   "class": "AdjacentPanorama",
   "yaw": 156,
   "distance": 1,
   "backwardYaw": -41.17
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_t.jpg",
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
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EF46EFE8_F6E7_A2AA_41EC_4F94C1FD93EF"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_camera",
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
 "id": "camera_2242E91B_306C_22A9_4199_63D4227EEDE6",
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
  "yaw": -68.12,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "C_Lt 7_ Front LIft",
 "id": "panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D",
   "class": "AdjacentPanorama",
   "yaw": 47.84,
   "distance": 1,
   "backwardYaw": -138.74
  },
  {
   "panorama": "this.panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C",
   "class": "AdjacentPanorama",
   "yaw": 24.86,
   "distance": 1,
   "backwardYaw": 143.97
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_t.jpg",
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
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EA96BB93_F6E0_637D_41E2_04BDFBB5D3B2",
  "this.overlay_EA82C4F3_F6E0_E6BE_41E7_18F2F4054FEC"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_22F54A98_306C_27B7_41A4_2138EB497FCB",
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
  "yaw": 175.75,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_camera",
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
 "id": "camera_2205CA50_306C_26B7_41C8_2D6A8D9DE893",
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
  "yaw": 138.83,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "B_Lt 5_Left",
 "id": "panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139",
   "class": "AdjacentPanorama",
   "yaw": -4.25,
   "distance": 1,
   "backwardYaw": -124.79
  },
  {
   "panorama": "this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61",
   "class": "AdjacentPanorama",
   "yaw": 111.88,
   "distance": 1,
   "backwardYaw": -79.08
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_t.jpg",
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
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EF04DC22_F6E0_655F_41EE_6AC77183A50E",
  "this.overlay_EC448C69_F6E0_65AA_41D0_C4F6A4FA03D4"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_2187E7C4_306C_2D9F_41B9_32B8A77866AF",
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
  "yaw": -132.16,
  "pitch": 0
 }
},
{
 "hfov": 360,
 "label": "B_Lt 4 _ Front",
 "id": "panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91",
   "class": "AdjacentPanorama",
   "yaw": -41.17,
   "distance": 1,
   "backwardYaw": 156
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_t.jpg",
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
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/r/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_0/l/3/{row}_{column}.jpg",
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
  "this.overlay_EF17C9A6_F6E0_AEA6_41ED_1A21AB63829D"
 ]
},
{
 "class": "PanoramaCamera",
 "id": "camera_222079B3_306C_25F9_41C4_023601E489F5",
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
  "yaw": 97.55,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_camera",
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
 "id": "camera_21985761_306C_2E99_41C4_3D9369DD0B5F",
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
  "yaw": -134.22,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_camera",
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
   "hfov": 6.49,
   "yaw": -138.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010, this.camera_2187E7C4_306C_2D9F_41B9_32B8A77866AF); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CD05D8_306C_2DB7_4187_59CA8641EDA2",
   "pitch": -2.8,
   "yaw": -138.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.49
  }
 ],
 "id": "overlay_ED6E0A85_F6E0_6D5A_41E7_44861A338E8E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.69,
   "yaw": -8.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4, this.camera_218C0794_306C_2DBF_41C7_55BABA88A280); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D325D2_306C_2DBB_41BD_C854B19EDBDF",
   "pitch": -4.07,
   "yaw": -8.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.69
  }
 ],
 "id": "overlay_EC3E37C3_F6E0_A2DE_41A0_5DF3B4CDC189",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.28,
   "yaw": -82.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C, this.camera_21985761_306C_2E99_41C4_3D9369DD0B5F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D3B5D3_306C_2DB9_41C0_2BFBDA7F68A5",
   "pitch": -5.66,
   "yaw": -82.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.28
  }
 ],
 "id": "overlay_EDA09FD0_F6E0_A2FB_41D8_3F706B120DC0",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.84,
   "yaw": -142.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61, this.camera_22319968_306C_2297_41C2_7E9F4D680C4F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D2B5D0_306C_2DB7_4196_E60F264B52CC",
   "pitch": -6.91,
   "yaw": -142.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.84
  }
 ],
 "id": "overlay_EC64EDAE_F6E0_66A7_41E1_DCED8A152856",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.94,
   "yaw": 45.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6, this.camera_222079B3_306C_25F9_41C4_023601E489F5); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CCF5D5_306C_2DB9_41B4_DF72C489987F",
   "pitch": -9.79,
   "yaw": 45.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.94
  }
 ],
 "id": "overlay_ED97F06A_F6E7_BDAE_41EE_A3C7AB1C3232",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.97,
   "yaw": -124.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D, this.camera_22F54A98_306C_27B7_41A4_2138EB497FCB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D365D1_306C_2DB9_41C1_419854717148",
   "pitch": -8.46,
   "yaw": -124.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.97
  }
 ],
 "id": "overlay_ECE98EF6_F6E0_A2A6_41E2_35AA94FF1444",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.11,
   "yaw": -79.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -10.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D, this.camera_2242E91B_306C_22A9_4199_63D4227EEDE6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D1F5CC_306C_2DAF_4191_480B3D1EE3EC",
   "pitch": -10.53,
   "yaw": -79.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.11
  }
 ],
 "id": "overlay_ECCBC925_F6E0_6F5A_41D1_7B98420C3327",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.01,
   "yaw": 51.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D, this.camera_224CF8CD_306C_23A9_41A4_7A01A1A0A367); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D1A5CD_306C_2DA9_4197_29C13EDFA556",
   "pitch": -6.79,
   "yaw": 51.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.01
  }
 ],
 "id": "overlay_EC6D5F34_F6E0_E3BB_41E2_1C96D8656457",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.43,
   "yaw": 143.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010, this.camera_2217DA03_306C_2699_41C4_F61EE180CBE5); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CD95D9_306C_2DA9_41B4_35DB02C67A54",
   "pitch": -7.74,
   "yaw": 143.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.43
  }
 ],
 "id": "overlay_EA1D1A3D_F6E1_EDA5_41B0_D2985D3E0222",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.6,
   "yaw": 117.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6, this.camera_225C8882_306C_239B_41C3_FB3F85274252); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CC75D4_306C_2DBF_41AF_0E18984EBADA",
   "pitch": -5.79,
   "yaw": 117.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.6
  }
 ],
 "id": "overlay_EC225053_F6E1_9DFD_41A3_D77220B8C2B0",
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
   "hfov": 6.92,
   "yaw": 156,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6, this.camera_2205CA50_306C_26B7_41C8_2D6A8D9DE893); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D135CB_306C_2DA9_41C0_500EC3C28E50",
   "pitch": -3.04,
   "yaw": 156,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.92
  }
 ],
 "id": "overlay_EF46EFE8_F6E7_A2AA_41EC_4F94C1FD93EF",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.47,
   "yaw": 47.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D, this.camera_21B94640_306C_2E97_41AA_976D8AD4B51D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CCC5D6_306C_2DBB_41C2_E6F234877D16",
   "pitch": -4.6,
   "yaw": 47.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.47
  }
 ],
 "id": "overlay_EA96BB93_F6E0_637D_41E2_04BDFBB5D3B2",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.47,
   "yaw": 24.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C, this.camera_21B226D7_306C_2FB9_4170_E5D791B589F6); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21CD65D7_306C_2DB9_4190_40E2509B8B7E",
   "pitch": -4.57,
   "yaw": 24.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.47
  }
 ],
 "id": "overlay_EA82C4F3_F6E0_E6BE_41E7_18F2F4054FEC",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": 111.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -8.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61, this.camera_226F783B_306C_22E9_41BD_3A3D22F7805B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D245CE_306C_2DAB_41B7_7E80A8E2B952",
   "pitch": -8.89,
   "yaw": 111.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.19
  }
 ],
 "id": "overlay_EF04DC22_F6E0_655F_41EE_6AC77183A50E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.01,
   "yaw": -4.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139, this.camera_227447F4_306C_2D7F_41BD_6B25A3009771); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D205CF_306C_2DA9_41C0_159C0DBD8F5E",
   "pitch": -6.79,
   "yaw": -4.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.01
  }
 ],
 "id": "overlay_EC448C69_F6E0_65AA_41D0_C4F6A4FA03D4",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.9,
   "yaw": -41.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91, this.camera_21A5B722_306C_2E9B_41BC_F62929B3623E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21D015CA_306C_2DAB_41C1_07319D81317D",
   "pitch": -5.56,
   "yaw": -41.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.9
  }
 ],
 "id": "overlay_EF17C9A6_F6E0_AEA6_41ED_1A21AB63829D",
 "data": {
  "label": "Circle Arrow 03"
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
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5"
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
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E93DB4_F6E3_A6BB_41DF_A7B0053F706D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CD05D8_306C_2DB7_4187_59CA8641EDA2"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D325D2_306C_2DBB_41BD_C854B19EDBDF"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1F9FBFD_F6E3_A2A5_41CF_868195A957C6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D3B5D3_306C_2DB9_41C0_2BFBDA7F68A5"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1F0F168_F6E0_FFAB_41B9_BBD6832F526D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D2B5D0_306C_2DB7_4196_E60F264B52CC"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E97953_F6E3_EFFD_41CA_F4BC0F426C1C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CCF5D5_306C_2DB9_41B4_DF72C489987F"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E542AB_F6E0_62AE_41CD_36E2E95CD139_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D365D1_306C_2DB9_41C1_419854717148"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D1F5CC_306C_2DAF_4191_480B3D1EE3EC"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E571E7_F6E0_9EA5_41C7_5C4737FA5C61_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D1A5CD_306C_2DA9_4197_29C13EDFA556"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E9E07A_F6E0_7DAE_41D0_C44A4D59803C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CD95D9_306C_2DA9_41B4_35DB02C67A54"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1702399_F6E0_636D_41DC_1C6AE60871A4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CC75D4_306C_2DBF_41AF_0E18984EBADA"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E5F105_F6E0_9F5A_41E0_91BD4060FF91_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D135CB_306C_2DA9_41C0_500EC3C28E50"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CCC5D6_306C_2DBB_41C2_E6F234877D16"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1E92AED_F6E3_A2AA_41E7_F0F3FC019010_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21CD65D7_306C_2DB9_4190_40E2509B8B7E"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D245CE_306C_2DAB_41B7_7E80A8E2B952"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E1F1E268_F6E0_BDAB_41E5_73788E47A05D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D205CF_306C_2DA9_41C0_159C0DBD8F5E"
},
{
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFD5772F_F6E0_A3A5_41DC_112446EDB4F6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_21D015CA_306C_2DAB_41C1_07319D81317D"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "borderSize": 0,
 "width": 100,
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
 "label": "Menu Utama",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.openLink('https://jannah-prds.github.io/virtualtour.github.io/', '_blank')",
 "data": {
  "name": "Menu Utama"
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
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "borderSize": 0,
 "width": 100,
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
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
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
 "label": "Lantai 4B",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "data": {
  "name": "Lantai 4B"
 },
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
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
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "borderSize": 0,
 "width": 100,
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
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
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
 "label": "Lantai 5B",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "data": {
  "name": "Lantai 5B"
 },
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
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
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "borderSize": 0,
 "width": 100,
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
 "rollOverFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
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
 "label": "Lantai 7B",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "data": {
  "name": "Lantai 7B"
 },
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
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
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "borderSize": 0,
 "width": 100,
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
 "rollOverFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
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
 "label": "Lantai 7C",
 "fontStyle": "italic",
 "gap": 5,
 "propagateClick": false,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "data": {
  "name": "Lantai 7C"
 },
 "borderColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
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
 "iconWidth": 32
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
