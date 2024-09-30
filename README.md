# StashAudioPlayer
This plugin adds an audio-only toggle button and support for audio files in the Stash player through hls transcoder.

## How to add the plugin
### Windows/Linux
`git clone` to `%USERPROFILE%\.stash\plugins` for Windows or `/root/.stash/plugins` for Linux

### Docker
Clone the repository:
```
git clone https://github.com/d0t-d0t-d0t/StashAudioPlayer.git
```
Copy to the container:
```
docker cp StashAudioPlayer stash:/root/.stash/plugins/StashAudioPlayer
```
Now you can delete the local copy
