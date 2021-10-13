/**
 *
 * @copyright Copyright (c) 2019, Daniel Calviño Sánchez (danxuliu@gmail.com)
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import EmitterMixin from '../../EmitterMixin'
import store from '../../../store/index.js'

/**
 *
 */
export default function LocalMediaModel() {

	this._superEmitterMixin()

	this.attributes = {
		localStreamRequestVideoError: null,
		localStream: null,
		audioAvailable: false,
		audioEnabled: false,
		speaking: false,
		speakingWhileMuted: false,
		currentVolume: -100,
		volumeThreshold: -100,
		videoAvailable: false,
		videoEnabled: false,
		virtualBackgroundEnabled: false,
		localScreen: null,
		token: '',
		raisedHand: false,
	}

	this._handleLocalStreamRequestedBound = this._handleLocalStreamRequested.bind(this)
	this._handleLocalStreamBound = this._handleLocalStream.bind(this)
	this._handleLocalStreamRequestFailedRetryNoVideoBound = this._handleLocalStreamRequestFailedRetryNoVideo.bind(this)
	this._handleLocalStreamRequestFailedBound = this._handleLocalStreamRequestFailed.bind(this)
	this._handleLocalStreamChangedBound = this._handleLocalStreamChanged.bind(this)
	this._handleLocalStreamStoppedBound = this._handleLocalStreamStopped.bind(this)
	this._handleAudioOnBound = this._handleAudioOn.bind(this)
	this._handleAudioOffBound = this._handleAudioOff.bind(this)
	this._handleVolumeChangeBound = this._handleVolumeChange.bind(this)
	this._handleSpeakingBound = this._handleSpeaking.bind(this)
	this._handleStoppedSpeakingBound = this._handleStoppedSpeaking.bind(this)
	this._handleSpeakingWhileMutedBound = this._handleSpeakingWhileMuted.bind(this)
	this._handleStoppedSpeakingWhileMutedBound = this._handleStoppedSpeakingWhileMuted.bind(this)
	this._handleVideoOnBound = this._handleVideoOn.bind(this)
	this._handleVideoOffBound = this._handleVideoOff.bind(this)
	this._handleVirtualBackgroundOnBound = this._handleVirtualBackgroundOn.bind(this)
	this._handleVirtualBackgroundOffBound = this._handleVirtualBackgroundOff.bind(this)
	this._handleLocalScreenBound = this._handleLocalScreen.bind(this)
	this._handleLocalScreenStoppedBound = this._handleLocalScreenStopped.bind(this)

}

LocalMediaModel.prototype = {

	get(key) {
		return this.attributes[key]
	},

	set(key, value) {
		this.attributes[key] = value

		this._trigger('change:' + key, [value])
	},

	getWebRtc() {
		return this._webRtc
	},

	setWebRtc(webRtc) {
		if (this._webRtc && this._webRtc.webrtc) {
			this._webRtc.webrtc.off('localStreamRequested', this._handleLocalStreamRequestedBound)
			this._webRtc.webrtc.off('localStream', this._handleLocalStreamBound)
			this._webRtc.webrtc.off('localStreamRequestFailedRetryNoVideo', this._handleLocalStreamRequestFailedBound)
			this._webRtc.webrtc.off('localStreamRequestFailed', this._handleLocalStreamRequestFailedBound)
			this._webRtc.webrtc.off('localStreamChanged', this._handleLocalStreamChangedBound)
			this._webRtc.webrtc.off('localStreamStopped', this._handleLocalStreamStoppedBound)
			this._webRtc.webrtc.off('audioOn', this._handleAudioOnBound)
			this._webRtc.webrtc.off('audioOff', this._handleAudioOffBound)
			this._webRtc.webrtc.off('volumeChange', this._handleVolumeChangeBound)
			this._webRtc.webrtc.off('speaking', this._handleSpeakingBound)
			this._webRtc.webrtc.off('stoppedSpeaking', this._handleStoppedSpeakingBound)
			this._webRtc.webrtc.off('speakingWhileMuted', this._handleSpeakingWhileMutedBound)
			this._webRtc.webrtc.off('stoppedSpeakingWhileMuted', this._handleStoppedSpeakingWhileMutedBound)
			this._webRtc.webrtc.off('videoOn', this._handleVideoOnBound)
			this._webRtc.webrtc.off('videoOff', this._handleVideoOffBound)
			this._webRtc.webrtc.off('virtualBackgroundOn', this._handleVirtualBackgroundOnBound)
			this._webRtc.webrtc.off('virtualBackgroundOff', this._handleVirtualBackgroundOffBound)
			this._webRtc.webrtc.off('localScreen', this._handleLocalScreenBound)
			this._webRtc.webrtc.off('localScreenStopped', this._handleLocalScreenStoppedBound)
		}

		this._webRtc = webRtc

		this.set('localStream', null)
		this.set('audioAvailable', false)
		this.set('audioEnabled', false)
		this.set('speaking', false)
		this.set('speakingWhileMuted', false)
		this.set('currentVolume', -100)
		this.set('volumeThreshold', -100)
		this.set('videoAvailable', false)
		this.set('videoEnabled', false)
		this.set('virtualBackgroundEnabled', this._webRtc.webrtc.isVirtualBackgroundEnabled())
		this.set('localScreen', null)

		this._webRtc.webrtc.on('localStreamRequested', this._handleLocalStreamRequestedBound)
		this._webRtc.webrtc.on('localStream', this._handleLocalStreamBound)
		this._webRtc.webrtc.on('localStreamRequestFailedRetryNoVideo', this._handleLocalStreamRequestFailedRetryNoVideoBound)
		this._webRtc.webrtc.on('localStreamRequestFailed', this._handleLocalStreamRequestFailedBound)
		this._webRtc.webrtc.on('localStreamChanged', this._handleLocalStreamChangedBound)
		this._webRtc.webrtc.on('localStreamStopped', this._handleLocalStreamStoppedBound)
		this._webRtc.webrtc.on('audioOn', this._handleAudioOnBound)
		this._webRtc.webrtc.on('audioOff', this._handleAudioOffBound)
		this._webRtc.webrtc.on('volumeChange', this._handleVolumeChangeBound)
		this._webRtc.webrtc.on('speaking', this._handleSpeakingBound)
		this._webRtc.webrtc.on('stoppedSpeaking', this._handleStoppedSpeakingBound)
		this._webRtc.webrtc.on('speakingWhileMuted', this._handleSpeakingWhileMutedBound)
		this._webRtc.webrtc.on('stoppedSpeakingWhileMuted', this._handleStoppedSpeakingWhileMutedBound)
		this._webRtc.webrtc.on('videoOn', this._handleVideoOnBound)
		this._webRtc.webrtc.on('videoOff', this._handleVideoOffBound)
		this._webRtc.webrtc.on('virtualBackgroundOn', this._handleVirtualBackgroundOnBound)
		this._webRtc.webrtc.on('virtualBackgroundOff', this._handleVirtualBackgroundOffBound)
		this._webRtc.webrtc.on('localScreen', this._handleLocalScreenBound)
		this._webRtc.webrtc.on('localScreenStopped', this._handleLocalScreenStoppedBound)
	},

	_handleLocalStreamRequested(constraints, context) {
		if (context !== 'retry-no-video') {
			this.set('localStreamRequestVideoError', null)
		}
	},

	_handleLocalStream(configuration, localStream) {
		// Although there could be several local streams active at the same
		// time (if the local media is started again before stopping it
		// first) the methods to control them ("mute", "unmute",
		// "pauseVideo" and "resumeVideo") act on all the streams, it is not
		// possible to control them individually. Also all local streams
		// are transmitted when a Peer is created, but if another local
		// stream is then added it will not be automatically added to the
		// Peer. As it is not well supported and there is also no need to
		// use several local streams for now it is assumed that only one
		// local stream will be active at the same time.
		this.set('localStream', localStream)

		this.set('token', store.getters.getToken())

		this._setInitialMediaState(configuration)
	},

	_handleLocalStreamRequestFailedRetryNoVideo(constraints, error) {
		if (!error || error.name === 'NotFoundError') {
			return
		}

		this.set('localStreamRequestVideoError', error)
	},

	_handleLocalStreamRequestFailed() {
		this.set('localStream', null)

		this._setInitialMediaState({ audio: false, video: false })
	},

	_setInitialMediaState(configuration) {
		if (configuration.audio !== false) {
			this.set('audioAvailable', true)
			if (this.get('audioEnabled')) {
				this.enableAudio()
			} else {
				this.disableAudio()
			}
		} else {
			this.set('audioEnabled', false)
			this.set('audioAvailable', false)
		}

		if (configuration.video !== false) {
			this.set('videoAvailable', true)
			if (this.get('videoEnabled')) {
				this.enableVideo()
			} else {
				this.disableVideo()
			}
		} else {
			this.set('videoEnabled', false)
			this.set('videoAvailable', false)
		}

		this.set('raisedHand', { state: false, timestamp: Date.now() })
	},

	_handleLocalStreamChanged(localStream) {
		// Only a single local stream is assumed to be active at the same time.
		this.set('localStream', localStream)

		this._updateMediaAvailability(localStream)
	},

	_updateMediaAvailability(localStream) {
		if (localStream && localStream.getAudioTracks().length > 0) {
			this.set('audioAvailable', true)
		} else {
			this.disableAudio()
			this.set('audioAvailable', false)
		}

		if (localStream && localStream.getVideoTracks().length > 0) {
			this.set('videoAvailable', true)
		} else {
			this.disableVideo()
			this.set('videoAvailable', false)
		}
	},

	_handleLocalStreamStopped(localStream) {
		if (this.get('localStream') !== localStream) {
			return
		}

		this.set('localStream', null)

		this.set('audioEnabled', false)
		this.set('audioAvailable', false)
		this.set('videoEnabled', false)
		this.set('videoAvailable', false)
	},

	_handleAudioOn() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('audioEnabled', true)
	},

	_handleAudioOff() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('audioEnabled', false)
	},

	_handleVolumeChange(currentVolume, volumeThreshold) {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('currentVolume', currentVolume)
		this.set('volumeThreshold', volumeThreshold)
	},

	_handleSpeaking() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('speaking', true)
	},

	_handleStoppedSpeaking() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('speaking', false)
	},

	_handleSpeakingWhileMuted() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('speakingWhileMuted', true)
	},

	_handleStoppedSpeakingWhileMuted() {
		if (!this.get('audioAvailable')) {
			return
		}

		this.set('speakingWhileMuted', false)
	},

	_handleVideoOn() {
		if (!this.get('videoAvailable')) {
			return
		}

		this.set('videoEnabled', true)
	},

	_handleVideoOff() {
		if (!this.get('videoAvailable')) {
			return
		}

		this.set('videoEnabled', false)
	},

	_handleVirtualBackgroundOn() {
		this.set('virtualBackgroundEnabled', true)
	},

	_handleVirtualBackgroundOff() {
		this.set('virtualBackgroundEnabled', false)
	},

	_handleLocalScreen(screen) {
		this.set('localScreen', screen)
	},

	_handleLocalScreenStopped() {
		this.set('localScreen', null)
	},

	enableAudio() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.removeItem('audioDisabled_' + this.get('token'))
		if (!this.get('audioAvailable')) {
			return
		}

		this._webRtc.unmute()
	},

	disableAudio() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.setItem('audioDisabled_' + this.get('token'), 'true')
		if (!this.get('audioAvailable')) {
			// Ensure that the audio will be disabled once available.
			this.set('audioEnabled', false)

			return
		}

		this._webRtc.mute()
	},

	enableVideo() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.removeItem('videoDisabled_' + this.get('token'))
		if (!this.get('videoAvailable')) {
			return
		}

		this._webRtc.resumeVideo()
	},

	disableVideo() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.setItem('videoDisabled_' + this.get('token'), 'true')
		if (!this.get('videoAvailable')) {
			// Ensure that the video will be disabled once available.
			this.set('videoEnabled', false)

			return
		}

		this._webRtc.pauseVideo()
	},

	enableVirtualBackground() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.removeItem('virtualBackgroundDisabled_' + this.get('token'))

		this._webRtc.enableVirtualBackground()
	},

	disableVirtualBackground() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		localStorage.setItem('virtualBackgroundDisabled_' + this.get('token'), 'true')

		this._webRtc.disableVirtualBackground()
	},

	shareScreen(mode, callback) {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		this._webRtc.shareScreen(mode, callback)
	},

	stopSharingScreen() {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		this._webRtc.stopScreenShare()
	},

	/**
	 * Toggles hand raised mode for the local participant
	 *
	 * @param {boolean} raised true for raised, false for lowered
	 */
	toggleHandRaised(raised) {
		if (!this._webRtc) {
			throw new Error('WebRtc not initialized yet')
		}

		const raisedHand = {
			state: raised,
			timestamp: Date.now(),
		}

		this._webRtc.sendToAll('raiseHand', raisedHand)

		// Set state locally too, as even when sending to all the sender will not
		// receive the message.
		this.set('raisedHand', raisedHand)
	},

}

EmitterMixin.apply(LocalMediaModel.prototype)
