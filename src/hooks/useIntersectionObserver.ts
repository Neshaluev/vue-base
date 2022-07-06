import { watch } from 'vue'

export const defaultWindow = window

export default function useIntersectionObserver(
    target: any,
    callback: IntersectionObserverCallback,
    options: any = {}
) {
    const {
        root,
        rootMargin = '10px',
        threshold = 0.1,
        window = defaultWindow,
    } = options

    let cleanup: any = undefined

    const stopWatch = watch(
        () => ({
            el: target.value,
            root: root,
        }),
        ({ el, root }) => {
            if (!el) return

            const observer = new IntersectionObserver(callback, {
                root,
                rootMargin,
                threshold,
            })

            observer.observe(el)

            cleanup = () => {
                observer.disconnect()
                cleanup = null
            }
        },
        { immediate: true, flush: 'post' }
    )

    const stop = () => {
        cleanup()
        stopWatch()
    }

    return { stop }
}
