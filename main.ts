/**
 * Grove Collision Sensor
 */
//% color=#00AACC icon="\uf071"
namespace groveCollision {

    let _pin = DigitalPin.P1

    /**
     * Set sensor pin
     */
    //% block="set collision sensor pin %pin"
    //% weight=100
    export function setPin(pin: DigitalPin): void {
        _pin = pin
        pins.setPull(_pin, PinPullMode.PullUp)
    }

    /**
     * Collision detected
     */
    //% block="collision detected"
    //% weight=90
    export function isTriggered(): boolean {
        if (pins.digitalReadPin(_pin) == 0) {
            basic.pause(50)
            if (pins.digitalReadPin(_pin) == 0) {
                return true
            }
        }
        return false
    }

    /**
     * Raw value
     */
    //% block="collision raw value"
    //% weight=80
    export function raw(): number {
        return pins.digitalReadPin(_pin)
    }
}