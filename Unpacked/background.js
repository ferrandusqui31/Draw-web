    var options = {
    'id': 'draw',
    'bounds': {
    'width': screen.width,
    'height': screen.height
    },
    'frame': {
        'color': '#e4e4e4'
    }
    };
    
    chrome.app.runtime.onLaunched.addListener(function () {
        chrome.app.window.create('window.html', (options));
});

    chrome.app.runtime.onRestarted.addListener(function () {
        chrome.app.window.create('window.html', (options));
});