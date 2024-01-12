const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Rock + Roll',
            artist: 'EDEN',
            url: 'music/rock + roll (320 kbps).mp3',
            cover: 'img/logoalbum.jpg',
            theme: '#000000'
        },
        {
            name: 'Sex',
            artist: 'EDEN',
            url: 'music/EDEN - sex (official video) (320 kbps).mp3',
            cover: 'img/logoalbum.jpg',
            theme: '#46718b'
        },
        {
            name: 'XO',
            artist: 'EDEN',
            url: 'music/EDEN - xo (official audio) (320 kbps).mp3',
            cover: 'img/logoalbum.jpg',
            theme: '#ebd0c2'
        }
    ]
});