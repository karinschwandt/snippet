function Settings(app) {
    this.app = app;
    this.container =  this.measureContainer();
    this.path = {
        stroke: 2
    };
    this.layers = {
        top: {
            positions: [180, -200, -640],
            left: 60,
            bar: {
                left: 0,
                top: 420,
                width: 20
            }
        },
        bottom: {
            positions: [2000, 2000, 130],
            marginTop: 180,
            left: 60,
            width: 630,
            height: 320,
            margin: 20
        },
        labels: {
            positions: [2000, 330, 70],
            left: 84,
            offset: 100
        }
    };
    this.typography = {
        lineHeight: 15
    };
    this.animation = {
        valorisation: 750,
        popup: 200,
        showBottomFrame: 1000,
        hideTopFrame: 1000,
        labelFade: 500,
        sidestreamBars: [100, 220, 340, 460, 580, 700]
    };
    this.filterSidestreams = {
        top: 20,
        left: 24,
        setWidth: 100,
        labelsTop: 620 // the top position of the labels next to each sidestream
    };
    this.labels = {
        raw : {
            left: 170,
            top: 70
        },
        profit : {
            left: 628,
            top: 240
        },
        sidestream : {
            left: 520,
            top: 470
        }
    };
    this.radar = {
        r: 30, // to prevent a valorisation radar to overlap the graph (when value 1 or 10), this value should be < this.bottomFrame.height / 10
        gap: 3,
        animation: 500
    }
}


Settings.prototype.measureContainer = function(canvases) {
    return {
        width: $(this.app.container).outerWidth(),
        height: $(this.app.container).outerHeight(),
        margin: 20
    }
};