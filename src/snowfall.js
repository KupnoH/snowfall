class Snowfall {
    constructor(wrapperId) {
        this.wrapperId = wrapperId;
        this.snowFall();
    }

    snowFall() {
        let wrapper = document.getElementById(this.wrapperId);
        wrapper.classList.add('snow-wrapper');

        this.createLayers(wrapper);
    }

    createLayers(wrapper) {
        for (let i = 0; i < 3; i++) {
            let layerA = document.createElement('div'),
                layer = document.createElement('div');

            layerA.classList.add('snow', 'layer' + (i + 1), 'a');
            layer.classList.add('snow', 'layer' + (i + 1));
            wrapper.appendChild(layerA);
            wrapper.appendChild(layer);
        }
    }
}