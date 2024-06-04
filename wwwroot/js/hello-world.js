import { createApp } from "vue";

export default function helloWorld(target, message) {
    createApp({
        data() {
            return {
                message: message
            }
        }
    }).mount(target)
}
