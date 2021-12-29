class Snowfall {
    snowWrapperClassName = 'snow-wrapper';
    defaultTimeForSnowCheck = 10000;
    isSnowOnDeviceShake = true;
    eventListenerFunction = (e) => this.checkOrientationAndSnow(e);

    constructor(wrapperId) {
        this.wrapperId = wrapperId;
        this.checkIfSnowing(this.defaultTimeForSnowCheck);
        this.checkIfMobileDevice();

        if (this.isSnowOnDeviceShake) {
            this.snowOnDeviceShake();
        } else {
            this.snowFall();
        }
    }

    checkIfMobileDevice() {
        // TODO: checking only for android isn't good. Find a way to handle this.
        const isAndroid = /(android)/i.test(navigator.userAgent);
        if (!isAndroid) {
            // TODO: the message is redundant - remove it later.
            document.getElementById('example').innerHTML = '<strong>You\'re not visiting from an Android device</strong>';
            this.isSnowOnDeviceShake = false;
        }
    }

    /**
     * @param time should be in ms.
     */
    checkIfSnowing(time) {
        console.log('starting checking if its snowing');
        let interval = setInterval(() => {
            const snow = document.querySelector(`#${this.wrapperId}.${this.snowWrapperClassName}`);
            // console.log(snow);
            if (snow) {
                console.log('its snowing');
                clearInterval(interval);
            } else {
                console.log('starting snowing from checkIfSnowing');
                this.snowFall();
            }
        }, time);
    }

    snowFall() {
        const wrapper = document.getElementById(this.wrapperId);
        wrapper.classList.add(this.snowWrapperClassName);

        this.createLayers(wrapper);
    }

    createLayers(wrapper) {
        for (let i = 0; i < 3; i++) {
            const layerA = document.createElement('div'),
                layer = document.createElement('div');

            layerA.classList.add('snow', 'layer' + (i + 1), 'a');
            layer.classList.add('snow', 'layer' + (i + 1));
            wrapper.appendChild(layerA);
            wrapper.appendChild(layer);
        }
    }
    snowOnDeviceShake() {
        console.log('entering snowOnDeviceShake');
        window.addEventListener('deviceorientation', this.eventListenerFunction);
    }

    checkOrientationAndSnow(event) {
        console.log('orientation changed');
        if (Math.abs(self.alpha - event.alpha) < 1
            || Math.abs(self.gamma - event.gamma) < 1
            || Math.abs(self.beta - event.beta) < 1) {
            return;
        }

        this.alpha = event.alpha;
        this.beta = event.beta;
        this.gamma = event.gamma;

        if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
            console.log('started snowing', this);
            this.snowFall();
            window.removeEventListener('deviceorientation', this.eventListenerFunction);
        }
    }
}
