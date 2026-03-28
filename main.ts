/**
 * Grove Collision Sensor for micro:bit
 * Active LOW digital sensor
 */
namespace groveCollisionSensor {
    let _pin = DigitalPin.P1

    /**
     * 使用するピンを設定
     */
    //% block="collision sensor pin %pin"
    //% weight=100
    export function setPin(pin: DigitalPin): void {
        _pin = pin
        pins.setPull(_pin, PinPullMode.PullUp)
    }

    /**
     * 衝突を検出したか
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
     * 現在の生値を返す
     * 0 = 衝突検出, 1 = 非検出
     */
    //% block="collision raw value"
    //% weight=80
    export function rawValue(): number {
        return pins.digitalReadPin(_pin)
    }
}