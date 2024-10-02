# StashAudioPlayer
This plugin adds an audio-only toggle button and support for audio files in the Stash player through hls transcoder.


## Requirements
- CommunityScriptsUILibrary plugin


This plugin checks for a tag to identify files as audio, so you need to add that tag:
1) Add audio extensions files in the library settings (ex. mp3, m4a).
2) Create an `Audio` tag.
3) Make an `Audio` directory to put the files in and use 'Auto Tag' to tag the files inside the folder, or add the tag manually.

<sup>(Maybe in the future i will implement a direct check for the file extension)</sup>

repo
https://raw.githubusercontent.com/d0t-d0t-d0t/StashAudioPlayer/refs/heads/dist/index.yml

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

## How to remove the plugin

### Windows/Linux
Delete the folder `%USERPROFILE%\.stash\plugins\StashAudioPlayer` for Windows or `/root/.stash/plugins/StashAudioPlayer` for Linux

### Docker
```
docker exec stash rm -rf /root/.stash/plugins/StashAudioPlayer
```
